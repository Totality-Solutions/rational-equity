'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import AnimatedHeader from "@/components/common/AnimatedHeader";
import Container from "@/components/common/Container";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  education: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Vivek Iyer",
    title: "Chief Investment Officer",
    description: "Vivek is the Founder and Partner at Rational - With over 10 years of experience in investment management and prior to that leading two start-ups, Vivek founded Rational with the aim of providing other investors the same opportunity of compunding wealth through dedicated capital allocation as he would create for himself. Vivek is diligent about creating opportunities for investors, is principled about safeguarding capital and compounding without unnecessary risks.",
    education: "B.Tech (Mechanical), IIT Bombay · MBA, IIM Ahmedabad",
    image: '/images/team/vivek.jpeg ',
  },
  {
    id: 2,
    name: "Vishal Iyer",
    title: "Fund Manager & Head of Research",
    description: "Vishal is a Partner at Rational - With over 12 years of experience in investment management across both sell and buy side, Vishal brings with him a deep & rich understanding of equities, commodities & credit. Vishal has spent time with JP Morgan and RBC BlueBay creating a solid foundation of building thesis in assets and equities based on deep research, discplined process and pursuit of less-known opportunities",
    education: "B.Tech, VJTI Mumbai · PG Finance, Cranfield University, UK",
    image: '/images/team/vishal.jpeg',
  },
  {
    id: 3,
    name: "Vikram Advani",
    title: "Chief Business Officer",
    description: "With over 20 years of experience in the financial services industry, Vikram is among the most seasoned professionals in India's asset management space. He has held leadership positions at some of the country's largest financial institutions, including Aditya Birla AMC and Old Bridge where he led sales and distribution and built a strong book for them. Vikram is taking Rational to its next level of growth while maintaining long-term partnerships with clients keeping an investor-first philosophy.",
    education: "MBA, Edith Cowan University",
    image: '/images/team/vikram.jpeg',
  },
  {
    id: 4,
    name: "JABA",
    title: "Co-Founder & Strategy",
    description: "Jaba Misra is an ex-strategy consultant & macroeconomist with 8+ years of experience. As a strategy consultant with BCG & Mahindra Group, she has worked on financial services projects including building digital journeys, collections transformation, cost reduction, buy-side due diligence & investment projects.",
    education: "MPhil Economics, Cambridge · MBA, ISB · Maths (Hons), Delhi University",
    image: '/images/team/jaba.jpg',
  },
  {
    id: 5,
    name: "AKSHAT",
    title: "Investment Analyst",
    description: "4 years of experience in investment and quantitative research. Previously with Parbhudas Liladhar. Brings rigorous quant discipline and sector analysis to the research team.",
    education: "Gold Medalist, Economics, Delhi University",
    image: '/images/team/akshat.jpeg',
  },
  {
    id: 6,
    name: "KRISH",
    title: "Co-Founder & Advisor",
    description: "40 years of experience in retail, banking and finance. Ex-CEO of Walmart India and Watsons across multiple Asian countries. Brings unparalleled operational and boardroom experience.",
    education: "CA & CS by training",
    image: '/images/team/krish.jpg',
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

const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
} as const;

const CARDS_PER_VIEW = {
  mobile: 1,
  tablet: 2,
} as const;

function getCardsPerView(width: number): number {
  if (width < BREAKPOINTS.mobile) return CARDS_PER_VIEW.mobile;
  if (width < BREAKPOINTS.tablet) return CARDS_PER_VIEW.tablet;
  return 1;
}

function useCardsPerView() {
  const [perView, setPerView] = useState<number>(1);

  useEffect(() => {
    function recalc() {
      setPerView(getCardsPerView(window.innerWidth));
    }
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, []);

  return perView;
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
      <div className="relative w-full aspect-5/4 shrink-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="text-lg font-playfair md:text-xl text-[#9B0000] font-medium mb-1 tracking-wide">
          {member.name}
        </h3>
        <p className="text-sm text-gray-500 mb-5">{member.title}</p>
        <p
          className="text-body-mobile md:text-body-tab lg:text-body text-gray-600 leading-relaxed mb-6 flex-1"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          {member.description}
        </p>
        <div className="border-t border-gray-200 pt-5 mt-auto">
          <p className="text-sm text-gray-400 leading-relaxed">
            {member.education}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const perView = useCardsPerView();
  const total = teamMembers.length;
  const maxIndex = total - perView;

  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, Math.max(0, maxIndex)));
  }, [perView, total, maxIndex]);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const translatePct = -(index * (100 / perView));

  return (
    <section className="w-full bg-[#FAFAFA]">
      <Container className="py-6 lg:py-12 mx-auto lg:space-y-12">
        <div className="mb-6 lg:mb-12">
          <AnimatedHeader
            title="People who put their money where their mouth is."
            highlight="money where their mouth is."
            highlightColor="brand-maroon"
            variant="light"
            titleClassName="text-black text-h3-mobile md:text-h3-tab lg:text-h3"
            subheadingClassName="text-gray-700 font-normal max-w-2xl text-base text-body-lg leading-relaxed"
          />
        </div>

        {/* Carousel — mobile & tablet */}
        <div className="lg:hidden relative">
          {/* Previous Button */}
          <button
            onClick={prev}
            disabled={index === 0}
            className="absolute -left-3 top-1/3 -translate-y-1/3 z-20 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#9B0000]/5 bg-white shadow-lg"
            style={{
              borderColor: "rgba(139,0,0,0.25)",
              color: "#9B0000",
            }}
            aria-label="Previous"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          {/* Carousel */}
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(${translatePct}%)`,
                transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="shrink-0 px-1 md:px-2"
                  style={{ width: `${100 / perView}%` }}
                >
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
            
          {/* Next Button */}
          <button
            onClick={next}
            disabled={index >= maxIndex}
            className="absolute -right-3 top-1/3 -translate-y-1/3 z-20 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#9B0000]/5 bg-white shadow-lg"
            style={{
              borderColor: "rgba(139,0,0,0.25)",
              color: "#9B0000",
            }}
            aria-label="Next"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Grid — desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
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
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
