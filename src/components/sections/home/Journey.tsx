'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedHeader from '@/components/common/AnimatedHeader'; // Adjust path as needed
import Container from '@/components/common/Container';

const MILESTONES = [
  { year: '2020', title: 'Establishment', description: 'Rational Equity Partners established in Mumbai with a focus on high-conviction strategies.' },
  { year: '2021', title: 'SEBI Registration', description: 'Registered with SEBI as a Category III AIF, launching our flagship investment scheme.' },
  { year: '2022', title: 'First Multibaggers', description: 'Delivered 3x—5x returns on multiple holdings within the mid-cap and small-cap space.' },
  { year: '2024', title: 'Top Performer', description: "Ranked among India's top performing AIFs based on risk-adjusted alpha generation." },
];

export default function Journey() {
  const journeyWord = "JOURNEY";
  const subTitleText = "Our path has been defined by a commitment to rigorous research and absolute integrity.";

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
    <section className="bg-white py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-[100%] mx-auto px-6">

        {/* --- INTEGRATED ANIMATED HEADER --- */}
        <AnimatedHeader 
          title="The JOURNEY So Far"
          highlight="JOURNEY"
          highlightColor="#8B0000"
          subheading="A timeline of disciplined growth, regulatory milestones, and consistent value creation for our partners."
          variant="light"
          className="mb-12 md:mb-20"
        />
      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          {/* <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-4 md:mb-6">
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
          </h2> */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 font-normal max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#f9f9f9] overflow-hidden items-stretch "
        >
          {MILESTONES.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative h-full border-b sm:border-b-0  border-gray-200 last:border-0"
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                variants={{
                  hover: {
                    background: "linear-gradient(90deg, #8B000010 0%, #8B000005 25%, transparent 50%)",
                  }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-8 md:p-10 lg:p-12 cursor-pointer transition-all duration-300 h-full flex flex-col group" 
              >
                <motion.div 
                  variants={yearVariants}
                  transition={{ duration: 0.3 }}
                  className="font-serif text-5xl sm:text-6xl md:text-7xl mb-4 md:mb-6 opacity-80 select-none group-hover:scale-105 transition-transform duration-300 origin-left"
                >
                  {item.year}
                </motion.div>

                <h3 className="font-sans font-bold text-lg md:text-xl text-black mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-grow">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
      </div>
    </section>
  );
}