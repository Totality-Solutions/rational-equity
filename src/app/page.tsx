

import type { Metadata } from 'next';
import TopInfoBar from '@/components/layout/TopInfoBar';
import AboutSection from '@/components/sections/home/AboutSection';
import FAQ from '@/components/sections/home/FAQ';
import Hero from '@/components/sections/home/hero';
import InvestmentSolutions from '@/components/sections/home/InvestmentSolutions';
import Journey from '@/components/sections/home/Journey';
import Testimonials from '@/components/sections/home/Testimonials';
import ReadyToStart from '@/components/common/ReadyToStart';
import TeamShowcase from '@/components/sections/home/TeamShowcase';
import ThoughtCentre from '@/components/sections/home/ThoughtCentre';
import InvestorStructure from '@/components/sections/home/InvestorStructure';

// ─── HOME PAGE SEO ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Rational Equity — Data-Driven Asset Management', 
  description: 'Rational Equity provides logical, high-performance investment solutions and strategic asset management for long-term capital growth.',
  // Keywords specific to the home page "broad" appeal
  keywords: ['asset management', 'equity investment', 'financial growth', 'rational investing'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rational Equity | Logical Growth. Proven Results.',
    description: 'We build exceptional investment experiences through strategy and data-driven execution.',
    url: '/',
    // Use your specific home-page OG image if you have one
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <>
      <TopInfoBar />
      {/* <main className="min-h-screen"> */}
        <Hero />
        <AboutSection />
        <InvestmentSolutions />
        <ReadyToStart />
        <TeamShowcase />
        <Journey />
        <InvestorStructure />
        <Testimonials />
        <ThoughtCentre />
        <FAQ />
      {/* </main> */}
    </>
  );
}