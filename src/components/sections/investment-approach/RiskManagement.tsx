
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Users } from 'lucide-react';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';

const risks = [
  {
    icon: <Shield className="w-10 h-10 text-[#8B0000]" />,
    title: "Diversification",
    desc: "Appropriate diversification across sectors, market caps, and business models to reduce concentration risk."
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-[#8B0000]" />,
    title: "Position Sizing",
    desc: "Disciplined position sizing based on conviction levels and risk-reward assessment of each investment."
  },
  {
    icon: <Users className="w-10 h-10  text-[#8B0000]" />,
    title: "Continuous Review",
    desc: "Regular portfolio reviews and rebalancing to ensure alignment with investment objectives and risk parameters."
  }
];

export default function RiskManagement() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        
        {/* Header Section */}
      <AnimatedHeader 
          title="Risk Management Framework"
          highlight="Risk Management"
          highlightColor="#8B0000"
          subheading="Protecting capital is as important as generating returns"
          className="mb-16 md:mb-24"
          titleClassName="leading-tight"
          subheadingClassName="text-gray-600 max-w-3xl mx-auto mt-6"
        />

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10  mx-auto">
          {risks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-8 lg:p-12 rounded-[24px] border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-[#8B0000]/10 transition-all duration-500 flex flex-col items-start group"
            >
              <div className="mb-8 transition-transform duration-500 text- group-hover:scale-110">
                {item.icon}
              </div>
              <h4 className="font-sans font-bold text-h4-tab  text-gray-900 mb-4 tracking-tight">
                {item.title}
              </h4>
              <p className="font-sans text-gray-500 text-body-lg lg:text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}