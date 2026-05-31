"use client";

import { motion, Variants, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Link from "next/link";
import CTAButton from "@/components/common/CTAButton";
import AnimatedHeader from "@/components/common/AnimatedHeader";

// 1. Heading: Heavy & Slow (Small distance, elegant easing)
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: "easeOut" } 
  },
};

// 2. Description: Light & Airy (Longer distance, standard ease)
const descVariants: Variants = {
  hidden: { opacity: 0, y: 60},
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" } 
  },
};

// 3. Button: Snappy & Springy (Medium distance, spring physics)
const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.9, ease: "easeOut"
    } 
  },
};

// 4. Stats Cards: Quick & Clean (Short distance, staggered internally)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.45, 0, 0.55, 1] } 
  },
};

function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, ""); 
  
  const springValue = useSpring(0, { stiffness: 70, damping: 25 });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    if (isInView) springValue.set(numericValue);
  }, [isInView, springValue, numericValue]);

  return (
    <span ref={ref}>
      {value.startsWith('₹') && '₹'}
      <motion.span>{displayValue}</motion.span>
      {suffix.replace('₹', '')}
    </span>
  );
}

const stats = [
  { value: "₹850Cr+", label: "Assets Under Management" },
  { value: "2,500+", label: "Active Investors" },
  { value: "18%", label: "Avg. Annual Return" },
  { value: "12+ Years", label: "Track Record" },
];

export default function InvestWithUs() {
  return (
    <section className="relative w-full  bg-white font-sans overflow-hidden">
      {/* Background Dotted Pattern */}

      <div className="relative ">
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#d1d5db 2px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
        <div className=" relative z-15 text-center max-w-3xl mx-auto px-6 pb-16 space-y-6 pt-18">

          <AnimatedHeader 
            title="Invest With Us"
            highlight="Invest With Us"
            titleClassName="!font-bold"
            subheading="Simple, transparent, and efficient investing with Rational AMC — a 
            disciplined, research-driven approach to generating superior long-term returns."
            variant="light"
            className="mb-6 sm:mb-7 text-h3 text-black"
          subheadingClassName="text-body-lg tracking-wide text-black"
          />

          {/* Distinct Button Pop */}
          <motion.div 
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <CTAButton
              href="/contact" 
              text="Start Investing" 
              variant="light" 
              className="w-full sm:w-auto" // Keeps it responsive
            />
          </motion.div>
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-100">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ perspective: 1000 }} // Required for the 3D rotation
              className={`py-8 px-3 md:py-16 md:px-6 text-center space-y-2 border-gray-100 
                ${index !== stats.length - 1 ? 'lg:border-r' : ''} 
                ${index % 2 === 0 ? 'md:border-r md:border-b lg:border-r' : 'md:border-r-0 md:border-b lg:border-r'}`}
            >
              <h3 className="text-h4 md:text-[28px] font-semibold font-serif text-gray-900">
                <Counter value={stat.value} />
              </h3>
              <p className="text-gray-400 text-body-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
    </section>
  );
}