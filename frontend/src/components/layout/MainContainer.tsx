'use client';

import React from 'react';
import { useSidebar } from '@/context/SidebarContext';
import { usePathname } from 'next/navigation';

export const MainContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen } = useSidebar();
  const pathname = usePathname();

  const isLesson = pathname.startsWith('/lesson/');

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isLesson ? '' : isOpen ? 'md:ml-64' : 'ml-0'
      }`}
    >
      {children}
    </div>
  );
};
