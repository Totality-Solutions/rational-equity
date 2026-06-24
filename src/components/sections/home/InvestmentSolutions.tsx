'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import CTAButton from '@/components/common/CTAButton';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import Image from 'next/image';

const FUNDS = [
  {
    title: 'India Long-Only Fund',
    description:
      'A high-conviction portfolio of Indian listed equities with a heavy tilt toward small and mid-caps where we see asymmetric reward.',
    returns: '30% CAGR',
    returnsLabel: '3 Year Returns',
    href: '/product/india-long-only',
    img: '/images/icons/india-long-only-fund.svg',
    bullets: [
      'Invests in Indian public markets',
      'Long-only, no derivatives',
      'Registered under SEBI',
      'Heavy tilt toward small & mid-cap',
    ],
  },
  {
    title: 'Gold & Silver Miners Fund',
    description:
      'A focused vehicle for strategic exposure to global gold and silver mining equities — operated from GIFT City.',
    returns: '~75% CAGR',
    returnsLabel: '1 Year Returns',
    href: '/product/gold-silver-miners',
    img: '/images/icons/gold-&-silver-miners-fund.svg',
    bullets: [
      'Invests in gold & silver miners globally',
      'Long-only, no derivatives',
      'Operates from GIFT City',
      'No ETFs, no other commodities',
    ],
  },
  {
    title: 'Absolute Return Fund',
    description:
      'A quant plus discretion model-based Long-Short strategy that focuses on identifying periods of extreme greed and fear to capture significantly large moves while sitting out of sideways choppiness and major drawdowns.',
    returns: '41% CAGR',
    returnsLabel: '10-Year Model Net CAGR',
    href: '/product/absolute-return',
    img: '/images/icons/absolute-return-fund.svg',
    bullets: [
      'Long-short strategy',
      'Derivatives of publicly listed Indian companies',
      'Indians invest via SEBI registered fund',
      'Others invest via GIFT City Fund',
    ],
  },
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
    className="relative bg-[#FAFAFA] pt-12 font-sans overflow-hidden"
  >
    <Container className="relative z-10">

      {/* Grey Wrapper */}
      <div className="relative px-8 md:px-16 py-12 overflow-hidden">

        {/* GRID BACKGROUND */}
        {/* <motion.div
          className="absolute inset-0 z-0 pointer-events-none opacity-100"
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
              `,
              backgroundSize: isMobile
                ? '30px 30px'
                : '45px 45px',
            }}
          />
        </motion.div> */}

        {/* Content */}
        <div className="relative z-10">

          {/* Heading */}
          <div className="text-center mb-12">
            <AnimatedHeader
              titleClassName="text-black text-h3-mobile md:text-h3-tab lg:text-h3 mb-2"
              title="Three strategies. One philosophy."
              highlight="One philosophy."
              variant="light"
              subheading="Rational ranks among the top asset management companies in India, offering specialized products strategically constructed to maximize returns through deep insights and a research-driven approach and align manager incentives with investor outcomes."
              subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-body-md-mobile md:text-body-md-tab lg:text-body-md"
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {FUNDS.map((fund, index) => (
    <motion.div
      key={fund.title}
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      style={{
        originY: 0, // all cards animate from top — consistent across all
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'antialiased',
      }}
      className="relative group h-full"
    >
      <div className="relative h-full rounded-[24px] overflow-hidden flex flex-col shadow-sm bg-white">
        
        {/* Hover Maroon Fade */}
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-500 pointer-events-none ${
            isMobile ? 'opacity-40' : 'opacity-0 group-hover:opacity-100'
          }`}
          style={{
            background:
              'linear-gradient(90deg, rgba(139,0,0,0.12) 0%, rgba(139,0,0,0.04) 40%, transparent 60%)',
          }}
        />

        <div className="relative z-20 p-8 flex flex-col flex-1">

          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Image src={fund.img} alt={fund.title} width={28} height={28} />
            <h3 className="font-serif text-[20px] leading-tight text-black transition-colors group-hover:text-[#800000]">
              {fund.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-black/75 text-body-md leading-relaxed mb-8">
            {fund.description}
          </p>

          {/* Bullets */}
          <ul className="space-y-2 text-black/75 text-body-md mb-10">
            {fund.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>

          {/* Bottom */}
          <div className="mt-auto items-center">
            <div className="bg-[#E9DEDE] rounded-full px-5 py-2 flex border-l-4 border-brand-maroon-hover items-center gap-2">
              <span className="font-serif font-black text-brand-maroon-hover text-[18px]">
                {fund.returns}
              </span>
              <span className="text-[12px] text-[#555]">
                {fund.returnsLabel}
              </span>
            </div>

            <Link href={fund.href}>
              <button className="w-full mt-8 py-2 rounded-full bg-brand-maroon text-white text-[16px] font-normal transition-all hover:bg-[#9B0000] cursor-pointer">
                Download Investor Presentation
              </button>
            </Link>
          </div>

        </div>
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </div>
    </Container>
  </section>
);
}