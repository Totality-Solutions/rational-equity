"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/common/CTAButton";

interface ProductCTAProps {
  fundTitle: string;
  minLumpSum?: string;
  minSIP?: string;
}

export default function FundCTA({ 
  fundTitle, 
  minLumpSum = "₹10,000", 
  minSIP = "₹5,000" 
}: ProductCTAProps) {
  return (
    <section className="">
        <div className="w-full min-h-[160px] px-8 md:px-16 py-12 bg-white border-3 border-gray-100 rounded-t-2xl ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          
          {/* Text Content */}
          <div className="max-w-xl space-y-3">
            <h3 className="font-serif text-3xl md:text-[34px] leading-tight text-gray-900">
              Invest in <span className="text-brand-maroon font-weight-bold">{fundTitle}</span>
            </h3>
            <p className="text-gray-500 font-sans text-lg leading-relaxed tracking-wide">
              Start with {minLumpSum} lump sum or {minSIP}/month via SIP. 
              Our team is here to help.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            
            {/* Start Investing Button */}
            <CTAButton 
              href="/invest" // Or your specific investment path
              text="Start Investing" 
              variant="light"
              className="h-[50px]" // Matches your specific height requirement
            />

            {/* Talk to Advisor Button */}
            <button className="h-[50px] px-8 w-full sm:w-auto border border-gray-200 text-gray-500 font-sans text-lg hover:bg-gray-50 transition-colors">
              Talk to an Advisor
            </button>
            
          </div>
        </div>
        </div>
    </section>
  );
}