"use client";

import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import CTAButton from "@/components/common/CTAButton";

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
      className={`relative flex flex-col items-center justify-center text-center space-y-8 p-12 ${
        variant === "page" ? "py-16" : "py-8"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={onReset}
        className="absolute top-0 right-0 p-2 rounded-full text-brand-maroon hover:text-gray-600 hover:bg-gray-100 transition-all"
        aria-label="Close"
      >
        <X size={32} />
      </button>

      {/* Green Tick Circle */}
      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100">
        <CheckCircle2 className="w-10 h-10 text-emerald-500" strokeWidth={1.5} />
      </div>

      <div className="space-y-4">
        <h2 className={`font-playfair font-bold text-gray-900 ${
          variant === "page" ? "text-xl md:text-3xl" : "text-3xl"
        }`}>
          Request Submitted!
        </h2>
        <p className="text-gray-400 text-md max-w-md mx-auto leading-relaxed">
          Our investment advisor will contact you within 24 hours to help you get started.
        </p>
      </div>

      <div onClick={onReset} className="cursor-pointer">
        <CTAButton
          href="#"
          text="Submit another request"
          variant="light"
        />
      </div>
    </motion.div>
  );
}