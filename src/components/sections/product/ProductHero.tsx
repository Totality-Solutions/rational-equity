"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedHeader from "@/components/common/AnimatedHeader";

// 🔹 Move this to a constants file later if it gets too large
export const FUND_DATA = {
  "india-long-only": {
    title: "Indian Long-Only Fund",
    description: "Concentrated exposure to high-quality Indian equities for long-term growth.",
    color: "text-brand-maroon",
  },
  "gold-miners": {
    title: "Gold & Silver Miners Fund",
    description: "Strategic precious metals exposure for portfolio diversification.",
    color: "text-brand-maroon", // Gold
  },
  "absolute-return": {
    title: "Absolute Return Fund",
    description: "Market-neutral strategies aiming for consistent positive returns.",
    color: "text-brand-maroon",
  }
};

interface ProductHeroProps {
  title: string;
  description: string;
  titleColor?: string;
}

export default function ProductHero({ title, description, titleColor = "text-brand-maroon" }: ProductHeroProps) {
  return (
    <section className="w-full bg-white flex flex-col items-start overflow-hidden">
      <div className="w-full px-8 md:px-16 flex flex-col items-start gap-6">
        
        <Link 
          href="/" 
          className="group flex items-center gap-2 pt-6 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <ArrowLeft size={16} className="text-[#000000]/50 transition-transform group-hover:-translate-x-1" />
          <span className="font-sans text-body-sm text-[#000000]/50 font-medium tracking-[0.28px]">
            Back to Home
          </span>
        </Link>

        {/* Hero Content */}
        <div className="w-full py-[50px] flex flex-col justify-center items-center">
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[800px] flex flex-col justify-center items-center gap-5 text-center"
          >
            <h1 className={`font-serif text-[48px] md:text-[56px] ${titleColor} font-bold leading-[1.1] tracking-tight`}>
              {title}
            </h1>
            
            <p className="font-sans text-body-lg text-gray-500 leading-[28px] tracking-[0.36px] max-w-[530px]">
              {description}
            </p>
          </motion.div> */}

          <AnimatedHeader 
            title={title}
            highlight={title}
            titleClassName="!font-bold"
            subheading={description}
            variant="light"
            className="mb-16"
          />
        </div>
      </div>
    </section>
  );
}