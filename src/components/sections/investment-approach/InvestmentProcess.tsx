

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';

const processes = [
  {
    title: "Idea Generation",
    description: "Systematic screening of investment universe based on quality parameters including ROE, debt levels, earnings growth, and competitive positioning."
  },
  {
    title: "Fundamental Research",
    description: "Deep-dive analysis of business models, industry dynamics, management quality, and financial health through primary and secondary research."
  },
  {
    title: "Valuation Analysis",
    description: "Rigorous valuation using multiple methodologies to ensure adequate margin of safety and attractive risk-reward."
  },
  {
    title: "Portfolio Construction",
    description: "Disciplined portfolio building with appropriate position sizing, sector diversification, and risk management."
  },
  {
    title: "Continuous Monitoring",
    description: "Regular review of portfolio companies, tracking business performance, and rebalancing based on changing fundamentals."
  }
];

export default function InvestmentProcess() {
  return (
    <section className="bg-[#F9FAFB] py-16 md:py-24 lg:py-24">
      <Container>
        {/* Header */}
        <AnimatedHeader
          title="Our Investment Process"
          highlight="Investment"
          highlightColor="#8B0000"
          className="mb-2!"
          titleClassName="text-4xl sm:text-5xl lg:text-6xl leading-tight"
        />

        {/* Process List */}
        <div className=" mx-auto px-2">
          {processes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col md:flex-row items-start md:items-center py-10 md:py-14 lg:py-16 ${i !== processes.length - 1 ? 'border-b border-gray-200' : ''
                }`}
            >
              {/* Title Section */}
              <div className="w-full md:w-[30%] flex-shrink-0 flex items-center mb-6 md:mb-0 pr-4">
                <div className="hidden md:block w-1 h-10 bg-[#8B0000]/20 mr-8 rounded-full" />
                <h3 className="font-sans font-bold text-xl md:text-2xl text-gray-900 tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Description Section - Changed to flex-1 for better reliability */}
              <div className="w-full md:flex-1">
                <p className="font-sans text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}