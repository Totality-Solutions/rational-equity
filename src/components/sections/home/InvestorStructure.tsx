'use client';

import React from 'react';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';

const principles = [
  {
    id: 1,
    title: 'Impeccable Capital Allocation',
    description:
      'Agility and foresightedness to identify the prime asset class, market & product to provide the highest returns to you. We don\'t anchor to one market — we go where the opportunity is greatest.',
    quote: '"We allocate to the best opportunity, wherever it lives."',
  },
  {
    id: 2,
    title: 'High Skin in the Game',
    description:
      'We always begin funds by moving our own personal wealth into the same assets. So when we advise you to invest, it means we have already invested our own net worth in it. Our incentives are identical to yours.',
    quote: '"We only ask you to go where we\'ve already gone."',
  },
  {
    id: 3,
    title: 'Investor-Aligned Fee Structure',
    description:
      "We create structures which help us benefit only when you benefit. We aren't playing the fee game — we are in the compounding game. No fixed fees. No quarterly charges. Pure performance alignment.",
    quote: '"We make money only when you make money."',
  },
];

export default function InvestorStructure() {
  return (
    <section className="w-full py-12 bg-[#FAFAFA]">
      <Container className="max-w-[1216px] mx-auto px-4 space-y-16">

        <div className="mb-12">
        <AnimatedHeader
          title="An Investor-First Structure, by Design."
          highlight="Investor-First Structure"
          highlightColor="#9B0000"
          subheading="Three principles that shape every decision we make — from how we invest to how we get paid."
          variant="light"
          titleClassName="text-black  text-h3-mobile md:text-h3-tab lg:text-h3"
          subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg"
        />
        </div>

        {/* 3-Card Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {principles.map((item) => (
            <div
              key={item.id}
              className="relative bg-white border border-gray-100 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] px-8 py-10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] group"
            >
              {/* Distinct Maroon Border Accent Line on Top Grid Wrapper */}
              <div className="absolute top-0 left-0 right-0 h-[5px] bg-[#9B0000] w-full" />

              {/* Main Contents */}
              <div className="space-y-6 flex-1 flex flex-col">
                <h3 
                  className="text-h4-tab md:text-h4 leading-[38px] font-playfair text-gray-900 font-normal tracking-tight"
                >
                  {item.title}
                </h3>
                
                <p 
                  className="text-[14px] md:text-[15px] leading-relaxed text-gray-600 font-normal flex-grow"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.description}
                </p>
              </div>

              {/* Bottom Quote Layout Block */}
              <div className="mt-8 pt-6 border-t border-gray-300">
                <p 
                  className="text-[14px] md:text-[15px] italic text-gray-700 font-medium tracking-wide"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.quote}
                </p>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}