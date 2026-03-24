"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function MessageSection() {
  return (
    <section className="bg-[#F8F9FA] py-20 px-6 font-sans ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* LEFT: Contact Form Card */}
        <div className="lg:col-span-2">
          <div className="mb-10">
            <h2 className="text-4xl font-serif font-medium text-gray-900 mb-4">
              Send Us a <span className="text-brand-maroon">Message</span>
            </h2>
            <p className="text-[#000000]/50 text-sm">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-[#000000]/50 uppercase tracking-wider">Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all text-sm"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-[#000000]/50 uppercase tracking-wider">Email *</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-[#000000]/50 uppercase tracking-wider">Phone *</label>
                  <input 
                    type="text" 
                    placeholder="+91 XXXXX XXXXX" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all text-sm"
                  />
                </div>
                {/* Interested Fund */}
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-[#000000]/50 uppercase tracking-wider">Interested Fund (optional)</label>
                  <input 
                    type="text" 
                    placeholder="Select a fund" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-[#000000]/50 uppercase tracking-wider">Message (optional)</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us how we can help..." 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="flex items-center border border-brand-maroon group overflow-hidden bg-white transition-all active:scale-[0.98]"
              >
                {/* Left Side: Text */}
                <span className="px-5 text-brand-maroon font-sans font-medium text-[18px] tracking-wider whitespace-nowrap">
                  Send Message
                </span>
              
                {/* Right Side: Icon Box */}
                <div className="bg-brand-maroon p-2.5 text-white ">
                  <img
                    src="/images/arrowbtn.png"
                    alt="Arrow Icon"
                    className="w-[20px] h-[20px] object-contain transition-transform duration-300  "
                  />
                </div>
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT: Mumbai Office Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden self-start h-full flex flex-col">
          <div className="relative h-full w-full">
            <Image 
              src="/images/Contact.png" // Replace with your actual office image
              alt="Mumbai Office"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 space-y-6">
            <h3 className="text-xl font-bold font-serif text-gray-900">Mumbai Office</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-sm text-[#000000]/50">
                <MapPin size={18} className="text-brand-maroon shrink-0 mt-0.5" />
                <p>123 Financial District, Mumbai,<br />Maharashtra 400001</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#000000]/50">
                <Phone size={18} className="text-brand-maroon shrink-0" />
                <p>+91 22 1234 5678</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#000000]/50">
                <Mail size={18} className="text-brand-maroon shrink-0" />
                <p>info@rationalamc.com</p>
              </div>
            </div>

            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-brand-maroon font-bold text-sm  pt-4"
            >
              View on Google Maps
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}