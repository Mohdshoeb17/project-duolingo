'use client';

import React, { useState, useEffect } from 'react';
import { api } from '@/services/api';
import { CoursePath, UserStats, LeaderboardUser } from '@/types';
import { TopStatsBar, ALL_DEFAULT_COURSES } from '@/components/layout/TopStatsBar';
import { LearningPath } from '@/components/learning-path/LearningPath';
import { GamificationWidgets } from '@/components/gamification/GamificationWidgets';
import { getFallbackCoursePath } from '@/lib/courseData';

export default function HomePage() {
  const [courses, setCourses] = useState<any[]>(ALL_DEFAULT_COURSES);
  const [selectedCourseId, setSelectedCourseId] = useState(1);
  const [coursePath, setCoursePath] = useState<CoursePath | null>(() => getFallbackCoursePath(1));
  const [stats, setStats] = useState<UserStats | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(false);

  const loadData = async (courseId: number) => {
    try {
      // First immediately switch to local curriculum for instant zero-lag response
      const fallbackPath = getFallbackCoursePath(courseId);
      setCoursePath(fallbackPath);

      // Attempt to fetch fresh data from API
      let pathData: CoursePath | null = null;
      try {
        pathData = await api.getCoursePath(courseId);
        if (pathData && pathData.units && pathData.units.length > 0) {
          setCoursePath(pathData);
        }
      } catch (pathErr) {
        console.warn(`API path fetch failed for course ${courseId}, keeping built-in curriculum`, pathErr);
      }

      const [statsData, lbData, courseList] = await Promise.all([
        api.getUserStats().catch(() => null),
        api.getLeaderboard().catch(() => []),
        api.getCourses().catch(() => ALL_DEFAULT_COURSES),
      ]);

      if (statsData) setStats(statsData);
      if (lbData && lbData.length > 0) setLeaderboard(lbData);
      if (courseList && courseList.length > 0) {
        const merged = [...courseList];
        for (const def of ALL_DEFAULT_COURSES) {
          if (!merged.some((c: any) => c.id === def.id || c.target_language.toLowerCase() === def.target_language.toLowerCase())) {
            merged.push(def);
          }
        }
        setCourses(merged);
      }
    } catch (err) {
      console.error('Failed to load home page data:', err);
      setCoursePath(getFallbackCoursePath(courseId));
    }
  };

  useEffect(() => {
    loadData(selectedCourseId);
  }, [selectedCourseId]);

  const handleSelectCourse = (courseId: number) => {
    setSelectedCourseId(courseId);
  };

  const handleRefillHearts = async () => {
    try {
      const updated = await api.refillHearts();
      setStats(updated);
    } catch (err: any) {
      alert(err.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#58CC02] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top statistics header bar with Language Dropdown */}
      <TopStatsBar
        stats={stats}
        onRefillClick={handleRefillHearts}
        courses={courses}
        currentCourseId={selectedCourseId}
        onSelectCourse={handleSelectCourse}
      />

      {/* Main Content layout */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 justify-center">
        {/* Central Learning Path */}
        <div className="flex-1 max-w-xl w-full">
          {coursePath && <LearningPath units={coursePath.units} />}
        </div>

        {/* Right Sidebar Gamification Cards */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <GamificationWidgets stats={stats} leaderboardPreview={leaderboard} />
          </div>
        </div>
      </div>
    </div>
  );
}
