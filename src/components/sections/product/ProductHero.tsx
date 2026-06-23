"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedHeader from "@/components/common/AnimatedHeader";
import CTAButton from "@/components/common/CTAButton";

interface ProductHeroProps {
  title: string;
  description: string;
  titleColor?: string;
}

export default function ProductHero({ title, description, titleColor = "text-brand-maroon" }: ProductHeroProps) {
  return (
    <section className="bg-black text-white py-16 mb-12 overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 md:px-16 ">

          <AnimatedHeader
            title={title}
            highlight="Fund"
            highlightClassName="italic"
            variant="dark"
            titleClassName="
              text-white
              text-[52px]
              leading-[0.95]
              font-bold
              text-left
            "
            subheading={description}
            subheadingClassName="
              mt-8
              text-lg
              text-white/70
              !leading-[1.5]
              md:text-[22px]
              text-left
            "
          />

          <div className="flex items-center justify-start max-w-4xl mx-auto gap-4 pt-12">
            <CTAButton
              href="/invest-with-us"
              text="Invest Now"
              variant="maroon-bg"
              iconClassName="invert"
            />

            <CTAButton
              href="#overview"
              text="Learn More"
              variant="dark"
              primaryColor="#000000"
              textColor="#ffffff"
            />
          </div>
        </div>
    </section>
  );
}