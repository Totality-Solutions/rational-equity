// src/components/sections/product/Philosophy.tsx
"use client";

import { motion } from "framer-motion";

interface PhilosophyProps {
  points: { title: string; description: string }[];
}

export default function Philosophy({ points }: PhilosophyProps) {
  return (
    <section className="py-12 px-6 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Static Header & Description */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="font-serif text-[42px] text-gray-900">
            Investment <span className="text-brand-maroon">Philosophy</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed tracking-wide">
            We believe precious metals play a critical role in portfolio construction 
            as a hedge against inflation, currency debasement, and geopolitical uncertainty. 
            Rather than investing in physical gold, we focus on miners who offer operational 
            leverage to rising commodity prices.
          </p>
        </div>

        {/* Dynamic Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 40 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-10 rounded-2xl border-3 border-gray-100 bg-white flex flex-col gap-4"
            >
              <span className="text-brand-maroon font-bold text-sm tracking-widest">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              
              <h4 className="font-sans text-[19px] text-gray-900 font-bold leading-tight">
                {point.title}
              </h4>
              
              <p className="text-gray-400 text-[15px] leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}