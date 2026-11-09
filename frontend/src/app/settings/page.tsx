'use client';

import React, { useState } from 'react';
import { Volume2, Sparkles, Moon, Sun, Bell, Shield } from 'lucide-react';
import { TopStatsBar } from '@/components/layout/TopStatsBar';

export default function SettingsPage() {
  const [soundEffects, setSoundEffects] = useState(true);
  const [animations, setAnimations] = useState(true);
  const [motivationReminders, setMotivationReminders] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <TopStatsBar />

      <div className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-black text-gray-800 tracking-tight mb-2">
          Preferences & Settings
        </h1>
        <p className="text-sm font-bold text-gray-500 mb-8">
          Personalize your learning environment and feedback animations.
        </p>

        <div className="flex flex-col gap-5">
          {/* Sound toggle */}
          <div className="p-5 rounded-2xl border-2 border-[#E5E5E5] bg-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-sky-100 text-[#1CB0F6]">
                <Volume2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-base text-gray-800">Sound Effects</h3>
                <p className="text-xs font-bold text-gray-400">
                  Play audio for answers and exercise checkpoints
                </p>
              </div>
            </div>

            <button
              onClick={() => setSoundEffects(!soundEffects)}
              className={`w-14 h-8 rounded-full transition-colors relative p-1 ${
                soundEffects ? 'bg-[#58CC02]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full transition-transform ${
                  soundEffects ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Animations toggle */}
          <div className="p-5 rounded-2xl border-2 border-[#E5E5E5] bg-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-100 text-[#CE82FF]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-base text-gray-800">
                  Celebration Animations
                </h3>
                <p className="text-xs font-bold text-gray-400">
                  Show confetti and celebratory mascot reactions
                </p>
              </div>
            </div>

            <button
              onClick={() => setAnimations(!animations)}
              className={`w-14 h-8 rounded-full transition-colors relative p-1 ${
                animations ? 'bg-[#58CC02]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full transition-transform ${
                  animations ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Daily reminder notifications */}
          <div className="p-5 rounded-2xl border-2 border-[#E5E5E5] bg-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-amber-100 text-[#FFC800]">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-base text-gray-800">Daily Streak Reminders</h3>
                <p className="text-xs font-bold text-gray-400">
                  Receive notifications before your streak expires
                </p>
              </div>
            </div>

            <button
              onClick={() => setMotivationReminders(!motivationReminders)}
              className={`w-14 h-8 rounded-full transition-colors relative p-1 ${
                motivationReminders ? 'bg-[#58CC02]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full transition-transform ${
                  motivationReminders ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Account info section */}
          <div className="mt-6 p-6 rounded-2xl border-2 border-[#E5E5E5] bg-gray-50 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-black text-gray-700">Learner Profile</h4>
              <p className="text-xs font-bold text-gray-400 mt-0.5">
                Logged in as default demo user: <span className="text-gray-700">duo_learner</span>
              </p>
            </div>
            <div className="text-xs font-black text-[#58CC02] uppercase tracking-wider bg-white border border-[#E5E5E5] px-3 py-1.5 rounded-xl">
              Active Demo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
