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
import { title } from "process";

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface FundOverviewProps {
  title?: string;
  titleItalics?: string;
  description: string;
  stats: StatItem[];
}

export default function FundOverview({ title, titleItalics, description, stats }: FundOverviewProps) {
  return (
    <section className="bg-white ">
      <AnimatedHeader 
          title="Fund Overview"
          highlight="Overview"
          highlightColor="#9B0000"
          variant="light"
          titleClassName="text-h3-mobile md:text-h3-tab lg:text-h3 text-black mb-6 md:mb-8"
          subheadingClassName="  text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg tracking-wide text-black"
        />
      <Container className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-5 md:gap-8 items-stretch">

        {/* LEFT SIDE */}
        <div className="bg-brand-grey rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col gap-6 items-start">

        <div>
          <h2 className="text-h3-mobile md:text-h2-mobile lg:text-h1-mobile text-black font-playfair font-medium">
            {title}<span className="italic text-brand-maroon"> {titleItalics} </span>
          </h2>
        </div>

        <div>
          <p className="text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg tracking-wide text-black">
            {description}
          </p>
        </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="border border-black/10 rounded-2xl overflow-hidden grid grid-cols-2 md:grid-cols-3 h-fit">

          {stats.map((stat, index) => ( 
            <div
              key={index}
              className="
                px-4 py-6 flex flex-col gap-2
                border border-black/10
                transition-all duration-300
                hover:bg-brand-maroon/10
                
              "
            >
              {/* Top Row */}
              <div className="flex items-center gap-2 text-brand-maroon">
                <div className="w-4 h-4 sm:w-5 sm:h-5">
                  {stat.icon}
                </div>
                <span className="text-body-md-mobile md:text-body-md-tab lg:text-body-md font-medium text-black/50">
                  {stat.label}
                </span>
              </div>
          
              {/* Value */}
              <p className="text-sm sm:text-base md:text-body-md font-semibold text-black/70 leading-snug">
                {stat.value}
              </p>
            </div>
          ))}

        </div>
        
      </Container>
    </section>
  );
}