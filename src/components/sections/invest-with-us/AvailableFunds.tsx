"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { TrendingUp, X, Shield, Calendar, Wallet, BarChart3 } from "lucide-react";
import Link from "next/link";
import AnimatedHeader from "@/components/common/AnimatedHeader";
import Container from "@/components/common/Container";

const CRIMSON = "#9B0000";

const funds = [
  {
    name: "India Long-Only Fund",
    return: "+18.5%",
    description:
      "Equity investments in high-quality Indian companies with strong fundamentals and sustainable competitive advantages.",
    minInvestment: "₹10,000",
    risk: "Moderate-High",
    aum: "₹340 Cr",
    since: "2014",
    link: "/contact",
  },
  {
    name: "Gold & Silver Miners Fund",
    return: "+12.3%",
    description:
      "Strategic exposure to precious metals mining companies worldwide, providing a hedge against market volatility.",
    minInvestment: "₹10,000",
    risk: "Moderate",
    aum: "₹180 Cr",
    since: "2018",
    link: "/contact",
  },
  {
    name: "Absolute Return Fund",
    return: "+15.7%",
    description:
      "Market-neutral strategies targeting positive returns in all market conditions through hedging and arbitrage.",
    minInvestment: "₹10,000",
    risk: "Low-Moderate",
    aum: "₹210 Cr",
    since: "2016",
    link: "/contact",
  },
];

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function AvailableFunds() {
  const [selectedFund, setSelectedFund] = useState<(typeof funds)[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedFund ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedFund]);

  return (
    <section className="relative bg-white pb-10 overflow-hidden">
      <Container>

        <AnimatedHeader
          title="Available Funds"
          subheading="Our managed investment solutions"
          variant="light"
          className="mb-6 sm:mb-8 text-h3 text-black"
          subheadingClassName="text-body-lg tracking-wide text-black"
        />

        {/* Fund cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {funds.map((fund, index) => (
            <motion.div
              key={fund.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative bg-white rounded-2xl border border-brand-maroon/20 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-brand-maroon/40 hover:shadow-[0_8px_30px_rgba(139,0,0,0.08)]"
            >
              {/* Top accent bar */}
              <div className="h-[3px] w-full shrink-0" style={{ background: CRIMSON }} />

              <div className="p-6 md:p-7 flex flex-col flex-1 gap-4">

                {/* Return row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-sm">
                    <TrendingUp size={15} />
                    <span>{fund.return}</span>
                  </div>
                  <span className="text-[10px] tracking-widest uppercase text-gray-400 font-medium">
                    1Y return
                  </span>
                </div>

                {/* Title + desc */}
                <div className="flex-1">
                  <h3 className="text-gray-900 font-semibold text-[17px] leading-snug mb-2.5 transition-colors group-hover:text-brand-maroon">
                    {fund.name}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    {fund.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="border-t border-gray-100 pt-4 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] text-gray-400 uppercase tracking-wide font-medium">
                      Min. investment
                    </span>
                    <span className="text-[13px] font-semibold text-gray-900">
                      {fund.minInvestment}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] text-gray-400 uppercase tracking-wide font-medium">
                      Risk level
                    </span>
                    <span className="text-[13px] font-semibold text-gray-900">
                      {fund.risk}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedFund(fund)}
                  className="w-full bg-brand-maroon text-white py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all hover:bg-[#600000] active:scale-[0.98] cursor-pointer"
                >
                  View Details
                </button>

              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedFund && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFund(null)}
              className="fixed inset-0 bg-black/50 z-[99] backdrop-blur-sm"
            />

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[440px] bg-white rounded-2xl border border-brand-maroon/20 z-[100] overflow-hidden"
            >
              {/* Accent bar */}
              <div className="h-[3px] w-full" style={{ background: CRIMSON }} />

              {/* Header */}
              <div className="p-6 pb-3 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-sm mb-1.5">
                    <TrendingUp size={15} />
                    <span>{selectedFund.return}</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest ml-1">
                      1Y return
                    </span>
                  </div>
                  <h3 className="text-gray-900 font-semibold text-lg leading-snug">
                    {selectedFund.name}
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
                <Link href={selectedFund.link} className="block w-full">
                  <button className="w-full bg-brand-maroon text-white py-3 rounded-full text-[13px] font-semibold tracking-wide transition-all hover:bg-[#600000] active:scale-[0.98] cursor-pointer">
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