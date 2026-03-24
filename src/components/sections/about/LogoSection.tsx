"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoImg from "../../../../public/images/Rational.png";

export default function LogoReflection() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-white overflow-hidden">
      <div className="relative w-full aspect-[3/1]">
        
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          className="relative w-full h-full"
        >
          {/* Main Logo */}
          <Image
            src={LogoImg}
            alt="Rational Logo"
            fill
            className="object-contain z-10 px-6" 
            priority
          />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white via-white/90 to-transparent z-30" />
      </div>
    </section>
  );
}