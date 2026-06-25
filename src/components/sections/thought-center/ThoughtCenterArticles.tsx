"use client";

import React, { useState } from "react";
import Image from "next/image";
import AnimatedHeader from "@/components/common/AnimatedHeader";
import { DynamicArticleModal } from '../../common/DynamicArticleModal';
import Container from "@/components/common/Container";
import { articles, Article } from "@/data/thoughtCenterData";

const CRIMSON = "#9B0000";
const PAGE_SIZE = 6;

export default function ThoughtCenterArticles() {
  const [page, setPage] = useState(1);
  
  // 1. Changed state type to dynamically reference the specific Article data item object
  const [activeModal, setActiveModal] = useState<Article | null>(null);
  
  const totalPages = Math.ceil(articles.length / PAGE_SIZE);
  const paginated = articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handlePage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="pb-10">      
      <Container>
        {/* Articles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {paginated.map((item: Article) => (
            <ArticleCard 
              key={item.id} 
              item={item} 
              // 2. Direct click event mapping passes item data cleanly to the frame
              onClick={() => setActiveModal(item)} 
            />
          ))}
        </div>

        {/* Paginator */}
        {totalPages > 1 && (
          <Paginator current={page} total={totalPages} onChange={handlePage} />
        )}
      </Container>

      {/* ========================================================= */}
      {/* 3. ONE SINGLE DYNAMIC MODAL LAYER TO HANDLE ALL CARDS    */}
      {/* ========================================================= */}
      <DynamicArticleModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={activeModal?.title || ""}
        subtitle={`${activeModal?.category || ""} · ${activeModal?.readTime || ""}`}
        heroImageUrl={activeModal?.thumbnail}
        heroImageAlt={activeModal?.title}
      >
        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
          {activeModal?.excerpt && <p className="font-medium text-neutral-950 text-base">{activeModal.excerpt}</p>}
          
          {activeModal?.category.toLowerCase().includes('gold') ? (
            <>
              <p>Gold has once again captured investor attention. After many years of underperforming against traditional asset classes, macro liquidity cycles have reached an inflection point.</p>
              <h3 className="text-lg font-bold text-neutral-900 pt-2">1. Central Banks Accumulation</h3>
              <p>One of the strongest indicators supporting gold's long-term outlook is the steady and heavy purchasing from central banks around the world.</p>
              <div className="bg-neutral-50 p-4 rounded-xl border border-gray-100 my-4 text-center">
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Key Takeaway</span>
                <p className="text-neutral-800 font-medium mt-1">Sustained demand acts as a solid floor foundation for gold prices.</p>
              </div>
            </>
          ) : (
            <>
              {/* Default structural fallback text for normal letters / articles info */}
              <p>This is the full publication text framework for the chosen insight piece. Macroeconomic trends continue to shift regulatory frameworks across traditional assets classes.</p>
              <p>Review standard portfolio allocations relative to individual investment goals, risk metrics parameters, and strategic cash thresholds over long horizons.</p>
            </>
          )}
        </div>
      </DynamicArticleModal>

    </section>
  );
}

/* ── Article card ─────────────────────────────────────────── */
function ArticleCard({ item, onClick }: { item: Article; onClick: () => void }) {
  return (
    <div className="group bg-white rounded-2xl border border-brand-maroon/20 overflow-hidden flex flex-col transition-all duration-300 ease-out hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-[1.01] sm:hover:scale-[1.02]">
      <div className="h-40 sm:h-44 relative overflow-hidden bg-brand-maroon/10 shrink-0">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1 gap-3">
        <p className="text-[10px] tracking-[0.18em] uppercase text-[#8A7A60]">
          {item.category} · {item.readTime}
        </p>

        <h3 className="text-black font-semibold text-base sm:text-[17px] leading-snug transition-colors group-hover:text-brand-maroon">
          {item.title}
        </h3>

        <p className="text-black/60 text-[13px] leading-relaxed line-clamp-3 flex-1">
          {item.excerpt}
        </p>

        <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
          <span>{item.author}</span>
          <span>{item.date}</span>
        </div>

        <button
          type="button"
          onClick={onClick}
          className="w-full bg-brand-maroon text-white py-2.5 rounded-full text-[13px] tracking-wide font-semibold transition-all hover:bg-[#600000] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer mt-1"
        >
          Read Article
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ── Paginator ────────────────────────────────────────────── */
function Paginator({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (p: number) => void;
}) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 pt-2">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="w-9 h-9 rounded-full border border-brand-maroon/20 flex items-center justify-center text-brand-maroon disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-maroon hover:text-white transition-all duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-9 h-9 rounded-full text-sm font-semibold transition-all duration-200 border
            ${p === current
              ? "bg-brand-maroon text-white border-brand-maroon"
              : "border-brand-maroon/20 text-gray-500 hover:border-brand-maroon hover:text-brand-maroon"
            }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="w-9 h-9 rounded-full border border-brand-maroon/20 flex items-center justify-center text-brand-maroon disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-maroon hover:text-white transition-all duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}