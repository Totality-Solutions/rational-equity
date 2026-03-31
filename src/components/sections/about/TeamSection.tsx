'use client';

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import AnimatedHeader from "@/components/common/AnimatedHeader";

import Image1 from "../../../../public/images/Rational.svg";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: StaticImageData;
  linkedin: string;
  twitter: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "Krish Iyer", title: "Managing Partner", image: Image1, linkedin: "#", twitter: "#" },
  { id: 2, name: "Vivek Iyer", title: "Partner", image: Image1, linkedin: "#", twitter: "#" },
  { id: 3, name: "Jaba Misra", title: "COO", image: Image1, linkedin: "#", twitter: "#" },
];

const teamMembersSmall: TeamMember[] = [
  { id: 1, name: "Krish Iyer", title: "Managing Partner", image: Image1, linkedin: "#", twitter: "#" },
  { id: 2, name: "Vivek Iyer", title: "Partner", image: Image1, linkedin: "#", twitter: "#" },
  { id: 3, name: "Vivek Iyer", title: "Partner", image: Image1, linkedin: "#", twitter: "#" },
  { id: 4, name: "Jaba Misra", title: "COO", image: Image1, linkedin: "#", twitter: "#" },
];

const cardVariants: Variants = {
  hidden: { x: -80, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function TeamSection() {
  return (
    <section className="relative w-full bg-background font-sans pb-16 md:pb-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <AnimatedHeader 
          title="Our Team" 
          highlight="Team"
          // highlightColor="var(--color-brand-maroon)"
          subheading="Analytical minds shaping disciplined investment strategies for long-term growth."
          variant="light"
          className="mb-12 md:mb-16"
        />

        {/* ================= MAIN CARDS ================= */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 mb-16 px-4 md:px-0">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 flex flex-col items-center border border-gray-200 shadow-sm w-full max-w-[450px] mx-auto lg:max-w-none lg:mx-0"
            >
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mb-6 md:mb-8 border-4 border-white shadow-md">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>

              {/* NAME */}
              <h3 className="md:text-body-lg md:text-h4 font-bold tracking-h2 text-foreground mb-1">
                {member.name}
              </h3>

              {/* TITLE */}
              <p className="text-body-sm md:text-body-md text-gray-500 font-medium mb-6 md:mb-8">
                {member.title}
              </p>

              {/* SOCIAL */}
              <div className="flex gap-4">
                <a
                  href={member.linkedin}
                  className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-brand-maroon rounded-full hover:bg-brand-maroon-hover transition"
                >
                  <span className="text-white text-body-lg font-medium ">
                    in
                  </span>
                </a>

                <a
                  href={member.twitter}
                  className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-brand-maroon rounded-full hover:bg-brand-maroon-hover transition"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= SMALL CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembersSmall.map((member, i) => (
            <motion.div
              key={member.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 md:p-6 flex items-center gap-4 md:gap-5 border border-gray-200 text-left"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>

              <div>
                <h4 className="text-body-md md:text-body-lg font-bold text-foreground">
                  {member.name}
                </h4>
                <p className="text-body-sm text-gray-500">
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}