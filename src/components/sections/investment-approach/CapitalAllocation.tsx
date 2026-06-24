
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
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

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.35, ease: 'easeOut' }
  })
};

interface Fund {
  label: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  desc: string;
  statValue: string;
  statColor: string;
  statLabel: string;
}

const funds: Fund[] = [
  {
    label: 'Fund I \u00B7 SEBI AIF',
    name: 'India Long-Only Fund',
    color: '#FFDC6B',
    icon: (
      <img src="/images/icons/india-long-only-fund.svg" alt="India Long-Only Fund" className="w-6 h-6" />
    ),
    desc: "India\u2019s structural multi-decade growth story \u2014 captured through high-conviction small and mid-cap equities. Long-only, no derivatives. Launched at a market bottom in March 2023.",
    statValue: '30%',
    statColor: '#FFD448',
    statLabel: 'CAGR since inception'
  },
  {
    label: 'Fund II \u00B7 GIFT City',
    name: 'Gold & Silver Miners\u2019 Fund',
    color: '#9B0000',
    icon: (
      <img src="/images/icons/gold-&-silver-miners-fund.svg" alt="Gold & Silver Miners Fund" className="w-6 h-6" />
    ),
    desc: 'The global gold and silver re-monetisation cycle \u2014 captured through listed junior miners offering 3\u20135x leverage to the underlying commodity. Operated from GIFT City, open to Indians and global investors.',
    statValue: '~75%',
    statColor: '#9B0000',
    statLabel: '1-year return'
  },
  {
    label: 'Fund III \u00B7 SEBI + GIFT City',
    name: 'Absolute Return Fund',
    color: '#00BC7D',
    icon: (
      <img src="/images/icons/absolute-return-fund.svg" alt="Absolute Return Fund" className="w-6 h-6" />
    ),
    desc: 'A quant-plus-discretion Long-Short strategy designed to capture large directional moves in Indian derivatives while sitting out sideways choppiness.',
    statValue: '41%',
    statColor: '#009B58',
    statLabel: '10-yr model net CAGR'
  }
];

export default function CapitalAllocation() {
  return (
    <section className="bg-black py-12">
      <Container>
        <div className="flex flex-col items-center gap-16">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 max-w-[768px]">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="font-playfair text-[44px] leading-[52px] text-center"
            >
              <span className="text-white">
                {'Capital allocation '.split('').map((char, i) => (
                  <motion.span key={i} custom={i} variants={letterVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
              <span className="italic" style={{ color: '#9B0000' }}>
                {'across themes.'.split('').map((char, i) => (
                  <motion.span key={i} custom={i} variants={letterVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUpVariants}
              custom={0.3}
              className="font-sans text-[18px] leading-[28px] tracking-[0.04em] text-center"
              style={{ color: '#E3DFDB' }}
            >
              Each fund applies the same investment philosophy to a different
              macro theme, instrument, and investor profile.
            </motion.p>
          </div>

          {/* Fund Cards */}
          <div className="flex flex-col lg:flex-row gap-10">
            {funds.map((fund, i) => (
              <motion.div
                key={fund.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex-1 flex flex-col overflow-hidden rounded-[20px]"
                style={{
                  background: '#111111',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.03)'
                }}
              >
                {/* Top Color Bar */}
                <div className="w-full h-[2px] overflow-hidden">
                  <div
                    className="h-[4px] -mt-[1px]"
                    style={{ background: fund.color }}
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col p-10">
                  {/* Fund Label + Name */}
                  <div className="flex flex-col gap-5 pb-5">
                    <p
                      className="font-sans text-[14px] leading-[24.38px]"
                      style={{ color: '#555555' }}
                    >
                      {fund.label}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="shrink-0">{fund.icon}</span>
                      <h3 className="font-playfair text-h4 leading-[37.5px] text-white">
                        {fund.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description + Stat */}
                  <div className="flex flex-col gap-5">
                    <p
                      className="font-sans text-body-md-mobile md:text-body-md-tab lg:text-body-md leading-[24.38px] pb-2.5"
                      style={{ color: '#555555', minHeight: 132 }}
                    >
                      {fund.desc}
                    </p>
                    <div
                      className="inline-flex items-center gap-2.5 px-5 py-[15px] rounded-full w-fit"
                      style={{ background: 'rgba(0, 0, 0, 0.30)' }}
                    >
                      <span
                        className="font-playfair text-h4-mobile md:text-h4-tab lg:text-h4 font-semibold leading-[32px]"
                        style={{ color: fund.statColor }}
                      >
                        {fund.statValue}
                      </span>
                      <span
                        className="font-sans text-[14px] leading-[24px] tracking-[0.04em]"
                        style={{ color: '#FAFAFA', opacity: 0.6 }}
                      >
                        {fund.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
