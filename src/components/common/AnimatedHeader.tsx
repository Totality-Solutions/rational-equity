'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedHeaderProps {
  title: string;
  highlight?: string;
  highlightColor?: string;
  subheading?: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export default function AnimatedHeader({ 
  title, 
  highlight, 
  highlightColor = "var(--color-brand-maroon)", 
  subheading, 
  variant = 'light',
  className = "" 
}: AnimatedHeaderProps) {
  
  const titleColor = variant === 'light' ? 'text-black' : 'text-white';
  const subColor = variant === 'light' ? 'text-[#000000]/50' : 'text-white';

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay
      }
    })
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  const words = title.split(" ");
  const isFullTitleHighlight =
    highlight?.trim().toUpperCase() === title.trim().toUpperCase();

  return (
    <div className={`text-center mb-12 md:mb-20 ${className}`}>

      {/* ================= TITLE ================= */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className={`
          font-serif 
          font-weight-normal 
          tracking-h2 
          leading-tight 
          ${titleColor}

          text-h2-mobile
          md:text-h2-tab
          lg:text-h2
          mb-4
        `}
      >
        {!highlight ? (
          <motion.span variants={slideUpVariants} custom={0} className="inline-block">
            {title}
          </motion.span>
        ) : isFullTitleHighlight ? (
          <span style={{ color: highlightColor }} className="inline-block">
            {title.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                custom={charIndex}
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        ) : (
          words.map((word, index) => {
            const isHighlight =
              highlight && word.toUpperCase().includes(highlight.toUpperCase());

            return isHighlight ? (
              <span
                key={index}
                style={{ color: highlightColor }}
                className="inline-block "
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    custom={charIndex}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ) : (
              <motion.span
                key={index}
                variants={slideUpVariants}
                custom={0}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            );
          })
        )}
      </motion.h2>

      {/* ================= SUBHEADING ================= */}
      {subheading && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          custom={0.4}
          className={`
            font-weight-normal 
            max-w-3xl 
            mx-auto 
            leading-relaxed 
            ${subColor}
            text-h3-mobile
          `}
        >
          {subheading}
        </motion.p>
      )}

    </div>
  );
}