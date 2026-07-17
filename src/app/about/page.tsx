import AboutHero from '@/components/sections/about/AboutHero';
import ReturnsSection from '@/components/sections/about/ReturnsSection';
import StorySection from '@/components/sections/about/StorySection';
import InvestorStructure from '@/components/sections/about/InvestorStructure';
import TwoPrinciples from '@/components/sections/about/TwoPrinciples';
import TeamSection from '@/components/sections/about/TeamSection';
import Journey from '@/components/sections/home/Journey';
import ReadyToStart from '@/components/common/ReadyToStart';
import { getAboutPage, getJourney } from '@/sanity/queries';
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

export default async function AboutPage() {
  const [about, journey] = await Promise.all([getAboutPage(), getJourney()]);

  return (
    <>
      <AboutHero hero={about.hero ?? undefined} />
      <ReturnsSection returns={about.returns ?? undefined} />
      <div className='max-w-[90rem] mx-auto'>
        <ReadyToStart
        title={about.ctaTop?.title || "Ready to invest alongside us?"}
        description={about.ctaTop?.description || "Our capital is always in the fund before we ask you to invest."}
        primaryCTA={{
          text: about.ctaTop?.primaryBtnText || "Invest With Us",
          href: about.ctaTop?.primaryBtnLink || "/contact",
        }}
      />
      </div>
      <StorySection story={about.story ?? undefined} />
      <InvestorStructure principlesFour={about.principlesFour ?? undefined} />
      <TwoPrinciples principlesTwo={about.principlesTwo ?? undefined} />
      <TeamSection team={about.team ?? undefined} />
      <Journey journey={journey ?? undefined} />
      <ReadyToStart
        title={about.ctaBottom?.title || "Ready to invest with people who invest with you?"}
        description={about.ctaBottom?.description || "Join investors who trust us with their long-term wealth creation — because our capital is always in alongside theirs."}
        primaryCTA={{
          text: about.ctaBottom?.primaryBtnText || "Invest With Us",
          href: about.ctaBottom?.primaryBtnLink || "/invest-with-us",
        }}
        secondaryCTA={{
          text: about.ctaBottom?.secondaryBtnText || "Explore Our Fund",
          href: about.ctaBottom?.secondaryBtnLink || "/about",
        }}
      />
    </>
  );
}