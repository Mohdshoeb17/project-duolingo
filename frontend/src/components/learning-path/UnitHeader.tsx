'use client';

import React from 'react';
import { BookOpen } from 'lucide-react';
import { UnitSummary } from '@/types';

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

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full max-w-xl mx-auto rounded-2xl p-5 text-white shadow-[0_6px_0_rgba(0,0,0,0.18)] mb-8 transition-transform hover:scale-[1.01]"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-black uppercase tracking-wider text-white/80">
            Unit {unit.unit_number}
          </div>
          <h2 className="text-2xl font-black tracking-tight mt-0.5">{unit.title}</h2>
          {unit.description && (
            <p className="text-sm font-semibold text-white/90 mt-1 max-w-md">
              {unit.description}
            </p>
          )}
        </div>
        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
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
