'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader'; // Adjust path as needed
import Image from 'next/image';

const MILESTONES = [
  { year: '2020', title: 'SEBI Registration', description: 'Rational Equity Partners established in Mumbai...', img: '/images/journey/1.svg' },
  { year: '2021', title: 'SEBI Registration', description: 'Registered with SEBI as a Category II AIF...', img: '/images/journey/2.svg' },
  { year: '2022', title: 'First Multibaggers', description: 'Delivered 3x—5x returns on multiple holdings...', img: '/images/journey/3.svg' },
  { year: '2024', title: 'Top Performer', description: 'Ranked among India\'s top performing AIFs...', img: '/images/journey/4.svg' },
];

export default function Journey() {
  const journeyWord = "JOURNEY";
  const subTitleText = "Our path has been defined by a commitment to rigorous research and absolute integrity.";

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
    initial: { color: "#00000080" },
    hover: { color: "#8B0000" }
  };

  return (
    <section className="bg-white py-10 font-sans overflow-hidden">
      <Container className='space-y-6'>
        <AnimatedHeader 
          title="The JOURNEY So Far"
          highlight="JOURNEY"
          highlightColor="#8B0000"
          subheading="Our path has been defined by a commitment to rigorous research and absolute integrity."
          variant="light"
          className=" text-black text-h3"
          subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-base text-body-lg leading-relaxed"
        />

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
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="font-serif text-h2  mb-4 md:mb-6 opacity-100 select-none origin-left flex items-center justify-between"
                >
                  <Image src={item.img} alt={item.title} className="w-12 h-auto" width={200} height={200} />
                  <p className="">{item.year}</p>
                </motion.div>

                <h3 className="font-sans text-body-lg font-medium text-black mb-3 md:mb-4 group-hover:text-[#8B0000] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#000000]/50 text-body-md  font-normal leading-relaxed flex-grow">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}