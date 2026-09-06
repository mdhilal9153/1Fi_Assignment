import React from 'react';
import { useLocation } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function MobileContainer({ children }) {
  const location = useLocation();
  // Hide bottom navigation on detail pages to display sticky product CTA
  const isDetailPage = location.pathname.startsWith('/marketplace/');

  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-brand-bg xl:bg-[#0D0B18] xl:items-center p-0 xl:p-6 transition-colors duration-200">
      {/* 
        Responsive Viewport System:
        - Mobile (<=480px): 100% full-width, full-height, authentic mobile view.
        - Tablet (481px–1279px): Proper tablet-scaled app filling screen (w-full max-w-2xl lg:max-w-3xl), no dark background, no shrunken frame.
        - Desktop (>=1280px): Centered phone frame preview on dark backdrop.
      */}
      <div className="w-full min-h-screen h-[100dvh] bg-brand-bg text-brand-text-dark relative flex flex-col overflow-hidden
        sm:max-w-xl md:max-w-2xl lg:max-w-3xl
        xl:w-[420px] xl:min-h-0 xl:h-[860px] xl:max-h-[92vh] xl:rounded-[36px] xl:shadow-[0_25px_70px_rgba(0,0,0,0.6)] xl:border xl:border-purple-950/40"
      >

        <div className={`flex-1 w-full overflow-y-auto no-scrollbar ${isDetailPage ? 'pb-24' : 'pb-24 md:pb-28'}`}>
          <main className="w-full">
            {children}
          </main>
        </div>


        {!isDetailPage && (
          <div className="absolute bottom-3.5 md:bottom-5 inset-x-0 mx-auto w-[92%] sm:max-w-[480px] md:max-w-[540px] xl:max-w-[380px] z-50 pointer-events-none flex justify-center">
            <div className="w-full pointer-events-auto">
              <BottomNav />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
