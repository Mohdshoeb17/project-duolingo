'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { HeartCrack, RotateCcw, Home } from 'lucide-react';
import { Mascot } from '../common/Mascot';

interface OutOfHeartsModalProps {
  onRefill: () => void;
}

export const OutOfHeartsModal: React.FC<OutOfHeartsModalProps> = ({ onRefill }) => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in select-none">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl border-2 border-[#E5E5E5]">
        {/* Sad Mascot */}
        <Mascot mood="sad" size={130} className="mb-4" />

        <div className="p-3 rounded-full bg-[#FFE5E5] text-[#FF4B4B] mb-2">
          <HeartCrack className="w-8 h-8 fill-[#FF4B4B]" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-gray-800">
          You ran out of hearts!
        </h2>
        <p className="text-sm font-semibold text-gray-500 mt-2 leading-relaxed">
          Keep your mistakes in check or refill your hearts instantly to keep practicing.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 w-full mt-8">
          <button
            type="button"
            onClick={onRefill}
            className="w-full py-4 bg-[#1CB0F6] text-white rounded-2xl font-black text-base uppercase tracking-wider shadow-[0_4px_0_#1899D6] hover:bg-[#1899D6] active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5 stroke-[2.5]" />
            <span>Refill Hearts (Practice)</span>
          </button>

          <button
            type="button"
            onClick={() => router.push('/')}
            className="w-full py-3.5 bg-white border-2 border-[#E5E5E5] text-gray-600 rounded-2xl font-black text-base uppercase tracking-wider shadow-[0_4px_0_#CECECE] hover:bg-gray-50 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5 stroke-[2.5]" />
            <span>Quit to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
