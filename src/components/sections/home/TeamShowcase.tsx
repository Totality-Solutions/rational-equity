'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import CTAButton from '@/components/common/CTAButton';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import { Linkedin, Twitter } from 'lucide-react';

export const teamMembers = [
  {
    id: 1,
    role: 'Managing Partner',
    image: '/images/team/krish.jpg',
    name: 'Krish Iyer',
    bio: 'Krish Iyer was the Founder of Aequitas Investments...',
    philosophy: 'Krish Iyer is a global executive with over four decades of experience across six countries in retail, banking & finance and consumption sectors. He is currently the Managing Partner of Rational Equity Partners LLP  & also an Independent Director on the Board of Proctor & Gamble Health & Hygiene Limited.',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 2,
    role: 'Partner',
    image: '/images/team/vivek.png',
    name: 'Vivek Iyer',
    bio: 'Vivek Iyer is a Partner at Rational Equity...',
    philosophy: 'Vivek Iyer is an active equity investor with 7 years of experience investing in equity markets.',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 3,
    role: 'COO',
    image: '/images/team/jaba.jpg',
    name: 'Jaba Misra',
    bio: 'Jaba Misra is the Chief Operating Officer at Rational Equity...',
    philosophy: 'Jaba Misra is an ex-strategy consultant & macroeconomist with 8+ years of experience.',
    linkedin: '#',
    twitter: '#',
  },
];

export default function TeamShowcase() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="w-full py-10">
      <Container className="w-full space-y-8">

        <AnimatedHeader
          title="Our Team"
          highlight="Team"
          highlightColor="#8B0000"
          subheading="Our Team of Dedication Talent Behind the Agency."
          variant="light"
          className="text-black text-h3"
          subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-base lg:text-body-lg leading-relaxed"
        />

        {/* MOBILE VIEW - Stacked Cards */}
        <div className="md:hidden space-y-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onMouseEnter={() => setActiveId(member.id)}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
            >
              {activeId === member.id ? (
                <div className="bg-white">
                  {/* Image */}
                  <div className="relative w-full h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 capitalize mb-2">
                        {member.name}
                      </h3>

                      {/* Social */}
                      <div className="flex gap-3">
                        <a href={member.linkedin} className="w-10 h-10 rounded-full border border-brand-maroon flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all">
                          <Linkedin size={18} />
                        </a>
                        <a href={member.twitter} className="w-10 h-10 rounded-full border border-brand-maroon flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all">
                          <Twitter size={18} />
                        </a>
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <p className="font-semibold text-brand-maroon text-sm mb-2">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Philosophy */}
                    <div className="bg-brand-maroon/10 p-4 rounded-lg border border-brand-maroon/20">
                      <p className="text-sm text-gray-800 leading-relaxed">
                        {member.philosophy}
                      </p>
                    </div>

                    <a href="/about" className="text-sm text-brand-maroon font-semibold underline block">
                      More Info
                    </a>
                  </div>
                </div>
              ) : (
                <div className="relative h-64 flex items-center justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="text-center text-white z-10">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-sm">{member.role}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* TABLET VIEW - 2 Cards in row */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                onMouseEnter={() => setActiveId(member.id)}
                className={`
                  relative cursor-pointer rounded-2xl overflow-hidden
                  transition-all duration-500 ease-in-out
                  ${activeId === member.id ? 'col-span-2' : 'col-span-1'}
                  ${activeId === member.id ? 'h-96' : 'h-64'}
                `}
              >
                {activeId === member.id ? (
                  <div className="flex h-full bg-white">
                    {/* LEFT IMAGE */}
                    <div className="relative w-[50%] h-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-[50%] p-6 flex flex-col justify-center space-y-4 overflow-y-auto">
                      {/* Header */}
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 capitalize">
                          {member.name}
                        </h2>

                        {/* Social */}
                        <div className="flex gap-2 mt-2">
                          <a href={member.linkedin} className="w-9 h-9 rounded-full border border-brand-maroon flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all">
                            <Linkedin size={16} />
                          </a>
                          <a href={member.twitter} className="w-9 h-9 rounded-full border border-brand-maroon flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all">
                            <Twitter size={16} />
                          </a>
                        </div>
                      </div>

                      {/* Bio */}
                      <div>
                        <p className="font-semibold text-sm text-brand-maroon mb-1">
                          {member.role}
                        </p>
                        <p className="text-gray-700 text-xs leading-relaxed">
                          {member.bio}
                        </p>
                      </div>

                      {/* Philosophy */}
                      <div className="bg-brand-maroon/10 p-3 rounded-lg border border-brand-maroon/20">
                        <p className="text-xs text-gray-800 leading-relaxed">
                          {member.philosophy}
                        </p>
                      </div>

                      <a href="/about" className="text-xs text-brand-maroon font-semibold underline">
                        More Info
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <Image
                      src={member.image}
                      alt={member.role}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-lg font-bold">{member.name}</h3>
                        <p className="text-sm">{member.role}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP VIEW - Flex Accordion */}
        <div className="hidden lg:flex gap-4 h-[500px]">
          {teamMembers.map((member) => {
            const isActive = activeId === member.id;

            return (
              <div
                key={member.id}
                onMouseEnter={() => setActiveId(member.id)}
                className={`
                  relative cursor-pointer rounded-2xl overflow-hidden
                  transition-all duration-500 ease-in-out flex
                  ${isActive ? 'flex-3 border-1 border-brand-maroon/10' : 'flex-1'}
                `}
              >
                {isActive ? (
                  <div className="flex w-full h-full bg-white">
                    {/* LEFT IMAGE */}
                    <div className="relative w-[45%] h-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-[55%] p-8 flex flex-col justify-center space-y-6">
                      {/* Header */}
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 capitalize">
                          {member.name}
                        </h2>

                        {/* Social */}
                        <div className="flex gap-3 mt-3">
                          <a href={member.linkedin} className="w-10 h-10 rounded-full border border-brand-maroon flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all">
                            <Linkedin size={20} />
                          </a>
                          <a href={member.twitter} className="w-10 h-10 rounded-full border border-brand-maroon flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-white transition-all">
                            <Twitter size={20} />
                          </a>
                        </div>
                      </div>

                      {/* Bio */}
                      <div>
                        <p className="font-semibold">
                          {member.role}
                        </p>
                        <p className="text-brand-maroon text-sm leading-relaxed mt-2">
                          {member.bio}
                        </p>
                      </div>

                      {/* Philosophy */}
                      <div className="bg-brand-maroon/10 p-4 rounded-lg border border-brand-maroon/20">
                        <p className="text-sm text-gray-800">
                          {member.philosophy}
                        </p>
                      </div>

                      <a href="/about" className="text-md text-brand-maroon underline font-semibold hover:text-brand-maroon/80 transition-colors">
                        <p className="w-fit px-10 bg-[#800000] cursor-pointer text-white py-2 rounded-full text-sm tracking-wide font-semibold transition-all hover:bg-[#600000] active:scale-[0.98]">
                          More Info
                        </p>
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <Image
                      src={member.image}
                      alt={member.role}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 tracking-wide uppercase text-brand-maroon font-bold text-2xl whitespace-nowrap">
                      {member.role}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}