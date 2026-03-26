"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// 🔹 Grouping lines into distinct Paragraph Blocks
const paragraphs = [
  {
    id: 1,
    lines: [
      <>
        <span style={{ color: "var(--color-brand-maroon)" }}> Rational Equity </span> is a fresh, new{" "}
        <span style={{ color: "var(--color-brand-maroon)" }}> boutique Category III AIF </span> aiming to provide high
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
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile ? ["start 0.8", "end 0.4"] : ["start 20%", "end 60%"],
  });

  // Calculate total number of lines across all paragraphs for smooth scroll mapping
  const allLines = paragraphs.flatMap(p => p.lines);
  const totalLineCount = allLines.length;

  let globalLineIndex = 0;

  return (
    <section 
      ref={ref} 
      className="relative flex justify-center py-24 px-6"
    >
      <div className="max-w-6xl text-center md:space-y-8 font-serif">
        {paragraphs.map((para) => (
          <div key={para.id} className="space-y-2 ">
            {para.lines.map((line) => {
              const currentIndex = globalLineIndex;
              globalLineIndex++; // Increment global counter

              const start = currentIndex / totalLineCount;
              const end = (currentIndex + 1) / totalLineCount;

              const mask = useTransform(
                scrollYProgress,
                [start, end],
                [
                  "linear-gradient(to right, black 0%, transparent 0%)",
                  "linear-gradient(to right, black 100%, transparent 100%)",
                ]
              );

              return (
                <div key={currentIndex} className="relative">
                  {/* Grey base layer */}
                  <p 
                    className="text-2xl  leading-snug text-gray-400"
                    style={{ filter: "grayscale(100%)", opacity: 0.1 }}
                  >
                    {line}
                  </p>

                  {/* Reveal layer */}
                  <motion.p
                    style={{
                      WebkitMaskImage: mask,
                      maskImage: mask,
                      color: "#000",
                    }}
                    className="absolute inset-0 text-2xl  leading-snug"
                  >
                    {line}
                  </motion.p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}