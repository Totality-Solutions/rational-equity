"use client";

import { motion } from "framer-motion";
import PdfGrid, { PdfItem } from "@/components/common/PdfGrid";
import AnimatedHeader from "@/components/common/AnimatedHeader"; // Adjust path as needed

interface FundDocumentsProps {
  documents: PdfItem[];
}

export default function FundDocuments({ documents }: FundDocumentsProps) {
  // Gracefully hide if no documents exist for a specific fund
  if (!documents || documents.length === 0) return null;

  return (
    <section className="relative w-full bg-white font-sans pb-10 overflow-hidden">
      {/* Background Decorative Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#d1d5db 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- INTEGRATED ANIMATED HEADER --- */}
        <AnimatedHeader 
          title="Fund Documents"
          highlight="Documents"
          highlightColor="#8B0000"
          subheading="Access detailed insights, performance reports, and strategy documents for this fund."
          variant="light"
         className="text-h3 text-black"
          subheadingClassName="text-body-lg tracking-wide text-black"
        />

        {/* PDF Grid Component */}
        <div className="mt-8">
          <PdfGrid data={documents} />
        </div>
      </div>
    </section>
  );
}