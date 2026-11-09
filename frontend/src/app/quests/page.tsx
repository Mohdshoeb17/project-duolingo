'use client';

import React, { useState, useEffect } from 'react';
import { Target, Zap, CheckCircle2 } from 'lucide-react';
import { api } from '@/services/api';
import { UserStats } from '@/types';
import { TopStatsBar } from '@/components/layout/TopStatsBar';
import { Mascot } from '@/components/common/Mascot';

export default function QuestsPage() {
  const [stats, setStats] = useState<UserStats | null>(null);

  useEffect(() => {
    api.getUserStats().then(setStats).catch(console.error);
  }, []);

  const dailyXp = stats?.daily_xp ?? 0;
  const quests = [
    {
      title: 'Earn 50 XP today',
      description: 'Complete lessons or practice sessions',
      current: dailyXp,
      target: 50,
      reward: '10 Gems',
    },
    {
      title: 'Complete 3 lessons',
      description: 'Advance on your Spanish learning tree',
      current: 2,
      target: 3,
      reward: '20 Gems',
    },
    {
      title: 'Answer 10 questions correctly',
      description: 'Show your mastery without losing hearts',
      current: 8,
      target: 10,
      reward: '15 Gems',
    },
  ];

  return (
    <div className="md:ml-64 min-h-screen bg-white">
      <TopStatsBar stats={stats} />

      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="flex items-center gap-6 mb-8 p-6 rounded-3xl bg-gradient-to-r from-[#F5E8FF] to-white border-2 border-[#CE82FF]/30">
          <Mascot mood="celebrate" size={100} />
          <div>
            <span className="text-xs font-black uppercase text-[#CE82FF] tracking-wider">
              Daily Challenges
            </span>
            <h1 className="text-2xl font-black text-gray-800">
              Complete quests to earn rewards!
            </h1>
            <p className="text-xs font-bold text-gray-500 mt-1">
              Quests reset every midnight. Keep your streak alive!
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {quests.map((q, idx) => {
            const percent = Math.min(100, Math.round((q.current / q.target) * 100));
            const isDone = percent >= 100;

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl border-2 border-[#E5E5E5] bg-white shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl ${
                        isDone ? 'bg-[#58CC02] text-white' : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-6 h-6 stroke-[3]" />
                      ) : (
                        <Target className="w-6 h-6 stroke-[2.5]" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-black text-base text-gray-800">{q.title}</h3>
                      <p className="text-xs font-bold text-gray-400">{q.description}</p>
                    </div>
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 rounded-xl bg-amber-50 text-amber-600 border border-amber-200">
                    {q.reward}
                  </span>
                </div>

                {/* Progress */}
                <div className="w-full bg-[#E5E5E5] h-3.5 rounded-full overflow-hidden p-0.5 mt-1">
                  <div
                    className="bg-[#CE82FF] h-full rounded-full transition-all duration-300"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-xs font-extrabold text-gray-400">
                  <span>
                    {q.current} / {q.target}
                  </span>
                  <span>{percent}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
