


'use client';

import AnimatedHeader from '@/components/common/AnimatedHeader';
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

  return (
    <section className="bg-brand-maroon-hover py-12 text-white font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header - Fluid Sizing */}
       <AnimatedHeader 
          title="Frequently Asked Questions"
          highlight="Asked Questions"
          highlightColor="#ffffff" // Keeping highlight white for contrast on maroon
          subheading="Find answers to common questions about investing with us"
          variant="dark"
          className="mb-12 md:mb-20"
          titleClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          subheadingClassName="text-rose-100/70 max-w-2xl mx-auto"
        />

        {/* Accordion List */}
     {/* Accordion List */}
<div className=" "> {/* Top border to start the list */}
  {FAQ_DATA.map((faq, index) => (
    <div 
      key={index} 
      // Move hover effect here so it highlights the whole block
      className="group border-b border-white/10 transition-colors duration-200 hover:bg-black/10 cursor-pointer"
      // Clicking anywhere on the block now toggles the FAQ
      onClick={() => setOpenIndex(openIndex === index ? null : index)}
    >
      {/* Question Header */}
      <div className="w-full py-5 md:py-4 px-4 flex items-center justify-between text-left gap-4">
        <span className="text-base md:text-xl font-medium tracking-tight group-hover:underline underline-offset-8 decoration-white/40 transition-all">
          {faq.question}
        </span>
        <span className={`flex-shrink-0 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
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
        className={`overflow-hidden transition-all duration-300 ease-in-out px-4 ${
          openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-white leading-relaxed font-sans text-sm md:text-base max-w-3xl">
          {faq.answer}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}