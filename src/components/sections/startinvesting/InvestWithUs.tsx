"use client";

import Link from "next/link";

const stats = [
  { value: "₹850Cr+", label: "Assets Under Management" },
  { value: "2,500+", label: "Active Investors" },
  { value: "18%", label: "Avg. Annual Return" },
  { value: "12+ Years", label: "Track Record" },
];

export default function InvestWithUs() {
  return (
    <section className="relative w-full bg-white font-sans">
      
      {/* 🔹 Dotted Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#d1d5db 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 pt-24 pb-0">
        {/* Top Content */}
        <div className="text-center max-w-3xl mx-auto px-6 mb-16 space-y-8">
          <h2 className="text-5xl md:text-6xl font-serif font-semibold text-brand-maroon">
            Invest With Us
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Simple, transparent, and efficient investing with Rational AMC — a 
            disciplined, research-driven approach to generating superior long-term returns.
          </p>

          <div className="flex justify-center">
            {/* 🔹 Reusable Split Button Style */}
            <Link 
              href="/invest" 
              className="flex items-center border border-brand-maroon group overflow-hidden bg-white"
            >
              <span className="px-8 py-3 text-brand-maroon font-sans font-bold text-lg tracking-wider">
                Start Investing
              </span>
              <div className="bg-brand-maroon p-4 text-white">
                <img
                  src="/images/arrowbtn.png" 
                  alt="Arrow"
                  className="w-5 h-5 object-contain"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* 🔹 Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-100">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`py-16 px-6 text-center space-y-2 border-gray-100 
                ${index !== stats.length - 1 ? 'lg:border-r' : ''} 
                ${index % 2 === 0 ? 'md:border-r lg:border-r' : 'md:border-r-0 lg:border-r'}`}
            >
              <h3 className="text-[20px] md:text-[28px] font-semibold font-serif text-gray-900">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-[14px] ">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}