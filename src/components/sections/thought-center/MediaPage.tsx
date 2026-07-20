"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import AnimatedHeader from "@/components/common/AnimatedHeader";
import { DynamicArticleModal } from '../../common/DynamicArticleModal';
import Container from "@/components/common/Container";
import { articles, Article } from "@/data/thoughtCenterData";
import { mediaItems, getYouTubeVideoId, getYouTubeThumbnail } from "@/data/mediaData";

const CRIMSON = "#9B0000";
const PAGE_SIZE = 6;

interface UnifiedInsightsAndMediaProps {
  // Channel avatars aren't derivable from a video URL without the YouTube Data API,
  // so the parent server component resolves them and passes them down keyed by video ID.
  channelLogosByVideoId?: Record<string, string>;
}

// 1. Unified Interface to safely support both formats inside the modal frame
interface ModalContentData {
  title: string;
  category: string;
  date: string;
  subtitle?: string;
  thumbnail?: string;
  excerpt?: string;
  isMediaFormat?: boolean;
}

export default function UnifiedInsightsAndMedia({ channelLogosByVideoId = {} }: UnifiedInsightsAndMediaProps) {
  const [page, setPage] = useState(1);
  const [activeModal, setActiveModal] = useState<ModalContentData | null>(null);

  const totalPages = Math.ceil(articles.length / PAGE_SIZE);
  const paginatedArticles = articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handlePage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-16">
      

      {/* ── SECTION 2: MEDIA & COVERAGE ───────────────────────────── */}
      <section className="w-full bg-[#FAFAFA]">
        <Container className="py-6 lg:py-6 mx-auto space-y-4 lg:space-y-12 relative">
          <AnimatedHeader
            title="Media & Coverage"
            highlight="&"
            highlightColor="brand-maroon"
            variant="light"
            titleClassName="text-black text-h3-mobile md:text-h3-tab lg:text-h3"
            subheadingClassName="text-gray-700 font-normal max-w-2xl text-base text-body-lg leading-relaxed"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mediaItems.map((item, index) => (
              <MediaCard
                key={index}
                {...item}
                logo={channelLogosByVideoId[getYouTubeVideoId(item.url) ?? ""]}
                onOpenModal={() => setActiveModal({
                  title: item.title,
                  category: item.category,
                  date: item.date,
                  subtitle: `${item.publisher} · ${item.format}`,
                  excerpt: item.description,
                  isMediaFormat: true
                })}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ── GLOBAL MODAL CONTROLLER ───────────────────────────────── */}
      <DynamicArticleModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={activeModal?.title || ""}
        subtitle={activeModal?.subtitle || ""}
        heroImageUrl={activeModal?.thumbnail}
        heroImageAlt={activeModal?.title}
      >
        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
          {activeModal?.excerpt && (
            <p className="font-medium text-neutral-950 text-base border-l-2 border-brand-maroon pl-4 my-4">
              {activeModal.excerpt}
            </p>
          )}

          {/* Conditional layout render block splits content types cleanly */}
          {activeModal?.isMediaFormat ? (
            <div className="pt-4 space-y-4">
              <p>This coverage was officially published on {activeModal.date}. Rational Equity Partners maintains transparent macro reporting across authorized networks.</p>
              <p>For official statements or media tracking inquiries regarding these fund placements and performance audits, please contact our investor relations desk.</p>
            </div>
          ) : activeModal?.category.toLowerCase().includes('gold') ? (
            <>
              <p>Gold has once again captured investor attention. After many years of underperforming against traditional asset classes, macro liquidity cycles have reached an inflection point.</p>
              <h3 className="text-lg font-bold text-neutral-900 pt-2">1. Central Banks Accumulation</h3>
              <p>One of the strongest indicators supporting gold's long-term outlook is the steady and heavy purchasing from central banks around the world.</p>
            </>
          ) : (
            <>
              <p>Full publication analysis framework. Portfolio distribution decisions depend on targeted timeline objectives and custom enterprise risk tolerances.</p>
            </>
          )}
        </div>
      </DynamicArticleModal>

    </div>
  );
}

/* ── Media Card Component ─────────────────────────────────── */
interface ExtendedMediaCardProps {
  publisher: string;
  format: string;
  title: string;
  description: string;
  date: string;
  category: string;
  onOpenModal: () => void;
  url: string;
  logo?: string;
}

function MediaCard({ publisher, format, title, description, url, date, category, logo, onOpenModal }: ExtendedMediaCardProps) {
  const thumbnail = getYouTubeThumbnail(url);

  return (
    <div className="flex flex-col rounded-3xl bg-white p-8 font-sans shadow-sm border border-neutral-100">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {(logo ?? thumbnail) && (
            <Image
              src={(logo ?? thumbnail)!}
              alt={publisher}
              width={40}
              height={40}
              className="size-10 shrink-0 rounded-full object-cover"
            />
          )}
          <div className="flex flex-col">
            <span className="text-sm font-medium text-black">{publisher}</span>
            <span className="text-xs font-normal text-[#808080]">{format}</span>
          </div>
        </div>
        <a
          // onClick={onOpenModal}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-10 items-center justify-center rounded-full hover:bg-neutral-100 text-neutral-700 hover:text-black transition-colors cursor-pointer"
        >
          <SquareArrowOutUpRight className="size-5" />
        </a>
      </div>

      <div className="flex flex-col gap-3 ">
        <h3 className="text-xl font-medium leading-snug text-brand-maroon">{title}</h3>
        {/* <p className="text-[15px] font-normal leading-relaxed text-[#555555]">{description}</p> */}
        {thumbnail && (
          <div className="flex items-center w-full justify-center gap-3 overflow-hidden rounded-xl">
            <Image
              src={thumbnail}
              alt={title}
              width={480}
              height={270}
              className="w-full h-full shrink-0 object-cover"
            />
          </div>
        )}
      </div>

      <div className="flex-grow" />

      <div className="border-t border-[#EDEDED] flex items-center justify-between">
        <span className="text-sm font-normal text-[#808080]">{date}</span>
        <span className="rounded-full bg-[#F3F6F9] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-black">
          {category}
        </span>
      </div>
    </div>
  );
}
