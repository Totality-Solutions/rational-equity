// src/components/sections/product/FundPerformance.tsx
"use client";

import AnimatedHeader from "@/components/common/AnimatedHeader";

interface PerformanceProps {
  data: { period: string; fundReturn: string; benchmark: string }[];
}

export default function FundPerformance({ data }: PerformanceProps) {
  return (
    <section className="py-12 px-6 bg-[#F8F8F8] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Static Header */}
        <div className="text-center mb-12 space-y-3">
          <AnimatedHeader 
            title="Fund Performance"
            highlight="Performance"
            highlightColor="#8B0000"
            subheading="Historical returns across different time periods"
            variant="light"
            className="mb-16"
          />
          {/* <h2 className="font-serif text-[42px] text-gray-900">
            Fund <span className="text-brand-maroon">Performance</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Historical returns across different time periods
          </p> */}
        </div>

        {/* Performance Table */}
        <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-gray-50/30 border-b border-gray-100 px-8 py-5">
            <span className="text-body-sm font-semibold text-[#000000]/50">Period</span>
            <span className="text-body-sm font-semibold text-[#000000]/50 text-center">Fund Return</span>
            <span className="text-body-sm font-semibold text-[#000000]/50 text-right">Benchmark</span>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-50 ">
            {data.map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 px-8 py-4 items-center bg-white
                  ${row.period === "Since Inception" ? "!bg-gray-50/50" : ""}`}
              >
                <span className={`text-body-md  ${row.period === "Since Inception" ? "font-bold text-gray-900" : "text-gray-500"}`}>
                  {row.period}
                </span>
                
                <span className={`text-body-md font-bold text-center ${row.fundReturn.includes('+') ? 'text-green-600' : 'text-gray-900'}`}>
                  {row.fundReturn}
                </span>
                
                <span className="text-body-md  text-gray-400 text-right">
                  {row.benchmark}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}