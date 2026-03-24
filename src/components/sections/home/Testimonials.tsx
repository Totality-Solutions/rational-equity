
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    text: "I appreciate the rational and research-driven approach. No hype, just solid fundamentals and long-term value creation. Highly recommend!",
    name: "Amit Patel",
    location: "Bangalore",
    initial: "A"
  },
  {
    text: "The fund managers at Rational are truly exceptional. They understand market dynamics and have consistently delivered superior returns even in volatile markets.",
    name: "Priya Sharma",
    location: "Delhi",
    initial: "P"
  },
  {
    text: "Rational AMC has been managing my investments for the past 5 years. Their disciplined approach and transparent communication have helped me build substantial wealth.",
    name: "Rajesh Kumar",
    location: "Mumbai",
    initial: "R"
  },
  {
    text: "Finding an AMC that prioritizes investor education alongside returns is rare. Their 'Thought Centre' insights are invaluable for any serious investor.",
    name: "Vikram Singh",
    location: "Hyderabad",
    initial: "V"
  }
];

export default function Testimonials() {
  const [shift, setShift] = useState(432); // Default for desktop (400 + 32)

  useEffect(() => {
    const handleResize = () => {
      // On mobile, the card is 85vw. On desktop, it's 400px.
      // Gap is 32px (gap-8)
      const width = window.innerWidth < 768 ? (window.innerWidth * 0.85) : 400;
      setShift(width + 32);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dynamic Keyframes based on current screen-size shift
  const xKeyframes = [0, -shift, -(shift * 2), -(shift * 3), -(shift * 4)];

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-black mb-4 md:mb-6">
          What Our Investors Say
        </h2>
        <p className="text-gray-500 text-base md:text-lg font-sans max-w-2xl mx-auto">
          Trusted by thousands of investors across India for disciplined wealth creation.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 px-6 md:px-[10%]"
          animate={{
            x: xKeyframes,
          }}
          transition={{
            duration: 10, // Slightly slower for better readability on small screens
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
            times: [0, 0.23, 0.48, 0.73, 0.98, 1],
          }}
          style={{ width: "max-content" }}
        >
          {/* Tripled list for infinite loop effect */}
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[400px] group"
            >
              <div className="relative bg-white rounded-2xl shadow-xl shadow-gray-100 flex flex-col h-full overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-rose-50/50 group-hover:to-white">

                {/* Border Top Accent */}
                <div className="absolute top-0 left-0 w-full h-[6px] bg-[#8B0000] opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10" />

                <div className="p-6 md:p-8 flex-grow">
                  <div className="flex gap-1 mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 24 24"
                        fill="#FBBF24"
                        // Controlled via className instead of direct attributes
                        className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-base md:text-[17px] font-medium">
                    "{item.text}"
                  </p>
                </div>

                {/* Footer Area */}
                <div className="bg-[#8B0000] p-5 md:p-6 flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-[#8B0000] font-bold font-sans text-base md:text-lg">
                    {item.initial}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-white font-bold text-sm md:text-[16px] tracking-wide font-sans truncate">{item.name}</h4>
                    <p className="text-rose-100/80 text-[10px] md:text-xs truncate">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Edge Gradients for the peek effect - Reduced width on mobile */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white via-white/40 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white via-white/40 to-transparent z-20" />
      </div>
    </section>
  );
}


