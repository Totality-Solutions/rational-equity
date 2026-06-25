import React from 'react';

// Common icon setup
const IconEconomicTimes = () => (
  <div className="flex size-10 items-center justify-center rounded-lg bg-[#F1F1F1] font-sans text-xs font-semibold text-[#808080]">ET</div>
);
const IconBusinessStandard = () => (
  <div className="flex size-10 items-center justify-center rounded-lg bg-[#F1F1F1] font-sans text-xs font-semibold text-[#808080]">BS</div>
);
const IconMoneycontrol = () => (
  <div className="flex size-10 items-center justify-center rounded-lg bg-[#F1F1F1] font-sans text-xs font-semibold text-[#808080]">MC</div>
);

// Minimal Share Icon (replicates the small square with an arrow)
const ShareIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="none" 
    strokeWidth="1.5"
    stroke="currentColor" 
    className="size-5 text-[#C0C0C0]" // Grey color for the icon
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 16 7m0 0-2.5 2.5M16 7H7.5a3 3 0 0 0-3 3v5.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 4.5h-5.25a3 3 0 0 0-3 3V11" />
  </svg>
);

// Type definition for card data
interface MediaCardProps {
  icon: React.ReactNode;
  publisher: string;
  format: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ icon, publisher, format, title, description, date, category }) => {
  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-white p-8 font-sans shadow-sm">
      {/* Header Area */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {icon}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-black">{publisher}</span>
            <span className="text-xs font-normal text-[#808080]">{format}</span>
          </div>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100">
          <ShareIcon />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold leading-snug text-black">
          {title}
        </h3>
        <p className="text-[15px] font-normal leading-relaxed text-[#555555]">
          {description}
        </p>
      </div>

      {/* Spacer to push footer down */}
      <div className="flex-grow" />

      {/* Footer Area */}
      <div className="border-t border-[#EDEDED] pt-6 flex items-center justify-between">
        <span className="text-[13px] font-normal text-[#808080]">
          {date}
        </span>
        <span className="rounded-full bg-[#F3F6F9] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#7A9BB6]">
          {category}
        </span>
      </div>
    </div>
  );
};

const MediaPage: React.FC = () => {
  const mediaItems: MediaCardProps[] = [
    {
      icon: <IconEconomicTimes />,
      publisher: "Economic Times",
      format: "Print & Digital",
      title: "\"India's #1 AIF of FY24 — Rational Equity Partners delivers 80% post-tax return\"",
      description: "Rational's India Long-Only Fund ranked top-performing AIF in India for FY24, beating large peers on a post-tax basis.",
      date: "April 2024",
      category: "COVERAGE",
    },
    {
      icon: <IconBusinessStandard />,
      publisher: "Business Standard",
      format: "Digital",
      title: "Gold miners as a proxy — why Rational moved early on precious metals",
      description: "An interview on the gold thesis, the GIFT City fund structure, and why junior miners offer asymmetric upside over gold itself.",
      date: "September 2025",
      category: "INTERVIEW",
    },
    {
      icon: <IconMoneycontrol />,
      publisher: "Moneycontrol",
      format: "Digital",
      title: "GIFT City AIFs — how Indian investors can access global gold miners",
      description: "A feature on the GIFT City fund landscape, with Rational's structure cited as the only India-domiciled fund enabling gold miner access for residents.",
      date: "January 2026",
      category: "FEATURE",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-light-grey p-12 md:p-16 lg:p-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Page Header */}
        <div className="flex flex-col gap-3">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-accent-red">
            IN THE PRESS
          </span>
          <h1 className="font-serif text-5xl font-semibold text-black tracking-tight">
            Media & Coverage.
          </h1>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <MediaCard key={index} {...item} />
          ))}
        </div>

        {/* Scroll indicator (optional, matching the screenshot's right edge) */}
        <div className="absolute right-0 top-[20%] h-[60%] w-1.5 rounded-full bg-black/10" aria-hidden="true" />

      </div>
    </div>
  );
};

export default MediaPage;