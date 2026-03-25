"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowLeft } from "lucide-react";

const contactDetails = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "VISIT US",
    value: "123 Financial District",
    subValue: "Mumbai, Maharashtra 400001",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "CALL US",
    value: "+91 22 1234 5678",
    subValue: "Mon – Fri, 9:30 AM – 6:00 PM",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "EMAIL US",
    value: "info@rationalamc.com",
    subValue: "We reply within 24 hours",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "OFFICE HOURS",
    value: "Mon – Fri: 9:30 AM – 6:00 PM",
    subValue: "Sat: 10:00 AM – 2:00 PM",
  },
];

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

export default function ContactSection() {
  return (
    <section className="bg-white py-16 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Navigation */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors text-sm mb-20"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header Section - Animated */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold font-serif text-gray-900"
          >
            Get in <span className="text-brand-maroon">Touch</span>
          </motion.h2>
          
          <motion.p 
            variants={sublineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about our funds or need help getting started? <br />
            Our team is ready to assist you.
          </motion.p>
        </div>

        {/* Info Cards Grid - Animated Staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item, index) => (
            <motion.div 
              key={index} 
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 } 
              }}
              className="bg-[#F8F9FA] border border-gray-100 p-8 rounded-2xl flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              {/* Icon Container */}
              <div className="bg-brand-maroon/10 p-3 rounded-xl text-brand-maroon mb-6">
                {item.icon}
              </div>

              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.15em] font-bold text-gray-400 uppercase">
                  {item.label}
                </span>
                <h3 className="text-md font-semibold text-gray-900">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.subValue}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}