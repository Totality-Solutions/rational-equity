"use client";

import React from "react";

const NAV_LINKS = [
  { label: "Features", target: "overview" },
  { label: "Performance", target: "performance" },
  { label: "Philosophy", target: "philosophy" },
  { label: "Documents", target: "documents" },
  { label: "Invest", target: "invest" },
  { label: "FAQs", target: "faqs" },
];

export default function ProductNav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center h-16 gap-2 md:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-brand-maroon transition-colors px-3 py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}