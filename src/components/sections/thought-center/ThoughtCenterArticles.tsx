"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import type { PortableTextBlock } from "@portabletext/react";
import { DynamicArticleModal } from '../../common/DynamicArticleModal';
import ArticleContent from '@/components/common/ArticleContent';
import Container from "@/components/common/Container";
import { urlFor } from "@/sanity/image";
import type { SanityArticle } from "@/sanity/queries";

const CRIMSON = "#9B0000";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function usePageSize() {
  const [size, setSize] = useState(6);

  useEffect(() => {
    function update() {
      if (window.innerWidth < 600) setSize(2);
      else if (window.innerWidth < 1024) setSize(4);
      else setSize(6);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}


export default function ThoughtCenterArticles({
  articles,
  disclaimer,
}: {
  articles: SanityArticle[];
  disclaimer: PortableTextBlock[] | null;
}) {
  const pageSize = usePageSize();
  const [page, setPage] = useState(1);

  // Reset page when page size changes
  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const [activeModal, setActiveModal] = useState<SanityArticle | null>(null);

  const totalPages = Math.ceil(articles.length / pageSize);
  const paginated = articles.slice((page - 1) * pageSize, page * pageSize);

  const handlePage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Mobile-only carousel over ALL articles, independent of the grid's pagination
  const [carouselIndex, setCarouselIndex] = useState(0);
  const maxCarouselIndex = Math.max(0, articles.length - 1);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setCarouselIndex((i) => Math.min(i, maxCarouselIndex));
  }, [maxCarouselIndex]);

  const carouselPrev = useCallback(() => setCarouselIndex((i) => Math.max(0, i - 1)), []);
  const carouselNext = useCallback(
    () => setCarouselIndex((i) => Math.min(maxCarouselIndex, i + 1)),
    [maxCarouselIndex]
  );

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? carouselNext() : carouselPrev();
    touchStartX.current = null;
  };

  const translatePct = -(carouselIndex * 100);

  return (
    <section className="pb-10">      
      <Container>
        {/* Carousel — mobile only */}
        <div className="sm:hidden relative mb-8">
          {/* Previous Button */}
          <button
            onClick={carouselPrev}
            disabled={carouselIndex === 0}
            className="absolute -left-3 top-1/3 -translate-y-1/3 z-20 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#9B0000]/5 bg-white shadow-lg"
            style={{
              borderColor: "rgba(139,0,0,0.25)",
              color: "#9B0000",
            }}
            aria-label="Previous"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(${translatePct}%)`,
                transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {articles.map((item) => (
                <div
                  key={item._id}
                  className="shrink-0 px-1.5"
                  style={{ width: "100%" }}
                >
                  <ArticleCard item={item} onClick={() => setActiveModal(item)} />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={carouselNext}
            disabled={carouselIndex >= maxCarouselIndex}
            className="absolute -right-3 top-1/3 -translate-y-1/3 z-20 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#9B0000]/5 bg-white shadow-lg"
            style={{
              borderColor: "rgba(139,0,0,0.25)",
              color: "#9B0000",
            }}
            aria-label="Next"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Articles grid — tablet & desktop */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {paginated.map((item) => (
            <ArticleCard
              key={item._id}
              item={item}
              onClick={() => setActiveModal(item)}
            />
          ))}
        </div>

        {/* Paginator — drives the tablet/desktop grid only; mobile carousel swipes all articles directly */}
        {totalPages > 1 && (
          <div className="hidden sm:block">
            <Paginator current={page} total={totalPages} onChange={handlePage} />
          </div>
        )}
      </Container>

      {/* ========================================================= */}
      {/* 3. ONE SINGLE DYNAMIC MODAL LAYER TO HANDLE ALL CARDS    */}
      {/* ========================================================= */}
      <DynamicArticleModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={activeModal?.title || ""}
        subtitle={[activeModal?.series?.title, activeModal?.readTime].filter(Boolean).join(" · ")}
        heroImageUrl={activeModal?.mainImage?.asset ? urlFor(activeModal.mainImage).width(1600).height(700).url() : undefined}
        heroImageAlt={activeModal?.mainImage?.alt || activeModal?.title}
      >
        {activeModal?.subtitle && (
          <p className="font-medium text-neutral-950 text-base mb-6">{activeModal.subtitle}</p>
        )}
        <ArticleContent
          content={activeModal?.content ?? null}
          disclaimer={disclaimer}
          showDisclaimer={activeModal?.showDisclaimer}
        />
      </DynamicArticleModal>

    </section>
  );
}

/* ── Article card ─────────────────────────────────────────── */
function ArticleCard({ item, onClick }: { item: SanityArticle; onClick: () => void }) {
  return (
    <div className="group bg-white rounded-2xl border border-brand-maroon/20 overflow-hidden flex flex-col ease-out hover:-translate-y-2 md:hover:-translate-y-3 hover:scale-[1.01] md:hover:scale-[1.02]">
      <div className="h-40 sm:h-44 relative overflow-hidden bg-black shrink-0">
        {item.mainImage?.asset && (
          <Image
            src={urlFor(item.mainImage).width(600).height(360).url()}
            alt={item.mainImage.alt || item.title || 'Article thumbnail'}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {/* <div className="absolute inset-0 bg-[#2f3e46]/45" /> */}
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1 gap-3">
        <p className="text-[12px] tracking-[0.1em] uppercase text-[#6d604a]">
          {/* {[item.series?.title, item.readTime].filter(Boolean).join(" · ")} */}
          <span>{formatDate(item.publishedAt)}</span>
        </p>

        <h3 className="text-black font-semibold text-base sm:text-[17px] leading-snug group-hover:text-brand-maroon">
          {item.title}
        </h3>

        <p className="text-black/60 text-[13px] leading-relaxed line-clamp-3 flex-1">
          {item.subtitle}
        </p>

        {/* <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
          <span>{item.author?.name}</span>
          <span>{formatDate(item.publishedAt)}</span>
        </div> */}

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
    <div className="flex flex-col items-center gap-2 pt-2">
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => onChange(current - 1)}
          disabled={current === 1}
          className="w-9 h-9 rounded-full border border-brand-maroon/20 flex items-center justify-center text-brand-maroon disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-maroon hover:text-white transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => onChange(p)}
              aria-label={`Go to page ${p}`}
              className={`rounded-full transition-all duration-200 ${
                p === current ? "w-5 h-2 bg-brand-maroon" : "w-2 h-2 bg-brand-maroon/20 hover:bg-brand-maroon/40"
              }`}
            />
          ))}
        </div>

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

      <span className="text-xs text-gray-500 font-medium">
        Page {current} of {total}
      </span>
    </div>
  );
}