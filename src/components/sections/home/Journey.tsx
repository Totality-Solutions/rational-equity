

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

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  // New variant for the year text color change
  const yearVariants: Variants = {
    initial: { color: "#E5E7EB" }, // Equivalent to text-gray-200
    hover: { color: "#8B0000" }    // Dark Maroon
  };

  return (
    <section className="bg-[#f9f9f9] py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-black mb-6">
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
            className="text-black font-normal max-w-2xl mx-auto text-lg"
          >
            {subTitleText.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  visible: { opacity: 1, y: 0 }
                } as Variants}
                transition={{ duration: 0.2, delay: 0.8 + (index * 0.05) }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {MILESTONES.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative"
            >
              <motion.div
                initial="initial"
                whileHover="hover" // This triggers "hover" variants in all children
                variants={{
                  hover: {
                    background: "linear-gradient(90deg, #8B000015 0%, #8B000005 50%, #f9f9f900 50%)",
                  }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-6 cursor-pointer "
              >
                {/* YEAR: Now a motion.div to handle color transition */}
                <motion.div 
                  variants={yearVariants}
                  transition={{ duration: 0.3 }}
                  className="font-serif text-7xl mb-6 opacity-80 select-none"
                >
                  {item.year}
                </motion.div>

                <h3 className="font-sans font-bold text-lg text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {item.description}
                </p>

                <div className="hidden md:block absolute top-16 -right-6 w-12 h-[1px] bg-gray-200 z-0" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}