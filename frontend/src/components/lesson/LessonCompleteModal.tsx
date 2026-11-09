'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Zap, Target, Flame, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Mascot } from '../common/Mascot';

interface LessonCompleteModalProps {
  xpEarned: number;
  accuracy: number;
  streak: number;
  correctCount: number;
  totalQuestions: number;
}

export const LessonCompleteModal: React.FC<LessonCompleteModalProps> = ({
  xpEarned,
  accuracy,
  streak,
  correctCount,
  totalQuestions,
}) => {
  const router = useRouter();

  useEffect(() => {
    // Launch celebratory confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#58CC02', '#1CB0F6', '#FFC800', '#FF4B4B', '#CE82FF'],
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col justify-between items-center p-6 sm:p-12 animate-fade-in select-none">
      <div className="flex-1 flex flex-col items-center justify-center max-w-lg w-full text-center">
        {/* Mascot */}
        <Mascot mood="celebrate" size={150} className="mb-4" />

        <h1 className="text-3xl sm:text-4xl font-black text-[#58CC02] tracking-tight">
          Lesson Complete!
        </h1>
        <p className="text-gray-500 font-bold text-base mt-1">
          You are making incredible progress every single day.
        </p>

        {/* Stats Summary Cards */}
        <div className="grid grid-cols-3 gap-4 w-full mt-8">
          {/* XP Card */}
          <div className="p-4 rounded-2xl border-2 border-[#FFC800] bg-[#FFF9E5] flex flex-col items-center shadow-[0_4px_0_#FFC800]/20">
            <div className="text-xs font-black uppercase text-[#E5A500] tracking-wider mb-1 flex items-center gap-1">
              <Zap className="w-4 h-4 fill-[#FFC800]" />
              <span>TOTAL XP</span>
            </div>
            <span className="text-2xl font-black text-[#E5A500]">+{xpEarned}</span>
          </div>

          {/* Accuracy Card */}
          <div className="p-4 rounded-2xl border-2 border-[#58CC02] bg-[#EBFAD9] flex flex-col items-center shadow-[0_4px_0_#58CC02]/20">
            <div className="text-xs font-black uppercase text-[#58CC02] tracking-wider mb-1 flex items-center gap-1">
              <Target className="w-4 h-4" />
              <span>ACCURACY</span>
            </div>
            <span className="text-2xl font-black text-[#58CC02]">{accuracy}%</span>
          </div>

          {/* Streak Card */}
          <div className="p-4 rounded-2xl border-2 border-[#FF9600] bg-[#FFF2E5] flex flex-col items-center shadow-[0_4px_0_#FF9600]/20">
            <div className="text-xs font-black uppercase text-[#FF9600] tracking-wider mb-1 flex items-center gap-1">
              <Flame className="w-4 h-4 fill-[#FF9600]" />
              <span>STREAK</span>
            </div>
            <span className="text-2xl font-black text-[#FF9600]">{streak}</span>
          </div>
        </div>

        {/* Question accuracy details */}
        <div className="mt-6 text-sm font-bold text-gray-500">
          Answered {correctCount} out of {totalQuestions} exercises correctly
        </div>
      </div>

      {/* Footer continue action */}
      <div className="w-full max-w-lg pt-6 border-t-2 border-[#E5E5E5] flex justify-center">
        <button
          type="button"
          onClick={() => router.push('/')}
          className="w-full py-4 bg-[#58CC02] text-white rounded-2xl font-black text-lg uppercase tracking-wider shadow-[0_4px_0_#46A302] hover:bg-[#46A302] active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
        >
          <span>CONTINUE</span>
          <ArrowRight className="w-6 h-6 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
