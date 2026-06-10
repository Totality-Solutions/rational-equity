'use client';

import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: 'light' | 'dark' | 'maroon-bg';
  primaryColor?: string;
  textColor?: string;
  className?: string;
  paddingClassName?: string; // 🔹 Added optional padding prop
  iconClassName?: string;
  iconSrc?: string;
  borderRadiusClassName?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  text,
  variant = 'light',
  primaryColor = "#9B0000",
  textColor = "#9B0000",
  className = "",
  paddingClassName = "px-3 md:px-3 py-3", // 🔹 Default padding
  iconClassName = "",
  iconSrc = "/images/arrowbtn.png",
  borderRadiusClassName = "rounded-full"
}) => {
  
  const isMaroonBg = variant === 'maroon-bg';

  return (
    <div className={`flex justify-center ${className}`}>
      <Link 
        href={href} 
        className={`${borderRadiusClassName} group flex items-stretch border border-brand-maroon overflow-hidden transition-all duration-500 w-full sm:w-auto hover:shadow-lg hover:shadow-brand-maroon-hover/27`}
      >
        {/* TEXT AREA */}
        <div 
          className={`flex-grow flex items-center justify-center transition-colors duration-300 ${paddingClassName}`}
          style={{ 
            backgroundColor: isMaroonBg ? primaryColor : (variant === 'dark' ? 'rgba(0,0,0,0.9)' : 'white'),
            color: isMaroonBg ? '#ffffff' : textColor 
          }}
        >
          <span className="font-sans font-medium text-cta-mobile tracking-cta md:text-cta whitespace-nowrap">
            {text}
          </span>
        </div>

        {/* ARROW BOX */}
        <div 
          className="relative flex-shrink-0 w-[50px] flex items-center justify-center border-l border-brand-maroon transition-colors duration-300"
          style={{ 
            backgroundColor: isMaroonBg ? 'white' : primaryColor 
          }}
        >
          <img 
            src={iconSrc} 
            alt="" 
            className={`
              w-4 md:w-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${!isMaroonBg ? 'brightness-0 invert' : 'brightness-0 invert-0'} 
              ${iconClassName}
            `}
          />
        </div>
      </Link>
    </div>
  );
};

export default CTAButton;