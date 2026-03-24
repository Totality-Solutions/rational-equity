'use client';

import React from 'react';
import { motion } from 'framer-motion';

const differentiators = [
  {
    id: "01",
    title: "Independent Research",
    desc: "Our in-house research team conducts independent, bottom-up fundamental analysis, not relying on external research or broker recommendations."
  },
  {
    id: "02",
    title: "Concentrated Portfolios",
    desc: "We maintain focused portfolios of 25-35 high-conviction stocks, allowing us to invest meaningfully in our best ideas."
  },
  {
    id: "03",
    title: "Long-Term Horizon",
    desc: "We take a patient, long-term approach, typically holding stocks for 3-5 years, allowing our investment thesis to play out."
  },
  {
    id: "04",
    title: "Alignment of Interests",
    desc: "Our fund managers invest alongside our investors, ensuring complete alignment of interests."
  }
];

export default function WhatSetsUsApart() {
  // Define a complex mask to fade all edges for a seamless blend
  const multiDirectionalMask = {
    // Fades the left, top, and right edges to 0% opacity,
    // and keeps the bottom (where labels are) at 100% opacity.
    maskImage: `
      linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%),
      linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%)
    `,
    maskComposite: 'intersect', // Important: ensures both gradients apply
    WebkitMaskImage: `
      linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%),
      linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%)
    `,
    WebkitMaskComposite: 'source-in', // Webkit equivalent for intersection
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
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative pl-12 pb-8 border-b border-white/10 last:border-0"
                >
                  {/* Numbering and Accent */}
                  <div className="absolute left-0 top-1 flex items-center">
                    <span className="text-xs font-sans text-white/30 mr-4">{item.id}</span>
                    <div className="w-[1px] h-6 bg-brand-maroon opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h4 className="text-brand-maroon font-sans font-bold text-xl mb-3 tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-white/60 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual with Perfect Blend and Dark Effect */}
          {/* Right Side: Visual with "Crushed" Black for Perfect Blending */}
<motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative flex justify-center items-center"
>
  <div 
    className="relative w-full aspect-square max-w-[500px]"
    style={multiDirectionalMask}
  >
    <img 
      src="/images/image_1.jpg" 
      alt="Investment Visualization" 
      className="w-full h-full object-contain mix-blend-screen brightness-75 contrast-125 grayscale" 
      style={{
        // This ensures any "almost black" pixels become "pure black"
        // and thus invisible in 'screen' mode
        filter: 'brightness(0.6) contrast(1.4) grayscale(1)'
      }}
    />
  </div>
  
  <div className="absolute bottom-4 left-4 flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/40 z-10">
    <span>Market Analysis</span>
    <span className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 bg-[#B22222] rounded-full" />
      Live Research
    </span>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}