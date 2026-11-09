export type ExerciseType =
  | 'MULTIPLE_CHOICE'
  | 'TRANSLATE_WORDS'
  | 'MATCH_PAIRS'
  | 'FILL_IN_BLANK'
  | 'TYPE_ANSWER';

export interface Exercise {
  id: number;
  lesson_id: number;
  exercise_type: ExerciseType;
  prompt: string;
  question_text?: string;
  correct_answer: string;
  options?: string[];
  pairs?: Record<string, string>;
  explanation?: string;
  order_index: number;
}

export interface LessonSummary {
  id: number;
  skill_id: number;
  title: string;
  order_index: number;
  total_xp: number;
  completed: boolean;
  locked: boolean;
}

export interface SkillSummary {
  id: number;
  unit_id: number;
  name: string;
  description?: string;
  order_index: number;
  icon?: string;
  lessons: LessonSummary[];
}

export interface UnitSummary {
  id: number;
  course_id: number;
  unit_number: number;
  title: string;
  description?: string;
  color?: string;
  skills: SkillSummary[];
}

export interface CoursePath {
  course_id: number;
  course_title: string;
  units: UnitSummary[];
}

export interface UserStats {
  id: number;
  user_id: number;
  total_xp: number;
  current_streak: number;
  longest_streak: number;
  hearts: number;
  max_hearts: number;
  gems: number;
  daily_goal_xp: number;
  daily_xp: number;
  hearts_regenerate_at?: string;
}

export interface UserProgressSummary {
  completed_lessons_count: number;
  completed_skills_count: number;
  total_lessons: number;
}

export interface UserProfile {
  id: number;
  username: string;
  email: string;
  avatar_url?: string;
  stats: UserStats;
  progress: UserProgressSummary;
}

export interface LeaderboardUser {
  rank: number;
  username: string;
  avatar_url?: string;
  total_xp: number;
  is_current_user: boolean;
}

export interface Achievement {
  id: number;
  code: string;
  title: string;
  description: string;
  badge_icon?: string;
  target_value: number;
  current_value: number;
  unlocked: boolean;
  unlocked_at?: string;
}

export interface LessonDetail {
  id: number;
  title: string;
  total_xp: number;
  completed: boolean;
  exercises: Exercise[];
}

export interface SubmitResult {
  is_correct: boolean;
  correct_answer: string;
  explanation?: string;
  hearts_remaining: number;
  out_of_hearts: boolean;
}

export interface CompleteLessonResult {
  message: string;
  xp_earned: number;
  total_xp: number;
  streak: number;
  streak_updated: boolean;
  gems_earned: number;
  total_gems: number;
  completed: boolean;
  accuracy: number;
}
