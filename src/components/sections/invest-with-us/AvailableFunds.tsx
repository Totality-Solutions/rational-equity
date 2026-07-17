"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FUND_DATA } from "@/data/Funds";
import Container from "@/components/common/Container";
import AnimatedHeader from "@/components/common/AnimatedHeader";
import type { SanityInvestWithUsPage } from '@/sanity/queries';

const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
} as const;

function getCardsPerView(width: number) {
  if (width < BREAKPOINTS.mobile) return 1;
  if (width < BREAKPOINTS.tablet) return 2;
  return 3;
}

function useCardsPerView() {
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => setPerView(getCardsPerView(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perView;
}

interface FundCard {
  slug: string;
  accentColor: string;
  label: string;
  subtitle: string;
  stats: { label: string; value: string }[];
  performance: { value: string; label: string };
}

const defaultFundCards: FundCard[] = [
  {
    slug: "india-long-only",
    accentColor: "#9B0000",
    label: "Fund I \u00B7 SEBI AIF",
    subtitle: "SEBI Cat III AIF \u00B7 Open-ended",
    stats: [
      { label: "Min. Investment", value: "\u20B91 Crore" },
      { label: "Benchmark", value: "NIFTY 500 TRI" },
      { label: "Strategy", value: "Long-Only Equity" },
      { label: "Eligible", value: "Indians & NRIs" },
    ],
    performance: { value: "30%", label: "CAGR \u00B7 Since Inception" },
  },
  {
    slug: "gold-silver-miners",
    accentColor: "#B8860B",
    label: "Fund II \u00B7 GIFT City",
    subtitle: "IFSCA Cat III AIF \u00B7 Open-ended",
    stats: [
      { label: "Min. Investment", value: "US$ 10,000" },
      { label: "Benchmark", value: "GDXJ" },
      { label: "Strategy", value: "Junior Miners" },
      { label: "Eligible", value: "Indians & Global" },
    ],
    performance: { value: "~75%", label: "1-Year Return" },
  },
  {
    slug: "absolute-return",
    accentColor: "#2D6A4F",
    label: "Fund III \u00B7 SEBI + GIFT City",
    subtitle: "Long-Short \u00B7 Derivatives",
    stats: [
      { label: "Strategy", value: "Long-Short" },
      { label: "Instruments", value: "Derivatives" },
      { label: "Closing", value: "July 2026" },
      { label: "Eligible", value: "Indians & Global" },
    ],
    performance: { value: "41%", label: "10-yr Model Net CAGR" },
  },
];

// Accent color per fund is fixed brand design, matched to CMS content by position.
const FUND_ACCENT_COLORS = defaultFundCards.map((f) => f.accentColor);

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const headerVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function StatItem({ stat }: { stat: { label: string; value: string } }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-black/60 text-xs md:text-xs font-medium uppercase tracking-wide">
        {stat.label}
      </span>
      <span className="text-gray-900 text-sm md:text-sm lg:text-base font-semibold leading-snug">
        {stat.value}
      </span>
    </div>
  );
}

function FundCardInner({ card }: { card: FundCard }) {
  const fund = FUND_DATA[card.slug];
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 overflow-hidden h-full">
      <div className="h-1 w-full shrink-0" style={{ background: card.accentColor }} />
      <div className="flex flex-col flex-1">
        <div className="h-fit p-6 md:p-8 lg:p-10 md:h-fit lg:h-fit shrink-0 flex flex-col gap-1.5 md:gap-2 overflow-hidden">
          <span className="text-black/60 text-[10px] md:text-[11px] font-semibold uppercase tracking-wide leading-none">
            {card.label}
          </span>
          <h3 className="text-black text-xl md:text-[26px] lg:text-[28px] font-playfair font-semibold leading-tight line-clamp-2">
            {fund?.title ?? card.slug}
          </h3>
          <span className="text-gray-500 text-xs md:text-[13px] leading-snug">
            {card.subtitle}
          </span>
        </div>
        <div className="h-px w-full bg-gray-200 shrink-0" />
        <div className="grid grid-cols-2 p-6 md:p-8 lg:p-10 gap-y-4 md:gap-y-5 gap-x-4 md:gap-x-6 py-6 md:py-6 shrink-0">
          {card.stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
        <div className="p-6 md:p-8 lg:p-10 mt-auto">
          <div
            className="flex items-center gap-3 md:gap-4 px-4 py-3 md:px-5 md:py-3.5 rounded-full shrink-0 border-l-4 border-brand-maroon-hover"
            style={{
              background: "linear-gradient(180deg, rgba(122.92, 0.20, 0.20, 0.10) 48%)",
            }}
          >
            <span className="font-playfair font-black text-xl md:text-2xl lg:text-[26px] leading-none text-brand-maroon-hover">
              {card.performance.value}
            </span>
            <span className="text-gray-600 text-xs md:text-[12px] leading-snug">
              {card.performance.label}
            </span>
          </div>
          <Link
            href={`/product/${card.slug}`}
            className="mt-5 md:mt-6 shrink-0 flex items-center justify-center w-full py-2.5 md:py-3 rounded-full bg-brand-maroon text-white text-base md:text-[17px] lg:text-[18px] tracking-wide hover:bg-brand-maroon-hover transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavButton({
  direction, disabled, onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const isPrev = direction === "prev";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#9B0000]/5"
      style={{ borderColor: "rgba(139,0,0,0.25)", color: "#9B0000" }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={isPrev ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
      </svg>
    </button>
  );
}

export default function AvailableFunds({ fundList }: { fundList?: SanityInvestWithUsPage['fundList'] }) {
  const heading = fundList?.heading || 'Choose the right fund for you.';
  const highlightText = fundList?.highlightText || 'fund for you.';
  const subheading =
    fundList?.subheading ||
    'Three distinct strategies, each addressing a different macro opportunity and investor profile. You can invest in one or more.';
  const FUND_CARDS: FundCard[] =
    fundList?.funds && fundList.funds.length > 0
      ? fundList.funds.map((f, i) => ({
          slug: f.slug,
          accentColor: FUND_ACCENT_COLORS[i % FUND_ACCENT_COLORS.length],
          label: f.label,
          subtitle: f.subtitle,
          stats: f.stats || [],
          performance: { value: f.performanceValue, label: f.performanceLabel },
        }))
      : defaultFundCards;

  const perView = useCardsPerView();
  const total = FUND_CARDS.length;
  const needsCarousel = total > perView;
  const maxIndex = Math.max(0, total - perView);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  const cardSizePct = 100 / perView;
  const translatePct = needsCarousel ? -(index * cardSizePct) : 0;

  return (
    <section className="bg-white py-6 lg:py-12">
      <Container className="mx-auto w-full">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-start gap-4 md:gap-6 mb-10 md:mb-12 lg:mb-16"
        >
          <AnimatedHeader
            title={heading}
            highlight={highlightText}
            subheading={subheading}
            className=""
            highlightClassName="italic"
            titleClassName="text-start text-h3-mobile md:text-h3-tab lg:text-h2 font-playfair font-normal leading-tight tracking-tight"
            subheadingClassName="text-start text-black/60 text-body-md-mobile md:text-body-lg-tab lg:text-body-lg leading-relaxed"
          />
        </motion.div>

        {needsCarousel ? (
          <div>
            <div className="overflow-hidden">
              <div
                className="flex"
                style={{
                  transform: `translateX(${translatePct}%)`,
                  transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {FUND_CARDS.map((card) => (
                  <div
                    key={card.slug}
                    className="shrink-0 px-2"
                    style={{ width: `${cardSizePct}%` }}
                  >
                    <FundCardInner card={card} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 pt-8">
              <NavButton direction="prev" disabled={index === 0} onClick={prev} />
              <NavButton direction="next" disabled={index >= maxIndex} onClick={next} />
            </div>
          </div>
        ) : (
          <div className="gap-3">
            <div className="flex">
              {FUND_CARDS.map((card, index) => (
                <motion.div
                  key={card.slug}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="shrink-0 px-2"
                  style={{ width: `${cardSizePct}%` }}
                >
                  <FundCardInner card={card} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
