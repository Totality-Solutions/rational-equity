'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '@/components/common/CTAButton';

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
                    className="font-serif text-5xl md:text-6xl text-[#8B0000] mb-6 font-weight-medium"
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

              

                <CTAButton
                    href="#"
                    text=" VIEW OUR APPROACH"
                    variant="light"
                    iconClassName="invert" // No invert needed here
                />
            </div>
        </section>
    );
}