'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, Sparkles, Moon, Sun, Bell, Shield, Palette } from 'lucide-react';
import { TopStatsBar } from '@/components/layout/TopStatsBar';
import { useTheme } from '@/context/ThemeContext';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const [soundEffects, setSoundEffects] = useState(true);
  const [animations, setAnimations] = useState(true);
  const [motivationReminders, setMotivationReminders] = useState(true);

  useEffect(() => {
    const savedSound = localStorage.getItem('sound_effects');
    if (savedSound !== null) {
      setSoundEffects(savedSound === 'true');
    }
    const savedAnim = localStorage.getItem('celebration_anim');
    if (savedAnim !== null) {
      setAnimations(savedAnim === 'true');
    }
  }, []);

  const handleToggleSound = () => {
    setSoundEffects((prev) => {
      const next = !prev;
      localStorage.setItem('sound_effects', String(next));
      return next;
    });
  };

  const handleToggleAnim = () => {
    setAnimations((prev) => {
      const next = !prev;
      localStorage.setItem('celebration_anim', String(next));
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#131F24] text-gray-900 dark:text-gray-100 transition-colors">
      <TopStatsBar />

      <div className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-black tracking-tight mb-2">
          Preferences & Settings
        </h1>
        <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-8">
          Personalize your learning environment, theme, and feedback animations.
        </p>

        <div className="flex flex-col gap-5">
          {/* Dark Mode toggle */}
          <div className="p-5 rounded-2xl border-2 border-[#E5E5E5] dark:border-gray-800 bg-white dark:bg-[#1A282D] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-950 text-[#CE82FF]">
                {theme === 'dark' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="font-black text-base">Dark Mode (Bonus Feature)</h3>
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500">
                  Switch between light and high-contrast dark theme
                </p>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className={`w-14 h-8 rounded-full transition-colors relative p-1 ${
                theme === 'dark' ? 'bg-[#58CC02]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full transition-transform ${
                  theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Sound toggle */}
          <div className="p-5 rounded-2xl border-2 border-[#E5E5E5] dark:border-gray-800 bg-white dark:bg-[#1A282D] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-sky-100 dark:bg-sky-950 text-[#1CB0F6]">
                <Volume2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-base">Sound & Audio Pronunciation</h3>
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500">
                  {soundEffects ? 'Sound is enabled across all lessons' : 'Sound is disabled across all lessons'}
                </p>
              </div>
            </div>

            <button
              onClick={handleToggleSound}
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
          <div className="p-5 rounded-2xl border-2 border-[#E5E5E5] dark:border-gray-800 bg-white dark:bg-[#1A282D] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-green-100 dark:bg-green-950 text-[#58CC02]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-base">
                  Celebration Animations
                </h3>
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500">
                  Show confetti and celebratory mascot reactions
                </p>
              </div>
            </div>

            <button
              onClick={handleToggleAnim}
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
          <div className="p-5 rounded-2xl border-2 border-[#E5E5E5] dark:border-gray-800 bg-white dark:bg-[#1A282D] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-950 text-[#FFC800]">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-base">Daily Streak Reminders</h3>
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500">
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
          <div className="mt-6 p-6 rounded-2xl border-2 border-[#E5E5E5] dark:border-gray-800 bg-gray-50 dark:bg-[#162329] flex items-center justify-between">
            <div>
              <h4 className="text-sm font-black text-gray-700 dark:text-gray-300">Learner Profile</h4>
              <p className="text-xs font-bold text-gray-400 dark:text-gray-500 mt-0.5">
                Logged in as default demo user: <span className="text-gray-700 dark:text-gray-200">duo_learner</span>
              </p>
            </div>
            <div className="text-xs font-black text-[#58CC02] uppercase tracking-wider bg-white dark:bg-[#1A282D] border border-[#E5E5E5] dark:border-gray-800 px-3 py-1.5 rounded-xl">
              Active Demo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
