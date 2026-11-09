'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame, Zap, Heart, Gem, ChevronDown, Check } from 'lucide-react';
import { UserStats } from '@/types';

interface CourseOption {
  id: number;
  title: string;
  target_language: string;
  flag: string;
}

interface TopStatsBarProps {
  stats?: UserStats | null;
  onRefillClick?: () => void;
  courses?: CourseOption[];
  currentCourseId?: number;
  onSelectCourse?: (courseId: number) => void;
}

export const TopStatsBar: React.FC<TopStatsBarProps> = ({
  stats,
  onRefillClick,
  courses = [
    { id: 1, title: 'Spanish for English Speakers', target_language: 'Spanish', flag: '🇪🇸' },
    { id: 2, title: 'French for English Speakers', target_language: 'French', flag: '🇫🇷' },
    { id: 3, title: 'German for English Speakers', target_language: 'German', flag: '🇩🇪' },
    { id: 4, title: 'Japanese for English Speakers', target_language: 'Japanese', flag: '🇯🇵' },
  ],
  currentCourseId = 1,
  onSelectCourse,
}) => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // If inside lesson player, the player renders its own header
  if (pathname.startsWith('/lesson/')) {
    return null;
  }

  const streak = stats?.current_streak ?? 0;
  const totalXp = stats?.total_xp ?? 0;
  const hearts = stats?.hearts ?? 5;
  const gems = stats?.gems ?? 100;

  const currentCourse = courses.find((c) => c.id === currentCourseId) || courses[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b-2 border-[#E5E5E5] px-6 py-3 flex items-center justify-between">
      {/* Active Course / Language selector Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-[#E5E5E5] hover:bg-gray-50 active:translate-y-0.5 transition-all outline-none"
        >
          <span className="text-2xl" role="img" aria-label={currentCourse.target_language}>
            {currentCourse.flag}
          </span>
          <span className="font-extrabold text-sm text-gray-700 tracking-wide uppercase">
            {currentCourse.target_language}
          </span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

        {dropdownOpen && (
          <div className="absolute left-0 top-full mt-2 w-56 bg-white border-2 border-[#E5E5E5] rounded-2xl shadow-xl p-2 z-50 flex flex-col gap-1 animate-fade-in">
            <div className="text-[11px] font-black uppercase text-gray-400 px-3 py-1 tracking-wider">
              Choose Language
            </div>
            {courses.map((course) => {
              const isSelected = course.id === currentCourseId;
              return (
                <button
                  key={course.id}
                  onClick={() => {
                    if (onSelectCourse) onSelectCourse(course.id);
                    setDropdownOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-bold transition-all text-left ${
                    isSelected
                      ? 'bg-[#E5F9D3] text-[#58CC02] border border-[#58CC02]/30'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{course.flag}</span>
                    <span>{course.target_language}</span>
                  </div>
                  {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Gamification Stats pill cluster */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Streak */}
        <div
          title={`${streak} day streak`}
          className="flex items-center gap-1.5 font-black text-sm text-[#FF9600] px-2 py-1 rounded-xl hover:bg-orange-50 cursor-pointer transition-colors"
        >
          <Flame className="w-6 h-6 fill-[#FF9600] text-[#FF9600]" />
          <span>{streak}</span>
        </div>

        {/* Gems */}
        <div
          title={`${gems} gems`}
          className="flex items-center gap-1.5 font-black text-sm text-[#1CB0F6] px-2 py-1 rounded-xl hover:bg-sky-50 cursor-pointer transition-colors"
        >
          <Gem className="w-5 h-5 fill-[#1CB0F6] text-[#1CB0F6]" />
          <span>{gems}</span>
        </div>

        {/* XP */}
        <div
          title={`${totalXp} total XP`}
          className="flex items-center gap-1.5 font-black text-sm text-[#FFC800] px-2 py-1 rounded-xl hover:bg-amber-50 cursor-pointer transition-colors"
        >
          <Zap className="w-5 h-5 fill-[#FFC800] text-[#FFC800]" />
          <span>{totalXp} XP</span>
        </div>

        {/* Hearts */}
        <button
          onClick={onRefillClick}
          title={hearts < 5 ? 'Click to refill hearts' : '5 / 5 hearts remaining'}
          className={`flex items-center gap-1.5 font-black text-sm px-2.5 py-1 rounded-xl border-2 transition-all ${
            hearts <= 1
              ? 'text-[#FF4B4B] border-[#FF4B4B] bg-[#FFE5E5] animate-pulse'
              : 'text-[#FF4B4B] border-transparent hover:bg-red-50'
          }`}
        >
          <Heart className="w-5 h-5 fill-[#FF4B4B] text-[#FF4B4B]" />
          <span>{hearts}</span>
        </button>

        {/* Profile Avatar */}
        <Link href="/profile" className="ml-2">
          <div className="w-9 h-9 rounded-full bg-[#58CC02] border-2 border-[#46A302] flex items-center justify-center text-white font-extrabold text-sm shadow-[0_2px_0_#46A302] hover:scale-105 transition-transform">
            DL
          </div>
        </Link>
      </div>
    </header>
  );
};
