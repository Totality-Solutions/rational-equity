'use client';

import { motion, Variants } from 'framer-motion';
import Container from '@/components/common/Container';
import Link from 'next/link';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const stats = [
  {
    value: '30%',
    color: '#9B0000',
    name: 'India Long-Only Fund',
    slug: 'india-long-only',
    subtitle: 'CAGR Since Inception \u00B7 SEBI Cat III AIF'
  },
  {
    value: '~75%',
    color: '#FFD448',
    name: 'Gold & Silver Miners\u2019 Fund',
    slug: 'gold-silver-miners',
    subtitle: '1-Year Return \u00B7 Gift City \u00B7 IFSC'
  },
  {
    value: '41%',
    color: '#009B58',
    name: 'Absolute Return Fund',
    slug: 'absolute-return',
    subtitle: '10 Yr Model Net CAGR \u00B7 Long-Short'
  }
];

export default function InvestWithUs() {
  return (
    <section className="bg-black py-12 px-8 md:px-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Side */}
          <div className="flex-1 flex flex-col gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair text-h3-mobile md:text-h3-tab lg:text-[56px] lg:leading-[58.8px] text-white font-normal"
            >
              <span className="block">Your capital.</span>
              <span className="block italic">Our conviction.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="text-body-lg-mobile md:text-body-lg-tab lg:text-[20px] lg:leading-[32px] max-w-[640px]"
              style={{ color: '#E3DFDB', fontFamily: "'Lato', sans-serif" }}
            >
              We run three funds across <Link href="/product/india-long-only" className="hover:underline">India equities</Link>, <Link href="/product/gold-silver-miners" className="hover:underline">global gold and silver
              miners</Link>, and an <Link href="/product/absolute-return" className="hover:underline">absolute return strategy</Link>. Every fund began with our
              own capital. It still is — alongside yours.
            </motion.p>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[480px] flex flex-col gap-4">
            {stats.map((fund, i) => (
              <motion.div
                key={fund.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="flex items-center gap-6 p-6 rounded-xl"
                style={{ background: '#1A1A1A' }}
              >
                <span
                  className="font-playfair text-h3-mobile md:text-h3-tab lg:text-[35px] font-semibold shrink-0 w-[100px]"
                  style={{ color: fund.color }}
                >
                  {fund.value}
                </span>
                <div className="flex flex-col gap-1">
                  <Link href={`/product/${fund.slug}`}>
                  <span
                    className="text-body-lg-mobile md:text-body-lg-tab lg:text-[22px] font-medium text-white"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    {fund.name}
                  </span>
                  </Link>
                  <span
                    className="text-body-sm-mobile md:text-body-sm-tab lg:text-[13px]"
                    style={{ color: '#A3A3A3', fontFamily: "'Lato', sans-serif" }}
                  >
                    {fund.subtitle}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
