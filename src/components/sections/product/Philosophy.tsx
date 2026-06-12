"use client";

import { motion } from "framer-motion";
import AnimatedHeader from "@/components/common/AnimatedHeader";
import Container from "@/components/common/Container";
import Image from "next/image";

interface PhilosophyPoint {
  title: string;
  description: string;
  icon: string;
}

interface PhilosophyProps {
  points: PhilosophyPoint[];
}

export default function Philosophy({ points = [] }: PhilosophyProps) {
  return (
    <section className="bg-white pb-10">
      <Container className=" space-y-8">

        {/* Two-column header: title left, subheading right */}
        <AnimatedHeader
          title="Investment Philosophy"
          highlight="Philosophy"
          highlightColor="#9B0000"
          subheading="We believe precious metals play a critical role in portfolio construction as a hedge against inflation, currency debasement, and geopolitical uncertainty. Rather than investing in physical gold, we focus on miners who offer operational leverage to rising commodity prices."
          variant="light"
          className="text-h3 text-black"
          subheadingClassName="text-body-lg tracking-wide text-black"
        />

        {/* Card grid — single border wraps all 4, divided by 1px gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1, duration: 0.55, ease: "easeOut" }}
              className="group bg-white hover:bg-brand-maroon/5 hover:scale-103 transition-all duration-200 p-8 flex gap-2 flex-col border border-brand-maroon/20 rounded-2xl"
            >
              {/* Icon + number row */}
              <div className="flex items-start justify-between ">
                <div
                  className="w-14 h-14 rounded-2xl bg-brand-maroon/5 flex items-center justify-center
                              group-hover:bg-brand-maroon/10 transition-colors duration-200 shrink-0"
                >
                  <Image
                    src={point.icon}
                    alt={point.title}
                    width={40}
                    height={40}
                  />
                </div>
                <span className="font-playfair text-h2 font-bold italic text-black/10 leading-none select-none">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-playfair text-body-lg font-bold text-[#1a1a1a] leading-snug ">
                {point.title}
              </h3>

              {/* Maroon rule */}
              <div className="w-8 h-0.5 bg-brand-maroon rounded-full" />

              {/* Description */}
              <p className="text-body-sm leading-[1.75] flex-1">
                {point.description}
              </p>

              {/* Footer CTA */}

              <a href="#" className="flex items-center gap-1.5 underline text-body-sm tracking-wider text-brand-maroon font-medium transition-opacity duration-200">
                Learn more
              </a>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}