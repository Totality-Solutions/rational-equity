"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SuccessState } from "@/components/common/SuccessState"; // Adjust path as needed
import AnimatedHeader from "@/components/common/AnimatedHeader";
import Container from "@/components/common/Container";
import Image from "next/image";
import CTAButton from "@/components/common/CTAButton";

export default function StartInvestingForm() {
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

  const Asterisk = () => <span className="text-red-500">*</span>;

  const FUND_OPTIONS = [
    { value: "india_long_only", label: "India Long-Only Fund" },
    { value: "gold_silver_miners", label: "Gold & Silver Miners Fund" },
    { value: "absolute_return", label: "Absolute Return Fund" },
    { value: "other", label: "Other" },
  ];


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
    <section className="bg-[#F8F9FA] font-sans overflow-hidden">
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Container className="py-10">
            <div className="grid lg:grid-cols-[520px_1fr] gap-20 items-start">

              {/* LEFT */}

              <div className="flex flex-col items-start gap-4 md:gap-6 mb-10 md:mb-12 lg:mb-16 "
              >
                <AnimatedHeader
                  title="Start the conversation."
                  highlight="conversation."
                  subheading=""
                  className=""
                  highlightClassName="italic"
                  titleClassName="text-start text-h3-mobile md:text-h3-tab lg:text-h2 font-playfair font-normal leading-tight tracking-tight"
                  subheadingClassName="text-start text-black/60 text-body-md-mobile md:text-body-md-tab lg:text-body-md leading-relaxed"
                />

                <div className="space-y-6">

                  {/* WhatsApp */}

                  <a
                    href="https://wa.me/919911900096"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 rounded-lg border border-black/15 p-5"
                  >
                    <div className="h-12 w-12 rounded-full bg-[#F3F3F3] flex items-center justify-center">
                      <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={36} height={36} />
                    </div>

                    <div>
                      <p className="text-[12px] uppercase tracking-widest text-black/60 font-semibold">
                        Whatsapp
                      </p>

                      <p className="mt-2 text-[18px] font-medium text-black">
                        +91 99119 00096
                      </p>
                    </div>
                  </a>

                  {/* Email */}

                  <a
                    href="mailto:jaba@repllp.com,vikram@repllp.com"
                    className="flex items-center gap-5 rounded-lg border border-black/15 p-5"
                  >
                    <div className="h-12 w-12 rounded-full bg-[#F3F3F3] flex items-center justify-center">
                      <Image src="/icons/mail.svg" alt="Email" width={36} height={36} />
                    </div>

                    <div>
                      <p className="text-[12px] uppercase tracking-[0.1em] text-black/60 font-semibold">
                        Email
                      </p>

                      <p className="mt-2 text-[18px] font-medium text-black break-words">
                        jaba@repllp.com · vikram@repllp.com
                      </p>
                    </div>
                  </a>

                  {/* Office */}

                  <a
                    href="tel:+919987261105"
                    className="flex items-center gap-5 rounded-lg border border-black/15 p-5"
                  >
                    <div className="h-12 w-12 rounded-full bg-[#F3F3F3] flex items-center justify-center">
                      <Image src="/icons/phone.svg" alt="Phone" width={36} height={36} />
                    </div>

                    <div>
                      <p className="text-[12px] uppercase tracking-[0.1em] text-black/60 font-semibold">
                        Phone
                      </p>

                      <p className="mt-2 text-[18px] leading-7 font-medium text-black">
                        +91 99872 61105
                      </p>
                    </div>
                  </a>

                </div>
              </div>

              {/* RIGHT */}

              <div className="rounded-3xl border border-[#E7E7E7] bg-white p-12 shadow-[0_12px_48px_rgba(0,0,0,0.05)]">

                <div className="space-y-3">

                  <h3 className="font-playfair text-[34px] font-semibold text-black">
                    Request Fund Materials
                  </h3>

                  <p className="text-black/60 text-lg leading-7">
                    Share a few details and we will send you the relevant investor
                    deck, PPM and set up a call.
                  </p>

                </div>

                <div className="mt-10 space-y-7">
                  <form className="space-y-6" onSubmit={handleSubmit}>

                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-body-md font-semibold  text-black/60 capitalize">
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
                        <label htmlFor="email" className="text-body-md font-semibold  text-black/60 capitalize">
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
                        <label htmlFor="phone" className="text-body-md font-semibold  text-black/60 capitalize">
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
                        <label htmlFor="category" className="text-body-md font-semibold  text-black/60 capitalize">
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
                            <label htmlFor="other" className="text-body-md font-semibold  text-black/60 capitalize">
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
                      <label htmlFor="message" className="text-body-md font-semibold  text-black/60 capitalize">
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
                        text={isSubmitting ? "Sending..." : "Send Request"}
                        variant="light"
                        className="pointer-events-none"
                      />
                    </button>
                  </form>
                </div>

              </div>

            </div>
          </Container>
        </motion.div>
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