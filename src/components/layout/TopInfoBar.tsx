

import React from 'react';

export default function TopInfoBar() {
  return (
    <div className="bg-white text-gray-700 py-3 md:py-6 border-b border-gray-100 font-sans text-center px-4">
      <p className="text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed">
        Top performing AIF in{' '}
        <span className="text-brand-maroon font-bold mr-4 md:mr-12 inline-block">
          FY24
        </span> 
        <span className="inline-block">
          Gold & Silver Miners{' '}
          <span className="text-brand-maroon font-bold">Fund up ~100%</span> in 7 months
        </span>
      </p>
    </div>
  );
}