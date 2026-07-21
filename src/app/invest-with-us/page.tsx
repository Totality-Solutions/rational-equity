


import type { Metadata } from 'next';
import AvailableFunds from '@/components/sections/invest-with-us/AvailableFunds';
import InvestWithUs from '@/components/sections/invest-with-us/InvestWithUs';
import ResourcesSection from '@/components/sections/invest-with-us/ResourceSection';
import StartInvestingForm from '@/components/sections/invest-with-us/StartInvestingForm';
import { getInvestWithUsPage } from '@/sanity/queries';

// ─── INVEST WITH US SEO ─────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Start Investing', // Becomes "Start Investing | Rational Equity"
  description:
    'Take the first step toward logical wealth growth. Explore our available funds, choose your investment path, and start your journey with Rational Equity today.',
  keywords: ['start investing', 'investment funds', 'equity portfolios', 'invest with rational equity'],
  alternates: {
    canonical: '/invest-with-us',
  },
  openGraph: {
    title: 'Invest With Us | Rational Equity',
    description: 'Explore available funds and start your investment journey with a data-driven approach.',
    url: '/invest-with-us',
    images: [{ url: '/images/og-invest.jpg', width: 1200, height: 630 }],
  },
};

export default async function StartInvestingPage() {
  const investWithUs = await getInvestWithUsPage();

  return (
    <main>
      <InvestWithUs hero={investWithUs.hero ?? undefined} />
      <AvailableFunds fundList={investWithUs.fundList ?? undefined} />
      <StartInvestingForm contact={investWithUs.contact ?? undefined} />
      <ResourcesSection resources={investWithUs.resources ?? undefined} />
    </main>
  );
}