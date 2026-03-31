'use client';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const paragraphs = [
  {
    id: 1,
    lines: [
      <>
        <span className="text-[#8B0000]">Rational Equity</span> is a fresh, new{" "}
        <span className="text-[#8B0000]">boutique Category III AIF</span> aiming to provide high
      </>,
      "returns and create long-term wealth for our investor partners.",
    ]
  },
  {
    id: 2,
    lines: [
      "Our first scheme, Rational Equity Flagship Fund I, offers highly favourable, investor-aligned",
      "terms compared to other AIFs.",
    ]
  },
  {
    id: 3,
    lines: [
      "We maintain high skin in the game — with over of the total contribution invested",
      "by the investment management team.",
    ]
  }
];

export default function AboutHero() {
  const containerRef = useRef(null);

  const allLines = paragraphs.flatMap(p => p.lines);
  const totalLineCount = allLines.length;

  // 1. DYNAMIC HEIGHT CALCULATION
  // Instead of a fixed 250vh, we use ~25vh per line. 
  // With 6 lines, this results in 150vh. 
  // This ensures the "speed" of the reveal feels consistent regardless of text length.
  const sectionHeight = `${Math.max(10, totalLineCount * 65)}vh`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], 
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60, // Slightly higher stiffness for a more responsive feel
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef} 
      style={{ height: sectionHeight }} 
      className="relative bg-white"
    >
      {/* Sticky container stays 100% of viewport height */}
      <div className="sticky top-20 h-screen md:h-[60vh] lg:h-[70vh] flex pt-24 !pb-0 justify-center px-6 overflow-hidden">
        <div className=" max-w-6xl text-center space-y-8 md:space-y-10 font-serif">
          
          {paragraphs.map((para, pIdx) => (
            <div key={para.id} className="space-y-2 md:space-y-3">
              {para.lines.map((line, lIdx) => {
                const previousLinesCount = paragraphs
                  .slice(0, pIdx)
                  .reduce((acc, p) => acc + p.lines.length, 0);
                const currentIndex = previousLinesCount + lIdx;

                // 2. TIMING ADJUSTMENT
                // We want the text to start revealing after 10% scroll 
                // and finish 100% visible by 90% scroll.
                const start = 0.1 + (currentIndex / totalLineCount) * 0.8;
                const end = 0.12 + ((currentIndex + 1) / totalLineCount) * 0.8;

                const mask = useTransform(
                  smoothProgress,
                  [start, end],
                  [
                    "linear-gradient(to right, black 0%, transparent 0%)",
                    "linear-gradient(to right, black 100%, transparent 100%)",
                  ]
                );

                return (
                  <div key={`${pIdx}-${lIdx}`} className="relative">
                    {/* BASE LAYER (Grayscale) */}
                    <p 
                      className="text-3xl leading-tight text-gray-400 select-none opacity-20"
                      style={{ filter: "grayscale(100%)" }}
                    >
                      {line}
                    </p>

                    {/* REVEAL LAYER (Color) */}
                    <motion.p
                      style={{
                        WebkitMaskImage: mask,
                        maskImage: mask,
                      }}
                      className="absolute inset-0 text-3xl leading-tight text-black"
                    >
                      {line}
                    </motion.p>
                  </div>
                );
              })}
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}