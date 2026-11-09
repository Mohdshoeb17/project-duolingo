'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame, Zap, Heart, Gem, ChevronDown, Check, Menu } from 'lucide-react';
import { UserStats } from '@/types';
import { useSidebar } from '@/context/SidebarContext';

export interface CourseOption {
  id: number;
  title: string;
  target_language: string;
  flag: string;
}

export const ALL_DEFAULT_COURSES: CourseOption[] = [
  { id: 1, title: 'Spanish for English Speakers', target_language: 'Spanish', flag: '🇪🇸' },
  { id: 2, title: 'French for English Speakers', target_language: 'French', flag: '🇫🇷' },
  { id: 3, title: 'German for English Speakers', target_language: 'German', flag: '🇩🇪' },
  { id: 4, title: 'Japanese for English Speakers', target_language: 'Japanese', flag: '🇯🇵' },
  { id: 10, title: 'Hindi for English Speakers', target_language: 'Hindi', flag: '🇮🇳' },
  { id: 11, title: 'Tamil for English Speakers', target_language: 'Tamil', flag: '🇮🇳' },
  { id: 12, title: 'Telugu for English Speakers', target_language: 'Telugu', flag: '🇮🇳' },
  { id: 13, title: 'Kannada for English Speakers', target_language: 'Kannada', flag: '🇮🇳' },
  { id: 14, title: 'Malayalam for English Speakers', target_language: 'Malayalam', flag: '🇮🇳' },
  { id: 15, title: 'English for Hindi Speakers', target_language: 'English', flag: '🇬🇧' },
];

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
  courses = ALL_DEFAULT_COURSES,
  currentCourseId = 1,
  onSelectCourse,
}) => {
  const pathname = usePathname();
  const { isOpen, openSidebar } = useSidebar();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // If inside lesson player, the player renders its own header
  if (pathname.startsWith('/lesson/')) {
    return null;
  }

  // Ensure all 10 courses are present even if backend API returns a subset
  const mergedCourses = [...(courses && courses.length > 0 ? courses : ALL_DEFAULT_COURSES)];
  for (const def of ALL_DEFAULT_COURSES) {
    if (!mergedCourses.some((c) => c.id === def.id || c.target_language.toLowerCase() === def.target_language.toLowerCase())) {
      mergedCourses.push(def);
    }
  }

  const streak = stats?.current_streak ?? 0;
  const totalXp = stats?.total_xp ?? 0;
  const hearts = stats?.hearts ?? 5;
  const gems = stats?.gems ?? 100;

  const currentCourse = mergedCourses.find((c) => c.id === currentCourseId) || mergedCourses[0];

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
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b-2 border-[#E5E5E5] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3 select-none">
      {/* Left side: Hamburger Button (when sidebar closed) + Language Selector */}
      <div className="flex items-center gap-2.5">
        {/* Menu Toggle button inside header when sidebar is closed */}
        {!isOpen && (
          <button
            onClick={openSidebar}
            title="Open Navigation Menu"
            className="p-2 rounded-xl border-2 border-[#E5E5E5] text-gray-600 hover:text-[#58CC02] hover:border-[#58CC02] hover:bg-[#E5F9D3]/40 active:translate-y-0.5 transition-all flex items-center justify-center shrink-0"
          >
            <Menu className="w-5 h-5 stroke-[2.5]" />
          </button>
        )}

        {/* Active Course / Language selector Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-[#E5E5E5] hover:bg-gray-50 active:translate-y-0.5 transition-all outline-none"
          >
            <span className="text-xl sm:text-2xl" role="img" aria-label={currentCourse.target_language}>
              {currentCourse.flag}
            </span>
            <span className="font-extrabold text-xs sm:text-sm text-gray-700 tracking-wide uppercase">
              {currentCourse.target_language}
            </span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 top-full mt-2 w-64 max-h-80 overflow-y-auto bg-white border-2 border-[#E5E5E5] rounded-2xl shadow-xl p-2 z-50 flex flex-col gap-1 animate-fade-in divide-y divide-gray-100">
              <div className="text-[11px] font-black uppercase text-gray-400 px-3 py-1 tracking-wider sticky top-0 bg-white/95 backdrop-blur-sm z-10">
                Choose Language ({mergedCourses.length})
              </div>
              <div className="pt-1 flex flex-col gap-1">
                {mergedCourses.map((course) => {
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
                        <div>
                          <div className="text-sm leading-tight">{course.target_language}</div>
                          <div className="text-[11px] font-normal text-gray-400 leading-none">{course.title.split(' for ')[0]}</div>
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right side: Gamification Stats pill cluster (Fully Responsive) */}
      <div className="flex items-center gap-1.5 sm:gap-3 md:gap-5">
        {/* Streak */}
        <div
          title={`${streak} day streak`}
          className="flex items-center gap-1 font-black text-xs sm:text-sm text-[#FF9600] px-1.5 sm:px-2 py-1 rounded-xl hover:bg-orange-50 cursor-pointer transition-colors"
        >
          <Flame className="w-5 h-5 sm:w-6 sm:h-6 fill-[#FF9600] text-[#FF9600]" />
          <span>{streak}</span>
        </div>

        {/* Gems */}
        <div
          title={`${gems} gems`}
          className="flex items-center gap-1 font-black text-xs sm:text-sm text-[#1CB0F6] px-1.5 sm:px-2 py-1 rounded-xl hover:bg-sky-50 cursor-pointer transition-colors"
        >
          <Gem className="w-4 h-4 sm:w-5 sm:h-5 fill-[#1CB0F6] text-[#1CB0F6]" />
          <span>{gems}</span>
        </div>

        {/* XP */}
        <div
          title={`${totalXp} total XP`}
          className="flex items-center gap-1 font-black text-xs sm:text-sm text-[#FFC800] px-1.5 sm:px-2 py-1 rounded-xl hover:bg-amber-50 cursor-pointer transition-colors"
        >
          <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFC800] text-[#FFC800]" />
          <span>{totalXp} <span className="hidden sm:inline">XP</span></span>
        </div>

        {/* Hearts */}
        <button
          onClick={onRefillClick}
          title={hearts < 5 ? 'Click to refill hearts' : '5 / 5 hearts remaining'}
          className={`flex items-center gap-1 font-black text-xs sm:text-sm px-2 sm:px-2.5 py-1 rounded-xl border-2 transition-all ${
            hearts <= 1
              ? 'text-[#FF4B4B] border-[#FF4B4B] bg-[#FFE5E5] animate-pulse'
              : 'text-[#FF4B4B] border-transparent hover:bg-red-50'
          }`}
        >
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FF4B4B] text-[#FF4B4B]" />
          <span>{hearts}</span>
        </button>

        {/* Profile Avatar */}
        <Link href="/profile" className="ml-1 sm:ml-2">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#58CC02] border-2 border-[#46A302] flex items-center justify-center text-white font-extrabold text-xs sm:text-sm shadow-[0_2px_0_#46A302] hover:scale-105 transition-transform">
            DL
          </div>
        </Link>
      </div>
    </header>
  );
};
