"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SuccessState } from "@/components/common/SuccessState"; // Adjust path as needed
import AnimatedHeader from "@/components/common/AnimatedHeader";
import Container from "@/components/common/Container";

export default function StartInvestingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setIsSubmitted(true);
  };

  return (
    <section className="bg-[#F8F9FA] font-sans overflow-hidden">
      {!isSubmitted ? (
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
      <Container className="py-16">
        <div className="grid lg:grid-cols-[520px_1fr] gap-20 items-start">
      
          {/* LEFT */}
      
          <div className="space-y-12">
      
            <div>
              <h2 className="font-playfair text-[52px] leading-[60px] font-normal text-black">
                Start the{" "}
                <span className="italic text-brand-maroon">
                  conversation.
                </span>
              </h2>
            </div>
      
            <div className="space-y-6">
      
              {/* WhatsApp */}
      
              <div className="flex items-center gap-5 rounded-lg border border-black/15 p-5">
      
                <div className="h-12 w-12 rounded-full bg-[#F3F3F3] flex items-center justify-center">
                  {/* Whatsapp Icon */}
                </div>
      
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">
                    Whatsapp
                  </p>
      
                  <p className="mt-2 text-[18px] font-medium text-black">
                    +91 99119 00096
                  </p>
                </div>
      
              </div>
      
              {/* Email */}
      
              <div className="flex items-center gap-5 rounded-lg border border-black/15 p-5">
      
                <div className="h-12 w-12 rounded-full bg-[#F3F3F3] flex items-center justify-center">
                  {/* Mail Icon */}
                </div>
      
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">
                    Email
                  </p>
      
                  <p className="mt-2 text-[18px] font-medium text-black break-words">
                    jaba@repllp.com · vikram@repllp.com
                  </p>
                </div>
      
              </div>
      
              {/* Office */}
      
              <div className="flex items-center gap-5 rounded-lg border border-black/15 p-5">
      
                <div className="h-12 w-12 rounded-full bg-[#F3F3F3] flex items-center justify-center">
                  {/* Location Icon */}
                </div>
      
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">
                    Office
                  </p>
      
                  <p className="mt-2 text-[18px] leading-7 font-medium text-black">
                    Rational Equity Partners LLP,
                    <br />
                    One BKC, G Block,
                    <br />
                    Mumbai 400051
                  </p>
                </div>
      
              </div>
      
            </div>
          </div>
      
          {/* RIGHT */}
      
          <div className="rounded-3xl border border-[#E7E7E7] bg-white p-12 shadow-[0_12px_48px_rgba(0,0,0,0.05)]">
      
            <div className="space-y-3">
      
              <h3 className="font-playfair text-[34px] font-semibold text-black">
                Request Fund Materials
              </h3>
      
              <p className="text-neutral-400 text-lg leading-7">
                Share a few details and we will send you the relevant investor
                deck, PPM and set up a call.
              </p>
      
            </div>
      
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-7"
            >
            
              {/* First Last */}
      
              <div className="grid md:grid-cols-2 gap-5">
      
                <div>
                  <label className="text-[13px] uppercase font-bold tracking-wider">
                    First Name
                  </label>
      
                  <input
                    required
                    placeholder="Vivek"
                    className="mt-2 h-12 w-full rounded-lg border border-[#E5E5E5] px-4 outline-none focus:border-brand-maroon"
                  />
                </div>
      
                <div>
                  <label className="text-[13px] uppercase font-bold tracking-wider">
                    Last Name
                  </label>
      
                  <input
                    required
                    placeholder="Iyer"
                    className="mt-2 h-12 w-full rounded-lg border border-[#E5E5E5] px-4 outline-none focus:border-brand-maroon"
                  />
                </div>
      
              </div>
      
              {/* Email */}
      
              <div>
      
                <label className="text-[13px] uppercase font-bold tracking-wider">
                  Email Address
                </label>
      
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 h-12 w-full rounded-lg border border-[#E5E5E5] px-4 outline-none focus:border-brand-maroon"
                />

              </div>
      
              {/* Phone */}
      
              <div>
      
                <label className="text-[13px] uppercase font-bold tracking-wider">
                  Phone Number
                </label>
      
                <input
                  required
                  placeholder="+91 98XXX XXXXX"
                  className="mt-2 h-12 w-full rounded-lg border border-[#E5E5E5] px-4 outline-none focus:border-brand-maroon"
                />

              </div>
      
              {/* Fund */}
      
              <div>
      
                <label className="text-[13px] uppercase font-bold tracking-wider">
                  I am interested in
                </label>
      
                <select
                  className="mt-2 h-12 w-full rounded-lg border border-[#E5E5E5] px-4 appearance-none bg-white outline-none focus:border-brand-maroon"
                >
                  <option>Select a fund...</option>
                  <option>India Long Only Fund</option>
                  <option>Absolute Return Fund</option>
                  <option>Gold & Silver Miners Fund</option>
                </select>
      
              </div>
      
              <button
                type="submit"
                className="mt-4 inline-flex h-14 items-center justify-center rounded-full bg-brand-maroon px-10 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-brand-maroon-hover"
              >
                Send Request
              </button>
      
            </form>
      
          </div>
      
        </div>
      </Container>
     </motion.div>
      ) : (
        <SuccessState
          onReset={() => setIsSubmitted(false)}
          variant="page"
        />
      )}
    </section>
  );
}