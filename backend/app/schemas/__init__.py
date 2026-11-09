from pydantic import BaseModel
from typing import List, Optional, Any, Dict
from datetime import datetime

class UserBase(BaseModel):
    username: str
    email: str
    avatar: Optional[str] = "🦉"

class UserStatsResponse(BaseModel):
    total_xp: int
    current_streak: int
    longest_streak: int
    last_activity_date: Optional[str]
    hearts: int
    max_hearts: int
    gems: int
    daily_xp: int
    daily_goal_xp: int

    class Config:
        from_attributes = True

class UserResponse(UserBase):
    id: int
    created_at: datetime
    stats: Optional[UserStatsResponse]

    class Config:
        from_attributes = True

class ExerciseResponse(BaseModel):
    id: int
    lesson_id: int
    exercise_type: str
    question: str
    options: Optional[Any] = None
    explanation: Optional[str] = None
    order_index: int

    class Config:
        from_attributes = True

class ExerciseSubmission(BaseModel):
    exercise_id: int
    user_answer: Any

class ExerciseCheckResult(BaseModel):
    is_correct: bool
    correct_answer: str
    explanation: Optional[str] = None
    hearts_remaining: int
    lesson_failed: bool = False

class LessonCompleteRequest(BaseModel):
    accuracy: float
    exercises_completed: int

class LessonCompleteResponse(BaseModel):
    success: bool
    xp_awarded: int
    total_xp: int
    gems_awarded: int
    streak_updated: bool
    current_streak: int
    next_lesson_id: Optional[int] = None
    message: str

class LessonSummary(BaseModel):
    id: int
    skill_id: int
    title: str
    order_index: int
    xp_reward: int
    completed: bool = False
    locked: bool = True
    accuracy: Optional[float] = None

    class Config:
        from_attributes = True

class SkillSummary(BaseModel):
    id: int
    unit_id: int
    title: str
    description: str
    order_index: int
    icon: str
    total_lessons: int
    completed_lessons: int
    lessons: List[LessonSummary]

    class Config:
        from_attributes = True

class UnitSummary(BaseModel):
    id: int
    course_id: int
    title: str
    description: str
    order_index: int
    skills: List[SkillSummary]

    class Config:
        from_attributes = True

class CoursePathResponse(BaseModel):
    course_id: int
    course_title: str
    target_language: str
    flag: str
    units: List[UnitSummary]

class CourseResponse(BaseModel):
    id: int
    title: str
    source_language: str
    target_language: str
    flag: str

    class Config:
        from_attributes = True

class LeaderboardUser(BaseModel):
    rank: int
    username: str
    avatar: str
    total_xp: int
    is_current_user: bool = False

class AchievementResponse(BaseModel):
    id: int
    title: str
    description: str
    icon: str
    xp_reward: int
    unlocked: bool = False
    unlocked_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class ProfileResponse(BaseModel):
    user: UserResponse
    stats: UserStatsResponse
    completed_lessons_count: int
    completed_skills_count: int
    achievements: List[AchievementResponse]
