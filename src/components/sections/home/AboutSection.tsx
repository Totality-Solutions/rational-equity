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
    <section
      ref={sectionRef}
      className="relative bg-white py-16 md:py-24 lg:py-32 overflow-hidden font-sans min-h-[700px] flex flex-col justify-center"
    >

      {/* 1. BACKGROUND CHART LAYER */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.12] pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1400 800"
          preserveAspectRatio="xMidYMid slice"
          className="overflow-visible"
        >
          <defs>
            <linearGradient id="barFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#800000" stopOpacity="1" />
              <stop offset="100%" stopColor="#800000" stopOpacity="0" />
            </linearGradient>
          </defs>

          {barHeights.map((h, i) => {
            const lastIndex = barHeights.length - 1;
            let customDelay = 0;

            if (i >= lastIndex - 3) {
              customDelay = (lastIndex - i) * 0.15;
            } else if (i <= 3) {
              customDelay = 0.6 + (i * 0.1);
            } else {
              customDelay = 1.2 + (i * 0.05);
            }

            const barWidth = 40;
            const spacing = 1400 / lastIndex;

            return (
              <motion.rect
                key={i}
                x={(spacing * i) - (barWidth / 2)}
                width={barWidth}
                fill="url(#barFade)"
                initial={{ height: 0, y: 500, opacity: 0 }}
                animate={isInView ? { height: h, y: 400 - h / 2, opacity: 1 } : {}}
                transition={{
                  duration: 2,
                  delay: customDelay,
                  ease: [0.16, 1, 0.3, 1]
                }}
              />
            );
          })}

          <motion.path
            d="M0 500 C 400 460, 1000 380, 1400 300"
            stroke="#800000"
            strokeWidth="2"
            strokeOpacity="0.4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3, ease: "easeInOut", delay: 2.2 }}
          />
          <motion.path
            d="M0 450 C 350 420, 950 320, 1400 200"
            stroke="#800000"
            strokeWidth="3"
            strokeOpacity="0.6"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 2.5 }}
          />
        </svg>
      </div>

      {/* 2. CONTENT LAYER */}
      <Container className="relative z-10 text-center">
        <div className="flex flex-col gap-0">
          <AnimatedHeader
            title="Rational thinking."
            variant="light"
            className="!mb-0"

            titleClassName="!text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl  tracking-tight"
          />
          <AnimatedHeader
            title="Exceptional returns."
            variant="light"
            className="!mb-0"

            titleClassName="!text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl  tracking-tight"
          />
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-6 my-8 md:my-12">
          <div className="h-[1.5px] w-12 md:w-20 bg-[#800000] opacity-30" />
          <span className="font-sans text-[11px] md:text-[13px] tracking-[0.2em] text-gray-500 uppercase font-weight-bold whitespace-nowrap">
            Since 2008
          </span>
          <div className="h-[1.5px] w-12 md:w-20 bg-[#800000] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto mb-12">
          {/* <AnimatedHeader 
            title="About Rational"
            variant="light"
            className="!mb-0"
          />
          <AnimatedHeader 
            title="Asset Management"
            subheading="We are a leading asset management company committed to delivering superior risk-adjusted returns through disciplined investment strategies. With over 15 years of excellence, we manage ₹25,000+ Crores for 500,000+ satisfied investors."
            variant="light"
            subheadingClassName="!max-w-none  mt-6"
          /> */}

          <AnimatedHeader
            title="About Rational"
            variant="light"
            className="!mb-0"

            titleClassName="!text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl  tracking-tight"
          />
          <AnimatedHeader
            title="Asset Management"
            variant="light"
            className="!mb-0"
            subheading="We are a leading asset management company committed to delivering superior risk-adjusted returns through disciplined investment strategies. With over 15 years of excellence, we manage ₹25,000+ Crores for 500,000+ satisfied investors."
            titleClassName="!text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl  tracking-tight"
            subheadingClassName="!max-w-none mt-8"
          />
        </div>

        <div className="flex justify-center">
          <CTAButton
            href="/about"
            text="Learn More about us"
            variant="maroon-bg"
            iconClassName="invert"
          />
        </div>
      </Container>
    </section>
  );
}