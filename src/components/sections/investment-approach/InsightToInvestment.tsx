'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import type { SanityApproachPage } from '@/sanity/queries';

const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
} as const;

function getCardsPerView(width: number): number {
  if (width < BREAKPOINTS.mobile) return 1;
  if (width < BREAKPOINTS.tablet) return 2;
  return 5;
}

function useCardsPerView() {
  const [perView, setPerView] = useState<number>(5);

  useEffect(() => {
    function recalc() {
      setPerView(getCardsPerView(window.innerWidth));
    }
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, []);

  return perView;
}

interface Step {
  img: string;
  category: string;
  title: string;
  desc: string;
}

const defaultSteps: Step[] = [
  {
    img: '/icons/macroeconomics.png',
    category: 'Macro Screening',
    title: 'Identify the Mega-Trend',
    desc: 'Scan for structural shifts large enough to sustain multi-year tailwinds. What is the market mispricing, and why?'
  },
  {
    img: '/images/journey/2.svg',
    category: 'Instrument Selection',
    title: 'Choose the Most Powerful Proxy',
    desc: 'Identify the instrument with the most asymmetric exposure to the thesis — not always the most obvious one.'
  },
  {
    img: '/images/journey/3.svg',
    category: 'Fundamental Research',
    title: 'Build Conviction on Each Name',
    desc: 'Primary research on every position. Strong FCF, clean balance sheet, credible management, attractive valuation.'
  },
  {
    img: '/images/journey/4.svg',
    category: 'Technical & Sentiment',
    title: 'Wait for the Right Entry',
    desc: 'Price action and sentiment must confirm the thesis before capital is deployed. Entry is as important as the idea.'
  },
  {
    img: '/icons/risk.png',
    category: 'Portfolio Management',
    title: 'Hold. Then Exit Decisively.',
    desc: 'Hold through volatility as long as the thesis is intact. Exit when it has played out — no anchoring, no attachment.'
  }
];

// Icons are fixed brand design, matched to CMS content by position.
const STEP_ICONS = defaultSteps.map((s) => s.img);

function StepCard({ step, index, hoveredIndex, setHoveredIndex }: {
  step: Step;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) {
  const isActive = hoveredIndex === index;
  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="flex flex-col items-center gap-5 px-2.5 cursor-pointer"
    >
      {/* Icon Circle */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative z-10 transition-all duration-300 bg-white"
        style={{
          outline: `1px solid ${isActive ? '#9B0000' : 'rgba(0, 0, 0, 0.50)'}`,
          outlineOffset: '-1px',
          background: isActive ? '#FFE4E4' : 'white'
        }}
      >
        <Image
          src={step.img}
          width={24}
          height={24}
          alt={step.category}
          className={`transition-opacity w-8 h-8 duration-300 ${isActive ? 'opacity-100' : 'opacity-80'}`}
        />
      </div>

      {/* Title Area */}
      <div className="flex flex-col items-center gap-1 h-16">
        <span
          className="font-sans text-body-sm-mobile md:text-body-sm-tab lg:text-body-sm leading-[24px] tracking-[0.04em] transition-colors duration-300"
          style={{ color: '#9B0000' }}
        >
          {step.category}
        </span>
        <span
          className="font-playfair text-lg leading-[22px] tracking-[0.04em] text-center"
          style={{ color: 'black' }}
        >
          {step.title}
        </span>
      </div>

      {/* Description */}
      <p
        className="font-sans text-[16px] leading-[26px] tracking-[0.03em] text-center"
        style={{ color: 'black', opacity: 0.6 }}
      >
        {step.desc}
      </p>
    </div>
  );
}

export default function InsightToInvestment({ insight }: { insight?: SanityApproachPage['insight'] }) {
  const heading = insight?.heading || 'How we go from insight to investment.';
  const subheading =
    insight?.subheading ||
    'A rigorous, repeatable 5-step process that we have followed across every fund and every major capital allocation decision since 2008.';
  const steps: Step[] =
    insight?.steps && insight.steps.length > 0
      ? insight.steps.map((s, i) => ({
          category: s.category,
          title: s.title,
          desc: s.description,
          img: STEP_ICONS[i % STEP_ICONS.length],
        }))
      : defaultSteps;

  const perView = useCardsPerView();
  const total = steps.length;
  const needsCarousel = total > perView;
  const maxIndex = Math.max(0, total - perView);

  const [index, setIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const cardSizePct = 100 / perView;
  const translatePct = needsCarousel ? -(index * cardSizePct) : 0;

  return (
    <section className="bg-white py-16">
      <Container>
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mx-auto">
            <AnimatedHeader
              title={heading}
              highlight={heading}
              subheading={subheading}
              className=""
              highlightClassName="italic"
              titleClassName="text-center text-h3-mobile md:text-h3-tab lg:text-h2 font-playfair font-normal leading-tight tracking-tight"
              subheadingClassName="text-center text-black/60 text-body-md-mobile md:text-body-md-tab lg:text-body-md leading-relaxed"
            />
          </div>

          {/* Carousel — mobile & tablet */}
          {needsCarousel && (
            <div className="lg:hidden">
              <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <div
                  className="flex"
                  style={{
                    transform: `translateX(${translatePct}%)`,
                    transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  {steps.map((step, i) => (
                    <div
                      key={i}
                      className="shrink-0 px-2"
                      style={{ width: `${cardSizePct}%` }}
                    >
                      <StepCard step={step} index={i} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center items-center gap-2 pt-8">
                <button
                  onClick={prev}
                  disabled={index === 0}
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#9B0000]/5"
                  style={{ borderColor: 'rgba(139,0,0,0.25)', color: '#9B0000' }}
                  aria-label="Previous"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  disabled={index >= maxIndex}
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#9B0000]/5"
                  style={{ borderColor: 'rgba(139,0,0,0.25)', color: '#9B0000' }}
                  aria-label="Next"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Row — desktop */}
          <div className={`${needsCarousel ? 'hidden lg:block' : 'block'}`}>
            <div className="relative">
              {/* Horizontal line */}
              <div
                className="absolute left-0 right-0 h-px"
                style={{ top: 24, background: 'rgba(0, 0, 0, 0.50)' }}
              />

              <div className="flex flex-row gap-5">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="flex-1"
                  >
                    <StepCard step={step} index={i} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
