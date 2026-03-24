import React from 'react';

export default function TopInfoBar() {
  return (
    <div className="bg-white text-gray-700 py-6 border-b border-gray-100 font-sans text-sm text-center">
      <p className='text-[20px]'>
        Top performing AIF in{' '}
        <span className="text-brand-maroon font-bold pr-12">FY24</span> Gold & Silver Miners{' '}
        <span className="text-brand-maroon font-bold">Fund up ~100%</span> in 7 months
      </p>
    </div>
  );
}