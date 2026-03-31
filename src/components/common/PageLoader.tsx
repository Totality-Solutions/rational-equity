'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <div className="relative flex items-center justify-center">
        
        {/* --- Rotating Maroon Border --- */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.2, 
            ease: "linear" 
          }}
          className="absolute h-24 w-24 rounded-full border-t-4 border-r-4 border-brand-maroon border-l-4 border-l-transparent border-b-4 border-b-transparent"
          style={{ borderColor: "#8B0000 transparent transparent #8B0000" }} // Matches your maroon
        />

        {/* --- Inner Stationary Logo --- */}   
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="relative h-16 w-16"
        >
          <Image
            src="/images/loader-icon.svg" // Path to your logo
            alt="Rational Equity Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
        
      </div>
    </motion.div>
  );
}