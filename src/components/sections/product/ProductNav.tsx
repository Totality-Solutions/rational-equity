"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Features", target: "overview" },
  { label: "Performance", target: "performance" },
  { label: "Philosophy", target: "philosophy" },
  { label: "Documents", target: "documents" },
  { label: "Invest", target: "invest" },
  { label: "FAQs", target: "faqs" },
];

export default function ProductNav() {
  const [activeSection, setActiveSection] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 1. Existing Intersection Observer logic
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.target);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // 2. AUTO-SCROLL LOGIC: Scroll the nav bar to keep the active link in view
  useEffect(() => {
    if (activeSection && scrollContainerRef.current) {
      const activeLink = scrollContainerRef.current.querySelector(
        `[href="#${activeSection}"]`
      ) as HTMLElement;

      if (activeLink) {
        const container = scrollContainerRef.current;
        const scrollLeft =
          activeLink.offsetLeft -
          container.offsetWidth / 2 +
          activeLink.offsetWidth / 2;
        
        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activeSection]);

  return (
    <nav className="sticky top-[72px] md:top-[80px] z-50 w-full bg-white border-b border-t border-gray-100">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Visual Fade Gradient: Prevents text from looking "cut in half" 
            on small screens/tablets by adding a subtle fade at the edges */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden" /> */}

        <div 
          ref={scrollContainerRef}
          className="flex items-center justify-start md:justify-center h-16 md:h-22 gap-4 md:gap-8 max-w-full overflow-x-auto whitespace-nowrap no-scrollbar scroll-smooth px-8 md:px-0"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.target;

            return (
              <a
                key={link.target}
                href={`#${link.target}`}
                className={`relative flex-shrink-0 text-body-sm-mobile md:text-body-sm  font-bold tracking-wider transition-colors px-3 py-2 uppercase ${
                  isActive ? "text-brand-maroon" : "text-[#000000]/50 hover:text-brand-maroon"
                }`}
              >
                {link.label}

                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B0000]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
}