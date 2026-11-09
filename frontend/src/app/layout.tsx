import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { Sidebar } from '@/components/layout/Sidebar';
import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { MainContainer } from '@/components/layout/MainContainer';

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
      <body className="font-sans antialiased bg-[#FFFFFF] dark:bg-[#131F24] text-gray-900 dark:text-gray-100 selection:bg-[#58CC02] selection:text-white transition-colors">
        <ThemeProvider>
          <SidebarProvider>
            <Suspense fallback={null}>
              <Sidebar />
              <MainContainer>{children}</MainContainer>
            </Suspense>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
