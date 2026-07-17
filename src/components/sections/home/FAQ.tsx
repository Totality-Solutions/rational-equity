'use client';

import AnimatedHeader from '@/components/common/AnimatedHeader';
import Container from '@/components/common/Container';
import Image from 'next/image';
import React, { useState } from 'react';
import type { SanityFaq } from '@/sanity/queries';

type FAQItem = {
  question: string;
  answer: string | string[];
};

const defaultHeading = 'Questions we get asked.';
const defaultHighlight = 'get asked.';
const defaultSubtext = "Everything you need to know before investing with us. Can't find an answer? Reach out directly.";

const defaultFaqData: FAQItem[] = [
  {
    question: "What are the asset management services offered by Rational?",
    answer: [
      "As one of the top asset management firms in India, we offer three investment opportunities focused on diversifying investor portfolios. All three follow the same investment philosophy but use different instruments based on investor suitability.",

      "1. India Long-Only Fund — we invest in listed Indian companies.",

      "2. Gold & Silver Miners' Fund — a GIFT City based fund investing in gold & silver mining companies listed in global markets.",

      "3. Absolute Return Fund — we invest in derivatives of publicly listed Indian companies through a long-short strategy."
    ]
  },
  {
    question: "What is the minimum investment amount?",
    answer: [
      "India Fund — ₹1 Crore",
      "GIFT City Fund — US$ 150,000"
    ]
  },
  {
    question: "How do I invest in Rational's funds?",
    answer: [
      'Click the "Invest with Us" button or fill out the contact form. Our team will reach out to walk you through the onboarding and KYC process, share the Private Placement Memorandum, and answer any questions you may have.',
      "Alternatively, reach out on +91 99119 00096 or +91 99872 61105."
    ]
  },
  {
    question: "Which is the regulatory body governing Rational?",
    answer: [
      "Rational is registered with SEBI as a Category II Alternative Investment Fund. Our GIFT City Fund operates under the IFSCA regulatory framework. All funds comply fully with applicable regulations."
    ]
  }
];

export default function FAQ({ faq }: { faq?: SanityFaq }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const heading = faq?.heading || defaultHeading;
  const highlight = faq?.highlightText || defaultHighlight;
  const subtext = faq?.subtext || defaultSubtext;
  const FAQ_DATA: FAQItem[] =
    faq?.faqs && faq.faqs.length > 0
      ? faq.faqs.map((item) => ({ question: item.question, answer: item.answer || [] }))
      : defaultFaqData;

  // Split FAQs into two columns
  const leftColumn = FAQ_DATA.filter((_, index) => index % 2 === 0);
  const rightColumn = FAQ_DATA.filter((_, index) => index % 2 === 1);

  const renderFAQ = (faq: FAQItem, actualIndex: number) => (
    <div 
      key={actualIndex} 
      className="group border rounded-lg border-white/10 transition-colors duration-200 hover:bg-black/10 cursor-pointer"
      onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
    >
      {/* Question Header */}
      <div className="w-full py-3 px-4 flex items-center justify-between text-left gap-4">
        <div className="text-body-lg  font-medium  group-hover:underline underline-offset-8 decoration-white/40 transition-all flex items-center gap-2">
        <span className={`shrink-0 transform transition-transform duration-300`}>
          <Image src="/images/icons/faq1.png" alt="Question mark" width={25} height={25} className="shrink-0" />
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
        <div className="space-y-4 text-rose-100/80 leading-relaxed font-sans text-body-md max-w-3xl">
          {Array.isArray(faq.answer) ? (
            faq.answer.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>{faq.answer}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-brand-maroon-hover py-10 text-white font-sans">
      <Container className="w-full mx-auto px-6 space-y-10">
        
        {/* Header - Fluid Sizing */}
       <AnimatedHeader 
          title="Questions we get asked."
          highlight="get asked."
          highlightColor="#ffffff"
          subheading="Everything you need to know before investing with us. Can't find an answer? Reach out directly."
          variant="dark"
          titleClassName="text-black text-h3-mobile md:text-h3-tab lg:text-h3 mb-2"
          subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-base text-body-lg leading-relaxed"
        />

        {/* Accordion List - Two Independent Columns */}
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((faq, index) => renderFAQ(faq, index * 2))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((faq, index) => renderFAQ(faq, index * 2 + 1))}
          </div>
        </div>
      </Container>
    </section>
  );
}