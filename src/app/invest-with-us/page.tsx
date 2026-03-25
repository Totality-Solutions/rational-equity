import FAQ from '@/components/sections/home/FAQ';
import AvailableFunds from '@/components/sections/invest-with-us/AvailableFunds';
import ChooseYourPath from '@/components/sections/invest-with-us/ChooseYourPath';
import InvestWithUs from '@/components/sections/invest-with-us/InvestWithUs';
import ResourcesSection from '@/components/sections/invest-with-us/ResourceSection';
import StartInvestingForm from '@/components/sections/invest-with-us/StartInvestingForm';
import type { Metadata } from 'next';

export default function StartInvestingPage() {
  return (
    <>
    <InvestWithUs />
    <ChooseYourPath />
    <AvailableFunds />
    <StartInvestingForm />
    <ResourcesSection />
    <FAQ />
    </>
  );
}
