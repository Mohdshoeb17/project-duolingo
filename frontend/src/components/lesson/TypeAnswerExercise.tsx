'use client';

import React, { useRef, useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import { Exercise } from '@/types';

interface TypeAnswerProps {
  exercise: Exercise;
  userAnswer: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}

export const TypeAnswerExercise: React.FC<TypeAnswerProps> = ({
  exercise,
  userAnswer,
  onChange,
  disabled = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled, exercise]);

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto my-auto py-4">
      <h1 className="text-2xl sm:text-3xl font-black text-gray-800 text-left w-full mb-6">
        {exercise.prompt || 'Write this in English'}
      </h1>

      {/* Target prompt */}
      {exercise.question_text && (
        <div className="w-full flex items-center gap-3 p-4 bg-gray-50 border-2 border-[#E5E5E5] rounded-2xl mb-8">
          <div className="p-2.5 bg-[#1CB0F6] text-white rounded-xl shadow-[0_3px_0_#1899D6]">
            <Volume2 className="w-6 h-6" />
          </div>
          <span className="text-xl font-black text-gray-800">
            {exercise.question_text}
          </span>
        </div>
      )}

      {/* Input Field with Duolingo styling */}
      <div className="w-full">
        <input
          ref={inputRef}
          type="text"
          value={userAnswer}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your answer here..."
          className="w-full p-4 rounded-2xl border-2 border-[#E5E5E5] focus:border-[#1CB0F6] outline-none text-xl font-bold text-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] transition-all placeholder:text-gray-400 placeholder:font-medium disabled:bg-gray-100"
        />
      </div>
    </div>
  );
};
