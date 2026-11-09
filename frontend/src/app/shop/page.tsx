'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Gem, Sparkles, ShieldCheck } from 'lucide-react';
import { api } from '@/services/api';
import { UserStats } from '@/types';
import { TopStatsBar } from '@/components/layout/TopStatsBar';

export default function ShopPage() {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

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

  const handleRefill = async () => {
    try {
      setLoading(true);
      const updated = await api.refillHearts();
      setStats(updated);
      setMsg('Hearts fully refilled!');
      setTimeout(() => setMsg(null), 3000);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <TopStatsBar stats={stats} />

      <div className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-black text-gray-800 tracking-tight mb-2">
          Shop
        </h1>
        <p className="text-sm font-bold text-gray-500 mb-8">
          Spend your gems to buy power-ups and keep learning without pause!
        </p>

        {msg && (
          <div className="mb-6 p-4 rounded-2xl bg-[#E5F9D3] border-2 border-[#58CC02] text-[#58CC02] font-black text-sm">
            {msg}
          </div>
        )}

        <div className="flex flex-col gap-6">
          {/* Hearts Refill */}
          <div className="p-6 rounded-3xl border-2 border-[#E5E5E5] bg-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-[#FFE5E5] text-[#FF4B4B]">
                <Heart className="w-8 h-8 fill-[#FF4B4B]" />
              </div>
              <div>
                <h3 className="font-black text-lg text-gray-800">Refill Hearts</h3>
                <p className="text-xs font-bold text-gray-400 mt-0.5">
                  Get full 5 hearts so you never have to worry about mistakes during a lesson.
                </p>
              </div>
            </div>

            <button
              onClick={handleRefill}
              disabled={loading || (stats?.hearts ?? 5) >= 5}
              className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all whitespace-nowrap ${
                (stats?.hearts ?? 5) < 5
                  ? 'bg-[#1CB0F6] text-white shadow-[0_4px_0_#1899D6] hover:bg-[#1899D6] active:translate-y-0.5'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {(stats?.hearts ?? 5) >= 5 ? 'Full' : 'Refill Free'}
            </button>
          </div>

          {/* Super Duolingo Subscription Card */}
          <div className="p-8 rounded-3xl border-2 border-[#1CB0F6]/40 bg-gradient-to-br from-[#1CB0F6]/10 to-[#CE82FF]/15 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm font-black text-[#1CB0F6] uppercase tracking-wider">
              <Sparkles className="w-5 h-5 fill-[#1CB0F6]" />
              <span>SUPER DUOLINGO (Coming Soon)</span>
            </div>

            <h2 className="text-2xl font-black text-gray-800">
              Unlimited Hearts, Personalized Practice & Zero Ads.
            </h2>
            <p className="text-sm font-bold text-gray-600">
              Learn faster and without any limitations with Super Duolingo. Stay tuned for the upcoming launch!
            </p>

            <button
              disabled
              className="mt-2 py-4 bg-gray-200 text-gray-500 rounded-2xl font-black text-sm uppercase tracking-wider cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
