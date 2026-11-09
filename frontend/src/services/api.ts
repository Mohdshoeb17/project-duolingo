import {
  UserProfile,
  UserStats,
  CoursePath,
  LessonDetail,
  SubmitResult,
  CompleteLessonResult,
  LeaderboardUser,
  Achievement
} from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

async function fetchJson<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

    if (!res.ok) {
      let errorDetail = 'API request failed';
      try {
        const errData = await res.json();
        errorDetail = typeof errData.detail === 'string' ? errData.detail : JSON.stringify(errData.detail || errData);
      } catch {
        // ignore JSON parse error
      }
      throw new Error(errorDetail);
    }

  return res.json();
}

export const api = {
  // User & Profile
  getUserMe: () => fetchJson<UserProfile>('/api/users/me'),
  getUserStats: () => fetchJson<UserStats>('/api/users/me/stats'),
  getProfile: () => fetchJson<UserProfile>('/api/profile'),
  getAchievements: () => fetchJson<Achievement[]>('/api/achievements'),

  // Courses & Learning Path
  getCourses: () => fetchJson<any[]>('/api/courses'),
  getCoursePath: (courseId = 1) => fetchJson<CoursePath>(`/api/courses/${courseId}/path`),

  // Lessons
  getLesson: (lessonId: number) => fetchJson<LessonDetail>(`/api/lessons/${lessonId}`),
  startLesson: (lessonId: number) =>
    fetchJson<{ message: string; hearts: number }>(`/api/lessons/${lessonId}/start`, {
      method: 'POST',
    }),
  submitExercise: (lessonId: number, exerciseId: number, answer: string) =>
    fetchJson<SubmitResult>(`/api/lessons/${lessonId}/submit`, {
      method: 'POST',
      body: JSON.stringify({ exercise_id: exerciseId, user_answer: answer }),
    }),
  completeLesson: (lessonId: number, accuracy: number, correctCount: number, totalQuestions: number) =>
    fetchJson<CompleteLessonResult>(`/api/lessons/${lessonId}/complete`, {
      method: 'POST',
      body: JSON.stringify({
        accuracy,
        exercises_completed: correctCount,
      }),
    }),

  // Gamification & Leaderboard
  getLeaderboard: () => fetchJson<LeaderboardUser[]>('/api/leaderboard'),
  practice: () => fetchJson<{ message: string; hearts: number; gems: number }>('/api/gamification/practice', {
    method: 'POST',
  }),
  refillHearts: () => fetchJson<UserStats>('/api/gamification/refill-hearts', {
    method: 'POST',
  }),
};
