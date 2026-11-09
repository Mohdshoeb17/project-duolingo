'use client';

import React from 'react';
import { Volume2 } from 'lucide-react';
import { Exercise } from '@/types';
import { playAudio } from '@/lib/audio';

interface MultipleChoiceProps {
  exercise: Exercise;
  selectedAnswer: string;
  onSelect: (ans: string) => void;
  disabled?: boolean;
}

export const MultipleChoiceExercise: React.FC<MultipleChoiceProps> = ({
  exercise,
  selectedAnswer,
  onSelect,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto my-auto py-4">
      {/* Question prompt */}
      <h1 className="text-2xl sm:text-3xl font-black text-gray-800 text-left w-full mb-6">
        {exercise.prompt}
      </h1>

      {/* Target Word/Sentence card with Click-to-Play Audio */}
      {exercise.question_text && (
        <div
          onClick={() => playAudio(exercise.question_text || '')}
          className="w-full flex items-center gap-3 p-4 bg-gray-50 border-2 border-[#E5E5E5] rounded-2xl mb-8 cursor-pointer hover:bg-sky-50 transition-colors group"
        >
          <div className="p-2.5 bg-[#1CB0F6] text-white rounded-xl shadow-[0_3px_0_#1899D6] group-hover:scale-105 transition-transform">
            <Volume2 className="w-6 h-6" />
          </div>
          <span className="text-xl font-black text-gray-800">
            {exercise.question_text}
          </span>
          <span className="text-xs font-bold text-gray-400 ml-auto hidden sm:inline">Tap to listen</span>
        </div>
      )}

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {exercise.options?.map((option, idx) => {
          const isSelected = selectedAnswer === option;
          return (
            <button
              key={idx}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(option)}
              className={`flex items-center gap-4 p-4 rounded-2xl border-2 font-black text-base sm:text-lg transition-all text-left ${
                isSelected
                  ? 'border-[#1CB0F6] bg-[#DDF4FF] text-[#1CB0F6] shadow-[0_4px_0_#1CB0F6]'
                  : 'border-[#E5E5E5] bg-white text-gray-700 shadow-[0_4px_0_#E5E5E5] hover:bg-gray-50 active:translate-y-0.5'
              }`}
            >
              <span
                className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center text-xs font-black ${
                  isSelected
                    ? 'border-[#1CB0F6] bg-white text-[#1CB0F6]'
                    : 'border-[#E5E5E5] text-gray-400'
                }`}
              >
                {idx + 1}
              </span>
              <span className="flex-1">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
