from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.models import User, UserStats, Achievement, UserAchievement, UserProgress
from app.schemas import UserStatsResponse, LeaderboardUser, AchievementResponse, ProfileResponse
from app.services.gamification import get_or_create_default_user

router = APIRouter(tags=["Gamification & Profile"])

@router.get("/api/gamification/stats", response_model=UserStatsResponse)
def get_gamification_stats(db: Session = Depends(get_db)):
    user = get_or_create_default_user(db)
    return user.stats

@router.post("/api/gamification/refill-hearts")
def refill_hearts(db: Session = Depends(get_db)):
    user = get_or_create_default_user(db)
    COST = 50
    if user.stats.gems >= COST:
        user.stats.gems -= COST
        user.stats.hearts = user.stats.max_hearts
        user.stats.last_heart_loss_at = None
        db.commit()
        return {"success": True, "hearts": user.stats.hearts, "gems": user.stats.gems, "message": "Hearts fully refilled!"}
    else:
        # Free practice refill fallback for friendly UX
        user.stats.hearts = min(user.stats.max_hearts, user.stats.hearts + 1)
        db.commit()
        return {"success": True, "hearts": user.stats.hearts, "gems": user.stats.gems, "message": "Practiced and restored 1 heart!"}

@router.post("/api/gamification/practice")
def practice_session(db: Session = Depends(get_db)):
    user = get_or_create_default_user(db)
    if user.stats.hearts < user.stats.max_hearts:
        user.stats.hearts += 1
    user.stats.total_xp += 10
    user.stats.daily_xp += 10
    db.commit()
    return {
        "success": True,
        "hearts": user.stats.hearts,
        "xp_awarded": 10,
        "total_xp": user.stats.total_xp,
        "message": "Practice complete! Restored 1 heart and earned 10 XP."
    }

@router.get("/api/leaderboard", response_model=List[LeaderboardUser])
def get_leaderboard(db: Session = Depends(get_db)):
    current_user = get_or_create_default_user(db)
    
    # Query all users with stats ordered by total_xp desc
    users = db.query(User).join(User.stats).order_by(UserStats.total_xp.desc()).limit(15).all()

    leaderboard = []
    for rank, u in enumerate(users, start=1):
        leaderboard.append(LeaderboardUser(
            rank=rank,
            username=u.username,
            avatar=u.avatar or "👤",
            total_xp=u.stats.total_xp if u.stats else 0,
            is_current_user=(u.id == current_user.id)
        ))

    return leaderboard

@router.get("/api/achievements", response_model=List[AchievementResponse])
def get_all_achievements(db: Session = Depends(get_db)):
    user = get_or_create_default_user(db)
    all_achievements = db.query(Achievement).all()
    unlocked_dict = {
        ua.achievement_id: ua.unlocked_at
        for ua in db.query(UserAchievement).filter(UserAchievement.user_id == user.id).all()
    }

    result = []
    for ach in all_achievements:
        is_unlocked = ach.id in unlocked_dict
        result.append(AchievementResponse(
            id=ach.id,
            title=ach.title,
            description=ach.description,
            icon=ach.icon,
            xp_reward=ach.xp_reward,
            unlocked=is_unlocked,
            unlocked_at=unlocked_dict.get(ach.id)
        ))
    return result

@router.get("/api/profile", response_model=ProfileResponse)
def get_user_profile(db: Session = Depends(get_db)):
    user = get_or_create_default_user(db)
    
    completed_lessons = db.query(UserProgress).filter(
        UserProgress.user_id == user.id,
        UserProgress.completed == True
    ).count()

    all_achievements = get_all_achievements(db)

    return ProfileResponse(
        user=user,
        stats=user.stats,
        completed_lessons_count=completed_lessons,
        completed_skills_count=max(0, completed_lessons // 2),
        achievements=all_achievements
    )
