'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeader from '@/components/common/AnimatedHeader'; // Adjust path as needed

const MILESTONES = [
  { year: '2020', title: 'Establishment', description: 'Rational Equity Partners established in Mumbai with a focus on high-conviction strategies.' },
  { year: '2021', title: 'SEBI Registration', description: 'Registered with SEBI as a Category III AIF, launching our flagship investment scheme.' },
  { year: '2022', title: 'First Multibaggers', description: 'Delivered 3x—5x returns on multiple holdings within the mid-cap and small-cap space.' },
  { year: '2024', title: 'Top Performer', description: "Ranked among India's top performing AIFs based on risk-adjusted alpha generation." },
];

export default function Journey() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.4 
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const yearVariants: Variants = {
    initial: { color: "#E5E7EB", scale: 1 },
    hover: { color: "#8B0000", scale: 1.05 }
  };

  return (
    <section className="bg-white pb-16 md:pb-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- INTEGRATED ANIMATED HEADER --- */}
        <AnimatedHeader 
          title="The JOURNEY So Far"
          highlight="JOURNEY"
          highlightColor="#8B0000"
          subheading="A timeline of disciplined growth, regulatory milestones, and consistent value creation for our partners."
          variant="light"
          className="mb-12 md:mb-20"
        />

        {/* Spread Animation Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#f9f9f9] border border-gray-100  overflow-hidden items-stretch"
        >
          {MILESTONES.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative h-full border-r border-b border-gray-100 last:border-r-0 last:border-b-0 md:last:border-b-0"
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                variants={{
                  hover: {
                   background: "linear-gradient(90deg, #8B000015 0%, #8B000008 45%, #ffffff 70%)",
                  }
                }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12 cursor-default h-full flex flex-col group" 
              >
                <motion.div 
                  variants={yearVariants}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="font-serif text-h2  mb-4 md:mb-6 opacity-80 select-none origin-left"
                >
                  {item.year}
                </motion.div>

                <h3 className="font-sans text-body-lg font-medium text-black mb-3 md:mb-4 group-hover:text-[#8B0000] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#000000]/50 text-body-md font-weight-normal leading-relaxed flex-grow">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}