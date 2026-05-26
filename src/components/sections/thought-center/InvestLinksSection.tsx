"use client";

import React from "react";
import Link from "next/link";

const FUND_LINKS = [
  { label: "India Long-Only Fund", href: "/product/india-long-only" },
  { label: "Gold & Silver Miners Fund", href: "/product/gold-silver-miners" },
  { label: "Absolute Return Funds", href: "/product/absolute-return" },
];

export default function InvestLinksSection() {
  return (
    <section className="w-full bg-black pt-2 pb-8 flex flex-col items-center justify-center text-center text-white px-6">
      
      {/* ─── MAIN HEADLINE ─── */}
      <h2 className=" text-h2-mobile md:text-h2-tab lg:text-h2 font-serif leading-tight max-w-5xl mb-2 tracking-tight">
        Leading Asset management company committed
      </h2>
      
      {/* ─── SUBHEADING ─── */}
      <p className="text-neutral-400 text-base md:text-body-sm font-sans max-w-3xl font-light mb-8 leading-relaxed">
        Speak with our investment advisors to understand how our funds can help you achieve your financial goals.
      </p>

      {/* ─── BOTTOM LINKED TEXTS ─── */}
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-2 md:gap-x-16">
        {FUND_LINKS.map((link) => (
          <Link 
            key={link.label}
            href={link.href}
            className="group flex items-center gap-3 text-white text-lg md:text-body-md font-medium transition-all"
          >
            <span className="transition-colors ">
              {link.label}
            </span>
            
            {/* Custom Up-Right Arrow Icon */}
            <svg 
              width="14" height="14" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        ))}
      </div>
      
    </section>
  );
}