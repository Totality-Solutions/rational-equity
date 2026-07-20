"use client";

import React from "react";
import CTAButton from "@/components/common/CTAButton";
import { ScheduleCallModal } from "@/components/common/ScheduleCallModal";

export default function Strip() {
  const [isCallModalOpen, setIsCallModalOpen] = React.useState(false);

  return (
    <section className="group relative w-full bg-[#9B0000] py-6 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500 ease-in-out hover:bg-white border-t border-brand-maroon/10">
      
      {/* ─── TEXT SECTION ─── */}
      <p className="text-white text-lg md:text-body-lg max-w-3xl">
        <span className=" font-sans font-normal transition-colors duration-500 group-hover:text-[#000000]">
            Book a quick call with our team and let’s explore how we can{" "}
        </span>
        <span className="font-bold transition-colors duration-500 group-hover:text-[#9B0000]">
          work together.
        </span>
      </p>

      {/* ─── BUTTON SECTION ─── */}
      <div className="flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
        <CTAButton 
          href="/invest-with-us" 
          text="Schedule a Call" 
          onClick={() => setIsCallModalOpen(true)}
          variant="light"
          className="h-[40px] transition-all duration-500 group-hover:!bg-[#9B0000] group-hover:!text-white group-hover:border-[#9B0000]" 
        />
      </div>
      <ScheduleCallModal 
              isOpen={isCallModalOpen} 
              onClose={() => setIsCallModalOpen(false)} 
            />

    </section>
  );
}