'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function SmartScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    // 1. Handle Visibility (Show after 400px)
    const toggleVisibility = () => {
      window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
    };

    // 2. Handle Color Flip (Detect Dark Sections)
    // This looks for any section you've labeled with <section data-theme="dark">
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsOverDark(true);
          } else {
            setIsOverDark(false);
          }
        });
      },
      { rootMargin: "-90% 0px -10% 0px" } // Detects when section is under the button
    );

    const darkSections = document.querySelectorAll('[data-theme="dark"]');
    darkSections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            // Logic: If over dark, use White Bg / Maroon Text. Else Maroon Bg / White Text.
            backgroundColor: isOverDark ? "#FFFFFF" : "#7B0000",
            color: isOverDark ? "#7B0000" : "#FFFFFF",
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] flex h-10 w-10 items-center justify-center shadow-2xl transition-colors duration-500"
        >
          <ArrowUp size={24} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}