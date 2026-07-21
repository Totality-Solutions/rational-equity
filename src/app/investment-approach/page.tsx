
import type { Metadata } from 'next';
// We move the 'use client' parts into a separate view or keep them in the components
import ApproachHero from '@/components/sections/investment-approach/ApproachHero';
import ApproachPrinciples from '@/components/sections/investment-approach/ApproachPrinciples';
import AnalyticalLenses from '@/components/sections/investment-approach/AnalyticalLenses';
import CapitalAllocation from '@/components/sections/investment-approach/CapitalAllocation';
import InsightToInvestment from '@/components/sections/investment-approach/InsightToInvestment';
import ReadyToStart from '@/components/common/ReadyToStart';
import { getApproachPage } from '@/sanity/queries';

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

export default async function InvestmentApproachPage() {
  const approach = await getApproachPage();

  return (
    <main className="min-h-screen bg-white">
      <ApproachHero hero={approach.hero ?? undefined} />
      <ApproachPrinciples principlesData={approach.principles ?? undefined} />
      <AnalyticalLenses lensesData={approach.lenses ?? undefined} />
      <InsightToInvestment insight={approach.insight ?? undefined} />
      <div className='border-t border-[#202020] '>
        <ReadyToStart
          title={approach.ctaTop?.title || "Convinced by the approach?"}
          description={approach.ctaTop?.description || "Speak to our team to explore which fund suits your investment goals"}
          primaryCTA={{
            text: approach.ctaTop?.primaryBtnText || "Get in touch",
            href: approach.ctaTop?.primaryBtnLink || "/contact",
          }}
        />
      </div>
      <CapitalAllocation allocation={approach.allocation ?? undefined} />
      <div className='border-t border-[#202020] '>
        <ReadyToStart
          title={approach.ctaBottom?.title || "Ready to invest with rational conviction?"}
          description={approach.ctaBottom?.description || "Join investors who trust us with their long-term wealth creation — because our capital is always in alongside theirs."}
          primaryCTA={{
            text: approach.ctaBottom?.primaryBtnText || "Invest With Us",
            href: approach.ctaBottom?.primaryBtnLink || "/invest-with-us",
          }}
          secondaryCTA={{
            text: approach.ctaBottom?.secondaryBtnText || "About the team",
            href: approach.ctaBottom?.secondaryBtnLink || "/about",
          }}
        />
      </div>
    </main>
  );
}