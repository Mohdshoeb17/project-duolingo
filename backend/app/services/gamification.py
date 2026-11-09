from datetime import datetime, timezone, timedelta
from sqlalchemy.orm import Session
from app.models import User, UserStats, UserProgress, Lesson, Skill, Unit, Achievement, UserAchievement
import json

DEFAULT_USER_ID = 1

def get_or_create_default_user(db: Session) -> User:
    user = db.query(User).filter(User.id == DEFAULT_USER_ID).first()
    if not user:
        user = User(
            id=DEFAULT_USER_ID,
            username="duo_learner",
            email="learner@duolingo-clone.local",
            avatar="🦉"
        )
        db.add(user)
        db.commit()
        db.refresh(user)

        stats = UserStats(
            user_id=user.id,
            total_xp=120,
            current_streak=3,
            longest_streak=5,
            last_activity_date=(datetime.now(timezone.utc) - timedelta(days=1)).strftime("%Y-%m-%d"),
            hearts=5,
            max_hearts=5,
            gems=450,
            daily_xp=30,
            daily_goal_xp=50
        )
        db.add(stats)
        db.commit()
        db.refresh(user)
    
    # Check and regenerate hearts based on time elapsed
    regenerate_hearts_if_needed(db, user)
    return user

def regenerate_hearts_if_needed(db: Session, user: User) -> None:
    stats = user.stats
    if not stats or stats.hearts >= stats.max_hearts:
        return
    
    if not stats.last_heart_loss_at:
        stats.last_heart_loss_at = datetime.now(timezone.utc)
        db.commit()
        return

    # 1 heart every 30 minutes
    now = datetime.now(timezone.utc)
    # Ensure timezone aware comparison
    last_loss = stats.last_heart_loss_at
    if last_loss.tzinfo is None:
        last_loss = last_loss.replace(tzinfo=timezone.utc)
        
    diff = now - last_loss
    minutes_elapsed = diff.total_seconds() / 60
    hearts_to_add = int(minutes_elapsed // 30)

    if hearts_to_add > 0:
        new_hearts = min(stats.max_hearts, stats.hearts + hearts_to_add)
        stats.hearts = new_hearts
        if new_hearts >= stats.max_hearts:
            stats.last_heart_loss_at = None
        else:
            # Advance last_heart_loss_at by the amount accounted for
            stats.last_heart_loss_at = last_loss + timedelta(minutes=hearts_to_add * 30)
        db.commit()

def record_activity_and_streak(db: Session, stats: UserStats) -> bool:
    """Updates daily XP and maintains continuous streak logic"""
    today_str = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    yesterday_str = (datetime.now(timezone.utc) - timedelta(days=1)).strftime("%Y-%m-%d")
    
    streak_incremented = False
    if stats.last_activity_date != today_str:
        if stats.last_activity_date == yesterday_str:
            stats.current_streak += 1
        elif stats.last_activity_date is None:
            stats.current_streak = 1
        else:
            # Missed a day or more
            stats.current_streak = 1
        
        if stats.current_streak > stats.longest_streak:
            stats.longest_streak = stats.current_streak
            
        stats.last_activity_date = today_str
        stats.daily_xp = 0  # reset for fresh day
        streak_incremented = True

    return streak_incremented

def check_answer(exercise, user_answer) -> tuple[bool, str, str]:
    """
    Returns (is_correct, formatted_correct_answer, explanation)
    """
    correct_raw = str(exercise.correct_answer).strip()
    explanation = exercise.explanation or ""

    if exercise.exercise_type in ["multiple_choice", "fill_blank"]:
        is_correct = str(user_answer).strip().lower() == correct_raw.lower()
        return is_correct, correct_raw, explanation

    elif exercise.exercise_type == "type_answer":
        # Case-insensitive answer checking with normalized spaces and punctuation
        u_ans = " ".join(str(user_answer).strip().lower().split()).rstrip(".?!")
        c_ans = " ".join(correct_raw.lower().split()).rstrip(".?!")
        is_correct = (u_ans == c_ans)
        return is_correct, correct_raw, explanation

    elif exercise.exercise_type == "word_bank":
        # user_answer is expected to be a list of strings or single joined string
        if isinstance(user_answer, list):
            submitted_str = " ".join(str(w).strip() for w in user_answer)
        else:
            submitted_str = str(user_answer).strip()
            
        u_norm = " ".join(submitted_str.lower().split()).rstrip(".?!")
        c_norm = " ".join(correct_raw.lower().split()).rstrip(".?!")
        is_correct = (u_norm == c_norm)
        return is_correct, correct_raw, explanation

    elif exercise.exercise_type == "match_pairs":
        # user_answer is expected to be dict of pairs {source: target} or list of [a, b]
        try:
            expected_pairs = json.loads(exercise.correct_answer) if isinstance(exercise.correct_answer, str) else exercise.correct_answer
            # normalize to dictionary
            if isinstance(expected_pairs, list):
                expected_dict = {item[0].lower(): item[1].lower() for item in expected_pairs}
            elif isinstance(expected_pairs, dict):
                expected_dict = {k.lower(): v.lower() for k, v in expected_pairs.items()}
            else:
                expected_dict = {}

            if isinstance(user_answer, dict):
                user_dict = {k.lower(): v.lower() for k, v in user_answer.items()}
            elif isinstance(user_answer, list):
                user_dict = {item[0].lower(): item[1].lower() for item in user_answer}
            else:
                user_dict = {}

            # Check if all pairs match bidirectionally
            is_correct = True
            if len(user_dict) != len(expected_dict):
                is_correct = False
            else:
                for k, v in expected_dict.items():
                    if user_dict.get(k) != v and user_dict.get(v) != k:
                        is_correct = False
                        break
            return is_correct, "All correct pairs matched", explanation
        except Exception:
            return False, correct_raw, explanation

    return False, correct_raw, explanation

def evaluate_achievements(db: Session, user: User):
    stats = user.stats
    completed_count = db.query(UserProgress).filter(
        UserProgress.user_id == user.id,
        UserProgress.completed == True
    ).count()

    # Rule 1: First lesson (First Step)
    if completed_count >= 1:
        _unlock_achievement(db, user.id, "First Step")

    # Rule 2: 3-day streak (Streak Master)
    if stats.current_streak >= 3:
        _unlock_achievement(db, user.id, "Streak Master")

    # Rule 3: 100 XP (XP Champion)
    if stats.total_xp >= 100:
        _unlock_achievement(db, user.id, "XP Champion")

    # Rule 4: 5 lessons (Knowledge Seeker)
    if completed_count >= 5:
        _unlock_achievement(db, user.id, "Knowledge Seeker")

def _unlock_achievement(db: Session, user_id: int, achievement_title: str):
    ach = db.query(Achievement).filter(Achievement.title == achievement_title).first()
    if ach:
        exists = db.query(UserAchievement).filter(
            UserAchievement.user_id == user_id,
            UserAchievement.achievement_id == ach.id
        ).first()
        if not exists:
            ua = UserAchievement(user_id=user_id, achievement_id=ach.id)
            db.add(ua)
            # also award achievement xp
            user = db.query(User).filter(User.id == user_id).first()
            if user and user.stats:
                user.stats.total_xp += ach.xp_reward
            db.commit()
