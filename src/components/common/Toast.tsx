// src/components/common/Toast.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface ToastProps {
  isVisible: boolean;
  message: string;
  progress: number;
  isComplete: boolean;
}

export default function Toast({ isVisible, message, progress, isComplete }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50, transition: { delay: 1.5 } }} // Stays briefly after finishing
          className="fixed top-20 right-6 z-[100] pointer-events-none"
        >
          <div className="w-80 p-4 bg-emerald-50 rounded-lg shadow-lg outline outline-1 outline-green-200 flex flex-col gap-3 pointer-events-auto">
            <div className="flex items-center gap-3">
              {/* Icon Logic: Spinner vs Checkmark */}
              <div className="flex-shrink-0">
                {isComplete ? (
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center"
                  >
                    <Check size={14} className="text-white stroke-[3]" />
                  </motion.div>
                ) : (
                  <div className="w-5 h-5 border-2 border-green-200 border-t-green-700 rounded-full animate-spin" />
                )}
              </div>

              <div className="flex flex-col">
                <span className="text-green-700 text-xs font-bold font-sans">
                  {isComplete ? "Download Complete" : `Downloading ${message}`}
                </span>
                {!isComplete && (
                   <span className="text-green-600/70 text-[10px] font-mono">
                    {Math.round(progress)}%
                  </span>
                )}
              </div>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-1.5 bg-green-200/40 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-green-600 transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}