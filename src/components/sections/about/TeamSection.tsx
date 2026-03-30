'use client';

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";
// Import your new component here
import AnimatedHeader from "@/components/common/AnimatedHeader"; // Adjust the path as needed

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
  {
    id: 1,
    name: "Krish Iyer",
    title: "Managing Partner",
    image: Image1,
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Vivek Iyer",
    title: "Partner",
    image: Image1,
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Jaba Misra",
    title: "Coo",
    image: Image1,
    linkedin: "#",
    twitter: "#",
  },
];

const teamMembersSmall: TeamMember[] = [
  { id: 1, name: "Krish Iyer", title: "Managing Partner", image: Image1, linkedin: "#", twitter: "#" },
  { id: 2, name: "Vivek Iyer", title: "Partner", image: Image1, linkedin: "#", twitter: "#" },
  { id: 3, name: "Vivek Iyer", title: "Partner", image: Image1, linkedin: "#", twitter: "#" },
  { id: 4, name: "Jaba Misra", title: "Coo", image: Image1, linkedin: "#", twitter: "#" },
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
    <section className="relative w-full bg-white font-serif py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* --- NEW HEADER SECTION --- */}
        <AnimatedHeader 
          title="Our TEAM" 
          highlight="TEAM"
          highlightColor="#8B0000" // Your maroon color
          subheading="Analytical minds shaping disciplined investment strategies for long-term growth."
          variant="light"
          className="mb-12 md:mb-16"
        />

        {/* Main Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#F8F9FA] rounded-3xl p-10 flex flex-col items-center border border-gray-100 shadow-sm"
            >
              <div className="relative w-44 h-44 rounded-full overflow-hidden mb-8 border-4 border-white shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-gray-500 font-medium mb-8">{member.title}</p>

              <div className="flex gap-4">
                <a href={member.linkedin} className="w-10 h-10 flex items-center justify-center bg-[#8B0000] rounded-full">
                  <span className="text-white text-xl font-medium leading-none">in</span>
                </a>
                <a href={member.twitter} className="w-10 h-10 flex items-center justify-center bg-[#8B0000] rounded-full">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembersSmall.map((member, i) => (
            <motion.div
              key={member.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#F8F9FA] rounded-2xl p-6 flex items-center gap-5 border border-gray-100 text-left"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}