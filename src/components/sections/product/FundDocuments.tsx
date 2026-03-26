// src/components/sections/product/FundDocuments.tsx
"use client";

import { motion, Variants } from "framer-motion";
import PdfGrid, { PdfItem } from "@/components/common/PdfGrid";

interface FundDocumentsProps {
  documents: PdfItem[];
}

const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {  
    opacity: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function FundDocuments({ documents }: FundDocumentsProps) {
  // Gracefully hide if no documents exist for a specific fund
  if (!documents || documents.length === 0) return null;

  return (
    <section className="relative w-full bg-white font-sans py-12 overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#d1d5db 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl md:text-4xl font-serif text-gray-900"
          >
          Fund <span className="text-brand-maroon">Documents</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-lg md:text-[16px]"
          >
            Access detailed insights, performance reports, and strategy documents for this fund.
          </motion.p>
        </div>

        <PdfGrid data={documents} />
      </div>
    </section>
  );
}