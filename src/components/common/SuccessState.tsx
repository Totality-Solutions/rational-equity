"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface SuccessStateProps {
  onReset: () => void;
  variant?: "page" | "modal";
}

export function SuccessState({ onReset, variant = "page" }: SuccessStateProps) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center justify-center text-center space-y-8 ${
        variant === "page" ? "py-12" : "py-8"
      }`}
    >
      {/* Green Tick Circle */}
      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100">
        <CheckCircle2 className="w-10 h-10 text-emerald-500" strokeWidth={1.5} />
      </div>

      <div className="space-y-4">
        <h2 className={`font-serif font-bold text-gray-900 ${
          variant === "page" ? "text-xl md:text-3xl" : "text-3xl"
        }`}>
          Request Submitted!
        </h2>
        <p className="text-gray-400 text-md max-w-md mx-auto leading-relaxed">
          Our investment advisor will contact you within 24 hours to help you get started.
        </p>
      </div>

      <button
        onClick={onReset}
        className="px-8 py-3 border-2 border-[#000000]/5 text-sm bg-[#F8F9FA] text-gray-500 font-medium transition-all hover:bg-brand-maroon hover:text-white"
      >
        Submit another request
      </button>
    </motion.div>
  );
}