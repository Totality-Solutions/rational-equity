"use client";

import { motion } from "framer-motion";
import AnimatedHeader from "@/components/common/AnimatedHeader"; // Adjust path as needed

interface PhilosophyProps {
  points: { title: string; description: string }[];
}

export default function Philosophy({ points }: PhilosophyProps) {
  return (
    <section className="py-16 md:py-16 px-6 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- INTEGRATED ANIMATED HEADER --- */}
        <AnimatedHeader 
          title="Investment Philosophy"
          highlight="Philosophy"
          highlightColor="#8B0000"
          subheading="We believe precious metals play a critical role in portfolio construction as a hedge against inflation, currency debasement, and geopolitical uncertainty. Rather than investing in physical gold, we focus on miners who offer operational leverage to rising commodity prices."
          variant="light"
          className="mb-16 md:mb-20"
        />

        {/* Dynamic Philosophy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="p-10 rounded-2xl border-[3px] border-gray-100 bg-white flex flex-col gap-4 hover:border-[#8B0000]/20 transition-colors duration-300"
            >
              <span className="text-[#8B0000] font-bold text-sm tracking-widest">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              
              <h4 className="font-serif text-[20px] text-gray-900 font-bold leading-tight">
                {point.title}
              </h4>
              
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}