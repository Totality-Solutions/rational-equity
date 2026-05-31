'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import CTAButton from '@/components/common/CTAButton';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';

export default function InvestCTASection() {
  const [isMobile, setIsMobile] = useState(false);

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

  const maskImage = useTransform(
    [smoothX, smoothY],
    ([x, y]) => isMobile 
      ? `radial-gradient(circle at center, black, transparent)` 
      : `radial-gradient(350px circle at ${x}px ${y}px, black, transparent)`
  );

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative py-10 bg-[#000000] text-white font-sans overflow-hidden"
    >
      {/* GRID BACKGROUND WITH SPOTLIGHT */}
      {/* <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-100"
        style={{ WebkitMaskImage: maskImage, maskImage: maskImage }}
      >
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #e0dada 1px, transparent 1px), linear-gradient(to bottom, #fafafa 1px, transparent 1px)`,
            backgroundSize: isMobile ? '20px 20px' : '35px 35px' 
          }}
        />
      </motion.div> */}

      <Container className="relative z-10">
        <div className="text-center">
            <AnimatedHeader 
              title="Ready to Start Investing?"
              subheading="Join thousands of investors who trust us with their wealth creation journey"
              variant="dark"
              className="text-black text-h3"
              subheadingClassName="text-gray-700 font-normal mb-6 max-w-2xl mx-auto text-base lg:text-body-lg leading-relaxed"
            />

          <div className="flex justify-center">
            <CTAButton
              href="/invest-with-us"
              text="Invest With Us"
              variant="light"
              iconClassName="invert"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}