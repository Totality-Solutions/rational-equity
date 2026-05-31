'use client';

import AnimatedHeader from '@/components/common/AnimatedHeader';
import Container from '@/components/common/Container';
import Image from 'next/image';
import React from 'react';

const articles = [
  {
    id: 1, category: 'Macro', readTime: '6 min read',
    title: "Why the gold cycle isn't over.",
    description: 'A look at miner economics, policy tailwinds, and why we still see asymmetric upside.',
    img: '/images/home-thought/notes1.jpeg',
  },
  {
    id: 2, category: 'Philosophy', readTime: '4 min read',
    title: 'The patience premium.',
    description: 'How long holding periods quietly outperform in a market obsessed with quarters.',
    img: '/images/home-thought/notes2.jpeg',
  },
  {
    id: 3, category: 'India', readTime: '8 min read',
    title: 'Small-caps after a hot year.',
    description: "What changes — and what doesn't — when a corner of the market gets crowded.",
    img: '/images/home-thought/notes3.jpeg',
  },
];

export default function ThoughtCentre() {
  return (
    <section className="py-10 ">
      <Container>

        {/* Header */}
        <AnimatedHeader
          title="Notes from the desk"
          highlight='Notes'
          highlightColor="#8B0000"
          subheading="Long-form views on markets, philosophy, and the businesses we own."
          variant="light"
          className="mb-6 sm:mb-7 text-h3 text-black"
          subheadingClassName="text-body-lg tracking-wide text-black"
        />

        {/* Card Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {articles.map((a) => (
            <div
              key={a.id}
              className="group bg-white rounded-2xl border border-brand-maroon/20 overflow-hidden flex flex-col transition-all duration-300 ease-out hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-[1.01] sm:hover:scale-[1.02]"
            >
              {/* Thumbnail */}
              <div className="h-40 sm:h-44 relative overflow-hidden bg-brand-maroon/20 shrink-0">
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="relative z-20 p-5 sm:p-6 md:p-7 flex flex-col flex-1 justify-between gap-4">

                {/* Top Content */}
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[#8A7A60] mb-2 sm:mb-3">
                    {a.category} · {a.readTime}
                  </p>

                  <h3 className="text-black font-semibold text-base sm:text-[17px] md:text-[18px] leading-snug mb-2 sm:mb-3 transition-colors group-hover:text-brand-bg-brand-maroon">
                    {a.title}
                  </h3>

                  <p className="text-black/70 text-[13px] leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {a.description}
                  </p>
                </div>

                {/* CTA */}
                <button className="w-full bg-brand-maroon cursor-pointer text-white py-2.5 sm:py-3 rounded-full text-[13px] tracking-wide font-semibold transition-all hover:bg-[#600000] active:scale-[0.98]">
                  Read Essay
                </button>

              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}