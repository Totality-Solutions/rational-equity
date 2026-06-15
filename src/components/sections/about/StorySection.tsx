'use client';

import React from 'react';
import Container from '@/components/common/Container';

export default function StorySection() {
  return (
    <section className="w-full bg-white">
      <Container className="px-4">
        <div className="flex flex-col md:flex-row py-6 md:py-24 px-6 md:px-12">
          {/* Left Side - Sticky on desktop, normal on mobile */}
          <div className="w-full md:w-[35%] border-b md:border-b-0 md:border-r-3 border-brand-maroon pb-8 md:pb-0 md:pr-12 mb-8 md:mb-0">
            <div className="md:sticky md:top-32">
              <h2
                className="text-h2-mobile md:text-h2-tab lg:text-h2 leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                From family office
                <br />
                to <span className="text-brand-maroon italic">India&apos;s #1 AIF.</span>
              </h2>
              <p className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg text-gray-600 leading-relaxed">
                A story of conviction, timing, and staying true to first principles.
              </p>
            </div>
          </div>

          {/* Right Side - Scrolling */}
          <div className="w-full md:w-[65%] space-y-8 font-sans md:pl-12">
            <p
              className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg text-gray-700 leading-relaxed"
            >
              Rational was founded in 2020 as a Family Office by Vivek &amp; Krish at a miraculously opportune
              time in history. When the world was undergoing a lockdown and the markets were hitting
              rock-bottom, Vivek told his father that if the world was ever going back to normal, this was
              the time to invest in the Indian equities market.
            </p>

            <p
              className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg text-gray-700 leading-relaxed"
            >
              They ended up switching the entire family net worth from 100% real estate to 100% Indian
              equities in a matter of 4–5 months. This obviously led to massive wealth creation over the
              next 3 years.
            </p>

            <blockquote className="border-l-3 border-[#9B0000] bg-[#FDF5F5] px-6 py-5 my-8">
              <p
                className="text-body-md-mobile md:text-body-md-tab lg:text-body-md text-gray-800 leading-relaxed font-semibold tracking-normal font-playfair italic"
              >
                Because the fund was a by-product of good capital allocation and investing success – not the chase to AUM
                building – Rationals foundations were built on being investor friendly.
              </p>
            </blockquote>

            <p
              className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg text-gray-700 leading-relaxed"
            >
              The fund was then launched by Vivek, Krish &amp; Jaba, Vivek&apos;s wife. Our capital allocation,
              investment philosophy, and terms of investment are all done in a way that benefit the
              investor first — and we make money only when they do.
            </p>

            <p
              className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg text-gray-700 leading-relaxed"
            >
              Our method has been consistent: recognise a worldwide mega-trend, assess and identify the
              best possible means to extract value from it, invest personally as proof of concept, and
              post-proof launch a fund on the same theme. So all the funds are aligned with our personal
              investments.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
