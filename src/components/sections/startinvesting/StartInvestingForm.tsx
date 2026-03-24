"use client";

import { ArrowRight } from "lucide-react";

export default function StartInvestingForm() {
  return (
    <section className="bg-[#F8F9FA] py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-5xl md:text-4xl font-serif font-regular  text-gray-900">
            Start <span className="text-brand-maroon">Investing</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-[16px]">
            Fill out the form and our team will reach out within 24 hours
          </p>
        </div>

        {/* 🔹 Form Card */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <form className="space-y-6">
            
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[12px] font-semibold text-gray-400 uppercase  ">Full Name *</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all text-xs mt-2"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-semibold text-gray-400 uppercase  ">Email *</label>
                <input 
                  type="email" 
                  placeholder="email@example.com" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all text-xs mt-2"
                />
              </div>
            </div>

            {/* Row 2: Phone & Amount */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[12px] font-semibold text-gray-400 uppercase  ">Phone *</label>
                <input 
                  type="text" 
                  placeholder="+91 XXXXX XXXXX" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all text-xs mt-2"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-semibold text-gray-400 uppercase  ">Amount *</label>
                <input 
                  type="text" 
                  placeholder="₹50,000" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all text-xs mt-2 font-sans"
                />
              </div>
            </div>

            {/* Row 3: Fund & Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[12px] font-semibold text-gray-400 uppercase  ">Fund (optional)</label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all text-xs mt-2 text-gray-400 appearance-none cursor-pointer">
                  <option value="">Select a fund</option>
                  <option value="long-only">India Long-Only Fund</option>
                  <option value="miners">Gold & Silver Miners Fund</option>
                  <option value="absolute">Absolute Return Fund</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-semibold text-gray-400 uppercase  ">Type (optional)</label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all text-xs mt-2 text-gray-400 appearance-none cursor-pointer">
                  <option value="">Select type</option>
                  <option value="lumpsum">Lump Sum</option>
                  <option value="sip">SIP</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-brand-maroon text-white py-4 font-medium flex items-center justify-center gap-2 "
              >
                Submit Request
                <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}