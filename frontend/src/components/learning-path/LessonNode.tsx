'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Star, Lock } from 'lucide-react';
import { LessonSummary } from '@/types';

interface LessonNodeProps {
  lesson: LessonSummary;
  index: number;
  offset: number; // horizontal displacement to create wavy duolingo path
}

export const LessonNode: React.FC<LessonNodeProps> = ({ lesson, offset }) => {
  const isCompleted = lesson.completed;
  const isLocked = lesson.locked;
  const isCurrent = !isCompleted && !isLocked;

  // Background, border, and shadow styles matching Duolingo 3D button feel
  let buttonStyle = 'bg-[#E5E5E5] text-[#AFAFAF] shadow-[0_8px_0_#CECECE] border-[#CECECE] cursor-not-allowed';
  let icon = <Lock className="w-7 h-7 stroke-[2.5]" />;

  if (isCompleted) {
    buttonStyle = 'bg-[#FFC800] text-white shadow-[0_8px_0_#E5A500] border-[#E5A500] hover:brightness-105 active:translate-y-1 active:shadow-[0_4px_0_#E5A500]';
    icon = <Check className="w-8 h-8 stroke-[3.5]" />;
  } else if (isCurrent) {
    buttonStyle = 'bg-[#58CC02] text-white shadow-[0_8px_0_#46A302] border-[#46A302] hover:brightness-105 active:translate-y-1 active:shadow-[0_4px_0_#46A302] animate-bounce-slow';
    icon = <Star className="w-8 h-8 fill-white stroke-[2.5]" />;
  }

  const content = (
    <div
      className="relative flex flex-col items-center group my-5 transition-transform"
      style={{ transform: `translateX(${offset}px)` }}
    >
      {/* Current Lesson START Speech Bubble */}
      {isCurrent && (
        <div className="absolute -top-11 z-20 bg-white border-2 border-[#E5E5E5] px-3 py-1 rounded-xl shadow-md text-xs font-black uppercase tracking-wider text-[#58CC02] flex items-center gap-1 animate-pulse">
          <span>START</span>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
        </div>
      )}

      {/* 3D Circular Lesson Button */}
      <div
        className={`w-20 h-20 rounded-full flex items-center justify-center border-b-4 transition-all duration-150 select-none ${buttonStyle}`}
      >
        {icon}
      </div>

      {/* Tooltip on hover */}
      <div className="absolute top-full mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-30 bg-[#4B4B4B] text-white text-xs font-bold py-1.5 px-3 rounded-xl whitespace-nowrap shadow-lg">
        {lesson.title} • {lesson.total_xp} XP {isCompleted && '✓ Completed'} {isLocked && '🔒 Locked'}
      </div>
    </div>
  );

  if (isLocked) {
    return <div className="cursor-not-allowed">{content}</div>;
  }

  return (
    <Link href={`/lesson/${lesson.id}`} className="outline-none">
      {content}
    </Link>
  );
};
