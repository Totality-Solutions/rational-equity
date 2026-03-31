'use client';

import React, { useState } from 'react';
import AnimatedHeader from '@/components/common/AnimatedHeader'; // Adjust path as needed

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
    <section data-theme="dark" className="bg-brand-maroon-hover py-24 text-white font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- REPLACED HEADER SECTION --- */}
        <AnimatedHeader 
          title="Frequently Asked Questions"
          // highlight="QUESTIONS"
          // highlightColor="#ffffff" // White highlight for the dark background
          subheading="Find answers to common questions about investing with us"
          variant="dark" // Ensures text is white
          className="mb-12 md:mb-16"
        />

        {/* Accordion List */}
        <div className="border-t border-white/10"> 
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index} 
              className="group border-b border-white/10 transition-colors duration-200 hover:bg-black/10 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* Question Header */}
              <div className="w-full py-6 md:py-8 px-4 flex items-center justify-between text-left gap-4">
                <span className="text-body-lg  font-weight-medium  group-hover:underline underline-offset-8 decoration-white/40 transition-all">
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
                className={`overflow-hidden transition-all duration-500 ease-in-out px-4 ${
                  openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-rose-100/80 leading-relaxed font-sans text-body-lg  max-w-3xl">
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