'use client';

import React from 'react';
import { Volume2 } from 'lucide-react';
import { Exercise } from '@/types';

interface WordBankProps {
  exercise: Exercise;
  selectedWords: string[];
  onWordClick: (word: string, index: number, isSelected: boolean) => void;
  disabled?: boolean;
}

export const WordBankExercise: React.FC<WordBankProps> = ({
  exercise,
  selectedWords,
  onWordClick,
  disabled = false,
}) => {
  // Available words are the options provided
  const availablePool = exercise.options || [];

  // Track which instance of an option has been used
  const usedIndices = new Set<number>();
  selectedWords.forEach((word) => {
    const idx = availablePool.findIndex((w, i) => w === word && !usedIndices.has(i));
    if (idx !== -1) usedIndices.add(idx);
  });

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto my-auto py-4">
      {/* Title Prompt */}
      <h1 className="text-2xl sm:text-3xl font-black text-gray-800 text-left w-full mb-6">
        {exercise.prompt}
      </h1>

      {/* Target prompt sentence */}
      {exercise.question_text && (
        <div className="w-full flex items-center gap-3 p-4 bg-gray-50 border-2 border-[#E5E5E5] rounded-2xl mb-6">
          <div className="p-2.5 bg-[#1CB0F6] text-white rounded-xl shadow-[0_3px_0_#1899D6]">
            <Volume2 className="w-6 h-6" />
          </div>
          <span className="text-xl font-black text-gray-800">
            {exercise.question_text}
          </span>
        </div>
      )}

      {/* Answer Slot Area (Selected Words) */}
      <div className="w-full min-h-[90px] border-b-2 border-t-2 border-[#E5E5E5] py-4 flex flex-wrap gap-2.5 items-center mb-8 bg-[#FBFBFB]/50 px-2 rounded-xl">
        {selectedWords.length === 0 ? (
          <span className="text-sm font-bold text-gray-400 select-none px-2">
            Tap words from the bank below to form the sentence...
          </span>
        ) : (
          selectedWords.map((word, idx) => (
            <button
              key={`selected-${word}-${idx}`}
              type="button"
              disabled={disabled}
              onClick={() => onWordClick(word, idx, true)}
              className="px-4 py-2.5 bg-white border-2 border-[#E5E5E5] shadow-[0_3px_0_#CECECE] rounded-xl text-base font-black text-gray-800 hover:bg-red-50 hover:border-red-200 active:translate-y-0.5 transition-all"
            >
              {word}
            </button>
          ))
        )}
      </div>

      {/* Available Word Bank */}
      <div className="flex flex-wrap justify-center gap-2.5 w-full">
        {availablePool.map((word, idx) => {
          const isUsed = usedIndices.has(idx);

          return (
            <div key={`pool-${word}-${idx}`} className="relative">
              {/* Ghost shadow block behind when button is selected */}
              {isUsed && (
                <div className="px-4 py-2.5 rounded-xl bg-gray-200 border-2 border-transparent text-transparent font-black select-none">
                  {word}
                </div>
              )}

              {!isUsed && (
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => onWordClick(word, idx, false)}
                  className="px-4 py-2.5 bg-white border-2 border-[#E5E5E5] shadow-[0_4px_0_#E5E5E5] rounded-xl text-base font-black text-gray-800 hover:bg-gray-50 active:translate-y-0.5 transition-all"
                >
                  {word}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
