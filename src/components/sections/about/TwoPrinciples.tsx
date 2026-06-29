'use client';

import React from 'react';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';

const principles = [
  {
    id: 1,
    title: 'Identify the Mega-Trend First',
    description:
      "Before picking a stock, we ask: which macro force is large enough to create multi-year tailwinds? We invest in the intersection of structural change and mispriced assets — India's manufacturing renaissance, global gold re-monetisation, volatility regimes.",
    quote: '"Trend identification is 80% of the work."',
    borderColor: 'bg-secondary-ylw',
    icon: (
      <svg className="w-8 h-8 text-[#9B0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Combine All Dimensions of Analysis',
    description:
      'We run fundamental, sentimental and technical analysis in parallel. A cheap stock that the market hates and is technically breaking down is a trap. We look for all three to align before committing capital.',
    quote: '"Conviction is earned, not assumed."',
    borderColor: 'bg-secondary-grn',
    icon: (
      <svg className="w-8 h-8 text-[#9B0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

export default function TwoPrinciples() {
  return (
    <section className="w-full pb-6 md:pb-12 bg-white">
          <Container className="px-3 md:px-12">
            <div className='lg:px-20' >
              <div className="mb-8">
                <AnimatedHeader
                  title="Two principles. One conviction."
                  highlight="One conviction."
                  highlightColor="brand-maroon"
                  variant="light"
                  titleClassName="text-black  text-h3-mobile md:text-h3-tab lg:text-h3"
                  subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg"
                />
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {principles.map((item) => (
                  <div
                    key={item.id}
                    className="relative bg-[#FAFAFA] rounded-xl overflow-hidden shadow-sm"
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-[4px] ${item.borderColor}`}
                    />
    
                    <div className="px-8 pt-10 pb-8 justify-between flex flex-col h-full">
                      <div> 
                        <div className="flex items-center gap-4 mb-6">
                          {item.icon}
                          <h3
                            className="text-xl md:text-2xl text-gray-900 font-playfair"
                          >
                            {item.title}
                          </h3>
                        </div>
    
                        <div>
                          <p
                            className="text-body-md-mobile md:text-body-md-tab lg:text-body-md text-gray-600 leading-relaxed mb-8 font-sans"
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
    
                      <div className="border-t border-gray-200 pt-2">
                        <p
                          className="text-body-mobile md:text-body-tab lg:text-body text-gray-500 font-sans"
                        >
                          {item.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
  );
}
