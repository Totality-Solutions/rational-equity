"use client";

import { TrendingUp } from "lucide-react";

const funds = [
  {
    name: "India Long-Only Fund",
    return: "+18.5%",
    description: "Equity investments in high-quality Indian companies with strong fundamentals and sustainable competitive advantages.",
    minInvestment: "₹10,000",
    risk: "Moderate-High",
  },
  {
    name: "Gold & Silver Miners Fund",
    return: "+12.3%",
    description: "Strategic exposure to precious metals mining companies worldwide, providing a hedge against market volatility.",
    minInvestment: "₹10,000",
    risk: "Moderate",
  },
  {
    name: "Absolute Return Fund",
    return: "+15.7%",
    description: "Market-neutral strategies targeting positive returns in all market conditions through hedging and arbitrage.",
    minInvestment: "₹10,000",
    risk: "Low-Moderate",
  },
];

export default function AvailableFunds() {
  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-4xl font-serif font-regular  text-gray-900">Available Funds</h2>
          <p className="text-gray-400 text-lg">Our managed investment solutions</p>
        </div>

        {/* Funds Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {funds.map((fund, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
            >
              {/* Return Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-emerald-500 font-bold">
                  <TrendingUp size={18} />
                  <span>{fund.return}</span>
                </div>
                <span className="text-[10px] tracking-widest text-gray-300 font-bold uppercase">
                  1Y Return
                </span>
              </div>

              {/* Fund Info */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{fund.name}</h3>
                <p className="text-gray-400 leading-relaxed text-sm pb-3">
                  {fund.description}
                </p>
              </div>

              {/* Metrics Table */}
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

              {/* Split Action Button */}
              <button className="flex items-center w-full group overflow-hidden border border-[#800000]">
                <span className="flex-1 py-3 text-[#800000] font-sans font-bold text-sm bg-white group-hover:bg-gray-50 transition-colors">
                  View Details
                </span>
                <div className="bg-[#800000] p-4 text-white">
                  <img
                    src="/images/arrowbtn.png"
                    alt="Arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}