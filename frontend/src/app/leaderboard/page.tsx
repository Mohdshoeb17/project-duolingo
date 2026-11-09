'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Zap, Shield } from 'lucide-react';
import { api } from '@/services/api';
import { LeaderboardUser, UserStats } from '@/types';
import { TopStatsBar } from '@/components/layout/TopStatsBar';

export default function LeaderboardPage() {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [lb, st] = await Promise.all([api.getLeaderboard(), api.getUserStats()]);
        setUsers(lb);
        setStats(st);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <TopStatsBar stats={stats} />

      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex p-4 rounded-3xl bg-[#FFF8D4] border-2 border-[#FFC800] text-[#FFC800] mb-3">
            <Trophy className="w-12 h-12 fill-[#FFC800]" />
          </div>
          <h1 className="text-3xl font-black text-gray-800 tracking-tight">
            Ruby League
          </h1>
          <p className="text-sm font-bold text-gray-500 mt-1">
            Top 3 advance to Emerald League at the end of the week!
          </p>
        </div>

        {/* Leaderboard Table */}
        <div className="border-2 border-[#E5E5E5] rounded-3xl overflow-hidden bg-white shadow-sm">
          {loading ? (
            <div className="p-12 text-center text-gray-400 font-bold">
              Loading rankings...
            </div>
          ) : (
            <div className="divide-y-2 divide-[#E5E5E5]">
              {users.map((user) => {
                let rankBadge = (
                  <span className="w-8 text-center font-black text-gray-400 text-base">
                    {user.rank}
                  </span>
                );

                if (user.rank === 1) {
                  rankBadge = (
                    <div className="w-8 flex items-center justify-center text-[#FFC800]">
                      <Medal className="w-7 h-7 fill-[#FFC800]" />
                    </div>
                  );
                } else if (user.rank === 2) {
                  rankBadge = (
                    <div className="w-8 flex items-center justify-center text-gray-400">
                      <Medal className="w-7 h-7 fill-gray-300" />
                    </div>
                  );
                } else if (user.rank === 3) {
                  rankBadge = (
                    <div className="w-8 flex items-center justify-center text-[#CD7F32]">
                      <Medal className="w-7 h-7 fill-[#CD7F32]" />
                    </div>
                  );
                }

                return (
                  <div
                    key={user.rank}
                    className={`flex items-center justify-between p-4 px-6 transition-colors ${
                      user.is_current_user
                        ? 'bg-[#E5F9D3] border-l-4 border-l-[#58CC02]'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {rankBadge}
                      <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center text-sm font-black text-gray-700">
                        {user.username.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-black text-base text-gray-800 flex items-center gap-2">
                          <span>{user.username}</span>
                          {user.is_current_user && (
                            <span className="text-[10px] bg-[#58CC02] text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold">
                              YOU
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 font-black text-base text-gray-700">
                      <Zap className="w-4 h-4 text-[#FFC800] fill-[#FFC800]" />
                      <span>{user.total_xp} XP</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
