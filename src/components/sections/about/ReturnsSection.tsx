'use client';

import React from 'react';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import CTAButton from '@/components/common/CTAButton';

const funds = [
  {
    id: 1,
    percentage: '30%',
    subtitle: 'Post-tax return since 2023',
    name: 'India Long-Only Fund',
    color: '#C5A55A',
    fadedNumber: '30',
  },
  {
    id: 2,
    percentage: '79%',
    subtitle: '1-year return',
    name: "Gold & Silver Miners' Fund",
    color: '#9B0000',
    fadedNumber: '79',
  },
  {
    id: 3,
    percentage: '41%',
    subtitle: '10-year model net CAGR',
    name: 'Absolute Return Fund',
    color: '#2E7D5B',
    fadedNumber: '41',
  },
];

export default function ReturnsSection() {
  return (
    <section className="w-full px-3 lg:px-16 bg-[#FAFAFA]">
      <Container className="py-6 lg:py-12 mx-auto px-4 space-y-12">
        <div className="mb-8">
          <AnimatedHeader
            title="Returns that speak for themselves."
            highlight="speak for themselves."
            highlightColor="#9B0000"
            variant="light"
            titleClassName="text-black font-semibold text-h2-mobile lg:text-h2-tab lg:text-h2 "
            subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-body-lg-mobile lg:text-body-lg-tab lg:text-body-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {funds.map((fund) => (
            <div
              key={fund.id}
              className="relative bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[4px]"
                style={{ backgroundColor: fund.color }}
              />

              <div className="relative px-8 py-4">
                <p
                  className="text-5xl lg:text-6xl font-medium mb-8 font-playfair"
                  style={{
                    color: fund.color,
                  }}
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
                  className="absolute bottom-0 right-0 text-7xl font-playfair lg:text-8xl font-regular opacity-10 select-none"
                  style={{
                    color: fund.color,
                  }}
                >
                  {fund.fadedNumber}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-2 lg:px-16">
          <CTAButton
            href="/contact"
            text="Get Expert Assistance"
            variant="maroon-bg"
            borderRadiusClassName="rounded-full"
          />
          <div className="flex-1 h-px bg-gray-300" />
        </div>
      </Container>
    </section>
  );
}
