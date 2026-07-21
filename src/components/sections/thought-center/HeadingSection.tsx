"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedHeader from "@/components/common/AnimatedHeader";

export default function HeadingSection({ titleColor = "text-brand-maroon" }) {
  return (
    <section className="w-full bg-white flex flex-col items-start overflow-hidden">
      <div className="w-full px-8 flex flex-col items-start gap-6">
        {/* Hero Content */}
        <div className="w-full pt-5 lg:pt-10 flex flex-col justify-center items-center">
          <AnimatedHeader 
            title="Thought Center"
            highlight="Center"
            subheading="A disciplined, research-driven approach to generating superior long-term returns"
            variant="light"
            className="mb-12 sm:mb-12 text-h3 text-black"
            titleClassName="text-black text-h3-mobile md:text-h3-tab lg:text-h3"
            subheadingClassName="text-gray-700 font-normal max-w-2xl text-base text-body-lg leading-relaxed"
          />
        </div>
      </div>
    </section>
  );
}