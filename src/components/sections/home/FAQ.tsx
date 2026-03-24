'use client';

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
    <section className="bg-brand-maroon py-24 text-white font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header - Serif Font */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Frequently Asked Questions</h2>
          <p className="text-rose-100/70 text-lg max-w-2xl mx-auto font-sans">
            Find answers to common questions about investing with us
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-white/20 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg md:text-xl font-medium tracking-tight group-hover:text-rose-200 transition-colors">
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-rose-100/80 leading-relaxed font-sans">
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