

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string; 
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div 
      className={`
        max-w-8xl 
        mx-auto 
        w-full 
        px-6           /* Mobile Base (default) */
        md:px-12       /* Medium screens and up (Tablets) */
        lg:px-[170px]     /* Large screens and up (Desktop) */
        ${className}
      `}
    >
      {children}
    </div>
  );
}