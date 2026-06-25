
'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/common/Container';

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: customDelay
    }
  })
};

interface Step {
  img: string;
  category: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    img: '/icons/macroeconomics.png',
    category: 'Macro Screening',
    title: 'Identify the Mega-Trend.',
    desc: 'Scan for structural shifts large enough to sustain multi-year tailwinds. What is the market mispricing, and why?'
  },
  {
    img: '/images/journey/2.svg',
    category: 'Instrument Selection',
    title: 'Choose the Most Powerful Proxy.',
    desc: 'Identify the instrument with the most asymmetric exposure to the thesis \u2014 not always the most obvious one.'
  },
  {
    img: '/images/journey/3.svg',
    category: 'Conviction',
    title: 'Deep Research on Each Name.',
    desc: 'Primary research on every position. Strong FCF, clean balance sheet, credible management, attractive valuation.'
  },
  {
    img: '/images/journey/4.svg',
    category: 'Technical Setup',
    title: 'Wait for the Right Entry.',
    desc: 'Price action and sentiment must confirm the thesis before capital is deployed. Entry is as important as the idea.'
  },
  {
    img: '/icons/risk.png',
    category: 'Sizing & Execution',
    title: 'Build, then Exit Decisively.',
    desc: 'Hold through volatility as long as the thesis is intact. Exit when it has played out \u2014 no anchoring, no attachment.'
  }
];

export default function InsightToInvestment() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-[120px]">
      <Container>
        <div className="flex flex-col gap-20">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 max-w-[768px] mx-auto">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="font-playfair text-[44px] leading-[52px] text-center"
            >
              <span className="text-black">How we go from</span>
              <span style={{ color: '#9B0000' }}> </span>
              <span className="italic" style={{ color: '#9B0000' }}>
                insight to investment.
              </span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUpVariants}
              custom={0.3}
              className="font-sans text-[18px] leading-[28px] tracking-[0.04em] text-center"
              style={{ color: '#3A3A3A' }}
            >
              A rigorous, repeatable 5-step process that we have followed across
              every fund and every major capital allocation decision since 2008.
            </motion.p>
          </div>

          {/* Steps Row */}
          <div className="relative">
            {/* Horizontal line */}
            <div
              className="absolute left-0 right-0 h-[1px]"
              style={{ top: 24, background: 'rgba(0, 0, 0, 0.50)' }}
            />

            <div className="flex flex-col sm:flex-row gap-10 sm:gap-5">
              {steps.map((step, i) => {
                const isActive = hoveredIndex === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="flex-1 flex flex-col items-center gap-5 sm:px-2.5 cursor-pointer"
                  >
                    {/* Icon Circle */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative z-10 transition-all duration-300 bg-white"
                      style={{
                        outline: `1px solid ${isActive ? '#9B0000' : 'rgba(0, 0, 0, 0.50)'}`,
                        outlineOffset: '-1px',
                        background: isActive ? '#FFE4E4' : 'white'
                      }}
                    >
                      <Image
                        src={step.img}
                        width={24}
                        height={24}
                        alt={step.category}
                        className={`transition-opacity w-8 h-8 duration-300 ${isActive ? 'opacity-100' : 'opacity-80'}`}
                      />
                    </div>

                    {/* Title Area */}
                    <div className="flex flex-col items-center gap-1 h-16">
                      <span
                        className="font-sans text-body-sm-mobile md:text-body-sm-tab lg:text-body-sm leading-[24px] tracking-[0.04em] transition-colors duration-300"
                        style={{ color: '#9B0000' }}
                      >
                        {step.category}
                      </span>
                      <span
                        className="font-playfair text-lg leading-[22px] tracking-[0.04em] text-center"
                        style={{ color: 'black' }}
                      >
                        {step.title}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className="font-sans text-[16px] leading-[26px] tracking-[0.03em] text-center"
                      style={{ color: 'black', opacity: 0.6 }}
                    >
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
