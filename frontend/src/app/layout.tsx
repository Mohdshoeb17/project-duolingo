import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { Sidebar } from '@/components/layout/Sidebar';

export const metadata: Metadata = {
  title: 'Duolingo Clone - Master Spanish with Engaging Lessons',
  description: 'A modern, full-featured Duolingo-inspired language learning platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#FFFFFF] text-gray-900 selection:bg-[#58CC02] selection:text-white">
        <Suspense fallback={null}>
          <Sidebar />
        </Suspense>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
