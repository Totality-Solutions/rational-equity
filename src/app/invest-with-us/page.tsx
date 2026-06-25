


import type { Metadata } from 'next';
import FAQ from '@/components/sections/home/FAQ';
import AvailableFunds from '@/components/sections/invest-with-us/AvailableFunds';
import ChooseYourPath from '@/components/sections/invest-with-us/ChooseYourPath';
import InvestWithUs from '@/components/sections/invest-with-us/InvestWithUs';
import ResourcesSection from '@/components/sections/invest-with-us/ResourceSection';
import StartInvestingForm from '@/components/sections/invest-with-us/StartInvestingForm';

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

export default function StartInvestingPage() {
  return (
    <main>
      <InvestWithUs />
      {/* <ChooseYourPath /> */}
      <AvailableFunds />
      <StartInvestingForm />
      <ResourcesSection />
      {/* <FAQ /> */}
    </main>
  );
}