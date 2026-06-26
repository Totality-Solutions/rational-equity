'use client';

import React from 'react';
import Container from '@/components/common/Container';

export default function StorySection() {
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
                From family office
                <br />
                to <span className="text-brand-maroon italic">India&apos;s #1 AIF.</span>
              </h2>
              <p className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg italic font-playfair text-gray-600 leading-relaxed">
                A story of conviction, timing, and staying true to first principles.
              </p>
            </div>
          </div>

          {/* Right Side - Scrolling */}
          <div className="w-full lg:w-[65%] space-y-4 lg:space-y-8 font-sans lg:pl-12">
            <p
              className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg text-gray-700 leading-relaxed"
            >
              Rational was founded in <span className='font-bold'>2020 as a Family Office by Vivek &amp; Krish</span> at a miraculously opportune
              time in history. When the world was undergoing a lockdown and the markets were hitting
              rock-bottom, Vivek told his father that if the world was ever going back to normal, this was
              the time to invest in the Indian equities market.
            </p>

            <p
              className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg text-gray-700 leading-relaxed"
            >
              They ended up <span className='font-bold'>switching the entire family net worth from 100% real estate to 100% Indian
              equities</span> in a matter of 4–5 months. This obviously led to massive wealth creation over the
              next 3 years.
            </p>

            <blockquote className="border-l-3 border-[#9B0000] bg-brand-grey rounded-tr-lg rounded-br-lg  px-6 py-5 my-4 lg:my-8">
              <p
                className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg text-gray-800 leading-[1.8] font-medium -tracking-h1 font-playfair italic"
              >
                "Because the fund was a by-product of good capital allocation and investing success — not the chase to AUM building — Rational's foundations were built on being investor friendly."
              </p>
            </blockquote>

            <p
              className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg text-gray-700 leading-relaxed"
            >
              The fund was then launched by <span className='font-bold'>Vivek, Krish &amp; Jaba,</span> Vivek&apos;s wife. Our capital allocation,
              investment philosophy, and terms of investment are all done in a way that benefit the
              investor first — and we make money only when they do.
            </p>

            <p
              className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg text-gray-700 leading-relaxed"
            >
              Our method has been consistent:<span className='font-bold'> recognise a worldwide mega-trend</span>, assess and identify the
              best possible means to extract value from it, invest personally as proof of concept, and
              post-proof launch a fund on the same theme. So all the funds are aligned with our personal
              investments.
            </p>
            <p
              className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg text-gray-700 leading-relaxed"
            >
             <span className='font-bold'>Vishal, Vivek's brother</span>, joined the fund in 2025 to lead the gold fund and global research. While the ambition is for the fund to grow, we will continue to remain laser focused on our goal — providing outsized returns to our investors through accurate capital allocation and research-based investing.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
