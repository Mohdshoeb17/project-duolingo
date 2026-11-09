'use client';

import React from 'react';
import Link from 'next/link';
import { Target, Trophy, Flame } from 'lucide-react';
import { UserStats, LeaderboardUser } from '@/types';
import { Mascot } from '../common/Mascot';

interface GamificationWidgetsProps {
  stats?: UserStats | null;
  leaderboardPreview?: LeaderboardUser[];
}

export const GamificationWidgets: React.FC<GamificationWidgetsProps> = ({
  stats,
  leaderboardPreview = [],
}) => {
  const dailyXp = stats?.daily_xp ?? 0;
  const goalXp = stats?.daily_goal_xp ?? 50;
  const progressPercent = Math.min(100, Math.round((dailyXp / goalXp) * 100));

  return (
    <div className="w-80 flex flex-col gap-6 select-none">
      {/* Daily Goal Card */}
      <div className="border-2 border-[#E5E5E5] rounded-2xl p-5 bg-white shadow-sm flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-gray-700 text-base">
            <Target className="w-5 h-5 text-[#FF9600]" />
            <span>Daily Quest</span>
          </div>
          <span className="text-xs font-black text-[#58CC02] uppercase tracking-wider">
            {progressPercent >= 100 ? 'Completed!' : `${progressPercent}%`}
          </span>
        </div>

        <p className="text-xs font-bold text-gray-500">
          Earn {goalXp} XP in one day to keep your progress sharp!
        </p>

        {/* Progress bar */}
        <div className="w-full bg-[#E5E5E5] h-4 rounded-full overflow-hidden p-0.5">
          <div
            className="bg-[#58CC02] h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-xs font-black text-gray-400">
          <span>{dailyXp} XP</span>
          <span>{goalXp} XP</span>
        </div>
      </div>

      {/* Mascot Cheer Banner */}
      <div className="border-2 border-[#E5E5E5] rounded-2xl p-4 bg-gradient-to-r from-[#E5F9D3]/40 to-white shadow-sm flex items-center gap-4">
        <Mascot mood="happy" size={76} />
        <div>
          <div className="text-sm font-black text-gray-800">Keep it up!</div>
          <p className="text-xs text-gray-500 font-semibold mt-0.5 leading-snug">
            15 minutes of practice every day builds true language fluency.
          </p>
        </div>
      </div>

      {/* Leaderboard Preview Card */}
      <div className="border-2 border-[#E5E5E5] rounded-2xl p-5 bg-white shadow-sm flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-gray-700 text-base">
            <Trophy className="w-5 h-5 text-[#FFC800]" />
            <span>Leaderboard</span>
          </div>
          <Link
            href="/leaderboard"
            className="text-xs font-black text-[#1CB0F6] uppercase tracking-wider hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="flex flex-col gap-2 mt-1">
          {leaderboardPreview.slice(0, 5).map((user) => (
            <div
              key={user.rank}
              className={`flex items-center justify-between p-2 rounded-xl text-sm font-bold ${
                user.is_current_user
                  ? 'bg-[#E5F9D3] text-[#58CC02] border-2 border-[#58CC02]/30'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-5 text-center font-black text-gray-400 text-xs">
                  {user.rank}
                </span>
                <div className="w-7 h-7 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-xs font-black text-gray-600">
                  {user.username.substring(0, 2).toUpperCase()}
                </div>
                <span className="truncate max-w-[110px]">{user.username}</span>
              </div>
              <span className="text-xs font-black text-gray-500">{user.total_xp} XP</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
