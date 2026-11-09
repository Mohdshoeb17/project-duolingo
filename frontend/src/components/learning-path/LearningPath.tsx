'use client';

import React from 'react';
import { UnitSummary, LessonSummary } from '@/types';
import { UnitHeader } from './UnitHeader';
import { LessonNode } from './LessonNode';

interface LearningPathProps {
  units: UnitSummary[];
}

// Sine wave offsets to give the iconic vertical zigzag Duolingo path
const OFFSET_PATTERN = [0, -50, -80, -50, 0, 50, 80, 50];

export const LearningPath: React.FC<LearningPathProps> = ({ units }) => {
  let globalLessonIdx = 0;

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto py-6">
      {units.map((unit) => {
        // Collect all lessons in this unit sequentially
        const lessonsInUnit: LessonSummary[] = [];
        unit.skills.forEach((skill) => {
          skill.lessons.forEach((lesson) => {
            lessonsInUnit.push(lesson);
          });
        });

        return (
          <div key={unit.id} className="w-full flex flex-col items-center mb-12">
            {/* Unit banner */}
            <UnitHeader unit={unit} />

            {/* Wavy path nodes */}
            <div className="flex flex-col items-center relative w-full">
              {lessonsInUnit.map((lesson) => {
                const offset = OFFSET_PATTERN[globalLessonIdx % OFFSET_PATTERN.length];
                const nodeComponent = (
                  <LessonNode
                    key={lesson.id}
                    lesson={lesson}
                    index={globalLessonIdx}
                    offset={offset}
                  />
                );
                globalLessonIdx++;
                return nodeComponent;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
