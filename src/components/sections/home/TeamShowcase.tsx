'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import { Linkedin, Twitter } from 'lucide-react';

export const teamMembers = [
  {
    id: 1,
    role: 'Managing Partner',
    image: '/images/team/krish.jpg',
    name: 'Krish Iyer',
    bio: 'Krish Iyer was the Founder of Aequitas Investments',
    philosophy: 'Krish Iyer is a global executive with over four decades of experience across six countries in retail, banking & finance and consumption sectors. He is currently the Managing Partner of Rational Equity Partners LLP & also an Independent Director on the Board of Proctor & Gamble Health & Hygiene Limited.',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 2,
    role: 'Partner',
    image: '/images/team/vivek.png',
    name: 'Vivek Iyer',
    bio: 'Vivek Iyer is a Partner at Rational Equity',
    philosophy: 'Vivek Iyer is an active equity investor with 7 years of experience investing in equity markets.',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 3,
    role: 'COO',
    image: '/images/team/jaba.jpg',
    name: 'Jaba Misra',
    bio: 'Jaba Misra is the Chief Operating Officer at Rational Equity',
    philosophy: 'Jaba Misra is an ex-strategy consultant & macroeconomist with 8+ years of experience.',
    linkedin: '#',
    twitter: '#',
  },
];

export default function TeamShowcase() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="w-full pt-16 pb-8 bg-white">
      <Container className="w-full space-y-8">

        <AnimatedHeader
          title="People at the Bench"
          highlight="Bench"
          highlightColor="#9B0000"
          subheading="Our Team of Dedicated Talent Behind the Agency."
          variant="light"
          titleClassName="text-black  text-h3-mobile md:text-h3-tab lg:text-h3"
          subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-body-lg-mobile md:text-body-lg-tab lg:text-body-lg"
        />

        {/* ========================================================================= */}
        {/* MOBILE VIEW                                                               */}
        {/* ========================================================================= */}
        <div className="md:hidden space-y-8">
          {teamMembers.map((member) => {
            const isActive = activeId === member.id;
            return (
              <div
                key={member.id}
                onClick={() => setActiveId(member.id)}
                className="flex flex-col cursor-pointer"
              >
                <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="pt-4 text-center">
                  <h3 className="text-xl font-playfair font-bold text-[#9B0000] tracking-wide uppercase">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">
                    {member.role}
                  </p>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-2"
                    >
                      <div className="pt-4 space-y-4 text-left">
                        <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                        <div className="bg-brand-maroon/5 p-4 rounded-xl border border-brand-maroon/10">
                          <p className="text-sm text-gray-800 leading-relaxed font-medium">{member.philosophy}</p>
                        </div>
                        <div className="flex gap-3 pt-1">
                          <a href={member.linkedin} className="w-9 h-9 rounded-full border border-brand-maroon flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all">
                            <Linkedin size={16} />
                          </a>
                          <a href={member.twitter} className="w-9 h-9 rounded-full border border-brand-maroon flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all">
                            <Twitter size={16} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TABLET VIEW                                                               */}
        {/* ========================================================================= */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-6 items-start">
            {teamMembers.map((member) => {
              const isActive = activeId === member.id;
              return (
                <motion.div
                  key={member.id}
                  layout
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative cursor-pointer ${isActive ? 'col-span-2' : 'col-span-1'}`}
                  onMouseEnter={() => setActiveId(member.id)}
                >
                  <div className={`flex ${isActive ? 'h-96 w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden' : 'flex-col'}`}>
                    <div className="relative shrink-0 w-full h-80 rounded-2xl overflow-hidden shadow-sm border border-gray-100 md:w-64 md:h-full md:rounded-none">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {isActive ? (
                      <div className="flex-1 p-6 flex flex-col justify-center space-y-3 overflow-y-auto">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 capitalize">{member.name}</h2>
                          <p className="font-semibold text-xs text-brand-maroon uppercase tracking-wider mt-0.5">{member.role}</p>
                        </div>
                        <p className="text-gray-700 text-xs leading-relaxed">{member.bio}</p>
                        <div className="bg-brand-maroon/5 p-3 rounded-lg border border-brand-maroon/10">
                          <p className="text-xs text-gray-800 leading-relaxed font-medium">{member.philosophy}</p>
                        </div>
                        <div className="flex gap-2">
                          <a href={member.linkedin} className="w-8 h-8 rounded-full border border-brand-maroon flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all"><Linkedin size={14} /></a>
                          <a href={member.twitter} className="w-8 h-8 rounded-full border border-brand-maroon flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all"><Twitter size={14} /></a>
                        </div>
                      </div>
                    ) : (
                      <div className="pt-4 text-center">
                        <h3 className="text-lg font-playfair font-bold text-[#9B0000] tracking-wide uppercase">{member.name}</h3>
                        <p className="text-xs text-gray-500 font-medium mt-1">{member.role}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW - Balanced, Ultra-Smooth Performance Component               */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex h-[500px] items-stretch justify-center mx-auto w-full">
          {teamMembers.map((member) => {
            const isActive = member.id === activeId;

            return (
              <motion.div
                key={member.id}
                layout
                animate={{ flex: isActive ? 2.24 : 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative min-w-0 h-full flex overflow-hidden"
                onMouseEnter={() => setActiveId(member.id)}
              >
                {/* Profile Image Sub-Structure Block */}
                <div className="relative shrink-0 h-full flex flex-col w-[260px]">
                  {/* Photo Frame Container (Maintained exact balanced proportions) */}
                  <div className="relative flex-1 w-full rounded-2xl overflow-hidden shadow-md border border-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority={member.id === 1}
                    />
                  </div>

                  {/* Nameplate label wrapper container underneath the active photo frame */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isActive ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center pt-4 pb-2 shrink-0 select-none"
                    style={{ pointerEvents: 'none' }}
                  >
                    <h3 className="text-[16px] font-playfair font-semibold tracking-wide uppercase text-center text-[#9B0000] truncate w-full">
                      {member.name}
                    </h3>
                    <p className="text-[12px] mt-1 text-center text-gray-500 font-medium truncate w-full">
                      {member.role}
                    </p>
                  </motion.div>
                </div>

                {/* Sliding Card Expanded Content Profile Block Panel */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: isActive ? '100%' : 0,
                    opacity: isActive ? 1 : 0
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-center overflow-hidden bg-white h-full"
                  style={{ minWidth: 0 }}
                >
                  {/* Internal fixed layout width wrapper matching the exact container capacity */}
                  <div className="px-8 py-4 flex flex-col justify-center gap-4 w-[420px] shrink-0 h-full">
                    <div>
                      <h2 className="text-[30px] leading-tight text-gray-900 font-bold font-serif">
                        {member.name}
                      </h2>
                      
                      <div className="flex gap-2 mt-2">
                        <a href={member.linkedin} className="flex items-center justify-center w-8 h-8 rounded-full border border-red-200 text-[#800000] hover:bg-red-50 transition-colors">
                          <Linkedin size={14} />
                        </a>
                        <a href={member.twitter} className="flex items-center justify-center w-8 h-8 rounded-full border border-red-200 text-[#800000] hover:bg-red-50 transition-colors">
                          <Twitter size={14} />
                        </a>
                      </div>
                    </div>

                    <p className="text-[13px] font-semibold text-gray-600">
                      {member.role}
                    </p>

                    <p className="text-[13px] leading-relaxed italic text-[#800000]">
                      {member.bio}
                    </p>

                    <div className="rounded-xl p-4 border border-red-100 bg-red-50/30">
                      <p className="text-[13px] leading-relaxed text-gray-700">
                        {member.philosophy}
                      </p>
                    </div>

                    <a href="/about" className="block w-fit">
                      <button className="px-8 py-2.5 rounded-full text-white text-[12px] font-semibold tracking-wide bg-[#800000] hover:opacity-90 active:scale-[0.98] transition-all shadow-sm">
                        More Info
                      </button>
                    </a>
                  </div>
                </motion.div>

              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}