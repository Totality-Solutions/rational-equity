"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, X } from "lucide-react";
import { SuccessState } from "@/components/common/SuccessState"; // Ensure this path is correct
import CTAButton from "@/components/common/CTAButton";
import AnimatedHeader from "@/components/common/AnimatedHeader";

// 🔹 Animation Variants
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

const cardVariants: Variants = {
  hidden: { x: -80, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function MessageSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
  if (isSubmitted) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  // cleanup (important)
  return () => {
    document.body.style.overflow = " ";
  };
}, [isSubmitted]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setIsSubmitted(true);
  };

  return (
    <section className="bg-[#F8F9FA] py-20 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Animated */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* LEFT: Contact Form Card */}
          <motion.div 
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-2"
          >
        <div className="mb-6">
          {/* <motion.h2 
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-serif font-medium text-gray-900 mb-4"
          >
            Send Us a <span className="text-brand-maroon">Message</span>
          </motion.h2>
          <motion.p 
            variants={sublineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#000000]/50 text-md"
          >
            Fill out the form and our team will get back to you within 24 hours.
          </motion.p> */}



          <AnimatedHeader
            title="Send Us a Message" 
            highlight="Message"
            subheading="Fill out the form and our team will get back to you within 24 hours."
            className="text-left"
            subheadingClassName="!mx-0"
          />


        </div>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 h-full">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-body-sm -mobile font-semibold text-[#000000]/50 uppercase tracking-wider">Full Name *</label>
                    <input required type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-gray-50 text-body-md -tab border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-body-sm -mobile font-semibold text-[#000000]/50 uppercase tracking-wider">Email *</label>
                    <input required type="email" placeholder="email@example.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 text-body-md -tab border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-body-sm -mobile font-semibold text-[#000000]/50 uppercase tracking-wider">Phone *</label>
                    <input required type="text" placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl bg-gray-50 text-body-md -tab border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-body-sm -mobile font-semibold text-[#000000]/50 uppercase tracking-wider">Interested Fund (optional)</label>
                    <input type="text" placeholder="Select a fund" className="w-full px-4 py-3 rounded-xl bg-gray-50 text-body-md -tab border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-body-sm -mobile font-semibold text-[#000000]/50 uppercase tracking-wider">Message (optional)</label>
                  <textarea rows={4} placeholder="Tell us how we can help..." className="w-full px-4 py-3 rounded-xl bg-gray-50 text-body-md -tab border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all resize-none" />
                </div>

                <button type="submit" className="w-full sm:w-auto">
                  <CTAButton 
                    href="#" 
                    text="Send Message" 
                    variant="light"
                    className="pointer-events-none" // Prevents the Link from intercepting the button click
                  />
                </button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT: Mumbai Office Card */}
          <motion.div custom={1} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
            <div className="relative flex-grow min-h-[250px] w-full">
              <Image src="/images/Contact.png" alt="Mumbai Office" fill className="object-cover" />
            </div>
            <div className="p-8 space-y-6">
              <h3 className="text-body-lg  font-bold font-serif text-gray-900">Mumbai Office</h3>
              <div className="space-y-4 font-normal">
                <div className="flex items-start gap-4 text-body-sm  text-[#000000]/50 text-left">
                  <MapPin size={18} className="text-brand-maroon shrink-0 mt-0.5" />
                  <p>123 Financial District, Mumbai,<br />Maharashtra 400001</p>
                </div>
                <div className="flex items-center gap-4 text-body-sm  text-[#000000]/50 text-left">
                  <Phone size={18} className="text-brand-maroon shrink-0" />
                  <p>+91 22 1234 5678</p>
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-brand-maroon font-normal text-body-sm -mobile pt-4 hover:gap-3 transition-all">View on Google Maps <ArrowRight size={14} /></a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔹 Success Modal Integration */}
      <AnimatePresence>
        {isSubmitted && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsSubmitted(false)} 
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]" 
            />
            
            {/* Wide Rectangle Modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[960px] min-h-[500px] bg-white rounded-none shadow-2xl z-[999] flex flex-col items-center justify-center p-12"
            >
              {/* Your SuccessState Component */}
              <SuccessState variant="page" onReset={() => setIsSubmitted(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}