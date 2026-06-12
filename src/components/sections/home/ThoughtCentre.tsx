'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import CTAButton from '@/components/common/CTAButton';

const articles = [
  {
    id: 1,
    date: 'October 12, 2025',
    title: 'Navigating Market Volatility in Q3',
    description: 'An in-depth look at our strategic positioning and how we capitalize on recent market fluctuations to drive long-term value.',
    img: '/images/home-thought/notes1.jpeg',
  },
  {
    id: 2,
    date: 'September 28, 2025',
    title: 'The Case for Indian Manufacturing',
    description: 'Why we believe the manufacturing sector in India is at an inflection point, offering generational wealth creation opportunities.',
    img: '/images/home-thought/notes2.jpeg',
  },
  {
    id: 3,
    date: 'August 15, 2025',
    title: 'Sustainable Alpha: Our ESG Approach',
    description: 'How integrating environmental, social, and governance factors into our fundamental research enhances our portfolio resilience.',
    img: '/images/home-thought/notes3.jpeg',
  },
];

export default function ThoughtCentre() {
  return (
    <section className="w-full pt-12 pb-16 bg-[#FAFAFA]">
      <Container className="mx-auto px-4 space-y-12">

        <div className="mb-12">
        <AnimatedHeader
          title="Notes from the Desk"
          highlight="Notes"
          highlightColor="#9B0000"
          subheading="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          variant="light"
          className="text-black  text-h3-mobile md:text-h3-tab lg:text-h3"
          subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg"
        />
        </div>

        {/* Card Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {articles.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-all duration-300 group"
            >
              {/* Thumbnail Area */}
              <div className="relative w-full h-60 shrink-0">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  priority={item.id === 1}
                />
              </div>

              {/* Card Meta Content Block */}
              <div className="p-8 flex-1 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  {/* Timestamp Line */}
                  <p 
                    className="text-[13px] text-[#A34E4E] font-medium tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {item.date}
                  </p>

                  {/* Title */}
                  <h3 
                    className="text-[24px] md:text-[26px] leading-snug text-gray-900 font-normal tracking-tight group-hover:text-[#9B0000] transition-colors duration-200"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>

                  {/* Description Summary */}
                  <p 
                    className="text-[14px] leading-relaxed text-gray-500 font-normal"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Micro Action Trigger Link */}
                <div className="pt-2">
                  <span 
                    className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-wider font-bold text-[#9B0000] transition-all duration-200"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Read More <span>→</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Action Trigger using CTAButton Component */}
        <div className="w-full flex justify-center">
          <CTAButton 
            href="/notes" 
            text="View all Notes" 
            variant="light"
            primaryColor="#9B0000"
            textColor="#9B0000"
            className="mt-4"
          />
        </div>

      </Container>
    </section>
  );
}