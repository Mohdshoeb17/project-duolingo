from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime, timezone
from app.database import get_db
from app.models import Lesson, Exercise, UserProgress, User, Skill, Unit
from app.schemas import (
    ExerciseResponse,
    ExerciseSubmission,
    ExerciseCheckResult,
    LessonCompleteRequest,
    LessonCompleteResponse
)
from app.services.gamification import (
    get_or_create_default_user,
    check_answer,
    record_activity_and_streak,
    evaluate_achievements
)

router = APIRouter(prefix="/api/lessons", tags=["Lessons"])

@router.get("/{lesson_id}")
def get_lesson_details(lesson_id: int, db: Session = Depends(get_db)):
    lesson = db.query(Lesson).filter(Lesson.id == lesson_id).first()
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")

    user = get_or_create_default_user(db)
    # Check if lesson is unlocked for this user WITHIN THIS COURSE
    course_id = lesson.skill.unit.course_id
    course_lessons = (
        db.query(Lesson)
        .join(Lesson.skill)
        .join(Skill.unit)
        .filter(Unit.course_id == course_id)
        .order_by(Unit.order_index, Skill.order_index, Lesson.order_index)
        .all()
    )

    completed_ids = {
        p.lesson_id for p in db.query(UserProgress).filter(
            UserProgress.user_id == user.id,
            UserProgress.completed == True
        ).all()
    }

    # Find position of lesson_id within its own course
    is_unlocked = False
    for l in course_lessons:
        if l.id in completed_ids:
            if l.id == lesson_id:
                is_unlocked = True
                break
            continue
        # The very first uncompleted lesson in this course is unlocked!
        if l.id == lesson_id:
            is_unlocked = True
        break

    if not is_unlocked:
        raise HTTPException(status_code=403, detail="Lesson is currently locked. Complete prior lessons first.")

    exercises = db.query(Exercise).filter(Exercise.lesson_id == lesson_id).order_by(Exercise.order_index).all()

    return {
        "id": lesson.id,
        "title": lesson.title,
        "xp_reward": lesson.xp_reward,
        "skill_title": lesson.skill.title if lesson.skill else "",
        "user_hearts": user.stats.hearts if user.stats else 5,
        "exercises": [
            {
                "id": ex.id,
                "lesson_id": ex.lesson_id,
                "exercise_type": ex.exercise_type,
                "question": ex.question,
                "options": ex.options,
                "correct_answer": ex.correct_answer if ex.exercise_type == "match_pairs" else None,
                "order_index": ex.order_index
            }
            for ex in exercises
        ]
    }

@router.post("/{lesson_id}/start")
def start_lesson(lesson_id: int, db: Session = Depends(get_db)):
    lesson = db.query(Lesson).filter(Lesson.id == lesson_id).first()
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")
    
    user = get_or_create_default_user(db)
    if user.stats.hearts <= 0:
        raise HTTPException(status_code=400, detail="Out of hearts! Refill or practice to continue.")
    
    return {"message": "Lesson started", "hearts": user.stats.hearts}

@router.post("/{lesson_id}/submit", response_model=ExerciseCheckResult)
def submit_exercise_answer(
    lesson_id: int,
    submission: ExerciseSubmission,
    db: Session = Depends(get_db)
):
    user = get_or_create_default_user(db)
    exercise = db.query(Exercise).filter(
        Exercise.id == submission.exercise_id,
        Exercise.lesson_id == lesson_id
    ).first()

    if not exercise:
        raise HTTPException(status_code=404, detail="Exercise not found")

    is_correct, correct_answer_str, explanation = check_answer(exercise, submission.user_answer)

    lesson_failed = False
    if not is_correct:
        # Deduct heart
        if user.stats.hearts > 0:
            user.stats.hearts -= 1
            user.stats.last_heart_loss_at = datetime.now(timezone.utc)
            db.commit()
            db.refresh(user.stats)
        
        if user.stats.hearts <= 0:
            lesson_failed = True

    return ExerciseCheckResult(
        is_correct=is_correct,
        correct_answer=correct_answer_str,
        explanation=explanation,
        hearts_remaining=user.stats.hearts,
        lesson_failed=lesson_failed
    )

@router.post("/{lesson_id}/complete", response_model=LessonCompleteResponse)
def complete_lesson(
    lesson_id: int,
    body: LessonCompleteRequest,
    db: Session = Depends(get_db)
):
    lesson = db.query(Lesson).filter(Lesson.id == lesson_id).first()
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")

    user = get_or_create_default_user(db)

    # Check if already completed
    existing_progress = db.query(UserProgress).filter(
        UserProgress.user_id == user.id,
        UserProgress.lesson_id == lesson_id
    ).first()

    is_first_completion = False
    if not existing_progress:
        existing_progress = UserProgress(
            user_id=user.id,
            lesson_id=lesson_id,
            completed=True,
            accuracy=body.accuracy,
            completed_at=datetime.now(timezone.utc)
        )
        db.add(existing_progress)
        is_first_completion = True
    else:
        if not existing_progress.completed:
            existing_progress.completed = True
            is_first_completion = True
        # Keep highest accuracy
        existing_progress.accuracy = max(existing_progress.accuracy or 0.0, body.accuracy)
        existing_progress.completed_at = datetime.now(timezone.utc)

    # Award XP only on backend calculation
    # If first completion: full reward. If repeat practice: reduced reward (5 XP)
    xp_to_award = lesson.xp_reward if is_first_completion else 5
    if body.accuracy >= 100.0:
        xp_to_award += 5 # perfect accuracy bonus

    gems_to_award = 15 if is_first_completion else 2

    # Update stats safely in transaction
    user.stats.total_xp += xp_to_award
    user.stats.daily_xp += xp_to_award
    user.stats.gems += gems_to_award

    streak_updated = record_activity_and_streak(db, user.stats)
    evaluate_achievements(db, user)

    db.commit()
    db.refresh(user.stats)

    # Determine next lesson ID
    next_lesson = db.query(Lesson).filter(Lesson.id > lesson_id).order_by(Lesson.id.asc()).first()
    next_id = next_lesson.id if next_lesson else None

    return LessonCompleteResponse(
        success=True,
        xp_awarded=xp_to_award,
        total_xp=user.stats.total_xp,
        gems_awarded=gems_to_award,
        streak_updated=streak_updated,
        current_streak=user.stats.current_streak,
        next_lesson_id=next_id,
        message="Lesson completed successfully! Great job!"
    )
