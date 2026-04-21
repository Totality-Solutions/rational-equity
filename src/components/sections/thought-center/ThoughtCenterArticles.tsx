"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { articles, Article } from "@/data/thoughtCenterData";

const TABS = [
  "Investment Insights",
  "Letters to investors",
  "What we Read",
  "In the News",
];

export default function ThoughtCenterArticles() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const filteredArticles = useMemo(() => {
    return articles.filter((art) => art.category === activeTab);
  }, [activeTab]);

  return (
    <section className="w-full bg-white flex flex-col items-center overflow-hidden">
      
      {/* --- TABS NAVIGATION --- */}
      <div className="w-full px-4 md:px-20 bg-white border-b-2 border-neutral-50 flex flex-col justify-start items-start">
        <div className="self-stretch inline-flex justify-center items-start overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 transition-all duration-300 whitespace-nowrap flex justify-center items-center border-b-2 group ${
                activeTab === tab
                  ? "bg-rose-300/10 border-red-800 text-brand-maroon"
                  : "border-transparent text-black hover:text-brand-maroon"
              }`}
            >
              <span className={`text-body-md tracking-tight font-sans transition-colors duration-300 ${
                activeTab === tab 
                  ? "font-bold" 
                  : "font-semibold"
              }`}>
                {tab}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* --- ARTICLES GRID --- */}
      <div className="w-full py-3 md:py-6 px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-neutral-50">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((item: Article) => (
              <div
                key={item.id}
                className="
                  p-7 border-r border-b border-neutral-50 flex flex-col justify-start items-start 
                  group cursor-pointer transition-colors duration-500 ease-in-out
                  hover:bg-[#7B0000]/10
                "
              >
                {/* --- ALL-IN-ONE WRAPPER: Scaling everything together --- */}
                <div className="w-full flex flex-col gap-7 transition-transform duration-500 ease-in-out group-hover:scale-[1.02] origin-center">
                  
                  {/* Image Section */}
                  <div className="self-stretch aspect-[627/250] relative overflow-hidden bg-gray-100">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Meta & Title */}
                  <div className="self-stretch flex flex-col gap-2.5 opacity-70 group-hover:opacity-100 transition-all duration-500">
                    <div className="self-stretch flex justify-between items-start text-neutral-700 text-xs font-normal font-sans">
                      <div>Author : {item.author}</div>
                      <div className="text-right">{item.date}</div>
                    </div>
                    <h3 className="w-full max-w-[492px] text-black text-2xl font-semibold font-serif leading-8">
                      {item.title}
                    </h3>
                  </div>

                  {/* Submit Request Button: Ab wrapper ke andar hai toh saath scale hoga */}
                  <button 
                    type="submit"
                    className="w-full border border-black group-hover:border-0 group-hover:bg-brand-maroon group-hover:text-white py-2 font-medium flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                  >
                    Submit Request
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-400 font-sans border-r border-b border-neutral-50">
              No articles found in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}