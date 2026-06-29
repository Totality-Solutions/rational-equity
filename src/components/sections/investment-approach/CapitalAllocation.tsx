
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';

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
    color: 'secondary-ylw',
    icon: (
      <img src="/images/icons/india-long-only-fund-white.svg" alt="India Long-Only Fund" className="w-10 h-10" />
    ),
    desc: "India\u2019s structural multi-decade growth story \u2014 captured through high-conviction small and mid-cap equities. Long-only, no derivatives. Launched at a market bottom in March 2023.",
    statValue: '30%',
    statColor: '#FFD448',
    statLabel: 'CAGR since inception'
  },
  {
    label: 'Fund II \u00B7 GIFT City',
    name: 'Gold & Silver Miners\u2019 Fund',
    color: 'secondary-grn',
    icon: (
      <img src="/images/icons/gold-&-silver-miners-fund-white.svg" alt="Gold & Silver Miners Fund" className="w-10 h-10" />
    ),
    desc: 'The global gold and silver re-monetisation cycle \u2014 captured through listed junior miners offering 3\u20135x leverage to the underlying commodity. Operated from GIFT City, open to Indians and global investors.',
    statValue: '~75%',
    statColor: '#9B0000',
    statLabel: '1-year return'
  },
  {
    label: 'Fund III \u00B7 SEBI + GIFT City',
    name: 'Absolute Return Fund',
    color: 'secondary-blu',
    icon: (
      <img src="/images/icons/absolute-return-fund-white.svg" alt="Absolute Return Fund" className="w-10 h-10" />
    ),
    desc: 'A quant-plus-discretion Long-Short strategy designed to capture large directional moves in Indian derivatives while sitting out sideways choppiness.',
    statValue: '41%',
    statColor: '#009B58',
    statLabel: '10-yr model net CAGR'
  }
];

export default function CapitalAllocation() {
  return (
    <section className="bg-brand-grey py-12">
      <Container>
        <div className="flex flex-col items-center gap-12">
          {/* Header */}
          <div className="flex flex-col items-center gap-4">
            <AnimatedHeader
                          title="Capital allocation across themes."
                          highlight="across themes."
                          subheading="Each fund applies the same investment philosophy to a different macro theme, instrument, and investor profile."
                          className=""
                          highlightClassName="italic"
                          titleClassName="text-center text-black text-h3-mobile md:text-h3-tab lg:text-h2 font-playfair font-normal leading-tight tracking-tight"
                          subheadingClassName="text-center text-black/60 text-body-md-mobile md:text-body-md-tab lg:text-body-md leading-relaxed"
                        />

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
                className={`flex-1 flex flex-col overflow-hidden rounded-[20px] border-t-4 border-${fund.color}`}
                style={{
                  background: '#111111',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.03)'
                }}
              >
                {/* Top Color Bar */}
                

                {/* Card Content */}
                <div className="flex flex-col p-10">
                  {/* Fund Label + Name */}
                  <div className="flex flex-col gap-5 pb-5">
                    <p
                      className="font-sans text-[14px] leading-[24.38px] text-white/50"
                    >
                      {fund.label}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10">{fund.icon}</span>
                      <h3 className="font-playfair text-h4 leading-[37.5px] text-white">
                        {fund.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description + Stat */}
                  <div className="flex flex-col gap-5">
                    <p
                      className="text-white/50 font-sans text-body-md-mobile md:text-body-md-tab lg:text-body-md leading-[24.38px] pb-2.5"
                      style={{minHeight: 132 }}
                    >
                      {fund.desc}
                    </p>
                    <div
                      className="inline-flex items-center gap-2.5 px-5 py-[15px] rounded-full w-fit bg-white/10"
                    >
                      <span
                        className={`font-playfair text-h4-mobile md:text-h4-tab lg:text-h4 font-semibold leading-[32px] text-${fund.color}`}
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
