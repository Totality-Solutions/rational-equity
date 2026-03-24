"use client";

import { FileText, Download } from "lucide-react";

const documents = [
  { title: "Fund Factsheets", size: "2.4 MB", type: "PDF" },
  { title: "Application Forms", size: "1.1 MB", type: "PDF" },
  { title: "Scheme Documents", size: "3.8 MB", type: "PDF" },
  { title: "Annual Reports", size: "5.2 MB", type: "PDF" },
  { title: "Investment Brochures", size: "1.6 MB", type: "PDF" },
  { title: "KYC Documents", size: "0.8 MB", type: "PDF" },
];

export default function ResourcesSection() {
  return (
    <section className="relative w-full bg-white font-sans py-24">
      {/* 🔹 Background Pattern matching your previous section */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#d1d5db 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-4xl font-serif font-regular  text-gray-900">
            Resources & <span className="text-brand-maroon">Documents</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-[16px]">
            Download important documents and reports
          </p>
        </div>

        {/* 🔹 Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div 
              key={index}
              className="group flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl transition-all cursor-pointer"
            >
              <div className="flex items-center gap-5">
                {/* PDF Icon Box */}
                <div className="bg-brand-maroon/5 p-4 rounded-xl text-brand-maroon">
                  <FileText size={24} />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-[16px] font-medium text-gray-900 font-sans">
                    {doc.title}
                  </h3>
                  <p className="text-gray-400 tracking-[0.03em] text-[12px]">
                    {doc.type} • {doc.size}
                  </p>
                </div>
              </div>

              {/* Download Icon */}
              <div className="text-gray-300  transition-colors">
                <Download size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}