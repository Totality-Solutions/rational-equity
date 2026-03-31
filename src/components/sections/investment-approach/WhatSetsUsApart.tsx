

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Auto-slide logic
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

  const multiDirectionalMask = {
    maskImage: `
      linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%),
      linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%)
    `,
    maskComposite: 'intersect',
    WebkitMaskImage: `
      linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%),
      linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%)
    `,
    WebkitMaskComposite: 'source-in',
  };

  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl mb-12"
            >
              What Sets Us Apart
            </motion.h2>

            <div className="space-y-10">
              {differentiators.map((item, i) => (
                <motion.div 
                  key={i}
                  onMouseEnter={() => setActiveItem(item)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative pl-12 pb-8 border-b border-white/10 last:border-0 cursor-default"
                >
                  <div className="absolute left-0 top-1 flex items-center">
                    <span className="text-xs font-sans text-white/30 mr-4">{item.id}</span>
                    <div className="w-[1px] h-6 bg-brand-maroon opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h4 className="text-brand-maroon font-sans font-weight-bold text-xl mb-3 tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-white/60 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: SLIDING Visual Carousel */}
          <div className="relative flex justify-center items-center">
            <div 
              className="relative w-full aspect-square max-w-[500px] overflow-hidden" 
              // style={multiDirectionalMask}
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.img 
                  key={`${activeItem.id}-${imgIndex}`}
                  src={currentImageSrc}
                  alt={activeItem.title}
                  // Carousel Slide Animation Logic
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ 
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 } 
                  }}
                  className="w-full h-full object-contain mix-blend-screen"
                  style={{
                    filter: 'brightness(0.6) contrast(1.4) grayscale(1)',
                    position: 'absolute' // Necessary for sliding over each other
                  }}
                />
              </AnimatePresence>
            </div>
            
            <div className="absolute bottom-4 left-4 flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/40 z-10">
              <span>{activeItem.title}</span>
              <span className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 bg-[#B22222] rounded-full ${Array.isArray(activeItem.image) ? 'animate-pulse' : ''}`} />
                Live Data
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}