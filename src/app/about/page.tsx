import TopInfoBar from '@/components/layout/TopInfoBar';
import AboutHero from '@/components/sections/about/AboutHero';
import LogoReflection from '@/components/sections/about/LogoSection';
import TeamSection from '@/components/sections/about/TeamSection';
import FAQ from '@/components/sections/home/FAQ';
import Journey from '@/components/sections/home/Journey';
import type { Metadata } from 'next';

// Per-page SEO — overrides layout defaults
export const metadata: Metadata = {
  title: 'About Us',                          // → "About Us | DesignPOV"
  description:
    'Learn about DesignPOV — our story, our team, and why we do what we do.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | DesignPOV',
    description: 'Learn about DesignPOV — our story, our team, and why we do what we do.',
    url: '/about',
    images: [{ url: '/images/og-about.jpg', width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <>
      <TopInfoBar />
      <AboutHero />
      <LogoReflection />
      <TeamSection />
      <Journey />
      <FAQ />
    </>
  );
}
