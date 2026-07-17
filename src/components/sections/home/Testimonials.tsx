'use client';

import React from 'react';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import Image from 'next/image';
import { urlFor } from '@/sanity/image';
import type { SanityHomePage } from '@/sanity/queries';

interface TestimonialDisplay {
  text: string;
  name: string;
  location: string;
  img: string;
}

const defaultTestimonials: TestimonialDisplay[] = [
  {
    text: "The fund managers at Rational are truly exceptional. They understand market dynamics and have consistently delivered superior returns even in volatile markets. I have never felt more confident about where my wealth is being deployed.",
    name: "Priya Sharma",
    location: "Family Office . Delhi",
    img: "/images/testimonial/1.jpg"
  },
  {
    text: "What truly sets Rational apart is that they invest their own money alongside mine. That alignment of interest is rare in the industry and gives me complete peace of mind. The 80% post-tax return in FY24 spoke for itself.",
    name: "Amit Patel",
    location: "HNI Investor · Bangalore",
    img: "/images/testimonial/2.jpg"
  },
  {
    text: "Rational spotted the Gold & Silver Miners opportunity well before the market consensus shifted. That kind of foresight — backed by genuine research and conviction — is exactly what you want managing your capital.",
    name: "Rajesh Kumar",
    location: "Entrepreneur · Mumbai",
    img: "/images/testimonial/3.jpg"
  },
  {
    text: "No fixed fees, no fluff — just performance. I appreciate the rational and research-driven approach. No hype, just solid macro thinking and long-term value creation. Their Thought Centre alone is worth following.",
    name: "Vikram Singh",
    location: "Angel Investor · Hyderabad",
    img: ""
  },
  {
    text: "Rational managed to deliver exceptional returns precisely because they are willing to think differently — moving capital to global miners when everyone else was crowded into Indian equities. Conviction over consensus, always.",
    name: "Suresh Mehta",
    location: "CFO · Pune",
    img: ""
  }
];

function TestimonialCard({ item }: { item: TestimonialDisplay }) {
  return (
    <div className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[400px] group">
      <div className="relative bg-white rounded-2xl shadow-xl shadow-gray-100 flex flex-col h-full overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:border-[#9B0000]/20">
        {/* Top Accent Strip */}
        <div className="absolute top-0 left-0 w-full h-[6px] bg-[#9B0000] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        <div className="p-6 md:p-8 flex-grow">
          {/* Rating Stars */}
          <div className="flex gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                fill="#FBBF24"
                className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed text-base md:text-[17px] font-medium">
            &ldquo;{item.text}&rdquo;
          </p>
        </div>

        {/* Footer Area */}
        <div className="bg-[#9B0000] p-5 md:p-6 flex items-center gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-[#9B0000] font-bold font-sans text-base md:text-lg overflow-hidden">
            {item.img ? (
              <Image
                src={item.img}
                alt={item.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            ) : (
              item.name?.charAt(0).toUpperCase()
            )}
          </div>
          <div className="overflow-hidden">
            <h4 className="text-white font-bold text-sm md:text-body-md tracking-wide font-sans truncate">{item.name}</h4>
            <p className="text-rose-100/80 text-[10px] md:text-xs truncate">{item.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ testimonials: testimonialsData }: { testimonials?: SanityHomePage['testimonials'] }) {
  const heading = testimonialsData?.heading || 'What Our Investors Say';
  const highlightText = testimonialsData?.highlightText || 'Our Investors';
  const subheading =
    testimonialsData?.subheading || 'Trusted by thousands of investors across India for disciplined wealth creation.';
  const TESTIMONIALS: TestimonialDisplay[] =
    testimonialsData?.testimonials && testimonialsData.testimonials.length > 0
      ? testimonialsData.testimonials.map((t) => ({
          text: t.text,
          name: t.name,
          location: t.location,
          img: t.image ? urlFor(t.image).width(96).url() : '',
        }))
      : defaultTestimonials;
  // Two copies for seamless infinite loop
  const DUPLICATED = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="bg-white overflow-hidden space-y-10 py-12">
      <Container className="text-center">
        <AnimatedHeader
          title={heading}
          highlight={highlightText}
          subheading={subheading}
          variant="light"
          titleClassName="text-black text-h3-mobile md:text-h3-tab lg:text-h3"
          subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-base text-body-lg leading-relaxed"
        />
      </Container>

      {/* Marquee wrapper */}
      <div className="relative w-full overflow-hidden group/marquee">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Track — CSS animation handles the scroll */}
        <div
          className="flex gap-8 w-max marquee-track"
          style={{
            animation: 'marquee-scroll 30s linear infinite',
          }}
        >
          {DUPLICATED.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Scoped keyframes */}
      <style jsx global>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
