'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const MILESTONES = [
  { year: '2020', title: 'SEBI Registration', description: 'Rational Equity Partners established in Mumbai...' },
  { year: '2021', title: 'SEBI Registration', description: 'Registered with SEBI as a Category II AIF...' },
  { year: '2022', title: 'First Multibaggers', description: 'Delivered 3x—5x returns on multiple holdings...' },
  { year: '2024', title: 'Top Performer', description: 'Ranked among India\'s top performing AIFs...' },
];

export default function Journey() {
  const journeyWord = "JOURNEY";
  const subTitleText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.3 
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1, x: 0, scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 15, duration: 0.8 }
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 5 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  const yearVariants: Variants = {
    initial: { color: "#E5E7EB" },
    hover: { color: "#8B0000" }
  };

  return (
    <section className="bg-white py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-black mb-4 md:mb-6">
            The {" "}
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[#8B0000] uppercase inline-block"
            >
              {journeyWord.split("").map((char, index) => (
                <motion.span key={index} custom={index} variants={letterVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </motion.span>
            {" "} So Far
          </h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-black font-normal max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            {subTitleText.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.2, delay: 0.8 + (index * 0.05) }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Spread Animation Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          /* REMOVED internal padding (p-8) so cards can touch the edges */
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-[#f9f9f9]  overflow-hidden items-stretch"
        >
          {MILESTONES.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative h-full"
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                variants={{
                  hover: {
                   background: "linear-gradient(90deg, #8B000015 0%, #8B000008 25%, transparent 50%)",
                  }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                /* ADDED padding here (p-8 md:p-12) so content is spaced but background fills 100% */
                className="p-8 md:p-12 cursor-pointer transition-all duration-300 h-full flex flex-col" 
              >
                <motion.div 
                  variants={yearVariants}
                  transition={{ duration: 0.3 }}
                  className="font-serif text-5xl sm:text-6xl md:text-7xl mb-4 md:mb-6 opacity-80 select-none"
                >
                  {item.year}
                </motion.div>

                <h3 className="font-sans font-bold text-lg text-black mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed flex-grow">
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