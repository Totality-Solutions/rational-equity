"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { MapPin, Phone, ArrowRight, ChevronDown } from "lucide-react";
import { SuccessState } from "@/components/common/SuccessState";
import CTAButton from "@/components/common/CTAButton";
import AnimatedHeader from "@/components/common/AnimatedHeader";
import Container from "@/components/common/Container";

// 🔹 Animation Variants
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

const FUND_OPTIONS = [
  { value: "india_long_only", label: "India Long-Only Fund" },
  { value: "gold_silver_miners", label: "Gold & Silver Miners Fund" },
  { value: "absolute_return", label: "Absolute Return Fund" },
  { value: "other", label: "Other" },
];

const Asterisk = () => <span className="text-red-500">*</span>;

export default function MessageSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    other: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  useEffect(() => {
    if (isSubmitted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = " ";
    };
  }, [isSubmitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", phone: "", category: "", other: "", message: "" });
        setIsSubmitted(true);
      } else {
        setStatus({ type: "error", message: data.error || "Failed to send message" });
      }
    } catch {
      setStatus({ type: "error", message: "Server error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isOther = formData.category === "other";

  return (
    <section className="bg-[#F8F9FA] py-6 lg:py-20 font-sans overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* LEFT: Contact Form Card */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <AnimatedHeader
                title="Send Us a Message"
                highlight="Message"
                subheading="Fill out the form and our team will get back to you within 24 hours."
                className="text-left"
                titleClassName="text-black text-h3-mobile md:text-h3-tab lg:text-h3 mb-2"
                subheadingClassName="!mx-0"
              />
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 h-full">
              <form className="space-y-6" onSubmit={handleSubmit}>

                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-body-lg font-bold font-playfair text-gray-900 capitalize">
                      Full Name <Asterisk />
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 text-body-md border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-body-lg font-bold font-playfair text-gray-900 capitalize">
                      Email <Asterisk />
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 text-body-md border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Interested Fund Dropdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-body-lg font-bold font-playfair text-gray-900 capitalize">
                      Phone <Asterisk />
                    </label>
                    <input
                      id="phone"
                      required
                      type="text"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 text-body-md border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="category" className="text-body-lg font-bold font-playfair text-gray-900 capitalize">
                      Interested Fund (optional)
                    </label>
                    <div className="relative">
                      <select
                        id="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 text-body-md border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all appearance-none pr-10 text-[#000000]/70"
                      >
                        <option value="" disabled>Select a fund</option>
                        {FUND_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#000000]/40"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: "Other" input — only shown when Other is selected */}
                <AnimatePresence>
                  {isOther && (
                    <motion.div
                      key="other-input"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className=""
                    >
                      <div className="space-y-2">
                        <label htmlFor="other" className="text-body-lg font-bold font-playfair text-gray-900 capitalize">
                          Please specify <Asterisk />
                        </label>
                        <input
                          id="other"
                          type="text"
                          required={isOther}
                          placeholder="Tell us which fund you're interested in"
                          value={formData.other}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 text-body-md border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Row 4: Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-body-lg font-bold font-playfair text-gray-900 capitalize">
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 text-body-md border border-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all resize-none"
                  />
                </div>

                {/* Error message */}
                {status.type === "error" && (
                  <p className="text-red-500 text-sm">{status.message}</p>
                )}

                <button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                  <CTAButton
                    href="#"
                    text={isSubmitting ? "Sending..." : "Send Message"}
                    variant="light"
                    className="pointer-events-none"
                  />
                </button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT: Mumbai Office Card */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full"
          >
            <div className="relative flex-grow min-h-[250px] w-full">
              <Image src="/images/contact/contact-page.png" alt="Mumbai Office" fill className="object-cover" />
            </div>
            <div className="p-8 space-y-6">
              <h3 className="text-body-lg font-bold font-playfair text-gray-900">Mumbai Office</h3>
              <div className="space-y-4 font-normal">
                <div className="flex items-start gap-4 text-body-sm text-[#000000]/50 text-left">
                  <MapPin size={18} className="text-brand-maroon shrink-0 mt-0.5" />
                  <p>Lower Parel, Mumbai<br />Maharashtra 400013</p>
                </div>
                <div className="flex items-center gap-4 text-body-sm text-[#000000]/50 text-left">
                  <Phone size={18} className="text-brand-maroon shrink-0" />
                  <p>+91 99119 00096<br />+91 99872 61105</p>
                </div>
              </div>
              <a href="https://www.bing.com/maps?where=Dr+Annie+Besant+Road+Worli+400030+Maharashtra+IN&trk=org-locations_url" className="inline-flex items-center gap-2 text-brand-maroon font-normal text-body-sm pt-4 hover:gap-3 transition-all">
                View on Google Maps <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* 🔹 Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSubmitted(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-fit min-h-fit bg-white rounded-none shadow-2xl z-[999] flex flex-col items-center justify-center"
            >
              <SuccessState variant="page" onReset={() => setIsSubmitted(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}