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
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  text,
  variant = 'light',
  primaryColor = "#7B0000",
  textColor = "#7B0000",
  className = "",
  paddingClassName = "px-4 py-2", // 🔹 Default padding
  iconClassName = "",
  iconSrc = "/images/arrowbtn.png",
  borderRadiusClassName = "rounded-full",
  onClick
}) => {
  
  const isMaroonBg = variant === 'maroon-bg';

  return (
    <div className={`flex justify-center ${className}`}>
      <Link
        href={href}
        className={`${borderRadiusClassName} group flex items-stretch border-2 border-brand-maroon overflow-hidden transition-all duration-500 w-full sm:w-auto hover:shadow-lg hover:shadow-brand-maroon-hover/27`}
        onClick={(e) => {
          // A supplied onClick (e.g. opening a modal) replaces navigation instead of racing it.
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
      >
        {/* TEXT AREA */}
        <div 
          className={`flex-grow flex items-center justify-center transition-colors duration-300 ${paddingClassName}`}
          style={{ 
            backgroundColor: isMaroonBg ? primaryColor : (variant === 'dark' ? 'rgba(0,0,0,0.9)' : 'white'),
            color: isMaroonBg ? '#ffffff' : textColor 
          }}
        >
          <span className="font-sans font-medium text-cta-mobile tracking-cta md:text-cta capitalize whitespace-nowrap">
            {text}
          </span>
        </div>

        {/* ARROW BOX */}
        <div 
          className="relative flex-shrink-0 w-[64px] flex items-center justify-center border-l border-brand-maroon transition-colors duration-300"
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