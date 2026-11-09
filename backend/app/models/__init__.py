from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text, JSON
from sqlalchemy.orm import relationship
from datetime import datetime, timezone
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=True)
    avatar = Column(String(255), default="🦉")
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    stats = relationship("UserStats", back_populates="user", uselist=False, cascade="all, delete-orphan")
    progress = relationship("UserProgress", back_populates="user", cascade="all, delete-orphan")
    achievements = relationship("UserAchievement", back_populates="user", cascade="all, delete-orphan")

class UserStats(Base):
    __tablename__ = "user_stats"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    total_xp = Column(Integer, default=0)
    current_streak = Column(Integer, default=0)
    longest_streak = Column(Integer, default=0)
    last_activity_date = Column(String(10), nullable=True) # "YYYY-MM-DD"
    hearts = Column(Integer, default=5)
    max_hearts = Column(Integer, default=5)
    last_heart_loss_at = Column(DateTime, nullable=True)
    gems = Column(Integer, default=500)
    daily_xp = Column(Integer, default=0)
    daily_goal_xp = Column(Integer, default=50)

    user = relationship("User", back_populates="stats")

class Course(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    source_language = Column(String(50), default="English")
    target_language = Column(String(50), nullable=False)
    flag = Column(String(20), default="🇪🇸")

    units = relationship("Unit", back_populates="course", order_by="Unit.order_index", cascade="all, delete-orphan")

class Unit(Base):
    __tablename__ = "units"

    id = Column(Integer, primary_key=True, index=True)
    course_id = Column(Integer, ForeignKey("courses.id", ondelete="CASCADE"), nullable=False)
    title = Column(String(100), nullable=False)
    description = Column(String(255), nullable=False)
    order_index = Column(Integer, default=1)

    course = relationship("Course", back_populates="units")
    skills = relationship("Skill", back_populates="unit", order_by="Skill.order_index", cascade="all, delete-orphan")

class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)
    unit_id = Column(Integer, ForeignKey("units.id", ondelete="CASCADE"), nullable=False)
    title = Column(String(100), nullable=False)
    description = Column(String(255), nullable=False)
    order_index = Column(Integer, default=1)
    icon = Column(String(50), default="book")

    unit = relationship("Unit", back_populates="skills")
    lessons = relationship("Lesson", back_populates="skill", order_by="Lesson.order_index", cascade="all, delete-orphan")

class Lesson(Base):
    __tablename__ = "lessons"

    id = Column(Integer, primary_key=True, index=True)
    skill_id = Column(Integer, ForeignKey("skills.id", ondelete="CASCADE"), nullable=False)
    title = Column(String(100), nullable=False)
    order_index = Column(Integer, default=1)
    xp_reward = Column(Integer, default=15)

    skill = relationship("Skill", back_populates="lessons")
    exercises = relationship("Exercise", back_populates="lesson", order_by="Exercise.order_index", cascade="all, delete-orphan")
    user_progress = relationship("UserProgress", back_populates="lesson", cascade="all, delete-orphan")

class Exercise(Base):
    __tablename__ = "exercises"

    id = Column(Integer, primary_key=True, index=True)
    lesson_id = Column(Integer, ForeignKey("lessons.id", ondelete="CASCADE"), nullable=False)
    exercise_type = Column(String(50), nullable=False) # multiple_choice, word_bank, match_pairs, fill_blank, type_answer
    question = Column(Text, nullable=False)
    options = Column(JSON, nullable=True) # List of options or word tiles or matching pairs
    correct_answer = Column(Text, nullable=False) # String, serialized JSON, or exact match
    explanation = Column(Text, nullable=True)
    order_index = Column(Integer, default=1)

    lesson = relationship("Lesson", back_populates="exercises")

class UserProgress(Base):
    __tablename__ = "user_progress"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    lesson_id = Column(Integer, ForeignKey("lessons.id", ondelete="CASCADE"), nullable=False)
    completed = Column(Boolean, default=False)
    accuracy = Column(Float, default=100.0)
    completed_at = Column(DateTime, nullable=True)

    user = relationship("User", back_populates="progress")
    lesson = relationship("Lesson", back_populates="user_progress")

class Achievement(Base):
    __tablename__ = "achievements"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    description = Column(String(255), nullable=False)
    icon = Column(String(50), default="trophy")
    xp_reward = Column(Integer, default=50)

    user_achievements = relationship("UserAchievement", back_populates="achievement", cascade="all, delete-orphan")

class UserAchievement(Base):
    __tablename__ = "user_achievements"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    achievement_id = Column(Integer, ForeignKey("achievements.id", ondelete="CASCADE"), nullable=False)
    unlocked_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    user = relationship("User", back_populates="achievements")
    achievement = relationship("Achievement", back_populates="user_achievements")
