"use client";

import React from "react";

interface HeroProps {
  mediaType?: "video" | "image";
  mediaUrl?: string; 
}

export default function Hero({
  mediaType = "image",
  mediaUrl = "/images/hero-abstract.png", 
}: HeroProps) {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-black">
      
      {/* --- BACKGROUND MEDIA LAYER --- */}
      <div className="absolute inset-0">
        {mediaType === "video" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={mediaUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={mediaUrl}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        )}
      </div>

    </section>
  );
}