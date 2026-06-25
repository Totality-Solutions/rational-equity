'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import CTAButton from '@/components/common/CTAButton';
import { DynamicArticleModal } from '@/components/common/DynamicArticleModal';

interface ArticleItem {
  id: number;
  date: string;
  title: string;
  description: string;
  img: string;
}

const articles: ArticleItem[] = [
  {
    id: 1,
    date: 'October 12, 2025',
    title: "Why the gold cycle isn't over.",
    description: 'A look at miner economics, policy tailwinds, and why we still see asymmetric upside.',
    img: '/images/home-thought/notes1.jpeg',
  },
  {
    id: 2,
    date: 'September 28, 2025',
    title: 'The patience premium.',
    description: 'How long holding periods quietly outperform in a market obsessed with quarters.',
    img: '/images/home-thought/notes2.jpeg',
  },
  {
    id: 3,
    date: 'August 15, 2025',
    title: 'Small-caps after a hot year',
    description: "What changes — and what doesn't — when a corner of the market gets crowded.",
    img: '/images/home-thought/notes3.jpeg',
  },
];

// ─── Breakpoints ──────────────────────────────────────────────────────────────
const BREAKPOINTS = { mobile: 640, tablet: 1024 } as const;

function getCardsPerView(width: number): number {
  if (width < BREAKPOINTS.mobile) return 1;
  if (width < BREAKPOINTS.tablet) return 2;
  return 3;
}

function useCardsPerView() {
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const mq = window.matchMedia;
    const mMobile = mq(`(max-width: ${BREAKPOINTS.mobile - 1}px)`);
    const mTablet = mq(`(min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.tablet - 1}px)`);
    const mDesktop = mq(`(min-width: ${BREAKPOINTS.tablet}px)`);

    function recalc() {
      setPerView(getCardsPerView(window.innerWidth));
    }

    recalc();
    mMobile.addEventListener('change', recalc);
    mTablet.addEventListener('change', recalc);
    mDesktop.addEventListener('change', recalc);

    return () => {
      mMobile.removeEventListener('change', recalc);
      mTablet.removeEventListener('change', recalc);
      mDesktop.removeEventListener('change', recalc);
    };
  }, []);

  return perView;
}

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
      aria-label={isPrev ? 'Previous article' : 'Next article'}
      className="w-9 h-9 rounded-full border border-[#9B0000]/25 flex items-center justify-center text-[#9B0000] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#9B0000]/5"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={isPrev ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
      </svg>
    </button>
  );
}

// ─── Article Card ─────────────────────────────────────────────────────────────
function ArticleCard({
  item,
  onReadMore,
}: {
  item: ArticleItem;
  onReadMore: (article: ArticleItem) => void;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-all duration-300 group h-full">
      {/* Thumbnail */}
      <div className="relative w-full h-52 sm:h-60 shrink-0">
        <Image
          src={item.img}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          priority={item.id === 1}
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-5">
        <div className="space-y-3">
          <p
            className="text-[13px] text-[#9B0000] font-semibold tracking-wide"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {item.date}
          </p>
          <h3 className="text-[20px] md:text-[24px] lg:text-[26px] leading-snug font-playfair text-gray-900 font-normal tracking-tight group-hover:text-[#9B0000] transition-colors duration-200">
            {item.title}
          </h3>
          <p className="text-[14px] leading-relaxed text-gray-500 font-normal font-sans">
            {item.description}
          </p>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => onReadMore(item)}
            className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-wider font-bold text-[#9B0000] transition-all duration-200 cursor-pointer hover:opacity-80 active:translate-x-0.5"
          >
            Read More <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ThoughtCentre() {
  const perView = useCardsPerView();
  const total = articles.length;
  const needsCarousel = total > perView;
  const maxIndex = needsCarousel ? total - perView : 0;

  const [index, setIndex] = useState(0);
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Measure actual card width (container width / perView)
  useEffect(() => {
    if (!needsCarousel || !trackRef.current) return;

    const container = trackRef.current.parentElement;
    if (!container) return;

    function measure() {
      const w = container!.getBoundingClientRect().width;
      setSlideWidth(w / perView);
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container!);
    return () => ro.disconnect();
  }, [perView, needsCarousel]);

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

  const translatePx = needsCarousel ? -(index * slideWidth) : 0;

  return (
    <section className="w-full py-8 lg:pt-12 lg:pb-16 bg-[#FAFAFA]">
      <Container className="mx-auto px-4">

        <div className="mb-12">
          <AnimatedHeader
            title="Notes from the Desk."
            highlight="the Desk."
            highlightColor="#9B0000"
            subheading="Long-form views on markets, philosophy, and the businesses we own."
            variant="light"
            titleClassName="text-black text-h3-mobile md:text-h3-tab lg:text-h3"
            subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg"
          />
        </div>

        {needsCarousel ? (
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
                  transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {articles.map((item) => (
                  <div
                    key={item.id}
                    className="shrink-0 px-3"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <ArticleCard item={item} onReadMore={setActiveArticle} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 py-6">
              <NavButton direction="prev" disabled={index === 0} onClick={prev} />
              <NavButton direction="next" disabled={index >= maxIndex} onClick={next} />
            </div>
          </>
        ) : (
          <div className="grid grid-cols-3 gap-6 items-stretch">
            {articles.map((item) => (
              <div key={item.id}>
                <ArticleCard item={item} onReadMore={setActiveArticle} />
              </div>
            ))}
          </div>
        )}

        <div className="w-full flex justify-center">
          <CTAButton
            href="/thought-center"
            text="View all Notes"
            variant="light"
            primaryColor="#9B0000"
            textColor="#9B0000"
            className="mt-4"
          />
        </div>
      </Container>

      {/* Modal */}
      <DynamicArticleModal
        isOpen={activeArticle !== null}
        onClose={() => setActiveArticle(null)}
        title={activeArticle?.title || ""}
        subtitle={activeArticle?.date || ""}
        heroImageUrl={activeArticle?.img}
        heroImageAlt={activeArticle?.title}
      >
        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
          {activeArticle?.description && (
            <p className="font-serif text-lg text-neutral-900 italic border-l-2 border-[#9B0000] pl-4 my-4">
              {activeArticle.description}
            </p>
          )}
          {activeArticle?.id === 1 ? (
            <>
              <p>Gold asset velocities have scaled inflection margins over current cycles. Miner operations maintain a high operational leverage framework compared to simple gold spot alternatives.</p>
              <p>As macro liquidity pipelines continue expanding across institutional targets, strategic allocations emphasize production margins and long-term asset security frameworks.</p>
            </>
          ) : (
            <>
              <p>Comprehensive research brief publication from the internal desk. Long-term positions capitalize on fundamental market pricing inefficiencies and high operational discipline metrics.</p>
              <p>Our analysis framework avoids shifting trends, focusing instead on sustainable capital allocation routines across individual market cycles.</p>
            </>
          )}
        </div>
      </DynamicArticleModal>
    </section>
  );
}
