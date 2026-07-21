"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, X, Shield, Calendar, Wallet, BarChart3 } from "lucide-react";
import CTAButton from "@/components/common/CTAButton";
import AnimatedHeader from "@/components/common/AnimatedHeader";
import ReadyToStart from "@/components/common/ReadyToStart";
import Container from "@/components/common/Container";
import { ScheduleCallModal } from "@/components/common/ScheduleCallModal";

const FUNDS = [
  {
    title: "India Long-Only Fund",
    description: "A high-conviction portfolio of Indian listed equities with a heavy tilt toward small and mid-caps where we see asymmetric reward.",
    returns: "30% CAGR",
    annualReturn: "30%",
    href: "/product/india-long-only",
    img: "/images/icons/india-long-only-fund.svg",
    minInvestment: "₹1 Crore",
    risk: "Moderate-High",
    aum: "₹340 Cr",
    since: "2014",
  },
  {
    title: "Gold & Silver Miners Fund",
    description: "A focused vehicle for strategic exposure to global gold and silver mining equities — operated from GIFT City.",
    returns: "75% CAGR",
    annualReturn: "75%",
    href: "/product/gold-silver-miners",
    img: "/images/icons/gold-&-silver-miners-fund.svg",
    minInvestment: "US$ 150,000",
    risk: "Moderate",
    aum: "₹180 Cr",
    since: "2018",
  },
  {
    title: "Absolute Return Fund",
    description: "A quant plus discretion model-based Long-Short strategy that focuses on identifying periods of extreme greed and fear to capture significantly large moves while sitting out of sideways choppiness and major drawdowns.",
    returns: "45% CAGR",
    annualReturn: "45%",
    href: "/product/absolute-return",
    img: "/images/icons/absolute-return-fund.svg",
    minInvestment: "₹10,000",
    risk: "Low-Moderate",
    aum: "₹210 Cr",
    since: "2016",
  },
];

type Fund = typeof FUNDS[0];

function FundCard({ fund, index }: { fund: Fund; index: number }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="group relative border-t-4 border-brand-maroon bg-white rounded-2xl overflow-hidden flex flex-col shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,0,0,0.15)]"
    >
      <div className="p-6 md:p-7 flex flex-col flex-1 gap-4 text-left">

        {/* Return row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-sm">
            <TrendingUp size={15} />
            <span>{fund.annualReturn}</span>
          </div>
          <span className="text-[10px] tracking-widest uppercase text-gray-400 font-medium">
            1Y return
          </span>
        </div>

        {/* Icon + Title */}
        <div className="flex-1">
          <h3 className="text-gray-900 font-semibold text-[17px] leading-snug mb-2.5 flex items-center gap-2 transition-colors group-hover:text-[#9B0000]">
            <Image
              src={fund.img}
              alt={fund.title}
              width={24}
              height={24}
              className="w-6 h-6 shrink-0"
            />
            {fund.title}
          </h3>
          <p className="text-gray-500 text-[13px] leading-relaxed">
            {fund.description}
          </p>
        </div>

        {/* Stats */}
        <div className="border-t border-gray-100 pt-4 flex flex-col gap-2.5">
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-gray-400 uppercase tracking-wide font-medium">
              3Y returns
            </span>
            <span className="text-[13px] font-semibold text-[#9B0000]">
              {fund.returns}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-gray-400 uppercase tracking-wide font-medium">
              Min. investment
            </span>
            <span className="text-[13px] font-semibold text-gray-900">
              {fund.minInvestment}
            </span>
          </div>
        </div>

        {/* CTA */}
        <Link href={fund.href}>
          <button
            className="w-full cursor-pointer bg-[#9B0000] text-white py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all hover:bg-[#600000] active:scale-[0.98]"
          >
            View Details
          </button>
        </Link>

      </div>
    </motion.div>
  );
}

export default function InvestLinksSection() {
  const [selectedFund, setSelectedFund] = useState<Fund | null>(null);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedFund ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedFund]);

  return (
    <div>
    <section className="w-full bg-[#FAFAFA] ">
      <Container className="py-6 lg:py-12 mx-auto space-y-12 relative">

        <AnimatedHeader
          title="Leading asset management committed to you"
          highlight="committed"
          subheading="Speak with our investment advisors to understand how our funds can help you achieve your long-term financial goals."
          className="mb-6 sm:mb-7 text-h3 text-black"
          subheadingClassName="text-body-md-mobile md:text-body-md-tab lg:text-body-md tracking-wide text-black"
          titleClassName="text-h3-mobile md:text-h3-tab lg:text-h2 font-playfair font-normal leading-tight tracking-tight"
        />

        {/* Fund cards — mobile & tablet: sticky stacking cards on scroll */}
        <div className="lg:hidden space-y-6">
          {FUNDS.map((fund, index) => (
            <div key={fund.title} className="sticky top-20" style={{ zIndex: index + 1 }}>
              <FundCard fund={fund} index={index} />
            </div>
          ))}
        </div>

        {/* Fund cards — desktop grid */}
        <div className="hidden lg:grid w-full grid-cols-3 gap-5 lg:gap-7">
          {FUNDS.map((fund, index) => (
            <FundCard key={fund.title} fund={fund} index={index} />
          ))}
        </div>

      </Container>
    </section>
    <ReadyToStart
        title="Book a quick call with our team and let's explore how we can work together."
        description=""
        primaryCTA={{
          text: "Schedule a Call",
          // Intercept routing by executing the state hook action directly
          onClick: () => setIsCallModalOpen(true),
        }}
        titleClassName="tracking-normal leading-[1.1]"
      />

      {/* The Target Call Modal Overlay Layer */}
      <ScheduleCallModal 
        isOpen={isCallModalOpen} 
        onClose={() => setIsCallModalOpen(false)} 
      />
    </div>
  );
}
