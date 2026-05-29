"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedHeader from "@/components/common/AnimatedHeader";

export default function HeadingSection({ titleColor = "text-brand-maroon" }) {
  return (
    <section className="w-full bg-white flex flex-col items-start overflow-hidden">
      <div className="w-full px-8 md:px-16 flex flex-col items-start gap-6">
        {/* Hero Content */}
        <div className="w-full py-12 flex flex-col justify-center items-center">
          <AnimatedHeader 
            title="Thought Center"
            highlight="Thought Center"
            titleClassName="!font-bold"
            subheading="A disciplined, research-driven approach to generating superior long-term returns"
            variant="light"
            className="mb-6 sm:mb-7 text-h3 text-black"
          subheadingClassName="text-body-lg tracking-wide text-black"
          />
        </div>
      </div>
    </section>
  );
}