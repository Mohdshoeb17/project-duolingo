'use client';

import React, { useState, useEffect } from 'react';
import { Dumbbell, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { api } from '@/services/api';
import { UserStats } from '@/types';
import { TopStatsBar } from '@/components/layout/TopStatsBar';
import { Mascot } from '@/components/common/Mascot';

export default function PracticePage() {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [practicing, setPracticing] = useState(false);
  const [resultMsg, setResultMsg] = useState<string | null>(null);

  const loadStats = async () => {
    try {
      const data = await api.getUserStats();
      setStats(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  const handlePracticeSession = async () => {
    try {
      setPracticing(true);
      const res = await api.practice();
      setResultMsg(res.message);
      await loadStats();
    } catch (err: any) {
      alert(err.message);
    } finally {
      setPracticing(false);
    }
  };

  return (
    <div className="md:ml-64 min-h-screen bg-white">
      <TopStatsBar stats={stats} />

      <div className="max-w-2xl mx-auto px-6 py-12 flex flex-col items-center text-center">
        <Mascot mood="waving" size={140} className="mb-4" />

        <h1 className="text-3xl font-black text-gray-800 tracking-tight">
          Practice Hub
        </h1>
        <p className="text-gray-500 font-bold mt-2 max-w-md">
          Strengthen vocabulary and regain hearts through tailored quick reviews.
        </p>

        {resultMsg && (
          <div className="mt-6 p-4 rounded-2xl bg-[#E5F9D3] border-2 border-[#58CC02] text-[#58CC02] font-black flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>{resultMsg}</span>
          </div>
        )}

        {/* Practice Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mt-10">
          {/* Heart Refill Practice */}
          <div className="p-6 rounded-2xl border-2 border-[#E5E5E5] flex flex-col items-center text-center shadow-sm hover:border-[#FF4B4B] transition-all">
            <div className="p-4 rounded-2xl bg-[#FFE5E5] text-[#FF4B4B] mb-4">
              <Heart className="w-8 h-8 fill-[#FF4B4B]" />
            </div>
            <h3 className="text-lg font-black text-gray-800">Heart Practice</h3>
            <p className="text-xs font-bold text-gray-400 mt-1 mb-6">
              Complete a quick drill to regain 1 lost heart!
            </p>
            <button
              onClick={handlePracticeSession}
              disabled={practicing || (stats?.hearts ?? 5) >= 5}
              className={`w-full py-3.5 rounded-xl font-black text-sm uppercase tracking-wider transition-all ${
                (stats?.hearts ?? 5) < 5
                  ? 'bg-[#FF4B4B] text-white shadow-[0_4px_0_#EA2B2B] hover:bg-[#EA2B2B]'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {(stats?.hearts ?? 5) >= 5 ? 'Hearts Full (5/5)' : 'Practice (+1 Heart)'}
            </button>
          </div>

          {/* Quick Warmup Drill */}
          <div className="p-6 rounded-2xl border-2 border-[#E5E5E5] flex flex-col items-center text-center shadow-sm hover:border-[#1CB0F6] transition-all">
            <div className="p-4 rounded-2xl bg-[#DDF4FF] text-[#1CB0F6] mb-4">
              <Dumbbell className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-black text-gray-800">Mistakes Drill</h3>
            <p className="text-xs font-bold text-gray-400 mt-1 mb-6">
              Review words you previously stumbled on.
            </p>
            <button
              onClick={handlePracticeSession}
              disabled={practicing}
              className="w-full py-3.5 bg-[#1CB0F6] text-white rounded-xl font-black text-sm uppercase tracking-wider shadow-[0_4px_0_#1899D6] hover:bg-[#1899D6] transition-all"
            >
              Start Review Drill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
