from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.models import Course, Unit, Skill, Lesson, UserProgress
from app.schemas import CourseResponse, CoursePathResponse, UnitSummary, SkillSummary, LessonSummary
from app.services.gamification import get_or_create_default_user

router = APIRouter(prefix="/api/courses", tags=["Courses"])

@router.get("", response_model=List[CourseResponse])
def get_courses(db: Session = Depends(get_db)):
    courses = db.query(Course).all()
    return courses

@router.get("/{course_id}", response_model=CourseResponse)
def get_course(course_id: int, db: Session = Depends(get_db)):
    course = db.query(Course).filter(Course.id == course_id).first()
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    return course

@router.get("/{course_id}/path", response_model=CoursePathResponse)
def get_course_path(course_id: int, db: Session = Depends(get_db)):
    course = db.query(Course).filter(Course.id == course_id).first()
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")

    user = get_or_create_default_user(db)
    
    # Get all completed lesson IDs for this user
    user_prog = db.query(UserProgress).filter(
        UserProgress.user_id == user.id,
        UserProgress.completed == True
    ).all()
    completed_lesson_ids = {p.lesson_id: p.accuracy for p in user_prog}

    # Fetch units, skills, and lessons ordered sequentially
    units = db.query(Unit).filter(Unit.course_id == course_id).order_by(Unit.order_index).all()
    
    units_data = []
    # Determine lesson unlock status linearly through the curriculum
    has_found_current_unlocked = False

    for unit in units:
        skills_data = []
        for skill in unit.skills:
            lessons_data = []
            skill_completed_count = 0
            
            for lesson in skill.lessons:
                is_completed = lesson.id in completed_lesson_ids
                accuracy = completed_lesson_ids.get(lesson.id)
                
                if is_completed:
                    is_locked = False
                    skill_completed_count += 1
                elif not has_found_current_unlocked:
                    # The very first uncompleted lesson is unlocked and active!
                    is_locked = False
                    has_found_current_unlocked = True
                else:
                    # All lessons after the active one remain locked
                    is_locked = True

                lessons_data.append(LessonSummary(
                    id=lesson.id,
                    skill_id=lesson.skill_id,
                    title=lesson.title,
                    order_index=lesson.order_index,
                    xp_reward=lesson.xp_reward,
                    completed=is_completed,
                    locked=is_locked,
                    accuracy=accuracy
                ))

            skills_data.append(SkillSummary(
                id=skill.id,
                unit_id=skill.unit_id,
                title=skill.title,
                description=skill.description,
                order_index=skill.order_index,
                icon=skill.icon or "book",
                total_lessons=len(skill.lessons),
                completed_lessons=skill_completed_count,
                lessons=lessons_data
            ))

        units_data.append(UnitSummary(
            id=unit.id,
            course_id=unit.course_id,
            title=unit.title,
            description=unit.description,
            order_index=unit.order_index,
            skills=skills_data
        ))

    return CoursePathResponse(
        course_id=course.id,
        course_title=course.title,
        target_language=course.target_language,
        flag=course.flag,
        units=units_data
    )
