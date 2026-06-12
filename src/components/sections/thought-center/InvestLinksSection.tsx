"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, X, Shield, Calendar, Wallet, BarChart3 } from "lucide-react";
import CTAButton from "@/components/common/CTAButton";
import AnimatedHeader from "@/components/common/AnimatedHeader";

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

  useEffect(() => {
    document.body.style.overflow = selectedFund ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedFund]);

  return (
    <section className="w-full overflow-hidden">

      {/* ── Strip ── */}
      <div className="group relative w-full bg-[#9B0000] py-6 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-500 hover:bg-white border-b border-white/10">
        <p className="text-white text-lg md:text-body-lg max-w-3xl transition-colors duration-500 group-hover:text-black">
          <span className="font-normal">
            Book a quick call with our team and let's explore how we can{" "}
          </span>
          <span className="font-bold transition-colors duration-500 group-hover:text-[#9B0000]">
            work together.
          </span>
        </p>
        <div className="flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
          <CTAButton
            href="/invest-with-us"
            text="Schedule a Call"
            variant="light"
            className="h-[40px] transition-all duration-500 group-hover:text-white group-hover:border-[#9B0000]"
          />
        </div>
      </div>

      {/* ── Invest links ── */}
      <div className="flex flex-col items-center justify-center text-center text-black px-6 pt-12 pb-14">

        {/* Eyebrow */}
        {/* <div className="flex items-center gap-2 mb-5">
          <span className="block h-px w-5 bg-[#9B0000]" />
          <span className="text-xs font-medium tracking-widest uppercase text-[#9B0000]">
            Our funds
          </span>
          <span className="block h-px w-5 bg-[#9B0000]" />
        </div> */}

        {/* Headline */}

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
                <button
                  onClick={() => setSelectedFund(fund)}
                  className="w-full cursor-pointer bg-[#9B0000] text-white py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all hover:bg-[#600000] active:scale-[0.98]"
                >
                  View Details
                </button>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {selectedFund && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFund(null)}
              className="fixed inset-0 bg-black/60 z-[99] backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[440px] bg-white rounded-2xl z-[100] overflow-hidden border border-brand-maroon/20"
            >
              {/* Accent bar */}
              <div className="h-[3px] w-full" style={{ background: CRIMSON }} />

              {/* Header */}
              <div className="p-6 pb-3 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-sm mb-1.5">
                    <TrendingUp size={15} />
                    <span>{selectedFund.annualReturn}</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest ml-1">
                      1Y return
                    </span>
                  </div>
                  <h3 className="text-gray-900 font-semibold text-lg leading-snug flex items-center gap-2">
                    <Image
                      src={selectedFund.img}
                      alt={selectedFund.title}
                      width={22}
                      height={22}
                      className="w-5 h-5 shrink-0"
                    />
                    {selectedFund.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedFund(null)}
                  className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors cursor-pointer shrink-0 ml-3"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Description */}
              <p className="px-6 pb-4 text-[13px] text-gray-500 leading-relaxed">
                {selectedFund.description}
              </p>

              {/* Stats box */}
              <div className="mx-6 mb-5 bg-gray-50 rounded-xl p-4 flex flex-col gap-3">
                <StatRow icon={<BarChart3 size={14} />} label="AUM" value={selectedFund.aum} />
                <StatRow icon={<Shield size={14} />} label="Risk level" value={selectedFund.risk} />
                <StatRow icon={<Calendar size={14} />} label="Since" value={selectedFund.since} />
                <StatRow icon={<Wallet size={14} />} label="Min. investment" value={selectedFund.minInvestment} />
              </div>

              {/* Footer CTA */}
              <div className="px-6 pb-6">
                <Link href={selectedFund.href} className="block w-full">
                  <button className="w-full bg-[#9B0000] text-white py-3 rounded-full text-[13px] font-semibold tracking-wide transition-all hover:bg-[#600000] active:scale-[0.98] cursor-pointer">
                    Invest in this fund →
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

function StatRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2.5 text-gray-400 text-[12px]">
        <span className="opacity-70">{icon}</span>
        <span>{label}</span>
      </div>
      <span className="text-[12px] font-semibold text-gray-900">{value}</span>
    </div>
  );
}