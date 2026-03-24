


'use client';

import React from 'react';
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

/**
 * Creates a vertical strip of numbers 0-9 and slides to the target digit
 */
const RollingDigit: React.FC<RollingDigitProps> = ({ digit }) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    return (
        <div className="inline-block h-[1em] overflow-hidden leading-none">
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: `-${digit * 10}%` }}
                transition={{ 
                    duration: 2, 
                    ease: [0.45, 0.05, 0.55, 0.95], 
                    delay: Math.random() * 0.5 // Staggered finish for KBC effect
                }}
                className="flex flex-col"
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

/**
 * Parses a string (like "25,000") and renders individual rolling digits
 */
const KBCNumber: React.FC<KBCNumberProps> = ({ value, inView }) => {
    if (!inView) return <span>0</span>;

    return (
        <span className="inline-flex">
            {value.split('').map((char, index) => {
                const parsed = parseInt(char);
                if (isNaN(parsed)) {
                    return <span key={index}>{char}</span>;
                }
                return <RollingDigit key={index} digit={parsed} />;
            })}
        </span>
    );
};

// --- Main Component ---

const STATS_CARDS: StatCard[] = [
    { value: '25,000', suffix: '+ Cr', label: 'AUM' },
    { value: '15', suffix: '+ Years', label: 'EXPERIENCE' },
    { value: '500', suffix: 'K+', label: 'INVESTORS' },
    { value: '12', suffix: '+', label: 'FUNDS' },
];

export default function Hero() {
    const { ref, inView } = useInView({ 
        threshold: 0.2, 
        triggerOnce: true 
    });

    return (
        <section ref={ref} className="bg-black text-white relative overflow-hidden font-sans">

            {/* Background Graphic Element with Loop Animation */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: 0.15,
                    scale: [1, 1.1, 1],
                    rotate: [0, 2, 0]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0 z-0"
            >
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="20" cy="50" r="1.5" stroke="currentColor" strokeWidth="0.03" fill="none" className="text-gray-600" />
                    <line x1="15" y1="45" x2="25" y2="55" stroke="currentColor" strokeWidth="0.05" className="text-brand-maroon" />
                    <path d="M70 10 Q 75 50, 70 90" stroke="currentColor" strokeWidth="0.02" fill="none" className="text-gray-800" strokeDasharray="1 1" />
                    
                    {/* Additional animated floating element for depth */}
                    <motion.circle 
                        cx="80" cy="20" r="0.5" 
                        animate={{ opacity: [0.2, 0.8, 0.2] }} 
                        transition={{ duration: 4, repeat: Infinity }} 
                        fill="currentColor" 
                        className="text-brand-maroon" 
                    />
                </svg>
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10">

                {/* Main Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h1 className="font-serif text-[56px] md:text-6xl font-black text-white tracking-widest mb-1">
                        INVESTING
                    </h1>
                    <p className="font-sans text-[32px] font-normal text-white tracking-wider mb-10">
                        the Rational way.
                    </p>

                    <p className="text-[22px] text-gray-300 leading-relaxed mb-12 font-sans">
                        Long-only strategies built on conviction, discipline,<br className="hidden md:block" />
                        and long-term value creation.
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <Link href="/funds" className="flex items-center border border-brand-maroon group overflow-hidden bg-black/40 backdrop-blur-sm">
                            <span className="px-6 text-white font-normal font-sans text-[22px] group-hover:text-white transition-colors">
                                Explore Funds
                            </span>
                            <div className="bg-brand-maroon p-3.5 text-white transition-colors group-hover:bg-brand-maroon-hover">
                                <img
                                    src="/images/arrowbtn.png"
                                    alt="Arrow Icon"
                                    className="w-[20px] object-contain transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Statistic Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {STATS_CARDS.map((stat) => (
                        <div
                            key={stat.label}
                            className="group relative bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-sm p-10 text-center transition-all duration-500"
                        >
                            <div className="font-serif text-3xl font-medium text-white mb-3 tracking-wider flex justify-center items-baseline">
                                <KBCNumber value={stat.value} inView={inView} />
                                <span className="ml-1">{stat.suffix}</span>
                            </div>
                            
                            <p className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">
                                {stat.label}
                            </p>
                            
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-800 group-hover:w-full transition-all duration-700" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}