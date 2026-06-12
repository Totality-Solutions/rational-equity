'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import CTAButton from '@/components/common/CTAButton';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import Image from 'next/image';

const FUNDS = [
  { title: 'India Long-Only Fund', description: 'Focused long-term equity investments in high-quality Indian businesses', returns: '16.5% CAGR', href: '/product/india-long-only', img: '/images/icons/india-long-only-fund.svg' },
  { title: 'Gold & Silver Miners Fund', description: 'Strategic exposure to precious metals mining companies globally', returns: '18.2% CAGR', href: '/product/gold-silver-miners', img: '/images/icons/gold-&-silver-miners-fund.svg' },
  { title: 'Absolute Return Fund', description: 'Market-neutral strategies designed for consistent positive returns', returns: '12.8% CAGR', href: '/product/absolute-return', img: '/images/icons/absolute-return-fund.svg' },
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
    className="relative bg-white pt-12 font-sans overflow-hidden"
  >
    <Container className="relative z-10">

      {/* Grey Wrapper */}
      <div className="relative bg-[#FAFAFA]  px-8 md:px-16 py-12 overflow-hidden">

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
              className="text-black  text-h3-mobile md:text-h3-tab lg:text-h3"
              title="Our Investment Solutions"
              highlight="Solutions"
              variant="light"
              subheading="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg"
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
                  delay: isMobile ? index * 0.1 : 0,
                }}
                style={{
                  originY: isMobile
                    ? 0
                    : index === 1
                    ? 0
                    : 1,
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  WebkitFontSmoothing: 'antialiased',
                }}
                className="relative group h-full"
              >
                <div
                  className={`
                    relative
                    h-full
                    rounded-[24px]
                    overflow-hidden
                    flex
                    flex-col
                    shadow-sm
                    ${
                      index === 1
                        ? 'bg-white'
                        : 'bg-white'
                    }
                  `}
                >
                  {/* Hover Maroon Fade */}
                  <div
                    className={`absolute inset-0 z-10 transition-opacity duration-500 pointer-events-none ${
                      isMobile
                        ? 'opacity-40'
                        : 'opacity-0 group-hover:opacity-100'
                    }`}
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(139,0,0,0.12) 0%, rgba(139,0,0,0.04) 40%, transparent 60%)',
                    }}
                  />

                  <div className="relative z-20 p-8 flex flex-col flex-1">

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <Image
                        src={fund.img}
                        alt={fund.title}
                        width={28}
                        height={28}
                      />

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
                      <li>• Invests in Indian public markets</li>
                      <li>• Long-only, no derivatives</li>
                      <li>• Registered under SEBI</li>
                      <li>• Heavy tilt toward small & mid-cap</li>
                    </ul>

                    {/* Bottom */}
                    <div className="mt-auto items-center">

                      <div className="bg-[#E9DEDE] rounded-full px-5 py-2 flex border-l-4 border-brand-maroon-hover items-center gap-4">
                        <span className="font-serif font-black text-brand-maroon-hover text-[18px]">
                          {fund.returns}
                        </span>

                        <span className="text-[12px] text-[#555]">
                          3 Year Returns
                        </span>
                      </div>

                      <Link href={fund.href}>
                        <button className="w-full mt-8 py-2 rounded-full bg-brand-maroon text-white text-[18px] font-normal transition-all hover:bg-[#9B0000] cursor-pointer">
                          View Details
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