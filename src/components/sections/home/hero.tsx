'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CTAButton from '@/components/common/CTAButton';
import Container from '@/components/common/Container';

// --- Types ---
interface RollingDigitProps {
  digit: number;
  inView: boolean;
}

interface KBCNumberProps {
  value: string;
  inView: boolean;
}

interface StatCard {
  prefix?: string; // Optional Prefix Parameter
  value: string;
  suffix?: string; // Optional Suffix Parameter
  label: string;
  subLabel?: string; // Optional Sub-Label Parameter (Reduced Font Size)
  icon: string;
  bgImage: string;
}

// --- Sub-Components ---
const RollingDigit: React.FC<RollingDigitProps> = ({ digit, inView }) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  return (
    <div className="inline-block h-[36px] lg:h-[40px] overflow-hidden flex-shrink-0 relative select-none">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: inView ? `-${digit * 10}%` : 0 }}
        transition={{ 
          duration: 2.2, 
          ease: [0.16, 1, 0.3, 1], 
          delay: Math.random() * 0.12 
        }}
        className="flex flex-col will-change-transform"
      >
        {numbers.map((num) => (
          <span 
            key={num} 
            className="h-[36px] lg:h-[40px] w-full flex items-center justify-center tabular-nums leading-[36px] lg:leading-[40px]"
          >
            {num}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const KBCNumber: React.FC<KBCNumberProps> = ({ value, inView }) => {
  return (
    <span className="inline-flex overflow-hidden tabular-nums items-center justify-center h-[36px] lg:h-[40px]">
      {value.split('').map((char, index) => {
        const parsed = parseInt(char);
        if (isNaN(parsed)) {
          return (
            <span 
              key={index} 
              className="flex-shrink-0 select-none px-[0.04em] self-center h-[36px] lg:h-[40px] flex items-center align-baseline"
            >
              {char}
            </span>
          );
        }
        return <RollingDigit key={index} digit={inView ? parsed : 0} inView={inView} />;
      })}
    </span>
  );
};

// --- Config Data ---
const STATS_CARDS: StatCard[] = [
  { 
    value: '75', 
    suffix: '%', 
    label: 'Return in 1 year', 
    subLabel: 'Miners Fund', // Example Sub-Label
    icon: '/icons/grow-up.png', 
    bgImage: '/images/hero-thought/notes1.jpeg' 
  },
  { 
    value: '30', 
    suffix: '%', 
    label: 'CAGR', 
    subLabel: 'India Long Fund', // Example Sub-Label
    icon: '/icons/doller.png',
    bgImage: '/images/hero-thought/notes3.jpeg' 
  },
  { 
    value: '15', 
    suffix: '+', 
    label: 'Years of Investing Experience', 
    // subLabel left out optionally to demonstrate fallback rendering bounds
    icon: '/icons/clock.png',
    bgImage: '/images/hero-thought/notes2.jpeg' 
  },
  { 
    prefix: '#',   
    value: '1', 
    label: 'AIF of FY24', 
    subLabel: 'Top Performing AIF', // Example Sub-Label
    icon: '/icons/taurus.png',
    bgImage: '/images/hero-thought/notes1.jpeg' 
  },
];

const TICKER_LOGOS = [
  { name: '3Portals', icon: '⧉' },
  { name: '45 Degrees°', icon: '↗' },
  { name: 'Acme Corp', icon: '✦' },
  { name: 'AlphaWave', icon: '⬢' },
  { name: 'Biosynthesis', icon: '🧬' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const { ref, inView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true,
    fallbackInView: true 
  });

  if (!mounted) return null;

  return (
    <section ref={ref} className="bg-[#030303] text-white relative overflow-hidden flex flex-col justify-between h-auto py-12">
      
      {/* Background Abstract Vector Wave */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 450C200 300 450 650 800 500C1150 350 1300 600 1600 400" stroke="url(#waveGradient)" strokeWidth="1.5" strokeLinecap="round"/>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7B0000" stopOpacity="0"/>
              <stop offset="50%" stopColor="#7B0000" stopOpacity="1"/>
              <stop offset="100%" stopColor="#7B0000" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content Grid Wrapper */}
      <Container className="relative z-10 w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr] gap-12 lg:gap-16 items-start">
        
        {/* Left Column Text Panel */}
        <div className="space-y-8 flex flex-col justify-center text-left">
          {/* Tight Spacing Headings */}
          <div className="flex flex-col space-y-1">
            <h1 
              className="text-[44px] sm:text-[52px] lg:text-[56px] font-normal tracking-tight text-white leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Rational investing.
            </h1>
            <h2 
              className="text-[44px] sm:text-[52px] lg:text-[56px] italic text-gray-300 font-normal leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Outsized returns.
            </h2>
          </div>

          <p 
            className="text-[14px] sm:text-[15px] leading-relaxed text-gray-400 font-normal max-w-2xl"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            A boutique fund focused on long-term wealth creation for its investors through agility in capital allocation, 
            rigorous investment processes and conviction built on deep insights. Our edge is accurately identifying 
            mega trends & effectively combining it with our deep fundamental, sentimental & technical analysis to 
            identify high-return investment opportunities across asset classes, markets and products.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <CTAButton
              href="/invest-with-us"
              text="Explore our funds"
              variant="maroon-bg"
              iconClassName="invert"
            />
            <CTAButton 
              href="/contact" 
              text="Speak to the team" 
              variant="dark"
              primaryColor="#7B0000"
              textColor="#ffffff"
            />
          </div>
        </div>

        {/* RIGHT COLUMN PANEL: Clean Isolated Rectangular Grids */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-[540px] lg:max-w-none mx-auto">
          {STATS_CARDS.map((stat) => {
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-[16px] px-4 py-6 flex flex-col justify-center items-center text-center transition-all duration-300 w-full overflow-hidden bg-white/[0.05] group shadow-lg border border-white/[0.1]"
                style={{
                  backgroundImage: `url(${stat.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Backdrop Filter Glass Overlay */}
                <div className="absolute inset-0 bg-[#070707]/85 transition-colors duration-300 group-hover:bg-[#070707]/80 z-0" />

                {/* Content Layout Element context */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-auto">
                  
                  {/* Image Icon Bounding Box Container */}
                  <div className="mb-3 h-6 w-6 relative flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <img 
                      src={stat.icon} 
                      alt={`${stat.label} icon`} 
                      className="w-full h-full object-cover invert"
                    />
                  </div>

                  {/* Clean locked text block elements with optimized metrics */}
                  <div 
                    className="text-[20px] lg:text-[28px] font-normal text-white tracking-tight flex items-end justify-center select-none h-[36px] lg:h-[40px]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {/* Optional Prefix Node */}
                    {stat.prefix && (
                      <span className="text-[18px] lg:text-[22px] font-normal mr-0.5 select-none ">
                        {stat.prefix}
                      </span>
                    )}

                    <KBCNumber value={stat.value} inView={inView} />

                    {/* Optional Suffix Node */}
                    {stat.suffix && (
                      <span className="text-[18px] lg:text-[20px] font-normal ml-1 select-none ">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  
                  {/* Label & Sub-Label Wrapper Context */}
                  <div className="mt-2 space-y-0.5">
                    <p 
                      className="text-[12px] font-semibold tracking-[0.05em] text-gray-400 uppercase"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {stat.label}
                    </p>
                    
                    {/* Render Optional Description string only when defined */}
                    {stat.subLabel && (
                      <p 
                        className="text-[11px] tracking-wide text-gray-500 font-normal lowercase first-letter:uppercase"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {stat.subLabel}
                      </p>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>

      {/* Bottom Footer Ticker Marquee */}
      <div className="w-full border-t border-white/[0.05] pt-10 mt-16 bg-transparent overflow-hidden">
        <div className="max-w-[1260px] mx-auto px-6 flex flex-wrap items-center justify-between gap-y-6 gap-x-8 opacity-40 grayscale contrast-200">
          {TICKER_LOGOS.map((logo, index) => (
            <div key={index} className="flex items-center gap-2 select-none">
              <span className="text-2xl font-light text-white">{logo.icon}</span>
              <span 
                className="text-[16px] tracking-wider text-white font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}