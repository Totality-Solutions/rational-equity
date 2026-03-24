
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const barHeights = [
    120, 160, 200, 150, 180, 240, 210, 280, 320, 350, 290, 380, 420, 450, 410,
    490, 460, 520
  ];

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden font-sans min-h-[700px] md:min-h-[900px] flex flex-col justify-center">

    {/* 1. FULL-WIDTH BACKGROUND CHART */}
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

      // RIGHT -> LEFT -> MIDDLE FLOW
      if (i >= lastIndex - 3) {
        customDelay = (lastIndex - i) * 0.15; 
      } else if (i <= 3) {
        customDelay = 0.6 + (i * 0.1);    
      } else {
        customDelay = 1.2 + (i * 0.05);   
      }

      // --- ADJUSTMENTS FOR WIDTH ---
      const barWidth = 40; // Increased width from 24 to 40
      const spacing = 1400 / lastIndex; // Spacing based on total viewBox width
      
      return (
        <motion.rect
          key={i}
          // Center the bars by subtracting half the width from the X position
          x={(spacing * i) - (barWidth / 2)} 
          width={barWidth}
          fill="url(#barFade)"
          initial={{ 
            height: h * 0.8, 
            y: 500, 
            opacity: 0 
          }}
          whileInView={{ 
            height: h, 
            y: 400 - h / 2, 
            opacity: 1 
          }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 2,
            delay: customDelay,
            ease: [0.16, 1, 0.3, 1] 
          }}
        />
      );
    })}

    {/* Trend Lines remain the same for consistency */}
    <motion.path
      d="M0 500 C 400 460, 1000 380, 1400 300"
      stroke="#800000"
      strokeWidth="2"
      strokeOpacity="0.4"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 3, ease: "easeInOut", delay: 2.2 }}
    />
    <motion.path
      d="M0 450 C 350 420, 950 320, 1400 200"
      stroke="#800000"
      strokeWidth="3"
      strokeOpacity="0.6"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.5, ease: "easeInOut", delay: 2.5 }}
    />
  </svg>
</div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12 md:mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[56px] text-gray-900 leading-[1.2] md:leading-[1.1] font-normal tracking-tight">
            Rational thinking.<br className="hidden sm:block" />
            Exceptional returns.
          </h2>
        </motion.div>

        <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="h-[1.5px] w-12 md:w-20 bg-[#800000] opacity-30" />
          <span className="font-sans text-[11px] md:text-[13px] tracking-[0.2em] text-gray-500 uppercase font-bold whitespace-nowrap">
            Since 2008
          </span>
          <div className="h-[1.5px] w-12 md:w-20 bg-[#800000] opacity-30" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-6 md:mb-10"
        >
          <h3 className="font-serif text-2xl sm:text-3xl md:text-[48px] text-gray-900 leading-tight">
            About Rational<br />
            Asset Management
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="font-sans text-gray-700 text-base md:text-[20px] leading-relaxed max-w-4xl mx-auto mb-10 md:mb-16 px-2 md:px-4"
        >
          We are a leading asset management company committed to delivering superior risk-adjusted returns through disciplined investment strategies. With over 15 years of excellence, we manage <span className="whitespace-nowrap">₹25,000+ Crores</span> for <span className="whitespace-nowrap">500,000+</span> satisfied investors.
        </motion.p>

        <div className="flex justify-center">
          <Link href="/about" className="flex items-stretch group overflow-hidden border border-[#800000] w-full sm:w-auto hover:scale-95 transition-all duration-300">
            <div className="bg-[#800000] flex-1 sm:flex-none px-6 md:px-10 py-4 flex items-center justify-center group-hover:bg-[#600000] transition-colors duration-300">
              <span className="font-sans font-bold text-[13px] md:text-[15px] text-white uppercase tracking-wider">
                Learn More about us
              </span>
            </div>
            <div className="bg-white px-4 flex items-center border-l border-[#800000]">
                <img
                    src="/images/arrowbtn.png"
                    alt="Arrow Icon"
                    className="w-4 md:w-5 object-contain transition-transform group-hover:translate-x-1 invert"
                />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}