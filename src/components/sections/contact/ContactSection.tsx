'use client';

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowLeft } from "lucide-react";
import AnimatedHeader from "@/components/common/AnimatedHeader"; // Adjust path as needed

const contactDetails = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Visit Us",
    value: "Lower Parel",
    subValue: "Mumbai, Maharashtra 400013",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Call Us",
    value: "+91 99119 00096 | +91 99872 61105",
    
    subValue: "Mon – Fri, 9:30 AM – 6:00 PM",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email Us",
    value: "jaba@repllp.com | vikram@repllp.com",
    subValue: "We reply within 24 hours",
  },
  // {
  //   icon: <Clock className="w-5 h-5" />,
  //   label: "Office Hours",
  //   value: "Mon – Fri: 9:30 AM – 6:00 PM",
  //   subValue: "Sat: 10:00 AM – 2:00 PM",
  // },
];

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
        {/* <Link 
          href="/" 
          className="flex items-center gap-2 text-[#000000]/50 hover:text-gray-600 transition-colors text-sm mb-12 md:mb-20"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link> */}

        {/* --- INTEGRATED ANIMATED HEADER --- */}
        <AnimatedHeader 
          title="Get in Touch"
          highlight="Touch"
          highlightColor="#9B0000"
          subheading="Have questions about our funds or need help getting started? Our team is ready to assist you."
          subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-base text-body-lg leading-relaxed"
          variant="light"
          className="mb-16 md:mb-24"
          titleClassName="text-black text-h3-mobile md:text-h3-tab lg:text-h3 mb-2"
        />

        {/* Info Cards Grid - Animated Staggered */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
              <div className="bg-[#9B0000]/10 p-3 rounded-xl text-[#9B0000] mb-6">
                {item.icon}
              </div>

                <p className="text-body-sm -mobile uppercase font-normal text-[#000000]/50 mb-3 ">
                  {item.label}
                </p>
              <div className="space-y-1">
                <h3 className="text-body-md -tab font-bold text-black">
                  {item.value}
                </h3>
                <p className="text-body-sm -mobile text-[#000000]/50 font-normal leading-relaxed">
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