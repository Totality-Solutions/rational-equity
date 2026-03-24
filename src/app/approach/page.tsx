'use client';

import React from 'react';
import ApproachHero from '@/components/sections/investment-approach/ApproachHero';
import ApproachFeatures from '@/components/sections/investment-approach/ApproachFeatures';
import InvestmentProcess from '@/components/sections/investment-approach/InvestmentProcess';
import WhatSetsUsApart from '@/components/sections/investment-approach/WhatSetsUsApart';
import RiskManagement from '@/components/sections/investment-approach/RiskManagement';


export default function InvestmentApproachPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Dot Grid */}
      <ApproachHero />
      <ApproachFeatures />
      <InvestmentProcess />
      <WhatSetsUsApart/>
      <RiskManagement />
    </main>
  );
}