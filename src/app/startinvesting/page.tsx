import FAQ from '@/components/sections/home/FAQ';
import AvailableFunds from '@/components/sections/startinvesting/AvailableFunds';
import ChooseYourPath from '@/components/sections/startinvesting/ChooseYourPath';
import InvestWithUs from '@/components/sections/startinvesting/InvestWithUs';
import ResourcesSection from '@/components/sections/startinvesting/ResourceSection';
import StartInvestingForm from '@/components/sections/startinvesting/StartInvestingForm';
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
