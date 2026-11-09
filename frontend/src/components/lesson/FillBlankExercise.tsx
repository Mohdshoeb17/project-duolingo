'use client';

import React from 'react';
import { Volume2 } from 'lucide-react';
import { Exercise } from '@/types';
import { playAudio } from '@/lib/audio';

interface FillBlankProps {
  exercise: Exercise;
  selectedOption: string;
  onSelect: (option: string) => void;
  disabled?: boolean;
}

export const FillBlankExercise: React.FC<FillBlankProps> = ({
  exercise,
  selectedOption,
  onSelect,
  disabled = false,
}) => {
  // Split question text on placeholder like ___ or _____
  const rawText = exercise.question_text || exercise.prompt || '';
  const parts = rawText.split(/_{2,}/);

  const handleSpeak = () => {
    const fullSentence = parts.join(selectedOption || '...');
    playAudio(fullSentence);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto my-auto py-4">
      <h1 className="text-2xl sm:text-3xl font-black text-gray-800 text-left w-full mb-6">
        {exercise.prompt || 'Fill in the blank'}
      </h1>

      {/* Target prompt audio card */}
      <div
        onClick={handleSpeak}
        className="w-full flex items-center gap-3 p-3.5 bg-gray-50 border-2 border-[#E5E5E5] rounded-2xl mb-6 cursor-pointer hover:bg-sky-50 transition-colors group"
      >
        <div className="p-2.5 bg-[#1CB0F6] text-white rounded-xl shadow-[0_3px_0_#1899D6] group-hover:scale-105 transition-transform">
          <Volume2 className="w-5 h-5" />
        </div>
        <span className="text-base font-bold text-gray-700">
          Listen to Sentence
        </span>
        <span className="text-xs font-bold text-gray-400 ml-auto hidden sm:inline">Tap to listen</span>
      </div>

      {/* Sentence with blank slot */}
      <div className="w-full flex items-center justify-center gap-3 p-6 bg-gray-50 border-2 border-[#E5E5E5] rounded-2xl mb-10 text-2xl font-black text-gray-800">
        <span>{parts[0]}</span>
        <div className="min-w-[100px] h-12 border-b-4 border-dashed border-[#1CB0F6] flex items-center justify-center px-4 bg-white rounded-xl shadow-sm">
          {selectedOption ? (
            <span className="text-[#1CB0F6] font-black">{selectedOption}</span>
          ) : (
            <span className="text-gray-300 font-normal text-sm">blank</span>
          )}
        </div>
        <span>{parts[1] || ''}</span>
      </div>

      {/* Options */}
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {exercise.options?.map((option, idx) => {
          const isSelected = selectedOption === option;

          return (
            <button
              key={idx}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(option)}
              className={`px-6 py-3.5 rounded-2xl border-2 font-black text-lg transition-all ${
                isSelected
                  ? 'border-[#1CB0F6] bg-[#DDF4FF] text-[#1CB0F6] shadow-[0_4px_0_#1CB0F6]'
                  : 'border-[#E5E5E5] bg-white text-gray-700 shadow-[0_4px_0_#E5E5E5] hover:bg-gray-50 active:translate-y-0.5'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};
