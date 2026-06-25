'use client';

  import React from 'react';
  
import ReadyToStart from '@/components/common/ReadyToStart';

export default function InvestCTASection() {


  return (
    <div className='max-w-[90rem] mx-auto py-16'>
            <ReadyToStart
            title="Ready to Start Investing?"
            description="Join thousands of investors who trust us with their wealth creation journey"
            primaryCTA={{
              text: "Invest With Us",
              href: "/contact",
            }}
          />
          </div>
  );
}