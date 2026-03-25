"use client";

import { 
  Wallet, 
  Calendar, 
  BarChart3, 
  ShieldCheck, 
  Percent, 
  AlertCircle, 
  Target, 
  Clock, 
  User, 
  Tag 
} from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface FundOverviewProps {
  description: string;
  stats: StatItem[];
}

export default function FundOverview({ description, stats }: FundOverviewProps) {
  return (
    <section className="bg-white py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="font-serif text-[40px] text-gray-900">
            Fund <span className="text-brand-maroon ">Overview</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-6xl mx-auto leading-relaxed tracking-wide">
            {description}
          </p>
        </div>

        {/* 🔹 Stats Grid - Perfectly matching your screenshot */}
        <div className="border border-gray-100 rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`p-8 flex flex-col gap-4 border-gray-50 bg-white hover:bg-gray-50/50 transition-colors
                ${index < 5 ? 'border-b' : ''} 
                ${(index + 1) % 5 !== 0 ? 'lg:border-r' : ''}
                ${(index + 1) % 2 !== 0 ? 'sm:border-r lg:border-r-0' : ''}
              `}
            >
              <div className="flex items-center gap-2 text-brand-maroon">
                {stat.icon}
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-300">
                  {stat.label}
                </span>
              </div>
              <p className="text-[16px] font-semibold text-gray-900 leading-tight">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}