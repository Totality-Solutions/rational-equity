"use client";

import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Triggers when section is roughly in the upper middle
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.target);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-t border-gray-100 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center h-16 md:h-22 gap-2 md:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.target;

            return (
              <a
                key={link.target}
                href={`#${link.target}`}
                className={`relative text-[13px] md:text-[15px] font-bold tracking-wider transition-colors px-3 py-2 uppercase ${
                  isActive ? "text-brand-maroon" : "text-[#000000]/50 hover:text-brand-maroon"
                }`}
              >
                {link.label}

                {/* Animated Underline for Active State */}
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
    </nav>
  );
}