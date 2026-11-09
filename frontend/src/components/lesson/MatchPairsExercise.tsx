'use client';

import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import { Exercise } from '@/types';
import { playAudio } from '@/lib/audio';

interface MatchPairsProps {
  exercise: Exercise;
  onMatchedAll: () => void;
  disabled?: boolean;
}

interface TileItem {
  id: string;
  text: string;
  lang: 'left' | 'right';
  matchedKey: string;
}

export const MatchPairsExercise: React.FC<MatchPairsProps> = ({
  exercise,
  onMatchedAll,
  disabled = false,
}) => {
  const pairs = exercise.pairs || {};
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [wrongPair, setWrongPair] = useState<{ left: string; right: string } | null>(null);

  const leftItems = Object.keys(pairs);
  const [shuffledRight, setShuffledRight] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle right items once on mount
    const rights = Object.values(pairs);
    setShuffledRight([...rights].sort(() => Math.random() - 0.5));
    setMatchedPairs(new Set());
    setSelectedLeft(null);
    setSelectedRight(null);
  }, [exercise]);

  // Handle checking match
  const checkMatch = (left: string, right: string) => {
    playAudio(left);
    if (pairs[left] === right) {
      // Correct Match
      const nextMatched = new Set(matchedPairs);
      nextMatched.add(left);
      setMatchedPairs(nextMatched);
      setSelectedLeft(null);
      setSelectedRight(null);

      if (nextMatched.size === leftItems.length) {
        onMatchedAll();
      }
    } else {
      // Incorrect Match feedback
      setWrongPair({ left, right });
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 700);
    }
  };

  const handleLeftClick = (item: string) => {
    if (disabled || matchedPairs.has(item)) return;
    playAudio(item);
    if (selectedRight) {
      checkMatch(item, selectedRight);
    } else {
      setSelectedLeft(item);
    }
  };

  const handleRightClick = (item: string) => {
    if (disabled) return;
    // Check if right item is already matched
    const isMatched = Object.entries(pairs).some(
      ([l, r]) => r === item && matchedPairs.has(l)
    );
    if (isMatched) return;

    playAudio(item);
    if (selectedLeft) {
      checkMatch(selectedLeft, item);
    } else {
      setSelectedRight(item);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto my-auto py-4">
      <h1 className="text-2xl sm:text-3xl font-black text-gray-800 text-left w-full mb-6">
        {exercise.prompt || 'Tap the matching pairs'}
      </h1>

      <div className="grid grid-cols-2 gap-4 w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          {leftItems.map((item) => {
            const isMatched = matchedPairs.has(item);
            const isSelected = selectedLeft === item;
            const isWrong = wrongPair?.left === item;

            let tileStyle =
              'border-[#E5E5E5] bg-white text-gray-800 shadow-[0_4px_0_#E5E5E5] hover:bg-gray-50';

            if (isMatched) {
              tileStyle =
                'border-transparent bg-gray-100 text-gray-300 shadow-none cursor-default opacity-50';
            } else if (isWrong) {
              tileStyle =
                'border-[#FF4B4B] bg-[#FFE5E5] text-[#FF4B4B] shadow-[0_4px_0_#FF4B4B] animate-shake';
            } else if (isSelected) {
              tileStyle =
                'border-[#1CB0F6] bg-[#DDF4FF] text-[#1CB0F6] shadow-[0_4px_0_#1CB0F6]';
            }

            return (
              <button
                key={`left-${item}`}
                type="button"
                disabled={disabled || isMatched}
                onClick={() => handleLeftClick(item)}
                className={`p-4 rounded-2xl border-2 font-black text-base transition-all select-none text-center ${tileStyle}`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3">
          {shuffledRight.map((item) => {
            const isMatched = Object.entries(pairs).some(
              ([l, r]) => r === item && matchedPairs.has(l)
            );
            const isSelected = selectedRight === item;
            const isWrong = wrongPair?.right === item;

            let tileStyle =
              'border-[#E5E5E5] bg-white text-gray-800 shadow-[0_4px_0_#E5E5E5] hover:bg-gray-50';

            if (isMatched) {
              tileStyle =
                'border-transparent bg-gray-100 text-gray-300 shadow-none cursor-default opacity-50';
            } else if (isWrong) {
              tileStyle =
                'border-[#FF4B4B] bg-[#FFE5E5] text-[#FF4B4B] shadow-[0_4px_0_#FF4B4B] animate-shake';
            } else if (isSelected) {
              tileStyle =
                'border-[#1CB0F6] bg-[#DDF4FF] text-[#1CB0F6] shadow-[0_4px_0_#1CB0F6]';
            }

            return (
              <button
                key={`right-${item}`}
                type="button"
                disabled={disabled || isMatched}
                onClick={() => handleRightClick(item)}
                className={`p-4 rounded-2xl border-2 font-black text-base transition-all select-none text-center ${tileStyle}`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
