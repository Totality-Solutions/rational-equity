import HeadingSection from '@/components/sections/thought-center/HeadingSection';
import Hero from '@/components/sections/thought-center/Hero';
import InvestCTASection from '@/components/sections/thought-center/InvestCTASection';
import InvestLinksSection from '@/components/sections/thought-center/InvestLinksSection';
import MediaPage from '@/components/sections/thought-center/MediaPage';
import Strip from '@/components/sections/thought-center/Strip';
import ThoughtCenterArticles from '@/components/sections/thought-center/ThoughtCenterArticles';
import type { Metadata } from 'next';


// ─── PER-PAGE SEO (Magazine Focused) ───────────────────────────────────────
export const metadata: Metadata = {
  title: 'Thought Center | Rational Asset Management', 
  description: 'Explore expert market analysis, investment deep-dives, and financial perspectives from the Rational Asset Management team.',
  keywords: ['market analysis', 'investment insights', 'financial strategy', 'thought leadership', 'economic trends'],
  alternates: {
    canonical: '/thought-center',
  },
  openGraph: {
    title: 'Thought Center: Market Insights & Strategy | Rational Equity',
    description: 'Expert perspectives on the evolving financial landscape.',
    url: '/thought-center',
    type: 'website',
    images: [{ url: '/images/og-thought-center.jpg', width: 1200, height: 630 }],
  },
};

export default function ThoughtCenterPage() {
  return (
    <main className="bg-white">
        <Hero />
        <HeadingSection />
        <ThoughtCenterArticles />
        {/* <MediaPage /> */}
        <InvestCTASection />
        <InvestLinksSection />
        {/* <Strip /> */}
    </main>
  );
}