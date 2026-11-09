'use client';

import React, { useState, useEffect } from 'react';
import { api } from '@/services/api';
import { CoursePath, UserStats, LeaderboardUser } from '@/types';
import { TopStatsBar } from '@/components/layout/TopStatsBar';
import { LearningPath } from '@/components/learning-path/LearningPath';
import { GamificationWidgets } from '@/components/gamification/GamificationWidgets';

export default function HomePage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState(1);
  const [coursePath, setCoursePath] = useState<CoursePath | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async (courseId: number) => {
    try {
      const [pathData, statsData, lbData, courseList] = await Promise.all([
        api.getCoursePath(courseId),
        api.getUserStats(),
        api.getLeaderboard(),
        api.getCourses().catch(() => [
          { id: 1, title: 'Spanish for English Speakers', target_language: 'Spanish', flag: '🇪🇸' },
          { id: 2, title: 'French for English Speakers', target_language: 'French', flag: '🇫🇷' },
          { id: 3, title: 'German for English Speakers', target_language: 'German', flag: '🇩🇪' },
          { id: 4, title: 'Japanese for English Speakers', target_language: 'Japanese', flag: '🇯🇵' },
        ]),
      ]);
      setCoursePath(pathData);
      setStats(statsData);
      setLeaderboard(lbData);
      if (courseList && courseList.length > 0) {
        setCourses(courseList);
      }
    } catch (err) {
      console.error('Failed to load home page data:', err);
    } finally {
      setLoading(false);
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
