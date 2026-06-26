
import type { Metadata } from 'next';
// We move the 'use client' parts into a separate view or keep them in the components
import ApproachHero from '@/components/sections/investment-approach/ApproachHero';
import ApproachPrinciples from '@/components/sections/investment-approach/ApproachPrinciples';
import AnalyticalLenses from '@/components/sections/investment-approach/AnalyticalLenses';
import CapitalAllocation from '@/components/sections/investment-approach/CapitalAllocation';
import InsightToInvestment from '@/components/sections/investment-approach/InsightToInvestment';
import ApproachFeatures from '@/components/sections/investment-approach/ApproachFeatures';
import InvestmentProcess from '@/components/sections/investment-approach/InvestmentProcess';
import WhatSetsUsApart from '@/components/sections/investment-approach/WhatSetsUsApart';
import RiskManagement from '@/components/sections/investment-approach/RiskManagement';
import ReadyToStart from '@/components/common/ReadyToStart';

// ─── PER-PAGE SEO ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Investment Approach', 
  description: 'Discover Rational Equity’s data-driven investment process, risk management framework, and our unique approach to identifying market value.',
  keywords: ['investment strategy', 'risk management', 'equity analysis', 'rational investing'],
  alternates: {
    canonical: '/investment-approach',
  },
  openGraph: {
    title: 'Our Investment Approach | Rational Equity',
    description: 'A logical, systematic methodology for long-term capital growth.',
    url: '/investment-approach',
    images: [{ url: '/images/og-approach.jpg', width: 1200, height: 630 }],
  },
};

export default function InvestmentApproachPage() {
  return (
    <main className="min-h-screen bg-white">
      <ApproachHero />
      <ApproachPrinciples />
      <AnalyticalLenses />
      <InsightToInvestment />
      <div className='border-t border-[#202020] '>
        <ReadyToStart
          title="Convinced by the approach?"
          description="Speak to our team to explore which fund suits your investment goals"
          primaryCTA={{
            text: "Get in touch",
            href: "/contact",
          }}
        />
      </div>
      <CapitalAllocation />
      <div className='border-t border-[#202020] '>
        <ReadyToStart
          title="Ready to invest with rational conviction?"
          description="Join investors who trust us with their long-term wealth creation — because our capital is always in alongside theirs."
          primaryCTA={{
            text: "Invest With Us",
            href: "/invest-with-us",
          }}
          secondaryCTA={{
            text: "About the team",
            href: "/about",
          }}
        />
      </div>
      {/* <ApproachFeatures />
      <InvestmentProcess />
      <WhatSetsUsApart/>
      <RiskManagement /> */}
    </main>
  );
}