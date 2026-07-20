"use client";

import { motion, Variants } from "framer-motion";
import PdfGrid, { PdfItem } from "@/components/common/PdfGrid";
import AnimatedHeader from "@/components/common/AnimatedHeader";
import type { SanityInvestWithUsPage } from '@/sanity/queries';

// 🔹 Now includes fileUrl (important for download)
const defaultDocuments: PdfItem[] = [
  { title: "India Long-Only Fund", size: "2.4 MB", type: "PDF", fileUrl: "/pdf/india-long-only-fund.pdf" },
  { title: "Gold & Silver Miners Fund", size: "1.1 MB", type: "PDF", fileUrl: "/pdf/gold-silver-miners-fund.pdf" },
  { title: "Absolute Return Fund", size: "3.8 MB", type: "PDF", fileUrl: "/pdf/absolute-return-fund.pdf" }
];

function formatSize(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

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

export default function ResourcesSection({ resources }: { resources?: SanityInvestWithUsPage['resources'] }) {
  const heading = resources?.heading || 'Resources & Documents';
  const highlightText = resources?.highlightText || 'Documents';
  const subheading = resources?.subheading || 'Download important documents and reports';
  const documents: PdfItem[] =
    resources?.documents && resources.documents.length > 0
      ? resources.documents
          .filter((d) => d.file)
          .map((d) => ({
            title: d.title,
            size: formatSize(d.file!.asset.size),
            type: 'PDF',
            fileUrl: d.file!.asset.url,
          }))
      : defaultDocuments;

  return (
    <section className="relative w-full bg-white font-sans py-12 overflow-hidden">
      
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
          <AnimatedHeader
            title={heading}
            highlight={highlightText}
            subheading={subheading}
            variant="light"
            className="mb-6 sm:mb-7 text-h3 text-black"
          subheadingClassName="text-body-lg tracking-wide text-black"
          />

        {/* ✅ REPLACED GRID WITH REUSABLE COMPONENT */}
        <PdfGrid data={documents} />
        
      </div>
    </section>
  );
}