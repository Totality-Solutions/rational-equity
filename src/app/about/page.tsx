import TopInfoBar from '@/components/layout/TopInfoBar';
import AboutHero from '@/components/sections/about/AboutHero';
import LogoReflection from '@/components/sections/about/LogoSection';
import TeamSection from '@/components/sections/about/TeamSection';
import FAQ from '@/components/sections/home/FAQ';
import Journey from '@/components/sections/home/Journey';
import type { Metadata } from 'next';

// Updated Metadata for Rational
export const metadata: Metadata = {
  title: 'About Rational', // → "About Rational | [Your Catchphrase]"
  description:
    'Learn about Rational — our logical approach to design, our dedicated team, and our mission to build high-performance digital products.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Rational',
    description: 'Discover the story, the team, and the methodology behind Rational.',
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