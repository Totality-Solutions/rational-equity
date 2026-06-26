
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

const principles = [
  {
    num: '1',
    title: 'Identify the Right Asset Class First',
    desc: 'We start at the macro level. Asset class and market selection come before stock selection — always.'
  },
  {
    num: '2',
    title: 'Marry Fundamentals with Technicals',
    desc: 'All four analytical lenses — fundamentals, macro, technicals, sentiment — must align before we deploy capital.'
  },
  {
    num: '3',
    title: 'Be Flexible & Asset-Class Agnostic',
    desc: 'We have no permanent home — India, global equities, miners, derivatives. We go where the evidence is strongest.'
  },
  {
    num: '4',
    title: 'Invest Personally First, Always',
    desc: 'Our own capital enters every fund before we invite investors in. Proof of conviction, not just conviction.'
  }
];

export default function ApproachPrinciples() {
  return (
    <section className="bg-white py-6 lg:py-12">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          {/* Left Column */}
          <div className="flex-1 space-y-5 lg:space-y-7">
            {/* Title */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="font-playfair text-[44px] leading-[52px]"
            >
              <AnimatedHeader
                title="Safety of capital."
                highlight=""
                subheading=""
                className=""
                highlightClassName="italic"
                titleClassName="text-start text-h3-mobile md:text-h3-tab lg:text-h2 font-playfair font-normal leading-tight tracking-tight"
                subheadingClassName="text-start text-black/60 text-body-md-mobile md:text-body-md-tab lg:text-body-md leading-relaxed"
              />
              <AnimatedHeader
                title="Alpha above everything."
                highlight="Alpha above everything."
                subheading=""
                className=""
                highlightClassName="italic"
                titleClassName="text-start text-h3-mobile md:text-h3-tab lg:text-h2 font-playfair font-normal leading-tight tracking-tight"
                subheadingClassName="text-start text-black/60 text-body-md-mobile md:text-body-md-tab lg:text-body-md leading-relaxed"
              />
            </motion.h2>

            {/* Description */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUpVariants}
              custom={0.2}
              className="font-sans text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg  leading-[20px] lg:leading-[28px] tracking-[0.04em] text-black/60"
            >
              At Rational, we believe that the highest returns come from making
              the correct wealth allocation decisions at the right time. We always
              start by asking a fundamental question: which asset class, market,
              and product gives us the best risk-adjusted opportunity and when
              should we enter? And then, we deep dive into which stocks to buy,
              at what time and valuation.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUpVariants}
              custom={0.2}
              className="font-sans text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg leading-[20px] lg:leading-[28px] tracking-[0.04em] text-black/60"
            >
              This is what we call disciplined capital allocation — the willingness and agility to move capital decisively from one asset class to another when the evidence is overwhelming
            </motion.p>

            {/* Quote Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUpVariants}
              custom={0.35}
              className="p-4 lg:p-8"
              style={{
                background: '#F9F9F9',
                borderLeft: '3px solid #9B0000'
              }}
            >
              <p
                className="font-playfair italic text-h4-mobile md:text-h4-tab lg:text-h4 lg:leading-8 text-black"
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
                className="relative flex items-center border-l-3 border-brand-maroon"
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
                  className="absolute font-playfair text-[36px] leading-[44.72px] uppercase"
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
                <div className="flex flex-col gap-1 lg:gap-2.5">
                  <h4
                    className="font-playfair text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg font-semibold leading-[24px] tracking-[0.14px] text-black"
                  >
                    {item.title}
                  </h4>
                  <p
                    className="font-sans text-body-md-mobile md:text-body-md-tab lg:text-body-md font-medium leading-4 lg:leading-[24px] tracking-[0.04em] lgpy-1 text-black/60">
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
