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
            highlight="Thought Center"
            titleClassName="!font-bold text-h2-mobile md:text-h2-tab lg:text-h2 font-playfair"
            subheading="A disciplined, research-driven approach to generating superior long-term returns"
            variant="light"
            className="mb-6 sm:mb-7 text-h3 text-black"
            subheadingClassName="text-body-md-mobile md:text-body-md-tab lg:text-body-md tracking-wide text-black"
          />
        </div>
      </div>
    </section>
  );
}