import React from 'react';
import type { SanityBannerSegment } from '@/sanity/queries';

const defaultSegments: SanityBannerSegment[] = [
  { text: 'Top performing AIF in', highlighted: false },
  { text: 'FY24', highlighted: true },
  { text: 'Gold & Silver Miners', highlighted: false },
  { text: 'Fund up ~100%', highlighted: true },
  { text: 'in 7 months', highlighted: false },
];

export default function TopInfoBar({ segments }: { segments?: SanityBannerSegment[] | null }) {
  const resolvedSegments = segments && segments.length > 0 ? segments : defaultSegments;

  return (
    <div className="bg-white text-[#000000]/50 py-3 md:py-6 border-b border-gray-100 font-sans text-sm text-center">
      <p className='text-body-xs-mobile md:text-body-md-tab lg:text-body-md'>
        {resolvedSegments.map((segment, i) => (
          <React.Fragment key={i}>
            {i > 0 && ' '}
            <span className={segment.highlighted ? 'text-brand-maroon font-normal' : undefined}>
              {segment.text}
            </span>
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}
