'use client';

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import AnimatedHeader from "@/components/common/AnimatedHeader";

import PlaceholderImage from "../../../../public/images/Rational.png";
import Container from "@/components/common/Container";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  education: string;
  image: typeof PlaceholderImage;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "VIVEK IYER",
    title: "Founder & CIO",
    description: "10+ years of investing experience. Former entrepreneur who started the Rational Family Office in 2020 and launched the AIF in 2023. Deployed 100% of the fund on Day 1 with his own net worth alongside investors.",
    education: "B.Tech (Mechanical), IIT Bombay · MBA, IIM Ahmedabad",
    image: PlaceholderImage,
  },
  {
    id: 2,
    name: "VISHAL IYER",
    title: "Fund Manager, Global Research",
    description: "~12 years of buy and sell-side investing experience at JP Morgan and RBC BlueBay, both in London. Joined Rational in 2025 to lead the Gold & Silver Miners Fund and global macro research.",
    education: "B.Tech, VJTI Mumbai · PG Finance, Cranfield University, UK",
    image: PlaceholderImage,
  },
  {
    id: 3,
    name: "VIKRAM ADVANI",
    title: "Chief Business Officer",
    description: "30 years of experience in asset management including ING, Aditya Birla Capital, and Old Bridge Asset Management. Leads business development, investor relations, and fund operations.",
    education: "MBA, Edith Cowan University",
    image: PlaceholderImage,
  },
  {
    id: 4,
    name: "JABA",
    title: "Co-Founder & Strategy",
    description: "Former strategy consultant and macroeconomist with BCG, the World Bank, and Mahindra. Brings deep macro and strategic thinking to Rational's investment and fund structure decisions.",
    education: "MPhil Economics, Cambridge · MBA, ISB · Maths (Hons), Delhi University",
    image: PlaceholderImage,
  },
  {
    id: 5,
    name: "AKSHAT",
    title: "Investment Analyst",
    description: "4 years of experience in investment and quantitative research. Previously with Parbhudas Liladhar. Brings rigorous quant discipline and sector analysis to the research team.",
    education: "Gold Medalist, Economics, Delhi University",
    image: PlaceholderImage,
  },
  {
    id: 6,
    name: "KRISH",
    title: "Co-Founder & Advisor",
    description: "40 years of experience in retail, banking and finance. Ex-CEO of Walmart India and Watsons across multiple Asian countries. Brings unparalleled operational and boardroom experience.",
    education: "CA & CS by training",
    image: PlaceholderImage,
  },
];

const cardVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function TeamSection() {
  return (
      <section className="w-full px-3 md:px-16 bg-[#FAFAFA]">
       <Container className="py-8 md:py-16 mx-auto space-y-12">
        <div className="mb-12">
          <AnimatedHeader
            title="People who put their money where their mouth is."
            highlight="money where their mouth is."
            highlightColor="#9B0000"
            variant="light"
            titleClassName="text-black  text-h3-mobile md:text-h3-tab lg:text-h3"
            subheadingClassName="text-gray-700 font-normal max-w-2xl text-base text-body-lg leading-relaxed"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="relative w-full aspect-[3/2]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <h3
                  className="text-lg font-playfair md:text-xl text-[#9B0000] font-medium mb-1 tracking-wide"
                >
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-5">{member.title}</p>

                <p
                  className="text-body-mobile md:text-body-tab lg:text-body text-gray-600 leading-relaxed mb-6"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {member.description}
                </p>

                <div className="border-t border-gray-200 pt-5">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {member.education}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
