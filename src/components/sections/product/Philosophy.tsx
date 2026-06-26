"use client";

import { useCallback, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import AnimatedHeader from "@/components/common/AnimatedHeader";
import Container from "@/components/common/Container";
import Image from "next/image";

const BREAKPOINTS = {
  mobile: 600,
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

interface PhilosophyPoint {
  title: string;
  description: string;
  icon: string;
}

interface PhilosophyProps {
  points: PhilosophyPoint[];
  title?: string;
  highlight?: string;
  highlightColor?: string;
  subheading?: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 16, delay: i * 0.07 },
  }),
};

function Card({ point, index }: { point: PhilosophyPoint; index: number }) {
  return (
    <div className="group bg-white hover:bg-brand-maroon/5  transition-all duration-200 p-8 flex gap-2 flex-col border border-brand-maroon/20 rounded-2xl h-full">
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 rounded-2xl bg-brand-maroon/5 flex items-center justify-center group-hover:bg-brand-maroon/10 transition-colors duration-200 shrink-0">
          <Image src={point.icon} alt={point.title} width={40} height={40} />
        </div>
        <span className="font-playfair text-h2 font-bold italic text-black/10 leading-none select-none">
          {(index + 1).toString().padStart(2, "0")}
        </span>
      </div>
      <h3 className="font-playfair text-body-lg font-bold text-[#1a1a1a] leading-snug">
        {point.title}
      </h3>
      <div className="w-8 h-0.5 bg-brand-maroon rounded-full" />
      <p className="text-body-sm leading-[1.75] flex-1">{point.description}</p>
      {/* <a href="#" className="flex items-center gap-1.5 underline text-body-sm tracking-wider text-brand-maroon font-medium transition-opacity duration-200">
        Learn more
      </a> */}
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

export default function Philosophy({ points = [], title = "Investment Philosophy", highlight = "Philosophy", highlightColor = "#9B0000", subheading }: PhilosophyProps) {
  const perView = useCardsPerView();
  const total = points.length;
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
    <section className="bg-white py-12 overflow-hidden">
      <Container className="space-y-8">
        <AnimatedHeader
          title={title}
          highlight={highlight}
          highlightColor={highlightColor}
          subheading={subheading}
          variant="light"
          titleClassName="text-h3-mobile md:text-h3-tab lg:text-h3 text-black mb-2"
          subheadingClassName="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg tracking-wide text-black"
        />

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
                {points.map((point, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="shrink-0 px-2"
                    style={{ width: `${cardSizePct}%` }}
                  >
                    <Card point={point} index={i} />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 pt-8">
              <NavButton direction="prev" disabled={index === 0} onClick={prev} />
              <NavButton direction="next" disabled={index >= maxIndex} onClick={next} />
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="flex">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="shrink-0 px-2"
                  style={{ width: `${cardSizePct}%` }}
                >
                  <Card point={point} index={i} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}