'use client';

import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import AnimatedHeader from "@/components/common/AnimatedHeader"; // Adjust path as needed
import Container from "@/components/common/Container";
import type { SanityContactPage } from "@/sanity/queries";

const ICONS_BY_TYPE = {
  visit: <MapPin className="w-5 h-5" />,
  call: <Phone className="w-5 h-5" />,
  email: <Mail className="w-5 h-5" />,
};

const defaultContactDetails: NonNullable<SanityContactPage['contactCards']> = [
  {
    type: "visit",
    label: "Visit Us",
    value: "Lower Parel",
    subValue: "Mumbai, Maharashtra 400013",
  },
  {
    type: "call",
    label: "Call Us",
    value: "+91 99119 00096 | +91 99872 61105",
    subValue: "Mon – Fri, 9:30 AM – 6:00 PM",
  },
  {
    type: "email",
    label: "Email Us",
    value: "jaba@repllp.com | vikram@repllp.com",
    subValue: "We reply within 24 hours",
  },
];

const defaultHeader = {
  heading: "Get in Touch",
  highlightText: "Touch",
  subtext: "Have questions about our funds or need help getting started? Our team is ready to assist you.",
};

const cardVariants: Variants = {
  hidden: { x: -80, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function ContactSection({
  header,
  cards,
}: {
  header?: SanityContactPage['header'];
  cards?: SanityContactPage['contactCards'];
}) {
  const resolvedHeader = header ?? defaultHeader;
  const resolvedCards = cards && cards.length > 0 ? cards : defaultContactDetails;

  return (
    <section className="bg-white py-6 lg:py-12 px-6 font-sans overflow-hidden">
      <Container>

        {/* --- INTEGRATED ANIMATED HEADER --- */}
        <AnimatedHeader
          title={resolvedHeader.heading}
          highlight={resolvedHeader.highlightText}
          highlightColor="brand-maroon"
          subheading={resolvedHeader.subtext}
          subheadingClassName="text-gray-700 font-normal max-w-2xl mx-auto text-base text-body-lg leading-relaxed"
          variant="light"
          className="mb-8 lg:mb-16"
          titleClassName="text-black text-h3-mobile md:text-h3-tab lg:text-h3 mb-2"
        />

        {/* Info Cards Grid - Animated Staggered */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {resolvedCards.map((item, index) => (
            <motion.div 
              key={index} 
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 } 
              }}
              className="bg-[#F8F9FA] border border-gray-100 p-8 rounded-2xl flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              {/* Icon Container */}
              <div className="bg-[#9B0000]/10 p-3 rounded-xl text-[#9B0000] mb-6">
                {ICONS_BY_TYPE[item.type]}
              </div>

                <p className="text-body-sm -mobile uppercase font-normal text-[#000000]/50 mb-3 ">
                  {item.label}
                </p>
              <div className="space-y-1">
                <h3 className="text-body-md -tab font-semibold text-black">
                  {item.value}
                </h3>
                <p className="text-body-sm -mobile text-[#000000]/50 font-normal leading-relaxed">
                  {item.subValue}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}