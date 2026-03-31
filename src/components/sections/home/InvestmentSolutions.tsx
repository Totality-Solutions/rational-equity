


'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import CTAButton from '@/components/common/CTAButton';
import AnimatedHeader from '@/components/common/AnimatedHeader';

const FUNDS = [
  { title: 'India Long-Only Fund', description: 'Focused long-term equity investments in high-quality Indian businesses', returns: '16.5% CAGR' },
  { title: 'Gold & Silver Miners Fund', description: 'Strategic exposure to precious metals mining companies globally', returns: '18.2% CAGR' },
  { title: 'Absolute Return Fund', description: 'Market-neutral strategies designed for consistent positive returns', returns: '12.8% CAGR' },
];

export default function InvestmentSolutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile to handle spotlight differently
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Spotlight Mask - Larger on desktop, subtle static fade on mobile
  const maskImage = useTransform(
    [smoothX, smoothY],
    ([x, y]) => isMobile 
      ? `radial-gradient(circle at center, black, transparent)` 
      : `radial-gradient(350px circle at ${x}px ${y}px, black, transparent)`
  );

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative bg-[#0a0a0a] py-16 mb-24 text-white font-sans overflow-hidden"
    >
      
      {/* GRID BACKGROUND */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-100 md:opacity-100"
        style={{ WebkitMaskImage: maskImage, maskImage: maskImage }}
      >
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
            backgroundSize: isMobile ? '30px 30px' : '45px 45px' 
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedHeader 
          title="Our Investment Solutions"
          variant="dark" // Use dark to ensure text is white on the black background
        />

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-24">
          {FUNDS.map((fund, index) => (
          <motion.div
            key={fund.title}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: isMobile ? index * 0.1 : 0 }}
            style={{ 
              originY: isMobile ? 0 : (index === 1 ? 0 : 1),
              willChange: "transform", // FIX 1: Hint to browser
              backfaceVisibility: "hidden", // FIX 2: Force GPU rendering
              WebkitFontSmoothing: "antialiased" // FIX 3: Keep text sharp
            }}
            className="relative group h-full will-change-transform" // Added Tailwind class as well
          >
              {/* Rest of your code remains exactly the same */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white flex flex-col">
                
                {/* MAROON FADE - Made responsive (always visible slightly on mobile) */}
                <div 
                  className={`absolute inset-0 z-10 transition-opacity duration-500 pointer-events-none ${
                    isMobile ? 'opacity-40' : 'opacity-0 group-hover:opacity-100'
                  }`}
                  style={{ 
                    background: "linear-gradient(90deg, rgba(139, 0, 0, 0.15) 0%, rgba(139, 0, 0, 0.05) 40%, transparent 60%)" 
                  }}
                />

                {/* CONTENT */}
                <div className="relative z-20 p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-black font-weight-bold text-xl md:text-2xl mb-4 md:mb-6 transition-colors group-hover:text-[#800000]">
                      {fund.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-body-md  leading-relaxed mb-8 md:mb-12">
                      {fund.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-6 border-t border-gray-100 pt-6">
                      <span className="text-gray-400 text-[10px] md:text-[11px] font-weight-bold uppercase tracking-widest">3 Year Returns</span>
                      <span className="text-[#800000] font-weight-bold text-base md:text-lg">{fund.returns}</span>
                    </div>

                    <button className="w-full bg-[#800000] text-white py-3.5 rounded-lg font-weight-bold text-sm transition-all hover:bg-[#600000] active:scale-[0.98]">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        

        <CTAButton
          href="/invest"
          text="Invest With Us"
          variant="light"
          iconClassName="invert" // No invert needed here
        />

      </div>
    </section>
  );
}