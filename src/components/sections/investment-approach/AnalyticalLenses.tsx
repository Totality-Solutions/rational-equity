
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

interface Lens {
  title: string;
  color: string;
  icon: string;
  desc: string;
  quote: string;
  letter: string;
}

const lenses: Lens[] = [
  {
    title: 'Macro',
    color: '#9B0000',
    icon: '/icons/macroeconomics.png',
    desc: 'Top-down identification of inflection points in macro indicators like global monetary cycles, commodity cycles and central bank behavior. Through these structural macro shifts we develop actionable investment themes ahead of market consensus.',
    quote: '\u201CTranslating macro inflection points into actionable, high-conviction investment themes.\u201D',
    letter: 'M'
  },
  {
    title: 'Fundamentals',
    color: '#FFD448',
    icon: '/icons/risk.png',
    desc: 'Deep intrinsic research on every position \u2014 we look for businesses with strong free cash flow, cheap valuations, and a clear re-rating catalyst. No position enters the portfolio without a complete fundamental case.',
    quote: '\u201CValue-based research to identify the correct proxies for each macro theme.\u201D',
    letter: 'F'
  },
  {
    title: 'Sentiment',
    color: '#009B58',
    icon: '/icons/indicator.png',
    desc: 'Market sentiment = crowd positioning, put-call ratios, institutional flows \u2014 tells us where and when there is extreme fear and extreme greed. We look for extreme fear so our entry signal can achieve euphoria as our exit signal.',
    quote: '\u201CWe buy when others are fearful. We exit when conviction becomes consensus.\u201D',
    letter: 'S'
  },
  {
    title: 'Technicals',
    color: '#3CC3DF',
    icon: '/icons/technical-analysis.png',
    desc: 'Price action analysis across multiple time frames to determine the optimal entry and exit. A fundamentally sound thesis in a technically broken structure remains a value trap until the chart confirms. We wait for price to align.',
    quote: '\u201CThe right thesis at the right price \u2014 entry timing is as important as stock selection.\u201D',
    letter: 'T'
  }
];

export default function AnalyticalLenses() {
  return (
    <section className="bg-black py-20">
      <Container>
        <div className="flex flex-col gap-20">
          {/* Header */}
          <div className="flex flex-col items-center gap-6 mx-auto">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="font-playfair text-h2 leading-13 text-center"
            >
              {'Marrying Macro, Fundamentals, Sentiment & Technicals.'.split(
                /(Macro|Fundamentals|Sentiment|Technicals)/
              ).map((part, i) => {
                const isHighlight = ['Macro', 'Fundamentals', 'Sentiment', 'Technicals'].includes(part);
                return isHighlight ? (
                  <span
                    key={i}
                    className="inline-block"
                    style={{ color: '#9B0000' }}
                  >
                    {part.split('').map((char, ci) => (
                      <motion.span
                        key={ci}
                        custom={ci}
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </span>
                ) : (
                  <span key={i} className="inline-block text-white">
                    {part.split('').map((char, ci) => (
                      <motion.span
                        key={ci}
                        custom={ci}
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </span>
                );
              })}
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUpVariants}
              custom={0.3}
              className="font-sans text-[18px] leading-[28px] tracking-[0.04em] text-start"
              style={{ color: '#E3DFDB' }}
            >
              Every position we take is the product of all four analytical lenses
              working in alignment. We never act on one dimension alone.
            </motion.p>
          </div>

          {/* Lenses Grid — Figma match */}
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {lenses.map((lens, i) => (
              <motion.div
                key={lens.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative flex flex-col px-6 pt-10 pb-8 overflow-hidden border-b border-[#262626] lg:border-b-0 lg:border-l lg:first:border-l-0"
                style={{
                  borderTop: `2px solid ${lens.color}`
                }}
              >
                {/* Icon Area */}
                <div className="h-[110px] flex items-start">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden"
                    style={{
                      background: '#0A0A0A',
                      border: '1px solid rgba(255,255,255,0.08)'
                    }}
                  >
                    <img src={lens.icon} alt={lens.title} className="w-8 h-8 object-contain" />
                  </div>
                </div>

                {/* Title */}
                <div className="h-[60px]">
                  <h3 className="font-playfair text-[28px] leading-none text-white">
                    {lens.title}
                  </h3>
                </div>

                {/* Accent Line */}
                <div
                  className="w-10 h-[2px] mb-5"
                  style={{ background: lens.color }}
                />

                {/* Description */}
                <div className="min-h-[230px]">
                  <p
                    className="
                      font-sans
                      text-[16px]
                      leading-[1.75]
                      tracking-[0.02em]
                    "
                    style={{ color: '#B0B0B0' }}
                  >
                    {lens.desc}
                  </p>
                </div>

                {/* Divider */}
                <div className="mt-4 mb-6">
                  <div className="w-full h-px bg-[#363636]" />
                </div>

                {/* Quote */}
                <div className="min-h-[110px]">
                  <p
                    className="
                      font-playfair
                      italic
                      text-[16px]
                      leading-[1.7]
                    "
                    style={{ color: '#8E8E8E' }}
                  >
                    {lens.quote}
                  </p>
                </div>

                {/* Background Letter */}
                <span
                  className="
                    absolute
                    right-6
                    bottom-2
                    font-playfair
                    text-[95px]
                    leading-none
                    pointer-events-none
                    select-none
                  "
                  style={{
                    color: '#FFFFFF',
                    opacity: 0.03
                  }}
                >
                  {lens.letter}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
