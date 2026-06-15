// 'use client';

// import React from 'react';
// import { motion, Variants } from 'framer-motion';

// interface AnimatedHeaderProps {
//   title: string;
//   highlight?: string;       // Word/phrase to animate character-by-character
//   highlightColor?: string;  // Custom color for the highlighted word
//   subheading?: string;      // Optional text below the title
//   variant?: 'light' | 'dark'; // Switches color schemes
//   className?: string;
//   subheadingClassName?: string;
//   titleClassName?: string;
// }

// export default function AnimatedHeader({
//   title,
//   highlight,
//   highlightColor = "#9B0000",
//   subheading,
//   variant = 'light',
//   className = "",
//   titleClassName = "",
//   subheadingClassName = ""
// }: AnimatedHeaderProps) {

//   // Theme Logic
//   const titleDefaultColor = variant === 'light' ? 'text-black' : 'text-white';
//   const subColor = variant === 'light' ? 'text-[#000000]/50' : 'text-white';

//   const slideUpVariants: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (customDelay: number = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1],
//         delay: customDelay
//       }
//     })
//   };

//   const letterVariants: Variants = {
//     hidden: { opacity: 0, y: 15 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" }
//     })
//   };

//   const words = title.split(" ");
//   // Check if we are highlighting the entire string
//   const isFullTitleHighlight = highlight?.trim().toUpperCase() === title.trim().toUpperCase();

//   return (
//     <div className={`text-center mb-12 md:mb-20 ${className}`}>
//       {/* --- Main Title --- */}
//       <motion.h2
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         className={`font-playfair text-3xl sm:text-4xl md:text-5xl ${titleDefaultColor} mb-4 leading-tight ${titleClassName}`}
//       >
//         {!highlight ? (
//           <motion.span variants={slideUpVariants} custom={0} className="inline-block">
//             {title}
//           </motion.span>
//         ) : isFullTitleHighlight ? (
//           /* Entire Title Highlighted */
//           <span style={{ color: highlightColor }} className="inline-block">
//             {title.split("").map((char, charIndex) => (
//               <motion.span
//                 key={charIndex}
//                 custom={charIndex}
//                 variants={letterVariants}
//                 className="inline-block"
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </span>
//         ) : (
//           /* Partial Highlight (Word by Word) */
//           words.map((word, index) => {
//             const isHighlight = highlight && word.toUpperCase().includes(highlight.toUpperCase());
//             return isHighlight ? (
//               <span
//                 key={index}
//                 style={{ color: highlightColor }}
//                 className="inline-block mx-2"
//               >
//                 {word.split("").map((char, charIndex) => (
//                   <motion.span
//                     key={charIndex}
//                     custom={charIndex}
//                     variants={letterVariants}
//                     className="inline-block"
//                   >
//                     {char}
//                   </motion.span>
//                 ))}
//               </span>
//             ) : (
//               <motion.span
//                 key={index}
//                 variants={slideUpVariants}
//                 custom={0}
//                 className="inline-block mr-2"
//               >
//                 {word}
//               </motion.span>
//             );
//           })
//         )}
//       </motion.h2>

//       {/* --- Subheading --- */}
//       {subheading && (
//         <motion.p
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={slideUpVariants}
//           custom={0.4}
//           className={`font-normal max-w-3xl mx-auto text-base md:text-xl leading-relaxed ${subColor} ${subheadingClassName}`}
//         >
//           {subheading}
//         </motion.p>
//       )}
//     </div>
//   );
// }


'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedHeaderProps {
  title: string;
  highlight?: string;
  highlightColor?: string;
  highlightClassName?: string;
  subheading?: string;
  variant?: 'light' | 'dark';
  className?: string;
  subheadingClassName?: string;
  titleClassName?: string;
}

export default function AnimatedHeader({
  title,
  highlight,
  highlightColor = "#9B0000",
  highlightClassName,
  subheading,
  variant = 'light',
  className = "",
  titleClassName = "",
  subheadingClassName = ""
}: AnimatedHeaderProps) {

  const titleDefaultColor = variant === 'light' ? 'text-black' : 'text-white';
  const subColor = variant === 'light' ? 'text-[#000000]/50' : 'text-white';

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: customDelay
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

  // Improved Splitting Logic using Regex to support multi-word highlights
  const renderTitle = () => {
    if (!highlight) {
      return (
        <motion.span variants={slideUpVariants} custom={0} className="inline-block">
          {title}
        </motion.span>
      );
    }

    // This Regex splits the title but keeps the highlight phrase as its own entry in the array
    const parts = title.split(new RegExp(`(${highlight})`, 'gi'));

    return parts.map((part, index) => {
      const isMatch = part.toLowerCase() === highlight.toLowerCase();
      
      return isMatch ? (
        <span
          key={index}
          style={{ color: highlightColor }}
          className={`inline-block ${highlightClassName}`}
        >
          {part.split("").map((char, charIndex) => (
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
        <motion.span
          key={index}
          variants={slideUpVariants}
          custom={0}
          className="inline-block"
        >
          {/* Ensure spaces aren't collapsed */}
          {part.split("").map((char, i) => char === " " ? "\u00A0" : char)}
        </motion.span>
      );
    });
  };

  return (
    <div className={`text-center  ${className}`}>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className={`font-playfair font-regular text-[44px]  ${titleDefaultColor} leading-tight ${titleClassName}`}
      >
        {renderTitle()}
      </motion.h2>

      {subheading && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          custom={0.4}
          className={`font-regular font-sans max-w-3xl mx-auto text-body-md-mobile md:text-body-md-tab lg:text-body-md leading-tight tracking-wide ${subColor} ${subheadingClassName}`}
        >
          {subheading}
        </motion.p>
      )}

    </div>
  );
}