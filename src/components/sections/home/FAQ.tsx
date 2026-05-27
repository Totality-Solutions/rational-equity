'use client';

import AnimatedHeader from '@/components/common/AnimatedHeader';
import Image from 'next/image';
import React, { useState } from 'react';

const FAQ_DATA = [
  {
    question: "What is the minimum investment amount?",
    answer: "The minimum investment amount varies by fund. For our Long-Only strategy, it typically starts at ₹50 Lakhs as per SEBI regulations for AIFs."
  },
  {
    question: "How can I invest in Rational AMC funds?",
    answer: "You can start by clicking the 'Invest With Us' button. Our team will guide you through the digital onboarding and KYC process."
  },
  {
    question: "What makes Rational AMC different?",
    answer: "We focus on high-conviction, long-only strategies with a disciplined research process and over 15 years of market excellence."
  },
  {
    question: "How do I track my investments?",
    answer: "Investors receive monthly performance reports and have access to a dedicated dashboard for real-time tracking."
  },
  {
    question: "What is the redemption process?",
    answer: "Redemption requests can be placed through your relationship manager, subject to the specific lock-in periods of the fund."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Split FAQs into two columns
  const leftColumn = FAQ_DATA.filter((_, index) => index % 2 === 0);
  const rightColumn = FAQ_DATA.filter((_, index) => index % 2 === 1);

  const renderFAQ = (faq: typeof FAQ_DATA[0], actualIndex: number) => (
    <div 
      key={actualIndex} 
      className="group border rounded-lg border-white/10 transition-colors duration-200 hover:bg-black/10 cursor-pointer"
      onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
    >
      {/* Question Header */}
      <div className="w-full py-4 px-4 flex items-center justify-between text-left gap-4">
        <div className="text-body-lg  font-medium  group-hover:underline underline-offset-8 decoration-white/40 transition-all flex items-center gap-2">
        <span className={`shrink-0 transform transition-transform duration-300`}>
          <Image src="/images/icons/graph-with-question.svg" alt="Question mark" width={20} height={20} className="shrink-0" />
        </span>
          <span>{faq.question}</span>
        </div>
        <span className={`shrink-0 transform transition-transform duration-300 ${openIndex === actualIndex ? 'rotate-180' : ''}`}>
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
            className="w-4 h-4 md:w-5 md:h-5"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </div>
      
      {/* Answer Content */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out px-4 ${
          openIndex === actualIndex ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-rose-100/80 leading-relaxed font-sans text-body-lg  max-w-3xl">
          {faq.answer}
        </p>
      </div>
    </div>
  );

  return (
    <section className="bg-brand-maroon-hover py-10 text-white font-sans">
      <div className="w-full mx-auto px-6 space-y-10">
        
        {/* Header - Fluid Sizing */}
       <AnimatedHeader 
          title="Frequently Asked Questions"
          highlight="Asked Questions"
          highlightColor="#ffffff"
          subheading="Find answers to common questions about investing with us"
          variant="dark"
          className=" text-black text-h3"
          subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-base text-body-lg leading-relaxed"
        />

        {/* Accordion List - Two Independent Columns */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((faq, index) => renderFAQ(faq, index * 2))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((faq, index) => renderFAQ(faq, index * 2 + 1))}
          </div>
        </div>
      </div>
    </section>
  );
}