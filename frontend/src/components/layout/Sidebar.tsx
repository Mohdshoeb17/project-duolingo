'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  Dumbbell,
  Trophy,
  Target,
  ShoppingBag,
  User,
  Settings,
  Sparkles,
  X,
  Menu
} from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';

const navItems = [
  { label: 'Learn', href: '/', icon: Compass, activeColor: 'text-[#58CC02] border-[#58CC02] bg-[#E5F9D3]/40' },
  { label: 'Practice', href: '/practice', icon: Dumbbell, activeColor: 'text-[#1CB0F6] border-[#1CB0F6] bg-[#DDF4FF]/40' },
  { label: 'Leaderboard', href: '/leaderboard', icon: Trophy, activeColor: 'text-[#FFC800] border-[#FFC800] bg-[#FFF8D4]/40' },
  { label: 'Quests', href: '/quests', icon: Target, activeColor: 'text-[#CE82FF] border-[#CE82FF] bg-[#F5E8FF]/40' },
  { label: 'Shop', href: '/shop', icon: ShoppingBag, activeColor: 'text-[#FF4B4B] border-[#FF4B4B] bg-[#FFE5E5]/40' },
  { label: 'Profile', href: '/profile', icon: User, activeColor: 'text-[#1CB0F6] border-[#1CB0F6] bg-[#DDF4FF]/40' },
  { label: 'Settings', href: '/settings', icon: Settings, activeColor: 'text-[#777777] border-[#AFAFAF] bg-gray-100' },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { isOpen, closeSidebar, openSidebar } = useSidebar();

  // If in a lesson screen, hide the main sidebar for full immersive mode
  if (pathname.startsWith('/lesson/')) {
    return null;
  }

  return (
    <>
      {/* Floating Toggle Button when Sidebar is closed */}
      {!isOpen && (
        <button
          onClick={openSidebar}
          title="Open Menu"
          className="fixed left-4 top-4 z-50 p-2.5 bg-white border-2 border-[#E5E5E5] rounded-2xl shadow-md hover:bg-gray-50 active:translate-y-0.5 transition-all text-[#58CC02]"
        >
          <Menu className="w-6 h-6 stroke-[2.5]" />
        </button>
      )}

      {/* Main Sidebar with Close (X) button */}
      <aside
        className={`w-64 fixed left-0 top-0 bottom-0 border-r-2 border-[#E5E5E5] bg-white flex flex-col justify-between p-4 z-40 select-none transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Brand Logo & Cross Close Button */}
          <div className="flex items-center justify-between px-2 py-3 mb-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#58CC02] flex items-center justify-center text-white font-extrabold text-2xl shadow-[0_3px_0_#46A302]">
                D
              </div>
              <span className="text-2xl font-black tracking-tight text-[#58CC02]">
                duolingo
              </span>
            </Link>

            {/* Cross (X) Close Button */}
            <button
              onClick={closeSidebar}
              title="Close Menu"
              className="p-1.5 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 active:translate-y-0.5 transition-all"
            >
              <X className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Navigation list */}
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-4 px-4 py-3 rounded-2xl font-bold tracking-wide uppercase text-sm transition-all duration-150 border-2 ${
                    isActive
                      ? `${item.activeColor} shadow-[0_2px_0_rgba(0,0,0,0.06)]`
                      : 'text-[#777777] border-transparent hover:bg-gray-100 hover:text-gray-900 active:translate-y-0.5'
                  }`}
                >
                  <Icon className={`w-6 h-6 stroke-[2.5] ${isActive ? '' : 'text-[#AFAFAF]'}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Super Duolingo / Pro Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1CB0F6]/10 to-[#CE82FF]/15 border-2 border-[#1CB0F6]/30 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm font-black text-[#1CB0F6]">
            <Sparkles className="w-4 h-4 fill-[#1CB0F6]" />
            <span>SUPER DUO</span>
          </div>
          <p className="text-xs text-gray-600 font-semibold leading-relaxed">
            Unlimited hearts & personalized practice mistakes review!
          </p>
          <Link
            href="/shop"
            className="mt-1 w-full text-center py-2 bg-[#1CB0F6] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-[0_3px_0_#1899D6] hover:bg-[#1899D6] active:translate-y-0.5 transition-all"
          >
            Try Free
          </Link>
        </div>
      </aside>
    </>
  );
};
