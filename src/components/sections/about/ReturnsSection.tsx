'use client';

import React from 'react';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import CTAButton from '@/components/common/CTAButton';
import type { SanityAboutPage } from '@/sanity/queries';

const defaultFunds = [
  {
    percentage: '30%',
    subtitle: 'Post-tax return since 2023',
    name: 'India Long-Only Fund',
    color: 'secondary-ylw',
  },
  {
    percentage: '79%',
    subtitle: '1-year return',
    name: "Gold & Silver Miners' Fund",
    color: 'secondary-grn',
  },
  {
    percentage: '41%',
    subtitle: '10-year model net CAGR',
    name: 'Absolute Return Fund',
    color: 'secondary-blu',
  },
];

export default function ReturnsSection({ returns: returnsData }: { returns?: SanityAboutPage['returns'] }) {
  const heading = returnsData?.heading || 'Returns that speak for themselves.';
  const highlightText = returnsData?.highlightText || 'speak for themselves.';
  const funds = returnsData?.funds && returnsData.funds.length > 0 ? returnsData.funds : defaultFunds;
  const ctaText = returnsData?.ctaText || 'Get Expert Assistance';
  const ctaLink = returnsData?.ctaLink || '/contact';

  return (
    <section className="w-full px-3 lg:px-16 bg-[#FAFAFA]">
      <Container className="py-6 lg:py-12 mx-auto px-4 space-y-12">
        <div className="mb-8">
          <AnimatedHeader
            title={heading}
            highlight={highlightText}
            highlightColor="brand-maroon"
            variant="light"
            titleClassName="text-black font-medium text-h2-mobile lg:text-h2-tab lg:text-h2 "
            subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-body-lg-mobile lg:text-body-lg-tab lg:text-body-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {funds.map((fund) => (
            <div
              key={fund.name}
              className="relative bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-[4px] bg-${fund.color}`}
              />

              <div className="relative px-8 py-4">
                <p
                  className={`text-5xl lg:text-6xl font-medium mb-8 font-playfair text-${fund.color}`}
                >
                  {fund.percentage}
                </p>

                <p className="text-body-md-mobile lg:text-body-md-tab lg:text-body-md text-gray-500 mb-2">{fund.subtitle}</p>
                <p
                  className="text-lg font-medium text-gray-900 font-playfair"
                >
                  {fund.name}
                </p>

                <span
                  className={`absolute bottom-0 right-0 text-7xl font-playfair lg:text-8xl font-regular opacity-10 select-none text-${fund.color}`}
                >
                  {fund.percentage.replace('%', '')}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-2 lg:px-16">
          <CTAButton
            href={ctaLink}
            text={ctaText}
            variant="maroon-bg"
            borderRadiusClassName="rounded-full"
          />
          <div className="flex-1 h-px bg-gray-300" />
        </div>
      </Container>
    </section>
  );
}
