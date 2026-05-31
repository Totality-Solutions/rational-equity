'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, Variants } from 'framer-motion';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import Image from 'next/image';

const CRIMSON = '#8B0000';

// ─── Breakpoint thresholds ────────────────────────────────────────────────────
const BREAKPOINTS = {
  mobile: 640,   // < 640px  → 1 card
  tablet: 1024,  // < 1024px → 2 cards
  desktop: 1280, // < 1280px → 3 cards
                 // ≥ 1280px → 4 cards
} as const;

const CARDS_PER_VIEW = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
  wide: 4,
} as const;

// ─── Data ─────────────────────────────────────────────────────────────────────
// ✅ Add as many milestones as you like — carousel activates automatically
// when total items > cardsPerView for the current breakpoint.
export const MILESTONES = [
  {
    year: '2020',
    num: '01',
    title: 'Founded',
    description:
      'Rational Equity Partners established in Mumbai with a vision to deliver disciplined, long-term superior returns.',
    img: '/images/journey/1.svg',
  },
  {
    year: '2021',
    num: '02',
    title: 'SEBI Registration',
    description:
      'Registered with SEBI as a Category II AIF, formalising our commitment to regulatory excellence and investor trust.',
    img: '/images/journey/2.svg',
  },
  {
    year: '2022',
    num: '03',
    title: 'First Multibaggers',
    description:
      'Delivered 3×–5× returns on multiple holdings, validating our quality-first investment thesis in real market conditions.',
    img: '/images/journey/3.svg',
  },
  {
    year: '2023',
    num: '04',
    title: 'Global Expansion',
    description:
      'Launched the Gold & Silver Miners Fund, extending our mandate to global precious metals opportunities.',
    img: '/images/journey/4.svg',
  },
  {
    year: '2024',
    num: '05',
    title: 'Top Performer',
    description:
      "Ranked among India's top-performing AIFs, recognised for consistent alpha generation over benchmark indices.",
    img: '/images/journey/1.svg',
  },
  {
    year: '2025',
    num: '06',
    title: '₹1,000 Cr AUM',
    description:
      'Crossed ₹1,000 crore in assets under management, reflecting sustained investor confidence and fund performance.',
    img: '/images/journey/2.svg',
  },
  // ↓ Add more milestones here freely ↓
];

// ─── Animations ───────────────────────────────────────────────────────────────
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 60, damping: 16, delay: i * 0.07 },
  }),
};

// ─── Hook: cards per viewport ─────────────────────────────────────────────────
function useCardsPerView() {
  const [perView, setPerView] = useState(CARDS_PER_VIEW.wide);


  return perView;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Journey() {
  const perView     = useCardsPerView();
  const total       = MILESTONES.length;
  const needsCarousel = total > perView;          // ← key rule: carousel only when needed
  const maxIndex    = needsCarousel ? total - perView : 0;

  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Clamp index when perView changes (e.g. resize from mobile → desktop)
  useEffect(() => {
    setIndex((prev) => Math.min(prev, Math.max(0, total - perView)));
  }, [perView, total]);

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

  // translateX as a percentage of the track width
  const translatePct = needsCarousel ? -(index * (100 / perView)) : 0;

  return (
    <section className="bg-white py-10 overflow-hidden">
      <Container className="space-y-10">

        {/* ── Header + nav ─────────────────────────────────────────────────── */}
        <div className="">
          <AnimatedHeader
            title="The Journey So Far"
            highlight="Journey"
            highlightColor={CRIMSON}
            subheading="Our path has been defined by a commitment to rigorous research and absolute integrity."
            variant="light"
            className="text-black text-h3"
            subheadingClassName="text-gray-600 font-normal max-w-2xl text-base text-body-lg leading-relaxed"
          />

          
        </div>

        {/* ── Timeline ─────────────────────────────────────────────────────── */}
        <div className="relative">

          {/* Horizontal rule behind nodes — visible sm+ */}
          <div
            className="absolute top-[26px] left-0 right-0 h-px pointer-events-none hidden sm:block"
            style={{ background: 'rgba(139,0,0,0.15)' }}
          />

          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(${translatePct}%)`,
                transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              {MILESTONES.map((item, i) => (
                <motion.div
                  key={item.year}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="group flex flex-col items-center shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / perView}%` }}
                >
                  {/* Node */}
                  <div className="flex flex-col items-center mb-4 relative z-10">
                    <NodeCircle src={item.img} title={item.title} crimson={CRIMSON} />
                    <div className="w-px h-5" style={{ background: 'rgba(139,0,0,0.18)' }} />
                  </div>

                  {/* Year */}
                  <div
                    className="text-[11px] font-medium tracking-[0.1em] uppercase px-3 py-1 rounded-full border mb-4"
                    style={{ color: CRIMSON, background: 'rgba(139,0,0,0.07)', borderColor: 'rgba(139,0,0,0.2)' }}
                  >
                    {item.year}
                  </div>

                  {/* Card */}
                  <MilestoneCard item={item} crimson={CRIMSON} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dot pagination */}
          {needsCarousel && (
            <div className="flex justify-center items-center gap-2 shrink-0 py-4">
              <NavButton
                direction="prev"
                disabled={index === 0}
                onClick={prev}
                crimson={CRIMSON}
                label="Previous milestone"
              />
              <NavButton
                direction="next"
                disabled={index >= maxIndex}
                onClick={next}
                crimson={CRIMSON}
                label="Next milestone"
              />
            </div>
          )}
          {/* {needsCarousel && (
            <div className="flex justify-center gap-1.5 mt-7">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="transition-all duration-200 rounded-full"
                  style={{
                    width:      i === index ? 20 : 6,
                    height:     6,
                    background: i === index ? CRIMSON : 'rgba(139,0,0,0.2)',
                  }}
                />
              ))}
            </div>
          )} */}
        </div>

      </Container>
    </section>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function NavButton({
  direction, disabled, onClick, crimson, label,
}: {
  direction: 'prev' | 'next';
  disabled: boolean;
  onClick: () => void;
  crimson: string;
  label: string;
}) {
  const isPrev = direction === 'prev';
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#8B0000]/5"
      style={{ borderColor: 'rgba(139,0,0,0.25)', color: crimson }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={isPrev ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
      </svg>
    </button>
  );
}

function NodeCircle({ src, title, crimson }: { src: string; title: string; crimson: string }) {
  return (
    <div
      className="w-[52px] h-[52px] rounded-full border flex items-center justify-center bg-white group-hover:border-[--crimson] group-hover:bg-[#8B0000]/5 transition-all duration-300"
      style={{ '--crimson': crimson, borderColor: 'rgba(139,0,0,0.22)' } as React.CSSProperties}
    >
      <Image
        src={src}
        alt={title}
        width={26}
        height={26}
        className="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}

function MilestoneCard({
  item,
  crimson,
}: {
  item: (typeof MILESTONES)[number];
  crimson: string;
}) {
  return (
    <div
      className="w-full bg-white rounded-2xl p-5 flex flex-col gap-2 border transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_24px_rgba(139,0,0,0.08)]"
      style={{ borderColor: 'rgba(139,0,0,0.12)' }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(139,0,0,0.3)')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(139,0,0,0.12)')}
    >
      <span className="font-serif text-[32px] font-semibold leading-none" style={{ color: 'rgba(139,0,0,0.1)' }}>
        {item.num}
      </span>
      <div
        className="h-[2px] w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: crimson }}
      />
      <h3 className="text-gray-900 font-semibold text-[15px] leading-snug transition-colors duration-300 group-hover:text-[--crimson]"
          style={{ '--crimson': crimson } as React.CSSProperties}>
        {item.title}
      </h3>
      <p className="text-gray-500 text-[13px] leading-relaxed">{item.description}</p>
    </div>
  );
}