'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ApproachHero() {
    return (
        <section className="relative bg-white pt-24 pb-12 overflow-hidden">
            {/* DOT GRID BACKGROUND */}
            <div
                className="absolute inset-0 z-0 opacity-[0.5] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#d1d1d1 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-5xl md:text-6xl text-[#8B0000] mb-6 font-medium"
                >
                    Our Investment Approach
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="font-sans text-gray-800 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    A disciplined, research-driven approach to generating superior long-term returns
                </motion.p>

                <div className="flex justify-center mb-16">
                    <button className="flex items-stretch group border border-[#8B0000] transition-all duration-300 bg-white hover:bg-gray-50 hover:scale-75">
                        <span className="px-10 py-3 font-sans text-[13px] text-[#8B0000] font-medium tracking-[0.2em]">
                            VIEW OUR APPROACH
                        </span>
                        <div className="bg-[#8B0000] px-4 flex items-center justify-center">
                               <img
                                    src="/images/arrowbtn.png"
                                    alt="Arrow Icon"
                                    className="w-4 md:w-5 object-contain transition-transform group-hover:translate-x-1"
                                />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}