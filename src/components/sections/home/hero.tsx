
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --- Types ---
interface RollingDigitProps {
    digit: number;
}

interface KBCNumberProps {
    value: string;
    inView: boolean;
}

interface StatCard {
    value: string;
    suffix: string;
    label: string;
}

// --- Sub-Components ---

const RollingDigit: React.FC<RollingDigitProps> = ({ digit }) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    return (
        <div className="inline-block h-[1em] overflow-hidden leading-none flex-shrink-0">
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: `-${digit * 10}%` }}
                transition={{ 
                    duration: 2, 
                    ease: [0.45, 0.05, 0.55, 0.95], 
                    delay: Math.random() * 0.3 
                }}
                className="flex flex-col will-change-transform"
                style={{ transform: 'translateZ(0)' }}
            >
                {numbers.map((num) => (
                    <span key={num} className="h-[1em] flex items-center justify-center">
                        {num}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

const KBCNumber: React.FC<KBCNumberProps> = ({ value, inView }) => {
    return (
        <span className="inline-flex overflow-hidden">
            {value.split('').map((char, index) => {
                const parsed = parseInt(char);
                if (isNaN(parsed)) {
                    return <span key={index} className="flex-shrink-0">{char}</span>;
                }
                return <RollingDigit key={index} digit={inView ? parsed : 0} />;
            })}
        </span>
    );
};

const STATS_CARDS: StatCard[] = [
    { value: '25,000', suffix: '+ Cr', label: 'AUM' },
    { value: '15', suffix: '+ Years', label: 'EXPERIENCE' },
    { value: '500', suffix: 'K+', label: 'INVESTORS' },
    { value: '12', suffix: '+', label: 'FUNDS' },
];

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    const { ref, inView } = useInView({ 
        threshold: 0, 
        triggerOnce: true,
        fallbackInView: true 
    });

    if (!mounted) return null;

    return (
        <section ref={ref} className="bg-black text-white relative overflow-hidden font-sans min-h-[85vh] flex items-center">

            {/* --- VIDEO BACKGROUND SECTION --- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-40" // Adjust opacity as needed
                >
                    {/* REPLACE THIS PATH WITH YOUR ACTUAL VIDEO FILE */}
                    <source src="/videos/hero-bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Optional: Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/40 z-[1]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10 w-full">

                {/* Main Header */}
                <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
                    <motion.h1 
                        initial={{ opacity: 0, y: 15 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-4xl sm:text-5xl md:text-[64px] font-black text-white tracking-[0.2em] mb-4"
                    >
                        INVESTING
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="font-sans text-xl sm:text-2xl md:text-[32px] font-light text-white tracking-widest mb-10"
                    >
                        the Rational way.
                    </motion.p>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-base sm:text-lg md:text-[20px] text-gray-400 leading-relaxed mb-12 px-4"
                    >
                        Long-only strategies built on conviction, discipline,<br className="hidden md:block" />
                        and long-term value creation.
                    </motion.p>

                    <div className="flex justify-center">
                        <Link href="/funds" className="flex items-stretch border border-brand-maroon group overflow-hidden bg-black/20 backdrop-blur-sm hover:scale-75">
                            <span className="px-6 md:px-8 py-3 md:py-4 text-white font-sans text-lg md:text-[20px]">
                                Explore Funds
                            </span>
                            <div className="bg-brand-maroon px-4 flex items-center text-white transition-colors group-hover:bg-brand-maroon-hover">
                                <img
                                    src="/images/arrowbtn.png"
                                    alt="Arrow Icon"
                                    className="w-4 md:w-5 object-contain transition-transform group-hover:translate-x-1"
                                />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Statistic Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {STATS_CARDS.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 * idx, duration: 0.5 }}
                            className="group relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-sm p-8 md:p-10 text-center transition-all duration-500"
                            style={{ transform: 'translateZ(0)' }}
                        >
                            <div className="font-serif text-2xl md:text-3xl font-medium text-white mb-2 tracking-wider flex justify-center items-baseline">
                                <KBCNumber value={stat.value} inView={inView} />
                                <span className="ml-1 text-xl md:text-2xl">{stat.suffix}</span>
                            </div>
                            
                            <p className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] text-gray-500 uppercase">
                                {stat.label}
                            </p>
                            
                            {/* <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-maroon group-hover:w-full transition-all duration-700" /> */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}