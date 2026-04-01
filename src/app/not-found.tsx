import React from 'react';
import CTAButton from '@/components/common/CTAButton';

export default function NotFound() {
  return (
    <main className="relative w-full bg-white flex flex-col items-center justify-center pt-16 gap-10 overflow-hidden">
      
      {/* 1. CONTENT LAYER */}
      <div className="relative z-20 px-8 md:px-24">
        <div className="max-w-2xl font-sans text-center">
          <p className="text-zinc-500 text-lg md:text-xl font-normal leading-relaxed">
            The link may be outdated or the page may have been removed.
          </p>
          <p className="text-zinc-500 text-lg md:text-xl font-normal mb-8">
            Let's help you <span className="text-[#800000] font-semibold">Get Back</span> on track.
          </p>

          <div className="flex justify-center">
            <CTAButton 
              href="/" 
              text="Explore Our Funds" 
              variant="maroon-bg" 
              className="px-0 justify-start" 
              iconClassName="invert"
            />
          </div>
        </div>
      </div>

      {/* 2. DYNAMIC SPACER - Fixed gap based on your requirements */}
      {/* <div className="min-h-[100px] md:min-h-[300px] w-full" /> */}

      {/* 3. IMAGE LAYER */}
      <div className="relative w-full select-none z-0 px-4 md:px-0 ">
        <img 
          src="/images/404.png" 
          alt="404 Error Background" 
          className="w-full h-auto object-contain object-left-bottom block "
          style={{ 
            maxHeight: '55vh',
            transform: 'translateY(5px)' // Subtle extra shift down
          }}
        />
      </div>

    </main>
  );
}