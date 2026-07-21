"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, X } from "lucide-react";
import AnimatedHeader from "@/components/common/AnimatedHeader";

const paths = [
  {
    id: "lumpsum",
    title: "Lump Sum",
    description: "One-time investment starting from ₹10,000",
    features: ["Immediate deployment", "No lock-in period", "Flexible redemption"],
  },
  {
    id: "sip",
    title: "Systematic Investment Plan",
    description: "Monthly investment starting from ₹5,000",
    features: ["Rupee cost averaging", "Disciplined approach", "Build wealth gradually"],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ChooseYourPath() {
  const [selectedPath, setSelectedPath] = useState("lumpsum");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      // Optional: Add padding-right to prevent "layout shift" if scrollbar disappears
      document.body.style.paddingRight = "var(--scrollbar-width, 0px)"; 
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isModalOpen]);

  return (
    <section className="bg-white px-6 py-10 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}

        <AnimatedHeader 
          title="Choose Your Path"
          highlight="Path"
          subheading="Select the investment method that aligns with your financial goals"
          variant="light"
          className="mb-6 sm:mb-7 text-h3 text-black"
          subheadingClassName="text-body-lg tracking-wide text-black"
        />

        {/* Path Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paths.map((path, i) => {
            const isActive = selectedPath === path.id;
            return (
              <motion.div
                key={path.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => setSelectedPath(path.id)}
                className={`relative p-10 rounded-3xl cursor-pointer transition-all duration-300 border-2 flex flex-col min-h-[400px] 
                  ${isActive ? "border-brand-maroon/20 bg-[#FDF2F2]/30 shadow-lg" : "border-gray-100 bg-white"}`}
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${isActive ? "border-brand-maroon" : "border-gray-200"}`}>
                    {isActive && <div className="w-3 h-3 rounded-full bg-brand-maroon" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{path.title}</h3>
                    <p className="text-gray-400 text-lg">{path.description}</p>
                  </div>
                </div>
                <ul className="space-y-4 mb-12">
                  {path.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <div className="bg-[#FDF2F2] p-1 rounded-full text-brand-maroon"><Check size={14} /></div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                    className={`flex items-center gap-2 font-bold text-lg transition-all ${isActive ? "text-brand-maroon" : "text-gray-300"}`}
                  >
                    Get started <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 🔹 Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/10 backdrop-blur-xs z-[99]"
            />
            
            {/* Modal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[480px] bg-white rounded-2xl shadow-2xl z-[100] p-8 overflow-hidden"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 text-gray-400 hover:text-black transition-colors">
                <X size={20} />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black font-sans">Schedule a Call</h3>
                <p className="text-sm text-gray-500 font-medium mt-1">We'll reach out at your preferred time</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-500">Full name</label>
                  <input type="text" placeholder="Your name" className="w-full bg-gray-100 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-brand-maroon outline-none" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-500">Phone number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-gray-100 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-brand-maroon outline-none" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-500">Service</label>
                  <select className="w-full bg-gray-100 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-brand-maroon outline-none appearance-none cursor-pointer">
                    <option>{selectedPath === 'lumpsum' ? 'Lump Sum Investment' : 'SIP Investment'}</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <button className="w-full bg-brand-maroon text-white font-bold py-4  hover:cursor-pointer hover:bg-brand-maroon-hover transition-all text-base mt-4 shadow-lg shadow-brand-maroon/20">
                  Confirm Request
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}