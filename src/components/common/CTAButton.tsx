'use client';

import React from 'react';
import Link from 'next/link';

// 1. We must define EVERY prop here to satisfy TypeScript
interface CTAButtonProps {
  href: string;
  text: string;
  variant?: 'light' | 'dark' | 'maroon-bg';
  primaryColor?: string;   // FIXED: Added this
  textColor?: string;      // FIXED: Added this
  className?: string;
  iconClassName?: string;  // FIXED: Added this
  iconSrc?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  text,
  variant = 'light',
  primaryColor = "#800000",
  textColor = "#800000",
  className = "",
  iconClassName = "",
  iconSrc = "/images/arrowbtn.png"
}) => {
  
  const isMaroonBg = variant === 'maroon-bg';

  return (
    <div className={`flex justify-center ${className}`}>
      {/* 'group' is required for the arrow animation to trigger on button hover */}
      <Link 
        href={href} 
        className="group flex items-stretch border border-[#800000] overflow-hidden transition-all duration-500 hover:scale-82 w-full sm:w-auto"
      >
        {/* TEXT AREA */}
        <div 
          className="flex-grow px-8 md:px-12 py-4 flex items-center justify-center transition-colors duration-300"
          style={{ 
            backgroundColor: isMaroonBg ? primaryColor : (variant === 'dark' ? 'rgba(0,0,0,0.9)' : 'white'),
            color: isMaroonBg ? '#ffffff' : textColor 
          }}
        >
          <span className="font-sans font-bold text-[13px] md:text-[15px] uppercase tracking-[0.1em] whitespace-nowrap">
            {text}
          </span>
        </div>

        {/* ARROW BOX - This is where the "Zoom Out" animation happens */}
        <div 
          className="relative flex-shrink-0 w-[64px] flex items-center justify-center border-l border-[#800000] transition-colors duration-300"
          style={{ 
            backgroundColor: isMaroonBg ? 'white' : primaryColor 
          }}
        >
          <img 
            src={iconSrc} 
            alt="" 
            className={`
              w-4 md:w-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              /* THE ZOOM OUT LOGIC */
              group-hover:scale-95 group-hover:opacity-100
              ${!isMaroonBg ? 'brightness-0 invert' : ''} 
              ${iconClassName}
            `}
          />
        </div>
      </Link>
    </div>
  );
};

export default CTAButton;