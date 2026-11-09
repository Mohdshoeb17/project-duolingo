'use client';

import React from 'react';
import { BookOpen, Volume2 } from 'lucide-react';
import { UnitSummary } from '@/types';
import { playAudio } from '@/lib/audio';

interface UnitHeaderProps {
  unit: UnitSummary;
}

export const UnitHeader: React.FC<UnitHeaderProps> = ({ unit }) => {
  const bgColor = unit.color || '#58CC02';

  // Compute completed lessons in unit
  let completedCount = 0;
  let totalCount = 0;
  unit.skills.forEach((skill) => {
    skill.lessons.forEach((l) => {
      totalCount++;
      if (l.completed) completedCount++;
    });
  });

  const unitNum = unit.unit_number || unit.order_index || 1;

  // Key phrase to pronounce for this unit based on title or language
  const handlePlayUnitAudio = () => {
    const text = unit.title.toLowerCase();
    if (text.includes('hindi')) {
      playAudio('नमस्ते! आप कैसे हैं?');
    } else if (text.includes('tamil')) {
      playAudio('வணக்கம்! காலை வணக்கம்.');
    } else if (text.includes('telugu')) {
      playAudio('నమస్కారం! మీరు ఎలా ఉన్నారు?');
    } else if (text.includes('kannada')) {
      playAudio('ನಮಸ್ಕಾರ! ನೀವು ಹೇಗೆ ಇದ್ದೀರಾ?');
    } else if (text.includes('malayalam')) {
      playAudio('നമസ്കാരം! സുഖമാണോ?');
    } else if (text.includes('french')) {
      playAudio('Bonjour! Comment allez-vous?');
    } else if (text.includes('german')) {
      playAudio('Hallo! Guten Tag, wie geht es dir?');
    } else if (text.includes('japanese')) {
      playAudio('こんにちは！元気ですか？');
    } else if (text.includes('spanish')) {
      playAudio('¡Hola! ¿Cómo estás? Bienvenidos.');
    } else {
      playAudio('Hello! Welcome to this unit.');
    }
  };

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full max-w-xl mx-auto rounded-2xl p-5 text-white shadow-[0_6px_0_rgba(0,0,0,0.18)] mb-8 transition-transform hover:scale-[1.01]"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-black uppercase tracking-wider text-white/80">
            Unit {unitNum}
          </div>
          <h2 className="text-2xl font-black tracking-tight mt-0.5">{unit.title}</h2>
          {unit.description && (
            <p className="text-sm font-semibold text-white/90 mt-1 max-w-md">
              {unit.description}
            </p>
          )}

          {/* Audio Pronunciation Button on Unit Header */}
          <button
            type="button"
            onClick={handlePlayUnitAudio}
            title="Listen to pronunciation of key phrases in this language"
            className="flex items-center gap-2 px-3 py-1.5 mt-3.5 bg-white/20 hover:bg-white/30 active:scale-95 rounded-xl text-xs font-black text-white transition-all backdrop-blur-sm shadow-sm cursor-pointer"
          >
            <Volume2 className="w-4 h-4 stroke-[2.5]" />
            <span>Listen Pronunciation (ऑडियो सुनें)</span>
          </button>
        </div>
        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl shrink-0">
          <BookOpen className="w-6 h-6 stroke-[2.5]" />
        </div>
      </div>

      {/* Unit progress badge */}
      <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-extrabold">
        <span>Progress</span>
        <span>
          {completedCount} / {totalCount} lessons completed
        </span>
      </div>
    </div>
  );
};
