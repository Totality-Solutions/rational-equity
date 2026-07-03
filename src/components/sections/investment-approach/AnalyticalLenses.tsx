'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, Variants } from 'framer-motion';
import Container from '@/components/common/Container';

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: customDelay
    }
  })
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.35, ease: 'easeOut' }
  })
};

const BREAKPOINTS = {
  mobile: 600,
  tablet: 1024,
} as const;

function getCardsPerView(width: number): number {
  if (width < BREAKPOINTS.mobile) return 1;
  if (width < BREAKPOINTS.tablet) return 2;
  return 4;
}

function useCardsPerView() {
  const [perView, setPerView] = useState<number>(4);

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

interface Lens {
  title: string;
  color: string;
  icon: string;
  desc: string;
  quote: string;
  letter: string;
}

const lenses: Lens[] = [
  {
    title: 'Macro',
    color: 'brand-maroon',
    icon: '/images/icons/macro-white.png',
    desc: 'Top-down identification of inflection points in macro indicators like global monetary cycles, commodity cycles and central bank behaviour. Through these structural macro shifts we develop actionable investment themes ahead of market consensus.',
    quote: '\u201CTranslating macro inflection points into actionable, high-conviction investment themes.\u201D',
    letter: 'M'
  },
  {
    title: 'Fundamentals',
    color: 'secondary-ylw',
    icon: '/images/icons/fundamentals-white.png',
    desc: 'Deep primary research on every position — We look for businesses with strong free cash flow, cheap valuations, and a clear re-rating catalyst. No position enters the portfolio without a complete fundamental case.',
    quote: '\u201CValue-based research to identify the correct proxies for each macro theme.\u201D',
    letter: 'F'
  },
  {
    title: 'Sentiment',
    color: 'secondary-grn',
    icon: '/images/icons/sentiment-white.png',
    desc: 'Market sentiment — crowd positioning, put-call ratios, institutional flows — tells us where and when there is extreme fear and extreme greed. We look for extreme fear as our entry signal and extreme euphoria as our exit signal. Sentiment is often the final confirmation before we act.',
    quote: '\u201CWe buy when others are fearful. We exit when conviction becomes consensus.\u201D',
    letter: 'S'
  },
  {
    title: 'Technicals',
    color: 'secondary-blu',
    icon: '/images/icons/technicals-white.png',
    desc: 'Price action analysis across multiple time frames to determine the optimal entry and exit. A fundamentally sound thesis in a technically broken structure remains a value trap until the chart confirms. We wait for the price action to align before deploying capital with conviction.',
    quote: '\u201CThe right thesis at the right price — entry timing is as important as stock selection.\u201D',
    letter: 'T'
  }
];

function LensCard({ lens, index }: { lens: Lens; index: number }) {
  return (
    <div
      className={`relative flex flex-col lg:px-6 lg:pt-10 lg:pb-8 py-4 overflow-hidden h-full border-t-4 border-${lens.color}`}
    >
      {/* Icon Area */}
      <div className=" pb-2 lg:pb-0 lg:h-25 flex items-start">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden"
          style={{
            background: '#0A0A0A',
            border: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          <img src={lens.icon} alt={lens.title} className="w-8 h-8 object-contain" />
        </div>
      </div>

      {/* Title */}
      <div className="h-[30px] md:h-[40px]">
        <h3 className="font-playfair text-h3-mobile md:text-h3-tab lg:text-h4 leading-none text-white">
          {lens.title}
        </h3>
      </div>

      {/* Accent Line */}
      <div
        className={`w-10 h-[2px] mb-2 lg:mb-5 bg-${lens.color}`}
      />

      {/* Description */}
      <div className="md:min-h-60">
        <p
          className="font-sans text-body-md-mobile md:text-body-md-tab lg:text-body-md leading-[1.75] tracking-[0.02em]"
          style={{ color: '#B0B0B0' }}
        >
          {lens.desc}
        </p>
      </div>

      {/* Divider */}
      <div className="mt-4 mb-6">
        <div className="w-full h-px bg-[#363636]" />
      </div>

      {/* Quote */}
      <div className="lg:min-h-28">
        <p className="font-playfair italic text-[16px] leading-[1.7]" style={{ color: '#8E8E8E' }}>
          {lens.quote}
        </p>
      </div>

      {/* Background Letter */}
      <span
        className="absolute right-6 bottom-2 font-playfair text-[95px] leading-none pointer-events-none select-none"
        style={{ color: '#FFFFFF', opacity: 0.03 }}
      >
        {lens.letter}
      </span>
    </div>
  );
}

export default function AnalyticalLenses() {
  const perView = useCardsPerView();
  const total = lenses.length;
  const maxIndex = Math.max(0, total - perView);

  const [index, setIndex] = useState(0);
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
  const translatePct = total > perView ? -(index * cardSizePct) : 0;

  return (
    <section className="bg-black py-12">
      <Container>
        <div className="flex flex-col gap-6 lg:gap-15">
          {/* Header */}
          <div className="flex flex-col items-center gap-6 mx-auto">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="text-h3-mobile md:text-h3-tab lg:text-h2 font-playfair font-normal leading-tight tracking-tight text-center"
            >
              {'Marrying Macro, Fundamentals, Sentiment & Technicals.'.split(
                /(Macro|Fundamentals|Sentiment|Technicals)/
              ).map((part, i) => {
                const isHighlight = ['Macro', 'Fundamentals', 'Sentiment', 'Technicals'].includes(part);
                return isHighlight ? (
                  <span key={i} className="inline-block" style={{ color: '#9B0000' }}>
                    {part.split('').map((char, ci) => (
                      <motion.span key={ci} custom={ci} variants={letterVariants} className="inline-block">
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </span>
                ) : (
                  <span key={i} className="inline-block text-white">
                    {part.split('').map((char, ci) => (
                      <motion.span key={ci} custom={ci} variants={letterVariants} className="inline-block">
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </span>
                );
              })}
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUpVariants}
              custom={0.3}
              className="font-sans text-body-md-mobile md:text-body-md-tab lg:text-body-md leading-[28px] tracking-[0.04em] text-start"
              style={{ color: '#E3DFDB' }}
            >
              Every position we take is the product of all four analytical lenses working in alignment. We never act on one dimension alone.
            </motion.p>
          </div>

          {/* Carousel — mobile & tablet */}
          {total > perView && (
            <div className="lg:hidden">
              <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <div
                  className="flex"
                  style={{
                    transform: `translateX(${translatePct}%)`,
                    transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  {lenses.map((lens, i) => (
                    <div
                      key={lens.title}
                      className="shrink-0 px-3"
                      style={{ width: `${cardSizePct}%` }}
                    >
                      <LensCard lens={lens} index={i} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center items-center gap-2 pt-8">
                <button
                  onClick={prev}
                  disabled={index === 0}
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10"
                  style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}
                  aria-label="Previous"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  disabled={index >= maxIndex}
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10"
                  style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}
                  aria-label="Next"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Grid — desktop and fallback when all fit */}
          <div className={`${total > perView ? 'hidden lg:grid' : 'grid'} grid-cols-1 lg:grid-cols-4`}>
            {lenses.map((lens, i) => (
              <motion.div
                key={lens.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <LensCard lens={lens} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
