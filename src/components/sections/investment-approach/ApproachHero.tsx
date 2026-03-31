
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '@/components/common/CTAButton';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';

export default function ApproachHero() {
    return (
        <section className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            {/* DOT GRID BACKGROUND */}
            <div
                className="absolute inset-0 z-0 opacity-[0.5] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#d1d1d1 2px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            <Container className="relative z-10 text-center">


                <AnimatedHeader
                    title="Our Investment Approach"
                    subheading="A disciplined, research-driven approach to generating superior long-term returns through conviction and clarity."
                    titleClassName="text-[#8B0000]! lg:text-7xl" // This will now work perfectly
                    subheadingClassName="max-w-2xl"
                />

                <div className="flex justify-center">
                    <CTAButton
                        href="#approach-details"
                        text="View Our Approach"
                        variant="light"
                        iconClassName="invert"
                    />
                </div>
            </Container>
        </section>
    );
}