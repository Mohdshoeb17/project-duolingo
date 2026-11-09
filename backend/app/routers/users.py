from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas import UserResponse, UserStatsResponse, CoursePathResponse
from app.services.gamification import get_or_create_default_user
from app.models import UserProgress, Lesson

router = APIRouter(prefix="/api/users", tags=["Users"])

@router.get("/me", response_model=UserResponse)
def get_current_user_profile(db: Session = Depends(get_db)):
    user = get_or_create_default_user(db)
    return user

@router.get("/me/stats", response_model=UserStatsResponse)
def get_current_user_stats(db: Session = Depends(get_db)):
    user = get_or_create_default_user(db)
    return user.stats

@router.get("/me/progress")
def get_current_user_progress(db: Session = Depends(get_db)):
    user = get_or_create_default_user(db)
    progress_records = db.query(UserProgress).filter(UserProgress.user_id == user.id).all()
    return [
        {
            "lesson_id": p.lesson_id,
            "completed": p.completed,
            "accuracy": p.accuracy,
            "completed_at": p.completed_at
        }
        for p in progress_records
    ]
