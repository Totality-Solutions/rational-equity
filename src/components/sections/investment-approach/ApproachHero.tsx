
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
            

            <Container className="relative text-center space-y-8">


                <AnimatedHeader
                    title="Our Investment Approach"
                    highlight='Our Investment Approach'
                    subheading="A disciplined, research-driven approach to generating superior long-term returns through conviction and clarity."
                    titleClassName="!font-bold" // This will now work perfectly
                    className="text-h4 sm:text-h3 text-black"
                    subheadingClassName="text-sm sm:text-base md:text-body-lg tracking-wide text-black"
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