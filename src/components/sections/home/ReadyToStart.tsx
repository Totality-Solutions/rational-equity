import AnimatedHeader from '@/components/common/AnimatedHeader';
import Container from '@/components/common/Container';
import CTAButton from '@/components/common/CTAButton';
import React from 'react';

const ReadyToStart = () => {
  return (
    <section>
      <Container>
        <div className="bg-black px-8 md:px-16 py-8 md:py-12 flex flex-col md:flex-row items-center md:items-center justify-between gap-8">

          {/* Left Content */}
          <div className="max-w-4xl">
            <span className="font-playfair text-white font-extralight tracking-[0.015em] text-h3-mobile md:text-h3-tab lg:text-h3 leading-[52px]">
              Ready to Start Investing?
            </span>

            <p className="mt-2 text-[#7B7B7B] text-[18px] md:text-[20px] ">
              Join thousands of investors who trust us with their wealth creation journey
            </p>
          </div>

          {/* Right CTA */}
          <div className="shrink-0">
            <CTAButton
              href="/invest-with-us"
              text="Invest With Us"
              variant="maroon-bg"
              iconClassName="invert"
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ReadyToStart;