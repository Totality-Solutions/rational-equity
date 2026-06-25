'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CTAButton from '@/components/common/CTAButton';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import Container from '@/components/common/Container';

export default function AboutSection() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -300px 0px"
  });

  const barHeights = [
    120, 160, 200, 150, 180, 240, 210, 280, 320, 350, 290, 380, 420, 450, 410,
    490, 460, 520
  ];

  return (
   <section className="bg-[#ffffff] py-6 md:py-12">
  <Container>
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>

        <h2 className="font-playfair text-h3-mobile md:text-h3-tab lg:text-h3 leading-[1.05] text-[#1A1A1A] max-w-xl">
          A boutique fund built on
          <br />
          <em className="italic font-playfair">
            conviction, not consensus.
          </em>
        </h2>

        <p className="mt-3 md:mt-6 text-[#4A4A4A] leading-relaxed max-w-xl text-[14px] sm:text-[16px]">
          Rational is an investment house with a singular focus: identifying global mega-trends and durable mispricings in the system, then holding them long enough for compounding to do its work. We invest alongside our investors and structure our economics so we only make money when they do.
        </p>

        {/* STATS */}
            <div className="mt-6 md:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 md:pt-4">

              <div className="text-center">
                <div className="text-[24px] sm:text-[30px] font-playfair text-[#1A1A1A]">
                  3+
                </div>
                <div className="text-[14px] sm:text-[10px] tracking-normal text-[#6B6B6B] mt-1">
                  Years building multibaggers
                </div>
              </div>

              <div className="text-center border-l border-[#E4E0DC]">
                <div className="text-[24px] sm:text-[30px] font-playfair text-[#1A1A1A]">
                  2
                </div>
                <div className="text-[14px] sm:text-[10px] tracking-normal text-[#6B6B6B] mt-1">
                  Active strategies
                </div>
              </div>

              <div className="text-center md:border-l border-[#E4E0DC]">
                <div className="text-[24px] sm:text-[30px] font-playfair text-[#1A1A1A]">
                  100%
                </div>
                <div className="text-[14px] sm:text-[10px] tracking-normal text-[#6B6B6B] mt-1">
                  Long-only
                </div>
              </div>

              <div className="text-center border-l border-[#E4E0DC]">
                <div className="text-[24px] sm:text-[30px] font-playfair text-[#1A1A1A]">
                  1yr
                </div>
                <div className="text-[14px] sm:text-[10px] tracking-normal text-[#6B6B6B] mt-1">
                  Annual liquidity
                </div>
              </div>

            </div>

      </div>

      {/* RIGHT CHART CARD */}
      <div className="bg-white border border-[#E9E5E1] rounded-sm pb-10 px-4 sm:px-10 h-[360px] lg:h-full relative overflow-hidden">

        <div className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 text-center z-10 w-full px-4">

          <p className="text-[15px] sm:text-[18px] font-medium text-[#333]">
            Rational thinking.
          </p>

          <p className="text-[15px] sm:text-[18px] font-medium text-[#333]">
            Exceptional returns.
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-3 sm:mt-5">
            <div className="w-10 sm:w-16 h-[1.5px] bg-[#B98E8E]" />
            <span className="text-[10px] sm:text-[11px] uppercase font-semibold tracking-[1px] text-[#555]">
              Since 2008
            </span>
            <div className="w-10 sm:w-16 h-[1.5px] bg-[#B98E8E]" />
          </div>

        </div>

        {/* CHART */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[180px] sm:h-[220px] lg:h-[260px]"
          viewBox="0 0 700 260"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            <linearGradient id="bars" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D6A5A5" />
              <stop offset="100%" stopColor="#D6A5A5" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[80, 70, 120, 140, 80, 130, 170, 190, 120, 220, 250, 280].map(
            (h, i) => (
              <rect
                key={i}
                x={20 + i * 55}
                y={260 - h}
                width="42"
                height={h}
                rx="3"
                fill="url(#bars)"
              />
            )
          )}

          <path
            d="M20 240 C200 200 420 140 680 80"
            fill="none"
            stroke="#C97C7C"
            strokeDasharray="6 6"
            strokeWidth="2"
          />
        </svg>

      </div>

    </div>
  </Container>
</section>
  );
}