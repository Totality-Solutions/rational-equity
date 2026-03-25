
import type { Metadata } from 'next';
// We move the 'use client' parts into a separate view or keep them in the components
import ApproachHero from '@/components/sections/investment-approach/ApproachHero';
import ApproachFeatures from '@/components/sections/investment-approach/ApproachFeatures';
import InvestmentProcess from '@/components/sections/investment-approach/InvestmentProcess';
import WhatSetsUsApart from '@/components/sections/investment-approach/WhatSetsUsApart';
import RiskManagement from '@/components/sections/investment-approach/RiskManagement';

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
      <ApproachFeatures />
      <InvestmentProcess />
      <WhatSetsUsApart/>
      <RiskManagement />
    </main>
  );
}