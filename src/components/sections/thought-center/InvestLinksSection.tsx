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

const CRIMSON = "#9B0000";

const FUNDS = [
  {
    title: "India Long-Only Fund",
    description: "Focused long-term equity investments in high-quality Indian businesses with strong competitive moats.",
    returns: "16.5% CAGR",
    annualReturn: "+18.5%",
    href: "/product/india-long-only",
    img: "/images/icons/india-long-only-fund.svg",
    minInvestment: "₹10,000",
    risk: "Moderate-High",
    aum: "₹340 Cr",
    since: "2014",
  },
  {
    title: "Gold & Silver Miners Fund",
    description: "Strategic exposure to precious metals mining companies globally, providing inflation and volatility hedge.",
    returns: "18.2% CAGR",
    annualReturn: "+12.3%",
    href: "/product/gold-silver-miners",
    img: "/images/icons/gold-&-silver-miners-fund.svg",
    minInvestment: "₹10,000",
    risk: "Moderate",
    aum: "₹180 Cr",
    since: "2018",
  },
  {
    title: "Absolute Return Fund",
    description: "Market-neutral strategies designed for consistent positive returns across all market conditions.",
    returns: "12.8% CAGR",
    annualReturn: "+15.7%",
    href: "/product/absolute-return",
    img: "/images/icons/absolute-return-fund.svg",
    minInvestment: "₹10,000",
    risk: "Low-Moderate",
    aum: "₹210 Cr",
    since: "2016",
  },
];

type Fund = typeof FUNDS[0];

export default function InvestLinksSection() {
  const [selectedFund, setSelectedFund] = useState<Fund | null>(null);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedFund ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedFund]);

  return (
    <div>
    <section className="w-full px-3 md:px-16 bg-[#FAFAFA] ">
      <Container className="py-6 md:py-12 mx-auto space-y-12 relative">

        <AnimatedHeader
          title="Leading asset management committed to you"
          highlight="committed"
          subheading="Speak with our investment advisors to understand how our funds can help you achieve your long-term financial goals."
          className="mb-6 sm:mb-7 text-h3 text-black"
          subheadingClassName="text-body-lg tracking-wide text-black"
        />

        {/* Fund cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {FUNDS.map((fund, index) => (
            <motion.div
              key={fund.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,0,0,0.15)]"
            >
              {/* Top accent bar */}
              <div className="h-[3px] w-full shrink-0" style={{ background: CRIMSON }} />

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
