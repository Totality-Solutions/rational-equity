"use client";

import AnimatedHeader from "@/components/common/AnimatedHeader";
import Container from "@/components/common/Container";
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
    <section className="bg-white ">
  <Container className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 items-stretch">

    {/* LEFT SIDE */}
    <div className="bg-brand-maroon/10 rounded-2xl p-5 sm:p-6 md:p-8 flex items-center">
      <AnimatedHeader 
        title="Fund Overview"
        highlight="Overview"
        highlightColor="#8B0000"
        subheading={description}
        variant="light"
        className="text-h4 sm:text-h3 text-black"
        subheadingClassName="mt-4 sm:mt-6 text-sm sm:text-base md:text-body-lg tracking-wide text-black"
      />
    </div>

    {/* RIGHT SIDE */}
    <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-2 md:grid-cols-3">

      {stats.map((stat, index) => (
        <div
          key={index}
          className="
            p-4 sm:p-5 md:p-6
            flex flex-col gap-2
            border border-gray-100
            transition-all duration-300
            hover:bg-brand-maroon/10
            hover:scale-[1.02]
          "
        >
          {/* Top Row */}
          <div className="flex items-center gap-2 text-brand-maroon">
            <div className="w-4 h-4 sm:w-5 sm:h-5">
              {stat.icon}
            </div>
            <span className="text-[11px] sm:text-xs md:text-sm font-medium text-black/70">
              {stat.label}
            </span>
          </div>

          {/* Value */}
          <p className="text-sm sm:text-base md:text-body-md font-semibold text-black leading-snug">
            {stat.value}
          </p>
        </div>
      ))}

    </div>

  </Container>
</section>
  );
}