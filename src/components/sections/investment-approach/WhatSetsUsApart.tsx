
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';

const differentiators = [
  {
    id: "01",
    title: "Independent Research",
    desc: "Our in-house research team conducts independent, bottom-up fundamental analysis, not relying on external research or broker recommendations.",
    image: ["/images/image_1.jpg", "/images/nav.png", "/images/arrowbtn.png"]
  },
  {
    id: "02",
    title: "Concentrated Portfolios",
    desc: "We maintain focused portfolios of 25-35 high-conviction stocks, allowing us to invest meaningfully in our best ideas.",
    image: "/images/portfolio.jpg"
  },
  {
    id: "03",
    title: "Long-Term Horizon",
    desc: "We take a patient, long-term approach, typically holding stocks for 3-5 years, allowing our investment thesis to play out.",
    image: "/images/horizon.jpg"
  },
  {
    id: "04",
    title: "Alignment of Interests",
    desc: "Our fund managers invest alongside our investors, ensuring complete alignment of interests.",
    image: "/images/alignment.jpg"
  }
];

export default function WhatSetsUsApart() {
  const [activeItem, setActiveItem] = useState(differentiators[0]);
  const [imgIndex, setImgIndex] = useState(0);

  // Auto-slide logic for multi-image items
  useEffect(() => {
    setImgIndex(0);
    if (Array.isArray(activeItem.image) && activeItem.image.length > 1) {
      const interval = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % activeItem.image.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeItem]);

  const currentImageSrc = Array.isArray(activeItem.image)
    ? activeItem.image[imgIndex]
    : activeItem.image;

  return (
    <section className="bg-black text-white py-20 md:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side: Content */}
          <div className="order-2 lg:order-1">
           {/* INTEGRATED ANIMATED HEADER */}
            <div className="relative mb-10 md:mb-16">
              <AnimatedHeader 
                title="What Sets Us Apart"
                highlight="Sets Us Apart"
                highlightColor="#ffffff"
                variant="dark"
                className="!text-left !mb-0 !md:mb-0" // Force left align and remove default margins
                titleClassName=" leading-tight !text-left"
              />
              {/* Your custom underline remains below the animated text */}
              <div className="w-[10%] h-[2px] bg-[#8B0000] mt-4 block" />
            </div>

            <div className="space-y-8 md:space-y-12">
              {differentiators.map((item, i) => (
                <motion.div
                  key={i}
                  onMouseEnter={() => setActiveItem(item)}
                  onClick={() => setActiveItem(item)} // Better for mobile/tablet
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative pl-10 md:pl-14 pb-8 border-b border-white/10 last:border-0 cursor-pointer transition-all duration-300 ${activeItem.id === item.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                    }`}
                >
                  <div className="absolute left-0 top-1.5 flex items-start"> {/* Changed to items-start */}
                    <div
                      className={`w-[2px] transition-all duration-500 ease-in-out bg-[#8B0000] ${activeItem.id === item.id
                        ? 'h-24 opacity-100'
                        : 'h-6 opacity-20 group-hover:h-10 group-hover:opacity-100'
                        }`}
                    />

                    {/* Added ml-4 and a specific pt or mt to lock the number's position */}
                    <span className="text-[10px] md:text-xs font-sans text-white/30 ml-4 pt-1 font-bold tracking-widest leading-none">
                      {item.id}
                    </span>
                  </div>

                  <h4 className={`font-sans font-bold text-h4-tab mb-3 tracking-wide transition-colors ${activeItem.id === item.id ? 'text-[#8B0000]' : 'text-white'
                    }`}>
                    {item.title}
                  </h4>
                  <p className="text-white/60 font-sans leading-relaxed text-body-lg ">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Carousel */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">
            <div className="relative w-full aspect-square max-w-[400px] md:max-w-[500px] overflow-hidden ">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.img
                  key={`${activeItem.id}-${imgIndex}`}
                  src={currentImageSrc}
                  alt={activeItem.title}
                  initial={{ x: '100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '-100%', opacity: 0 }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                  }}
                  className="w-full h-full object-contain mix-blend-screen p-8 md:p-12"
                  style={{
                    filter: 'brightness(0.7) contrast(1.2) grayscale(1)',
                    position: 'absolute'
                  }}
                />
              </AnimatePresence>

              {/* Overlay Label */}
              {/* <div className="absolute bottom-6 left-6 flex items-center gap-6 text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/30 z-10 font-bold">
                <span className="text-white/60">{activeItem.title}</span>
                <span className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 bg-[#8B0000] rounded-full ${Array.isArray(activeItem.image) ? 'animate-pulse' : ''}`} />
                  System Insight
                </span>
              </div> */}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}