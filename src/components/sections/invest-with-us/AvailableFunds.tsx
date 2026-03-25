"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { TrendingUp, X, Shield, Calendar, Wallet, BarChart3 } from "lucide-react";
import Link from "next/link"; // 🔹 Import Link

// 1. Added 'link' property to each fund
const funds = [
  {
    name: "India Long-Only Fund",
    return: "+18.5%",
    description: "Equity investments in high-quality Indian companies with strong fundamentals and sustainable competitive advantages.",
    minInvestment: "₹10,000",
    risk: "Moderate-High",
    aum: "₹340Cr",
    since: "2014",
    link: "/contact"
  },
  {
    name: "Gold & Silver Miners Fund",
    return: "+12.3%",
    description: "Strategic exposure to precious metals mining companies worldwide, providing a hedge against market volatility.",
    minInvestment: "₹10,000",
    risk: "Moderate",
    aum: "₹180Cr",
    since: "2018",
    link: "/contact"
  },
  {
    name: "Absolute Return Fund",
    return: "+15.7%",
    description: "Market-neutral strategies targeting positive returns in all market conditions through hedging and arbitrage.",
    minInvestment: "₹10,000",
    risk: "Low-Moderate",
    aum: "₹210Cr",
    since: "2016",
    link: "/contact"
  },
];

const titleVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const sublineVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { x: -80, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function AvailableFunds() {
  const [selectedFund, setSelectedFund] = useState<null | typeof funds[0]>(null);

  useEffect(() => {
    if (selectedFund) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedFund]);

  return (
    <section className="bg-white pb-24 pt-16 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-5xl md:text-4xl font-serif text-gray-900">
            Available Funds
          </motion.h2>
          <motion.p variants={sublineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-gray-400 text-lg">
            Our managed investment solutions
          </motion.p>
        </div>

        {/* Funds Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {funds.map((fund, index) => (
            <motion.div 
              key={index} custom={index} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-emerald-500 font-bold">
                  <TrendingUp size={18} />
                  <span>{fund.return}</span>
                </div>
                <span className="text-[10px] tracking-widest text-gray-300 font-bold uppercase">1Y Return</span>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{fund.name}</h3>
                <p className="text-gray-400 leading-relaxed text-sm pb-3">{fund.description}</p>
              </div>

              <div className="space-y-4 mb-10 border-t border-gray-50 pt-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Min. Investment</span>
                  <span className="font-bold text-gray-900">{fund.minInvestment}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Risk Level</span>
                  <span className="font-bold text-gray-900">{fund.risk}</span>
                </div>
              </div>

              <button 
                onClick={() => setSelectedFund(fund)}
                className="flex items-center w-full group overflow-hidden border border-brand-maroon transition-all"
              >
                <span className="flex-1 py-3 text-brand-maroon font-sans font-bold text-sm bg-white group-hover:bg-gray-50 transition-colors">View Details</span>
                <div className="bg-brand-maroon p-4 text-white"><img src="/images/arrowbtn.png" alt="Arrow" className="w-4 h-4 object-contain" /></div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedFund && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedFund(null)}
              className="fixed inset-0 bg-black/50 z-[99] backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[460px] bg-white rounded-[24px] shadow-2xl z-[100] border border-gray-100 overflow-hidden"
            >
              <div className="p-8 pb-4 flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-lg">
                    <TrendingUp size={20} />
                    <span>{selectedFund.return}</span>
                    <span className="text-[10px] text-gray-300 uppercase tracking-widest ml-2">1Y Return</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black font-serif pt-2">{selectedFund.name}</h3>
                </div>
                <button onClick={() => setSelectedFund(null)} className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-black transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="px-8 mb-6">
                <p className="text-gray-500 leading-relaxed text-[15px]">{selectedFund.description}</p>
              </div>

              <div className="px-8 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                  <StatRow icon={<BarChart3 size={16}/>} label="AUM" value={selectedFund.aum} />
                  <StatRow icon={<Shield size={16}/>} label="Risk Level" value={selectedFund.risk} />
                  <StatRow icon={<Calendar size={16}/>} label="Since" value={selectedFund.since} />
                  <StatRow icon={<Wallet size={16}/>} label="Min. Investment" value={selectedFund.minInvestment} />
                </div>
              </div>

              {/* 🔹 Dynamic Action Button Link */}
              <div className="px-8 pb-8">
                <Link href={selectedFund.link} className="block w-full">
                  <button className="w-full bg-brand-maroon text-white font-bold py-4 hover:bg-opacity-90 transition-all shadow-lg shadow-brand-maroon/20 uppercase tracking-wider text-sm ">
                    Invest in this fund
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

function StatRow({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 text-gray-400">
        <span className="opacity-60">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className="font-bold text-gray-900 text-sm">{value}</span>
    </div>
  );
}