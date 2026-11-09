'use client';

import React, { useState, useEffect } from 'react';
import {
  Flame,
  Zap,
  Target,
  Award,
  BookOpen,
  Calendar,
  Lock,
  CheckCircle2
} from 'lucide-react';
import { api } from '@/services/api';
import { UserProfile, Achievement } from '@/types';
import { TopStatsBar } from '@/components/layout/TopStatsBar';

export default function ProfilePage() {
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const prof: any = await api.getProfile();
        setProfileData(prof);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading || !profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#58CC02] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const user = profileData.user || {};
  const stats = profileData.stats || {};
  const username = user.username || 'duo_learner';
  const email = user.email || 'learner@duolingo.clone';
  const completedLessons = profileData.completed_lessons_count ?? 2;
  const completedSkills = profileData.completed_skills_count ?? 1;
  const achievements = profileData.achievements || [];

  return (
    <div className="min-h-screen bg-white">
      <TopStatsBar stats={stats} />

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* User Profile Header Card */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b-2 border-[#E5E5E5]">
          <div className="w-24 h-24 rounded-full bg-[#58CC02] border-4 border-[#46A302] flex items-center justify-center text-white font-black text-3xl shadow-md">
            {username.substring(0, 2).toUpperCase()}
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-black text-gray-800 tracking-tight">
              {username}
            </h1>
            <p className="text-sm font-bold text-gray-400 mt-0.5">{email}</p>
            <div className="flex items-center gap-2 mt-3 text-xs font-black text-gray-500 uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>Joined November 2026</span>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <h2 className="text-xl font-black text-gray-800 mt-8 mb-4">Statistics</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Day Streak */}
          <div className="p-4 rounded-2xl border-2 border-[#E5E5E5] flex items-center gap-3">
            <Flame className="w-8 h-8 fill-[#FF9600] text-[#FF9600]" />
            <div>
              <div className="text-xl font-black text-gray-800">{stats.current_streak ?? 0}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                Day Streak
              </div>
            </div>
          </div>

          {/* Total XP */}
          <div className="p-4 rounded-2xl border-2 border-[#E5E5E5] flex items-center gap-3">
            <Zap className="w-8 h-8 fill-[#FFC800] text-[#FFC800]" />
            <div>
              <div className="text-xl font-black text-gray-800">{stats.total_xp ?? 0}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                Total XP
              </div>
            </div>
          </div>

          {/* Completed Lessons */}
          <div className="p-4 rounded-2xl border-2 border-[#E5E5E5] flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#58CC02]" />
            <div>
              <div className="text-xl font-black text-gray-800">
                {completedLessons}
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                Lessons Done
              </div>
            </div>
          </div>

          {/* Longest Streak */}
          <div className="p-4 rounded-2xl border-2 border-[#E5E5E5] flex items-center gap-3">
            <Award className="w-8 h-8 text-[#1CB0F6]" />
            <div>
              <div className="text-xl font-black text-gray-800">{stats.longest_streak ?? 0}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                Longest Streak
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-4">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((ach: any) => {
            const isUnlocked = ach.unlocked;

            return (
              <div
                key={ach.id}
                className={`p-5 rounded-2xl border-2 flex items-center gap-4 transition-all ${
                  isUnlocked
                    ? 'border-[#FFC800] bg-[#FFFBF0]'
                    : 'border-[#E5E5E5] bg-white opacity-85'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl ${
                    isUnlocked
                      ? 'bg-[#FFC800] text-white shadow-[0_3px_0_#E5A500]'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {isUnlocked ? '🏆' : <Lock className="w-6 h-6" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-base text-gray-800">{ach.title}</h3>
                    {isUnlocked && (
                      <span className="text-xs font-black text-[#58CC02] uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Unlocked
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-gray-400 mt-0.5">
                    {ach.description}
                  </p>
                  <div className="text-xs font-black text-amber-500 mt-2">
                    +{ach.xp_reward} XP Reward
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
