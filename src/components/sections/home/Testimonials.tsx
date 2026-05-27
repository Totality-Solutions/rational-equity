'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    text: "I appreciate the rational and research-driven approach. No hype, just solid fundamentals and long-term value creation. Highly recommend!",
    name: "Amit Patel",
    location: "Bangalore",
    initial: "A",
    img: "/images/testimonial/2.jpg"
  },
  {
    text: "The fund managers at Rational are truly exceptional. They understand market dynamics and have consistently delivered superior returns even in volatile markets.",
    name: "Priya Sharma",
    location: "Delhi",
    initial: "P",
    img: "/images/testimonial/1.jpg"
  },
  {
    text: "Rational AMC has been managing my investments for the past 5 years. Their disciplined approach and transparent communication have helped me build substantial wealth.",
    name: "Rajesh Kumar",
    location: "Mumbai",
    initial: "R",
    img: "/images/testimonial/3.jpg"
  },
  {
    text: "Finding an AMC that prioritizes investor education alongside returns is rare. Their 'Thought Centre' insights are invaluable for any serious investor.",
    name: "Vikram Singh",
    location: "Hyderabad",
    initial: "V",
    img: ""
  }
];

export default function Testimonials() {
  const [shift, setShift] = useState(432); // Default (400px card + 32px gap)

  useEffect(() => {
    const handleResize = () => {
      // Mobile: card is 85vw. Desktop: card is 400px. Gap is 32px (gap-8).
      const cardWidth = window.innerWidth < 768 ? (window.innerWidth * 0.85) : 400;
      setShift(cardWidth + 32);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Infinite loop keyframes
  const xKeyframes = [0, -shift, -(shift * 2), -(shift * 3), -(shift * 4)];

  return (
    <section className="bg-white overflow-hidden font-sans py-10 space-y-10">
      <Container className="text-center ">
          <AnimatedHeader 
        title="What Our Investors Say" 
        highlight='Our Investors'
        subheading="Trusted by thousands of investors across India for disciplined wealth creation."
        variant="light"
        className=" text-black text-h3"
          subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-base text-body-lg leading-relaxed"
      />
      </Container>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 px-6 md:px-[5%]"
          animate={{ x: xKeyframes }}
          transition={{
            duration: 12, // Smoothed duration for better readability
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
            times: [0, 0.23, 0.48, 0.73, 0.98],
          }}
          style={{ width: "max-content" }}
        >
          {/* Tripled list for a seamless infinite loop */}
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[400px] group"
            >
              <div className="relative bg-white rounded-2xl shadow-xl shadow-gray-100 flex flex-col h-full overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:border-brand-maroon/20">

                {/* Top Accent Strip */}
                <div className="absolute top-0 left-0 w-full h-[6px] bg-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <div className="p-6 md:p-8 flex-grow">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 24 24"
                        fill="#FBBF24"
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
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-[#8B0000] font-bold font-sans text-base md:text-lg overflow-hidden">
  {item.img ? (
    <Image
      src={item.img}
      alt={item.name}
      width={48}
      height={48}
      className="w-full h-full object-cover"
    />
  ) : (
    item.name?.charAt(0).toUpperCase()
  )}
</div>
                  <div className="overflow-hidden">
                    <h4 className="text-white font-bold text-sm md:text-body-md tracking-wide font-sans truncate">{item.name}</h4>
                    <p className="text-rose-100/80 text-[10px] md:text-xs truncate">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}