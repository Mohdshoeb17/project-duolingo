'use client';

import React from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface FeedbackPanelProps {
  isCorrect: boolean;
  correctAnswer: string;
  explanation?: string;
  onContinue: () => void;
}

export const FeedbackPanel: React.FC<FeedbackPanelProps> = ({
  isCorrect,
  correctAnswer,
  explanation,
  onContinue,
}) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 py-6 px-6 sm:px-12 border-t-2 z-50 transition-all duration-200 animate-slide-up ${
        isCorrect
          ? 'bg-[#D7FFB8] border-[#58CC02]/40 text-[#58CC02]'
          : 'bg-[#FFDFE0] border-[#FF4B4B]/40 text-[#FF4B4B]'
      }`}
    >
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left message & explanation */}
        <div className="flex items-start gap-4 w-full sm:w-auto">
          <div className="mt-1">
            {isCorrect ? (
              <CheckCircle2 className="w-9 h-9 fill-[#58CC02] text-white" />
            ) : (
              <XCircle className="w-9 h-9 fill-[#FF4B4B] text-white" />
            )}
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black">
              {isCorrect ? 'Nicely done!' : 'Correct solution:'}
            </h3>
            {!isCorrect && (
              <p className="text-gray-800 font-extrabold text-base sm:text-lg mt-0.5">
                {correctAnswer}
              </p>
            )}
            {explanation && (
              <p className="text-gray-600 text-xs sm:text-sm font-bold mt-1">
                {explanation}
              </p>
            )}
          </div>
        </div>

        {/* Continue Button */}
        <button
          type="button"
          onClick={onContinue}
          className={`w-full sm:w-auto px-10 py-3.5 rounded-2xl font-black text-base uppercase tracking-wider text-white shadow-[0_4px_0_rgba(0,0,0,0.15)] active:translate-y-0.5 transition-all flex items-center justify-center gap-2 ${
            isCorrect
              ? 'bg-[#58CC02] shadow-[0_4px_0_#46A302] hover:bg-[#46A302]'
              : 'bg-[#FF4B4B] shadow-[0_4px_0_#EA2B2B] hover:bg-[#EA2B2B]'
          }`}
        >
          <span>Continue</span>
          <ArrowRight className="w-5 h-5 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
