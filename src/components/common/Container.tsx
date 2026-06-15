

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string; 
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div 
      className={`
        max-w-[1440px] 
        mx-auto 
        w-full 
        px-6           /* Mobile Base (default) */
        md:px-16
        2xl:px-0       /* Medium screens and up (Tablets) */
        ${className}
      `}
    >
      {children}
    </div>
  );
}