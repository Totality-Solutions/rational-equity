import TopInfoBar from '@/components/layout/TopInfoBar';
import AboutSection from '@/components/sections/home/AboutSection';
import FAQ from '@/components/sections/home/FAQ';
import Hero from '@/components/sections/home/hero';
import InvestmentSolutions from '@/components/sections/home/InvestmentSolutions';
import Journey from '@/components/sections/home/Journey';
import Testimonials from '@/components/sections/home/Testimonials';

export default function Home() {
  return (
    <>
      {/* 1. Subtle Performance Bar */}

      <TopInfoBar />
      {/* 2. Main Page Content (Hero, etc.) */}
      <main className="min-h-screen">

        <Hero />
        <AboutSection />
        <InvestmentSolutions />
        <Journey />
        <Testimonials />
        <FAQ />
      </main>
    </>
  );
}