'use client';

import React from 'react';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import type { SanityAboutPage } from '@/sanity/queries';

const CARD_STYLES = [
  {
    borderColor: 'bg-brand-maroon',
    icon: (
      <svg className="w-8 h-8 text-[#9B0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    borderColor: 'bg-secondary-ylw',
    icon: (
      <svg className="w-8 h-8 text-[#9B0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    borderColor: 'bg-secondary-grn',
    icon: (
      <svg className="w-8 h-8 text-[#9B0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    borderColor: 'bg-secondary-blu',
    icon: (
      <svg className="w-8 h-8 text-[#9B0000]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const defaultPrinciples = [
  {
    title: 'Impeccable Capital Allocation',
    description:
      "Agility and foresightedness to identify the prime asset class, market & product to provide the highest returns to you. We don't anchor to one market — we go where the opportunity is greatest.",
    quote: `"We allocate to the best opportunity, wherever it lives."`,
  },
  {
    title: 'High Skin in the Game',
    description:
      'We always begin funds by moving our own personal wealth into the same assets. So when we advise you to invest, it means we have already invested our own net worth in it.',
    quote: `"We only ask you to go where we've already gone."`,
  },
  {
    title: 'Investor-Aligned Fee Structure',
    description:
      "We create structures which help us benefit only when you benefit. We aren't playing the fee game — we are in the compounding game. No fixed fees. No quarterly charges.",
    quote: `"We make money only when you make money."`,
  },
  {
    title: 'Global Perspective',
    description:
      "We track macro trends worldwide and move capital across borders when the opportunity demands it. From India's manufacturing renaissance to the global gold re-monetisation cycle.",
    quote: `"Borders are irrelevant. Opportunity is not."`,
  },
];

export default function InvestorStructure({ principlesFour }: { principlesFour?: SanityAboutPage['principlesFour'] }) {
  const heading = principlesFour?.heading || 'An Investor-first structure, by design.';
  const highlightText = principlesFour?.highlightText || 'Investor-first structure,';
  const subheading =
    principlesFour?.subheading || 'Four principles that shape every decision we make — from how we invest to how we get paid.';
  const principles = (
    principlesFour?.principles && principlesFour.principles.length > 0 ? principlesFour.principles : defaultPrinciples
  ).map((p, i) => ({ ...p, id: i + 1, ...CARD_STYLES[i % CARD_STYLES.length] }));

  return (
    <section className="w-full py-6 lg:pt-0 lg:pb-12 bg-white">
      <Container className="px-3 md:px-12">
        <div className='lg:px-20' >
          <div className="mb-6 lg:mb-12">
            <AnimatedHeader
              title={heading}
              highlight={highlightText}
              highlightColor="brand-maroon"
              subheading={subheading}
              variant="light"
              titleClassName="text-black text-h3-mobile md:text-h3-tab lg:text-h3"
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
                  // style={{ backgroundColor: item.borderColor }}
                />

                <div className="px-8 pt-10 pb-8 justify-between flex flex-col h-full">
                  <div> 
                    <div className="flex items-center gap-4 mb-6">
                      {item.icon}
                      <h3
                        className="text-xl md:text-2xl font-playfair text-gray-900"
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
