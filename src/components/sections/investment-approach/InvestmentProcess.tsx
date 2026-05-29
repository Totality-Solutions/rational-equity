'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/common/Container';
import AnimatedHeader from '@/components/common/AnimatedHeader';
import Image from 'next/image';

const processes = [
  {
    title: "Idea Generation",
    tag: "Screening",
    icon: "/images/icons/generation.png",
    description:
      "Systematic screening of the investment universe based on quality parameters including ROE, debt levels, earnings growth, and competitive positioning. We filter thousands of companies down to a focused watchlist of high-conviction candidates.",
    pills: ["ROE > 15%", "Low leverage", "Earnings momentum", "Moat analysis"],
  },
  {
    title: "Fundamental Research",
    tag: "Deep Dive",
    icon: "/images/icons/research.png",
    description:
      "Deep-dive analysis of business models, industry dynamics, management quality, and financial health through primary and secondary research. We speak with management, customers, suppliers and competitors to build a complete picture.",
    pills: ["Primary research", "Mgmt quality", "Industry dynamics", "Financial health"],
  },
  {
    title: "Valuation Analysis",
    tag: "Pricing",
    icon: "/images/icons/valuation.png",
    description:
      "Rigorous valuation using multiple methodologies — DCF, relative multiples, and sum-of-parts — to ensure adequate margin of safety and an attractive risk-reward ratio before any capital is deployed.",
    pills: ["DCF model", "Peer multiples", "Sum-of-parts", "Margin of safety"],
  },
  {
    title: "Portfolio Construction",
    tag: "Sizing",
    icon: "/images/icons/portfolio.png",
    description:
      "Disciplined portfolio building with appropriate position sizing based on conviction level, sector diversification, and correlation-aware risk management. No single position creates undue concentration risk.",
    pills: ["Conviction sizing", "Sector limits", "Correlation checks", "Risk budgets"],
  },
  {
    title: "Continuous Monitoring",
    tag: "Ongoing",
    icon: "/images/icons/monitoring.png",
    description:
      "Regular review of portfolio companies, tracking business performance against our thesis, and rebalancing based on changing fundamentals or valuations. We exit when the thesis is broken or the risk-reward deteriorates.",
    pills: ["Quarterly reviews", "Thesis tracking", "Exit discipline", "Rebalancing"],
  },
];

const stats = [
  { num: "5", label: "Distinct research stages" },
  { num: "3×", label: "Valuation methodologies" },
  { num: "360°", label: "Continuous monitoring" },
];

const CRIMSON = "#8B0000";

export default function InvestmentProcess() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-10">
      <Container className='space-y-8'>

        {/* ── Header ── */}
        <AnimatedHeader
          title="Our Investment Process"
          highlight="Investment"
          subheading='A disciplined path to superior returns'
          highlightColor="#8B0000"
          className="text-h4 sm:text-h3 text-black"
          subheadingClassName="text-sm sm:text-base md:text-body-lg tracking-wide text-black"
          titleClassName="leading-tight"
        />
        {/* <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span
              className="block h-px w-6"
              style={{ background: CRIMSON }}
            />
            <span
              className="text-[11px] font-medium tracking-[0.18em] uppercase"
              style={{ color: CRIMSON, fontFamily: "'DM Sans', sans-serif" }}
            >
              Investment framework
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight mb-4 text-gray-900"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A disciplined path to{" "}
            <em className="italic" style={{ color: CRIMSON }}>
              superior returns
            </em>
          </h2>

          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xl">
            Our five-stage investment process combines rigorous fundamental
            research with systematic risk management — ensuring every position
            earns its place in the portfolio.
          </p>
        </div> */}

        {/* ── Stat Cards ── */}
        {/* <div className="grid grid-cols-3 gap-3 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-4"
            >
              <p
                className="text-3xl font-bold leading-none mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: CRIMSON }}
              >
                {s.num}
              </p>
              <p className="text-xs text-gray-400 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div> */}

        {/* ── Flow Bar ── */}
        {/* <div className="flex rounded-xl border border-gray-100 bg-gray-50 overflow-hidden mb-8">
          {processes.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex-1 py-2.5 text-center text-[11px] font-medium transition-colors duration-200 leading-tight border-r border-gray-100 last:border-r-0"
              style={
                i === active
                  ? { background: CRIMSON, color: "#fff" }
                  : { color: "#9ca3af" }
              }
            >
              <span
                className="block text-sm font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {p.title.split(" ")[0]}
            </button>
          ))}
        </div> */}

        {/* ── Timeline Steps ── */}
        <div className="flex flex-col">
          {processes.map((item, i) => (
            <div
              key={i}
              className="grid gap-x-5 cursor-pointer"
              style={{ gridTemplateColumns: "48px 1fr" }}
              onClick={() => setActive(i)}
            >
              {/* Left: number + connector line */}
              <div className="flex flex-col items-center">
                <motion.div
                  animate={
                    i === active
                      ? { borderColor: CRIMSON, backgroundColor: CRIMSON, width: 50, height: 50 }
                      : { borderColor: "#e5e7eb", backgroundColor: "#fff", }
                  }
                  transition={{ duration: 0.2 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center border relative z-10"
                >
                  <Image src={item.icon} alt={item.title} width={35} height={35} className={`${i === active ? 'invert' : ''}`} />
                </motion.div>
                {i !== processes.length - 1 && (
                  <motion.div
                    animate={{ backgroundColor: i === active ? CRIMSON : "#e5e7eb" }}
                    transition={{ duration: 0.2 }}
                    className="w-px flex-1 mt-0.5"
                    style={{ minHeight: 16 }}
                  />
                )}
              </div>

              {/* Right: card */}
              <div className="pb-3">
                <motion.div
                  animate={
                    i === active
                      ? { borderColor: "rgba(139,0,0,0.35)" }
                      : { borderColor: "rgba(0,0,0,0.06)" }
                  }
                  className="rounded-xl border bg-white overflow-hidden relative"
                  style={{ padding: "1.1rem 1.4rem" }}
                >
                  {/* Accent bar */}
                  <AnimatePresence>
                    {i === active && (
                      <motion.div
                        key="bar"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        style={{
                          position: "absolute",
                          left: 0, top: 0, bottom: 0,
                          width: 3,
                          background: CRIMSON,
                          transformOrigin: "top",
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Title row */}
                  <div className="flex items-start justify-between">
                    <h3
                      className={`${active === i ? 'text-brand-maroon ' : 'text-gray-900'} text-body-lg font-semibold leading-snug`}
                    >
                      {item.title}
                    </h3>
                    <span
                      className="text-body-sm tracking-wide uppercase font-medium ml-3 mt-0.5 px-2.5 py-1 rounded-full border shrink-0"
                      style={{
                        color: CRIMSON,
                        background: "#F5EDED",
                        borderColor: "rgba(139,0,0,0.2)",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Expandable body */}
                  <AnimatePresence>
                    {i === active && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-body-md text-gray-500 leading-relaxed mt-3">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {item.pills.map((pill) => (
                            <span
                              key={pill}
                              className="text-[11px] text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}