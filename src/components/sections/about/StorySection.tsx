'use client';

import React from 'react';
import Container from '@/components/common/Container';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { SanityAboutPage } from '@/sanity/queries';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg text-gray-700 leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-3 border-[#9B0000] bg-brand-grey rounded-tr-lg rounded-br-lg px-6 py-5 my-4 lg:my-8">
        <p className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg text-gray-800 leading-[1.8] font-medium -tracking-h1 font-playfair italic">
          {children}
        </p>
      </blockquote>
    ),
  },
};

const defaultContent = [
  {
    _type: 'block' as const,
    _key: 'p1',
    style: 'normal',
    children: [
      {
        _type: 'span' as const,
        _key: 'p1s',
        text: "Rational was founded in 2020 as a Family Office by Vivek & Krish at a miraculously opportune time in history. When the world was undergoing a lockdown and the markets were hitting rock-bottom, Vivek told his father that if the world was ever going back to normal, this was the time to invest in the Indian equities market.",
      },
    ],
  },
  {
    _type: 'block' as const,
    _key: 'p2',
    style: 'normal',
    children: [
      {
        _type: 'span' as const,
        _key: 'p2s',
        text: 'They ended up switching the entire family net worth from 100% real estate to 100% Indian equities in a matter of 4–5 months. This obviously led to massive wealth creation over the next 3 years.',
      },
    ],
  },
  {
    _type: 'block' as const,
    _key: 'q1',
    style: 'blockquote',
    children: [
      {
        _type: 'span' as const,
        _key: 'q1s',
        text: "Because the fund was a by-product of good capital allocation and investing success — not the chase to AUM building — Rational's foundations were built on being investor friendly.",
      },
    ],
  },
  {
    _type: 'block' as const,
    _key: 'p3',
    style: 'normal',
    children: [
      {
        _type: 'span' as const,
        _key: 'p3s',
        text: "The fund was then launched by Vivek, Krish & Jaba, Vivek's wife. Our capital allocation, investment philosophy, and terms of investment are all done in a way that benefit the investor first — and we make money only when they do.",
      },
    ],
  },
  {
    _type: 'block' as const,
    _key: 'p4',
    style: 'normal',
    children: [
      {
        _type: 'span' as const,
        _key: 'p4s',
        text: 'Our method has been consistent: recognise a worldwide mega-trend, assess and identify the best possible means to extract value from it, invest personally as proof of concept, and post-proof launch a fund on the same theme. So all the funds are aligned with our personal investments.',
      },
    ],
  },
  {
    _type: 'block' as const,
    _key: 'p5',
    style: 'normal',
    children: [
      {
        _type: 'span' as const,
        _key: 'p5s',
        text: "Vishal, Vivek's brother, joined the fund in 2025 to lead the gold fund and global research. While the ambition is for the fund to grow, we will continue to remain laser focused on our goal — providing outsized returns to our investors through accurate capital allocation and research-based investing.",
      },
    ],
  },
];

export default function StorySection({ story }: { story?: SanityAboutPage['story'] }) {
  const heading = story?.heading || 'From family office';
  const headingHighlight = story?.headingHighlight || "to India's #1 AIF.";
  const subheading = story?.subheading || 'A story of conviction, timing, and staying true to first principles.';
  const content = story?.content && story.content.length > 0 ? story.content : defaultContent;

  return (
    <section className="w-full bg-white">
      <Container className="px-4">
        <div className="flex flex-col lg:flex-row py-6 lg:py-24 lg:px-12">
          {/* Left Side - Sticky on desktop, normal on mobile */}
          <div className="w-full lg:w-[35%] pb-8 md:pb-0 md:pr-12 mb-8 lg:mb-0">
            <div className="md:sticky md:top-32">
              <h2
                className="text-h2-mobile md:text-h2-tab lg:text-h2 leading-tight mb-2 lg:mb-6 font-playfair"
              >
                {heading}
                <br />
                <span className="text-brand-maroon italic">{headingHighlight}</span>
              </h2>
              <p className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg italic font-playfair text-gray-600 leading-relaxed">
                {subheading}
              </p>
            </div>
          </div>

          {/* Right Side - Scrolling */}
          <div className="w-full lg:w-[65%] space-y-4 lg:space-y-8 font-sans lg:pl-12">
            <PortableText value={content} components={components} />
          </div>
        </div>
      </Container>
    </section>
  );
}
