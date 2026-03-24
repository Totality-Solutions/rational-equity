
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutSection() {
  // Array to define custom heights for the background bars to match the image's "natural" look
  const barHeights = [120, 150, 180, 140, 160, 220, 190, 240, 280, 310, 260, 340, 320, 380, 350];

  return (
    <section className="relative bg-white py-24 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND CHART - Framer Motion */}
      <div className="absolute inset-0 z-0 flex justify-center items-end opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1400 500" preserveAspectRatio="none" fill="none">
          
          {/* Vertical Bars - Staggered Rise */}
          {barHeights.map((h, i) => (
            <motion.rect
              key={i}
              x={100 * i}
              width="60"
              fill="#800000" // Maroon base, opacity handled by container
              initial={{ height: 0, y: 500 }}
              whileInView={{ height: h, y: 500 - h }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2, 
                delay: i * 0.08, 
                ease: [0.33, 1, 0.68, 1] // Custom cubic-bezier for smooth finish
              }}
            />
          ))}

          {/* Trend Line Curve - Drawing Effect */}
          <motion.path
            d="M0 450 C 300 420, 700 350, 1400 250"
            stroke="#800000"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Floating Data Points */}
          {[
            { cx: 320, cy: 420 },
            { cx: 850, cy: 330 },
            { cx: 1100, cy: 290 }
          ].map((point, idx) => (
            <motion.circle
              key={idx}
              cx={point.cx}
              cy={point.cy}
              r="4"
              fill="#800000"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 + (idx * 0.4) }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* 2. TOP HEADING */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-serif text-[42px] md:text-[52px] text-gray-900 leading-[1.1] font-normal tracking-tight">
            Rational thinking.<br />
            Exceptional returns.
          </h2>
        </motion.div>

        {/* 3. "SINCE 2008" DIVIDER */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-[1.5px] w-20 bg-brand-maroon origin-right"
          />
          <span className="font-sans text-[13px] tracking-[0.2em] text-gray-600 uppercase font-semibold">
            Since 2008
          </span>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-[1.5px] w-20 bg-brand-maroon origin-left"
          />
        </div>

        {/* 4. MAIN TITLE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <h3 className="font-serif text-[38px] md:text-[46px] text-gray-900 leading-tight">
            About Rational<br />
            Asset Management
          </h3>
        </motion.div>

        {/* 5. DESCRIPTION */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-sans text-gray-700 text-[18px] md:text-[20px] leading-relaxed max-w-4xl mx-auto mb-14 px-4"
        >
          We are a leading asset management company committed to delivering superior risk-adjusted returns through disciplined investment strategies. With over 15 years of excellence, we manage ₹25,000+ Crores for 500,000+ satisfied investors.
        </motion.p>

        {/* 6. BUTTON - Exact Match to Image */}
        <div className="flex justify-center">
          <Link href="/about" className="flex items-stretch group overflow-hidden border border-brand-maroon">
            <motion.div 
              whileHover={{ backgroundColor: "#600000" }}
              className="bg-brand-maroon px-10 py-4 flex items-center transition-colors duration-300"
            >
              <span className="font-sans font-bold text-[15px] text-white whitespace-nowrap">
                Learn More about us
              </span>
            </motion.div>
            <div className="bg-white px-4 flex items-center justify-center border-l border-brand-maroon">
               <motion.svg 
                whileHover={{ x: 3, y: -3 }}
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"
               >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </motion.svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}


