"use client";

import Link from "next/link";
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

export default function ContactSection() {
  return (
    <section className="bg-white py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Navigation */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors text-sm mb-20"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold font-serif text-gray-900">
            Get in <span className="text-brand-maroon">Touch</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions about our funds or need help getting started? <br />
            Our team is ready to assist you.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#F8F9FA] border border-gray-100 p-8 rounded-2xl flex flex-col items-start text-left shadow-sm"
            >
              {/* Icon Container */}
              <div className="bg-[#9B0000]/10 p-3 rounded-xl text-brand-maroon mb-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}