"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

const paths = [
  {
    id: "lumpsum",
    title: "Lump Sum",
    description: "One-time investment starting from ₹10,000",
    features: [
      "Immediate deployment",
      "No lock-in period",
      "Flexible redemption",
    ],
  },
  {
    id: "sip",
    title: "Systematic Investment Plan",
    description: "Monthly investment starting from ₹5,000",
    features: [
      "Rupee cost averaging",
      "Disciplined approach",
      "Build wealth gradually",
    ],
  },
];

export default function ChooseYourPath() {
  const [selectedPath, setSelectedPath] = useState("lumpsum");

  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-4xl font-serif font-regular  text-gray-900">
            Choose Your <span className="text-brand-maroon">Path</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-[16px] max-w-2xl mx-auto">
            Select the investment method that aligns with your financial goals
          </p>
        </div>

        {/* 🔹 Interactive Path Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paths.map((path) => {
            const isActive = selectedPath === path.id;

            return (
              <div
                key={path.id}
                onClick={() => setSelectedPath(path.id)}
                className={`relative p-10 rounded-3xl cursor-pointer transition-all duration-300 border-2 flex flex-col min-h-[400px] 
                  ${isActive 
                    ? "border-brand-maroon/20 bg-[#FDF2F2]/30 shadow-lg" 
                    : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
              >
                {/* Custom Radio Button */}
                <div className="flex items-start gap-4 mb-8">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 transition-colors
                    ${isActive ? "border-brand-maroon" : "border-gray-200"}`}
                  >
                    {isActive && <div className="w-3 h-3 rounded-full bg-brand-maroon" />}
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{path.title}</h3>
                    <p className="text-gray-400 text-lg">{path.description}</p>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-12">
                  {path.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <div className="bg-[#FDF2F2] p-1 rounded-full text-brand-maroon">
                        <Check size={14} />
                      </div>
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Get Started Link */}
                <div className="mt-auto">
                  <button className={`flex items-center gap-2 font-bold text-lg transition-all
                    ${isActive ? "text-brand-maroon opacity-100" : "text-gray-300 opacity-50"}`}
                  >
                    Get started
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}