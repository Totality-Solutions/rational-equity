'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function SmartScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Entries check karne ke bajaye, hum check karenge ki 
        // kya screen par koi bhi dark section intersect kar raha hai?
        const isCurrentlyOverDark = entries.some(entry => entry.isIntersecting);
        
        // Agar entry intersect kar rahi hai, toh hi change karein
        // Isse "false" overwrite hone ka khatra kam ho jata hai
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsOverDark(true);
          } else if (!isCurrentlyOverDark) {
            // Sirf tab false karein jab koi bhi dark section active na ho
            setIsOverDark(false);
          }
        });
      },
      { 
        // Button ki position ke hisaab se margin (approx 32px from bottom)
        rootMargin: '0px 0px -40px 0px', 
        threshold: 0.1 
      }
    );

    // Ye ensure karne ke liye ki DOM load ho chuka hai
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