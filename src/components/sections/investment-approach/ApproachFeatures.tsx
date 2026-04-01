
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Search, Shield, TrendingUp } from 'lucide-react';
import Container from '@/components/common/Container';

const features = [
  {
    icon: <Target className="w-12 h-12 lg:w-14 lg:h-14 stroke-[1px]" />,
    title: "Quality First",
    desc: "We invest in businesses with sustainable competitive advantages, strong management, and robust business models."
  },
  {
    icon: <Search className="w-12 h-12 lg:w-14 lg:h-14 stroke-[1px]" />,
    title: "Deep Research",
    desc: "Rigorous fundamental analysis and continuous monitoring of portfolio companies."
  },
  {
    icon: <Shield className="w-12 h-12 lg:w-14 lg:h-14 stroke-[1px]" />,
    title: "Risk Management",
    desc: "Prudent risk assessment and portfolio diversification to protect capital."
  },
  {
    icon: <TrendingUp className="w-12 h-12 lg:w-14 lg:h-14 stroke-[1px]" />,
    title: "Long-Term Focus",
    desc: "Patient capital approach focused on compounding wealth over the long term."
  }
];

export default function ApproachFeatures() {
  return (
    <section className="relative bg-white pb-32">
      {/* Continued Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#d1d1d1 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-sm p-8 lg:p-8 rounded-2xl border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 text-center flex flex-col items-center group"
            >
              <div className="mb-8 text-[#8B0000] transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>
              <h4 className="font-sans font-bold text-gray-900 mb-6 text-lg tracking-tight">
                {item.title}
              </h4>
              <p className="font-sans text-gray-500 leading-relaxed text-body-md  px-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}