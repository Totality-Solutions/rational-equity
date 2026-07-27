'use client';

import React, { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Container from '@/components/common/Container';
import type { SanityHomePage } from '@/sanity/queries';
import { ChartPanel } from '@/components/sections/product/FundPerformance';
import { FUND_DATA } from '@/data/Funds';

const defaultMetrics = [
  { value: '3+', label: 'Years building multibaggers' },
  { value: '2', label: 'Active strategies' },
  { value: '100%', label: 'Long-only' },
  { value: '1yr', label: 'Quarterly liquidity' },
];

export default function AboutSection({ intro }: { intro?: SanityHomePage['intro'] }) {
  const sectionRef = useRef(null);
  
  const isInView = useInView(sectionRef, { 
    once: true, 
    margin: "0px 0px -300px 0px" 
  });

  const heading = intro?.heading || 'A boutique fund built on';
  const headingItalic = intro?.headingItalic || 'conviction, not consensus.';
  const description =
    intro?.description ||
    'Rational is an investment house with a singular focus: identifying global mega-trends and durable mispricings in the system, then holding them long enough for compounding to do its work. We invest alongside our investors and structure our economics so we only make money when they do.';
  const metrics = intro?.metrics && intro.metrics.length > 0 ? intro.metrics : defaultMetrics;
  const chartTitle1 = intro?.chartTitle1 || 'Rational thinking.';
  const chartTitle2 = intro?.chartTitle2 || 'Exceptional returns.';
  const chartSinceText = intro?.chartSinceText || 'Since 2023';

  const fundChartData = FUND_DATA['india-long-only'].performance.chartData;
  const periods = fundChartData ? Object.keys(fundChartData) : [];
  const [active, setActive] = useState(periods[periods.length - 1] ?? '');
  const data = fundChartData && active ? fundChartData[active] ?? [] : [];

  return (
   <section className="bg-[#ffffff] py-6 lg:py-12">
  <Container>
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>

        <h2 className="font-playfair text-h3-mobile md:text-h3-tab lg:text-h3 leading-[1.05] text-[#1A1A1A] max-w-xl">
          {heading}
          <br />
          <em className="italic font-playfair">
            {headingItalic}
          </em>
        </h2>

        <p className="mt-3 md:mt-6 text-[#4A4A4A] leading-relaxed max-w-xl text-[14px] sm:text-[16px]">
          {description}
        </p>

        {/* STATS */}
            <div className="mt-6 md:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 md:pt-4">
              {metrics.map((metric, i) => (
                <div key={metric.label} className={`text-center ${i === 2 ? 'md:border-l' : i > 0 ? 'border-l' : ''} border-[#E4E0DC]`}>
                  <div className="text-[24px] sm:text-[30px] font-playfair text-[#1A1A1A]">
                    {metric.value}
                  </div>
                  <div className="text-[14px] sm:text-[12px] tracking-normal text-[#6B6B6B] mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

      </div>

      {/* RIGHT CHART CARD */}
      <div className="bg-white border border-[#E9E5E1] rounded-sm py-6 sm:py-6 px-4 sm:px-10">

        <div className="text-center px-4">

          <p className="text-[15px] sm:text-[18px] font-medium text-[#333]">
            {chartTitle1}
          </p>

          <p className="text-[15px] sm:text-[18px] font-medium text-[#333]">
            {chartTitle2}
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-3 sm:mt-5">
            <div className="w-10 sm:w-16 h-[1.5px] bg-[#B98E8E]" />
            <span className="text-[10px] sm:text-[11px] uppercase font-semibold tracking-[1px] text-[#555]">
              {chartSinceText}
            </span>
            <div className="w-10 sm:w-16 h-[1.5px] bg-[#B98E8E]" />
          </div>

        </div>

        {/* CHART */}
        <div className="mt-6 sm:mt-8">
          <ChartPanel
            data={data}
            periods={periods}
            active={active}
            setActive={setActive}
            fundTitle="India Long-Only Fund"
            disclaimer="* Returns as on 31 May 2024"
            showControls={false}
          />
        </div>

      </div>

    </div>
  </Container>
</section>
  );
}