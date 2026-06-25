'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import CTAButton from '@/components/common/CTAButton';
import { DynamicArticleModal } from '@/components/common/DynamicArticleModal'; // Adjust import path if needed

// Unified structural mapping schema
interface ArticleItem {
  id: number;
  date: string;
  title: string;
  description: string;
  img: string;
}

const articles: ArticleItem[] = [
  {
    id: 1,
    date: 'October 12, 2025',
    title: "Why the gold cycle isn't over.",
    description: 'A look at miner economics, policy tailwinds, and why we still see asymmetric upside.',
    img: '/images/home-thought/notes1.jpeg',
  },
  {
    id: 2,
    date: 'September 28, 2025',
    title: 'The patience premium.',
    description: 'How long holding periods quietly outperform in a market obsessed with quarters.',
    img: '/images/home-thought/notes2.jpeg',
  },
  {
    id: 3,
    date: 'August 15, 2025',
    title: 'Small-caps after a hot year',
    description: "What changes — and what doesn't — when a corner of the market gets crowded.",
    img: '/images/home-thought/notes3.jpeg',
  },
];

export default function ThoughtCentre() {
  // Modal tracking instance state
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  return (
    <section className="w-full pt-12 pb-16 bg-[#FAFAFA]">
      <Container className="mx-auto px-4 space-y-12">

        <div className="mb-12">
          <AnimatedHeader
            title="Notes from the Desk."
            highlight="the Desk."
            highlightColor="#9B0000"
            subheading="Long-form views on markets, philosophy, and the businesses we own."
            variant="light"
            titleClassName="text-black text-h3-mobile md:text-h3-tab lg:text-h3"
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
                    className="text-[13px] text-brand-maroon font-semibold tracking-wide"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.date}
                  </p>

                  {/* Title */}
                  <h3 
                    className="text-[24px] md:text-[26px] leading-snug font-playfair text-gray-900 font-normal tracking-tight group-hover:text-[#9B0000] transition-colors duration-200"
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

                {/* Micro Action Trigger Link — Enhanced into an accessible button hook */}
                <div className="pt-2">
                  <button 
                    type="button"
                    onClick={() => setActiveArticle(item)}
                    className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-wider font-bold text-[#9B0000] transition-all duration-200 cursor-pointer hover:opacity-80 active:translate-x-0.5"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Read More <span>→</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Action Trigger using CTAButton Component */}
        <div className="w-full flex justify-center">
          <CTAButton 
            href="/thought-center" 
            text="View all Notes" 
            variant="light"
            primaryColor="#9B0000"
            textColor="#9B0000"
            className="mt-4"
          />
        </div>

      </Container>

      {/* ── MODAL LAYERING INTERACTIVE INSTANCE ─────────────────────── */}
      <DynamicArticleModal
        isOpen={activeArticle !== null}
        onClose={() => setActiveArticle(null)}
        title={activeArticle?.title || ""}
        subtitle={activeArticle?.date || ""}
        heroImageUrl={activeArticle?.img}
        heroImageAlt={activeArticle?.title}
      >
        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
          {activeArticle?.description && (
            <p className="font-serif text-lg text-neutral-900 italic border-l-2 border-[#9B0000] pl-4 my-4">
              {activeArticle.description}
            </p>
          )}
          
          {/* Content conditional fallback block splits */}
          {activeArticle?.id === 1 ? (
            <>
              <p>Gold asset velocities have scaled inflection margins over current cycles. Miner operations maintain a high operational leverage framework compared to simple gold spot alternatives.</p>
              <p>As macro liquidity pipelines continue expanding across institutional targets, strategic allocations emphasize production margins and long-term asset security frameworks.</p>
            </>
          ) : (
            <>
              <p>Comprehensive research brief publication from the internal desk. Long-term positions capitalize on fundamental market pricing inefficiencies and high operational discipline metrics.</p>
              <p>Our analysis framework avoids shifting trends, focusing instead on sustainable capital allocation routines across individual market cycles.</p>
            </>
          )}
        </div>
      </DynamicArticleModal>

    </section>
  );
}