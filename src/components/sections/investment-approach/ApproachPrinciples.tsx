
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

const principles = [
  {
    num: '1',
    title: 'Identify Asset Class First',
    desc: 'We start at the macro level; broad ideas and market selection come before stock selection \u2014 always.'
  },
  {
    num: '2',
    title: 'Marry Fundamentals with Technicals',
    desc: 'All four analytical lenses \u2014 fundamentals, macro, technicals, sentiment \u2014 must align before we deploy capital.'
  },
  {
    num: '3',
    title: 'Be Flexible & Asset-Class Agnostic',
    desc: 'We have no permanent home \u2014 India, global equities, miners, derivatives. We go where the evidence is strongest.'
  },
  {
    num: '4',
    title: 'Invest Personally First, Always',
    desc: 'Our own capital enters every fund before we invite investors in. Proof of conviction, not just conviction.'
  }
];

export default function ApproachPrinciples() {
  return (
    <section className="bg-white py-[120px]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column */}
          <div className="flex-1 space-y-10">
            {/* Title */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="font-playfair text-[44px] leading-[52px]"
            >
              <motion.span
                variants={slideUpVariants}
                custom={0}
                className="block text-black"
              >
                Safety of capital.
              </motion.span>
              <motion.span
                variants={slideUpVariants}
                custom={0.05}
                className="block italic"
                style={{ color: '#7B0000' }}
              >
                {'Alpha above everything.'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUpVariants}
              custom={0.2}
              className="font-sans text-[18px] leading-[28px] tracking-[0.04em]"
              style={{ color: '#3A3A3A' }}
            >
              At Rational, we believe that the highest returns come from making
              the correct wealth allocation decisions at the right time. We always
              start by asking a fundamental question: which asset class, market,
              and product gives us the best risk-adjusted opportunity and when
              should we enter? And then, we deep dive into which stocks to buy,
              at what time and valuation.
            </motion.p>

            {/* Quote Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUpVariants}
              custom={0.35}
              className="p-8"
              style={{
                background: '#F9F9F9',
                borderLeft: '4px solid #9B0000'
              }}
            >
              <p
                className="font-playfair italic text-[22px] leading-[32px] text-black"
              >
                &ldquo;Safety of capital remains the primary goal. Alpha focus is
                what we do with the capital we protect.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Right Column - Cards */}
          <div className="w-full lg:w-[580px] flex flex-col gap-6">
            {principles.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative flex items-center"
                style={{
                  padding: '13px 15px 13px 70px',
                  background: '#F8F8F8',
                  borderRadius: 16,
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.04)',
                  outline: '1px solid #F5F5F5',
                  minHeight: 90
                }}
              >
                {/* Number */}
                <span
                  className="absolute font-playfair text-[50px] leading-[44.72px] uppercase"
                  style={{
                    left: 24,
                    top: 13,
                    opacity: 0.1,
                    color: '#9B0000'
                  }}
                >
                  {item.num}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-2.5">
                  <h4
                    className="font-playfair text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg font-semibold leading-[24px] tracking-[0.14px] text-black"
                  >
                    {item.title}
                  </h4>
                  <p
                    className="font-sans text-body-md-mobile md:text-body-md-tab lg:text-body-md font-medium leading-[24px] tracking-[0.04em] py-1 text-black/60">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
