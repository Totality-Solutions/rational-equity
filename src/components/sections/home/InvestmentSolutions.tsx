'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import CTAButton from '@/components/common/CTAButton';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import Image from 'next/image';
import { urlFor } from '@/sanity/image';
import type { SanityHomePage } from '@/sanity/queries';

interface FundDisplay {
  title: string;
  description: string;
  returns: string;
  returnsLabel: string;
  href: string;
  img: string;
  downloadpdf: string;
  bullets: string[];
}

const defaultFunds: FundDisplay[] = [
  {
    title: 'India Long-Only Fund',
    description:
      'A high-conviction portfolio of Indian listed equities with a heavy tilt toward small and mid-caps where we see asymmetric reward.',
    returns: '30% CAGR',
    returnsLabel: '3 Year Returns',
    href: '/product/india-long-only',
    img: '/images/icons/india-long-only-fund.svg',
    downloadpdf:'/pdf/india-long-only-fund.pdf',
    bullets: [
      'Invests in Indian public markets',
      'Long-only, no derivatives',
      'Registered under SEBI',
      'Heavy tilt toward small & mid-cap',
    ],
  },
  {
    title: 'Gold & Silver Miners Fund',
    description:
      'A focused vehicle for strategic exposure to global gold and silver mining equities — operated from GIFT City.',
    returns: '~75% CAGR',
    returnsLabel: '1 Year Returns',
    href: '/product/gold-silver-miners',
    img: '/images/icons/gold-&-silver-miners-fund.svg',
    downloadpdf:'/pdf/gold-silver-miners-fund.pdf',
    bullets: [
      'Invests in gold & silver miners globally',
      'Long-only, no derivatives',
      'Operates from GIFT City',
      'No ETFs, no other commodities',
    ],
  },
  {
    title: 'Absolute Return Fund',
    description:
      'A quant plus discretion model-based Long-Short strategy that focuses on identifying periods of extreme greed and fear to capture significantly large moves while sitting out of sideways choppiness and major drawdowns.',
    returns: '41% CAGR',
    returnsLabel: '10-Year Model Net CAGR',
    href: '/product/absolute-return',
    img: '/images/icons/absolute-return-fund.svg',
    downloadpdf:'/pdf/absolute-return-fund.pdf',
    bullets: [
      'Long-short strategy',
      'Derivatives of publicly listed Indian companies',
      'Indians invest via SEBI registered fund',
      'Others invest via GIFT City Fund',
    ],
  },
];

const BREAKPOINT = 1024; // below lg = carousel

// ─── Nav Button ───────────────────────────────────────────────────────────────
function NavButton({
  direction,
  disabled,
  onClick,
}: {
  direction: 'prev' | 'next';
  disabled: boolean;
  onClick: () => void;
}) {
  const isPrev = direction === 'prev';
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? 'Previous fund' : 'Next fund'}
      className="w-9 h-9 rounded-full border border-[#9B0000]/25 flex items-center justify-center text-[#9B0000] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#9B0000]/5"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={isPrev ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
      </svg>
    </button>
  );
}

// ─── Fund Card (shared) ──────────────────────────────────────────────────────
function FundCard({ fund }: { fund: FundDisplay }) {
  return (
    <div className="relative h-full rounded-[24px] overflow-hidden flex flex-col shadow-sm bg-white">
      <div className="relative z-20 p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 mb-8">
          {fund.img && <Image src={fund.img} alt={fund.title} width={28} height={28} />}
          <h3 className="font-serif text-[20px] leading-tight text-black transition-colors group-hover:text-[#800000]">
            {fund.title}
          </h3>
        </div>

        <p className="text-black/75 text-body-md leading-relaxed mb-8">
          {fund.description}
        </p>

        <ul className="space-y-2 text-black/75 text-body-md mb-10">
          {fund.bullets.map((bullet) => (
            <li key={bullet}>&bull; {bullet}</li>
          ))}
        </ul>

        <div className="mt-auto items-center">
          <div className="bg-[#E9DEDE] rounded-full px-5 py-2 flex border-l-4 border-[#7B0000] font-playfair items-center gap-2">
            <span className="font-serif font-black text-[#7B0000] text-[14px] md:text-[18px]">
              {fund.returns}
            </span>
            <span className="text-[12px] text-[#555]">
              {fund.returnsLabel}
            </span>
          </div>

          <Link href={fund.downloadpdf} target="_blank">
            <button className="w-full mt-8 py-2 rounded-full bg-[#9B0000] text-white text-[16px] font-normal transition-all hover:bg-[#7B0000] cursor-pointer">
              Download Investor Presentation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function InvestmentSolutions({ solutions }: { solutions?: SanityHomePage['solutions'] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isCarousel, setIsCarousel] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const heading = solutions?.heading || 'Three strategies. One philosophy.';
  const highlightText = solutions?.highlightText || 'One philosophy.';
  const subheading =
    solutions?.subheading ||
    'Rational ranks among the top asset management companies in India, offering specialized products strategically constructed to maximize returns through deep insights and a research-driven approach and align manager incentives with investor outcomes.';

  const FUNDS: FundDisplay[] =
    solutions?.funds && solutions.funds.length > 0
      ? solutions.funds.map((fund) => ({
          title: fund.title,
          description: fund.description,
          returns: fund.returns,
          returnsLabel: fund.returnsLabel,
          href: fund.href,
          img: fund.icon ? urlFor(fund.icon).width(56).url() : '',
          downloadpdf: fund.pdfFile?.asset.url || '#',
          bullets: fund.bullets || [],
        }))
      : defaultFunds;

  const maxIndex = FUNDS.length - 1;

  // Detect viewport
  useEffect(() => {
    const mq = window.matchMedia;
    const mCarousel = mq(`(max-width: ${BREAKPOINT - 1}px)`);

    function recalc() {
      setIsCarousel(mCarousel.matches);
      setIsMobile(window.innerWidth < 768);
    }

    recalc();
    mCarousel.addEventListener('change', recalc);
    window.addEventListener('resize', recalc);
    return () => {
      mCarousel.removeEventListener('change', recalc);
      window.removeEventListener('resize', recalc);
    };
  }, []);

  // Measure card width
  useEffect(() => {
    if (!isCarousel || !trackRef.current) return;
    const container = trackRef.current.parentElement;
    if (!container) return;

    function measure() {
      setSlideWidth(container!.getBoundingClientRect().width);
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container!);
    return () => ro.disconnect();
  }, [isCarousel]);

  // Clamp on resize
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [isCarousel]);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  // Swipe — moves exactly 1 card
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  // Spotlight (desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const smoothY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useTransform(
    [smoothX, smoothY],
    ([x, y]) => isMobile
      ? `radial-gradient(circle at center, black, transparent)`
      : `radial-gradient(350px circle at ${x}px ${y}px, black, transparent)`,
  );

  const translatePx = isCarousel ? -(index * slideWidth) : 0;

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative bg-[#FAFAFA] py-8 lg:py-12 font-sans overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="relative lg:px-16 lg:py-12 overflow-hidden">

          <div className="relative z-10">
            {/* Heading */}
            <div className="text-center mb-12">
              <AnimatedHeader
                titleClassName="text-black text-h3-mobile md:text-h3-tab lg:text-h3 mb-2"
                title={heading}
                highlight={highlightText}
                variant="light"
                subheading={subheading}
                subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-body-md-mobile md:text-body-md-tab lg:text-body-md"
              />
            </div>

            {/* Cards — Desktop grid, Mobile/Tablet carousel */}
            {isCarousel ? (
              <>
                <div
                  className="overflow-hidden"
                  onTouchStart={onTouchStart}
                  onTouchEnd={onTouchEnd}
                >
                  <div
                    ref={trackRef}
                    className="flex"
                    style={{
                      transform: `translateX(${translatePx}px)`,
                      transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
                    }}
                  >
                    {FUNDS.map((fund) => (
                      <motion.a
                        href={fund.href}
                        key={fund.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="shrink-0 px-3 group"
                        style={{ width: '100%' }}
                      >
                        <FundCard fund={fund} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Nav + dots */}
                <div className="flex justify-center items-center gap-3 pt-8">
                  {/* <NavButton direction="prev" disabled={index === 0} onClick={prev} /> */}
                  <div className="flex gap-1.5">
                    {FUNDS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to fund ${i + 1}`}
                        className="transition-all duration-300 rounded-full"
                        style={{
                          width: i === index ? 20 : 6,
                          height: 6,
                          background: i === index ? '#9B0000' : 'rgba(155,0,0,0.2)',
                        }}
                      />
                    ))}
                  </div>
                  {/* <NavButton direction="next" disabled={index >= maxIndex} onClick={next} /> */}
                </div>
              </>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {FUNDS.map((fund, index) => (
                  <motion.a
                    href={fund.href}
                    key={fund.title}
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.1,
                    }}
                    style={{
                      originY: 0,
                      willChange: 'transform',
                      backfaceVisibility: 'hidden',
                      WebkitFontSmoothing: 'antialiased',
                    }}
                    className="relative group h-full"
                  >
                    <FundCard fund={fund} />
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
