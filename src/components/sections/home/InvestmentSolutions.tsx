'use client';

import React from 'react';
import Link from 'next/link';

const FUNDS = [
  {
    title: 'India Long-Only Fund',
    description: 'Focused long-term equity investments in high-quality Indian businesses',
    returns: '16.5% CAGR',
    active: false,
  },
  {
    title: 'Gold & Silver Miners Fund',
    description: 'Strategic exposure to precious metals mining companies globally',
    returns: '18.2% CAGR',
    active: true, // This adds the subtle pinkish glow seen in your UI
  },
  {
    title: 'Absolute Return Fund',
    description: 'Market-neutral strategies designed for consistent positive returns',
    returns: '12.8% CAGR',
    active: false,
  },
];

export default function InvestmentSolutions() {
  return (
    <section className="bg-[#0a0a0a] py-24 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Investment Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-sans">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Fund Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24  ">
          {FUNDS.map((fund) => (
            <div
              key={fund.title}
              className={`relative bg-white rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${fund.active ? 'shadow-[0_0_30px_rgba(128,0,0,0.2)] bg-rose-50/95' : 'bg-white'
                }`}
            >
              <div>
                <h3 className="text-black font-sans font-bold text-2xl mb-6">{fund.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-12">
                  {fund.description}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-6 border-t border-gray-100 pt-6">
                  <span className="text-gray-400 text-[11px] font-bold tracking-widest uppercase">3 Year Returns</span>
                  <span className="text-brand-maroon font-bold text-lg">{fund.returns}</span>
                </div>

                <button className="w-full bg-brand-maroon text-white py-3 rounded-lg font-bold text-sm transition-colors hover:bg-brand-maroon-hover">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* "Ready to Start" Section */}
        <div className="text-center">
          <h3 className="font-serif text-[32px] md:text-4xl mb-6 font-medium">Ready to Start Investing?</h3>
          <p className="text-gray-400 text-[22px] mb-12 font-sans">
            Join thousands of investors who trust us with their wealth creation journey
          </p>

          <div className="flex justify-center">
            <Link href="/invest" className="flex items-stretch group transition-transform hover:scale-105">
              <div className="bg-white px-4  flex items-center border border-gray-200">
                <span className="font-sans text-[22px] text-brand-maroon">
                  Invest With Us
                </span>
              </div>
              <div className="bg-brand-maroon p-3 flex items-center justify-center">
             

                <img
                  src="/images/arrowbtn.png"
                  alt="Rational Asset Management Logo"
                  className="w-[30px] object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}



