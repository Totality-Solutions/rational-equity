"use client";

import { motion, Variants } from "framer-motion";
import PdfGrid, { PdfItem } from "@/components/common/PdfGrid"; 

// 🔹 Now includes fileUrl (important for download)
const documents: PdfItem[] = [
  { title: "Fund Factsheets", size: "2.4 MB", type: "PDF", fileUrl: "/pdfs/factsheet.pdf" },
  { title: "Application Forms", size: "1.1 MB", type: "PDF", fileUrl: "/pdfs/application.pdf" },
  { title: "Scheme Documents", size: "3.8 MB", type: "PDF", fileUrl: "/pdfs/scheme.pdf" },
  { title: "Annual Reports", size: "5.2 MB", type: "PDF", fileUrl: "/pdfs/report.pdf" },
  { title: "Investment Brochures", size: "1.6 MB", type: "PDF", fileUrl: "/pdfs/brochure.pdf" },
  { title: "KYC Documents", size: "0.8 MB", type: "PDF", fileUrl: "/pdfs/kyc.pdf" },
];

// 🔹 Animations (same as yours)
const titleVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const sublineVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
  },
};

export default function ResourcesSection() {
  return (
    <section className="relative w-full bg-white font-sans py-24 overflow-hidden">
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#d1d5db 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* ✅ SAME HEADER (unchanged) */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl md:text-4xl font-serif font-regular text-gray-900"
          >
            Resources & <span className="text-brand-maroon">Documents</span>
          </motion.h2>

          <motion.p 
            variants={sublineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-500 text-lg md:text-[16px]"
          >
            Download important documents and reports
          </motion.p>
        </div>

        {/* ✅ REPLACED GRID WITH REUSABLE COMPONENT */}
        <PdfGrid data={documents} />
        
      </div>
    </section>
  );
}