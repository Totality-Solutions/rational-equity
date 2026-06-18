import AboutHero from '@/components/sections/about/AboutHero';
import ReturnsSection from '@/components/sections/about/ReturnsSection';
import StorySection from '@/components/sections/about/StorySection';
import InvestorStructure from '@/components/sections/about/InvestorStructure';
import TwoPrinciples from '@/components/sections/about/TwoPrinciples';
import TeamSection from '@/components/sections/about/TeamSection';
import FAQ from '@/components/sections/home/FAQ';
import Journey from '@/components/sections/home/Journey';
import ReadyToStart from '@/components/common/ReadyToStart';
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
      <AboutHero />
      <ReturnsSection />
      <div className='max-w-[90rem] mx-auto'>
        <ReadyToStart />
      </div>
      <StorySection />
      <InvestorStructure />
      <TwoPrinciples />
      <TeamSection />
      <Journey />
      <ReadyToStart
        title="Ready to Speak With Our Team?"
        description="Schedule a call with one of our advisors."
        primaryCTA={{
          text: "Book a Call",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "/about",
        }}
      />
      <FAQ />
    </>
  );
}