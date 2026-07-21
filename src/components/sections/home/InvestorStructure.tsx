'use client';

import React from 'react';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import type { SanityHomePage } from '@/sanity/queries';

interface PrincipleDisplay {
  id: number;
  title: string;
  description: string;
  quote: string;
}

const defaultPrinciples: PrincipleDisplay[] = [
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

function PrincipleCard({ item }: { item: PrincipleDisplay }) {
  return (
    <div className="relative bg-white border border-gray-100 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] px-6 sm:px-8 py-8 sm:py-10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] group h-full">
      <div className="absolute top-0 left-0 right-0 h-[5px] bg-[#9B0000] w-full" />
      <div className="space-y-5 sm:space-y-6 flex-1 flex flex-col">
        <h3 className="text-[20px] sm:text-h4-tab md:text-h4 leading-[34px] sm:leading-[38px] font-playfair text-gray-900 font-normal tracking-tight">
          {item.title}
        </h3>
        <p
          className="text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-gray-600 font-normal flex-grow"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {item.description}
        </p>
      </div>
      <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-300">
        <p
          className="text-[13px] sm:text-[14px] md:text-[15px] italic text-gray-700 font-medium tracking-wide"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {item.quote}
        </p>
      </div>
    </div>
  );
}

export default function InvestorStructure({ principles: principlesData }: { principles?: SanityHomePage['principles'] }) {
  const heading = principlesData?.heading || 'An Investor-First Structure, by Design.';
  const highlightText = principlesData?.highlightText || 'Investor-First Structure';
  const subheading =
    principlesData?.subheading ||
    'Three principles that shape every decision we make — from how we invest to how we get paid.';
  const principles: PrincipleDisplay[] =
    principlesData?.principles && principlesData.principles.length > 0
      ? principlesData.principles.map((p, i) => ({ id: i + 1, title: p.title, description: p.description, quote: p.quote }))
      : defaultPrinciples;
  const DUPLICATED = [...principles, ...principles];

  return (
    <section className="w-full py-12 bg-[#FAFAFA]">
      <Container className="max-w-[1216px] mx-auto px-4 space-y-16">

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

        {/* Desktop: static grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 items-stretch">
          {principles.map((item) => (
            <PrincipleCard key={item.id} item={item} />
          ))}
        </div>

        {/* Mobile/Tablet: infinite marquee */}
        <div className="lg:hidden overflow-hidden">
          <div className="flex gap-6 w-max infinite-track">
            {DUPLICATED.map((item, i) => (
              <div key={`${item.id}-${i}`} className="shrink-0 w-[75vw] sm:w-[45vw]">
                <PrincipleCard item={item} />
              </div>
            ))}
          </div>
        </div>

      </Container>

      {/* Scoped keyframes */}
      <style jsx global>{`
        @keyframes principle-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .infinite-track {
          animation: principle-scroll 20s linear infinite;
        }

        .infinite-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
