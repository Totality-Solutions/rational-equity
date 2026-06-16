// src/constants/funds.tsx
import { 
  Wallet, Calendar, BarChart3, ShieldCheck, Percent, 
  AlertCircle, Target, Clock, User, Tag 
} from "lucide-react";
import { ReactNode } from "react";
import type { ReadyToStartProps } from "@/components/common/ReadyToStart";

export interface StatItem {
  icon: ReactNode;
  label: string;
  value: string;
}

export interface PdfItem {
  title: string;
  description: string;
  size: string;
  fileUrl: string;
}

export interface PhilosophyPoint {
  title: string;
  description: string;
  icon: string;
}

export interface PerformanceRow {
  period: string;
  fundReturn: string;
  benchmark: string;
}

export interface GraphPoint {
  name: string;
  fund: number;
  bench: number;
  status: number;
}

export interface FundDetails {
  title: string;
  description: string;
  color: string;

  overviewTitle?: string;
  overviewTitleItalics?: string;
  overviewDesc: string;

  stats: StatItem[];
  documents: PdfItem[];
  philosophyPoints: PhilosophyPoint[];

  finalCTA?: ReadyToStartProps;

  performance: {
    weekly: GraphPoint[];
    monthly: GraphPoint[];
    yearly: GraphPoint[];
  };
}

interface CTAConfig {
  text: string;
  href: string;
  variant?: string;
  iconClassName?: string;
}

interface FundCTASection {
  title?: string;
  description?: string;
  primaryCTA?: Partial<CTAConfig>;
  secondaryCTA?: Partial<CTAConfig>;
}

export const FUND_DATA: Record<string, FundDetails> = {
  "india-long-only": {
    title: "Indian Long-Only Fund",
    description: "A multi-cap long-only Category III open-ended AIF to invest in the undervalued and under-priced listed equities in the public Indian markets with a heavy tilt towards the mid and small cap market. This is a good investment for Indians and NRIs who believe in the India story and are looking to invest with a long-term horizon in the Indian market.",
    color: "text-brand-maroon",
    overviewTitle:"Conviction-driven investing",
    overviewTitleItalics:"in India's growth story.",
    overviewDesc: "Our India Long-Only Fund is designed to capture the highest-return opportunities within this theme — primarily in small and mid-cap companies that are under-researched and mispriced by the market. We are sector-agnostic. We go where the conviction is strongest and hold positions through the inevitable volatility that comes with high-conviction investing.",
    stats: [
      { icon: <Wallet size={16} />, label: "Min. Investment", value: "₹1 Crore" },
      { icon: <Calendar size={16} />, label: "Risk Level", value: "High" },
      { icon: <BarChart3 size={16} />, label: "Category", value: "Category III AIF" },
      { icon: <ShieldCheck size={16} />, label: "Strategy", value: "Long-Only Equity" },
      { icon: <Percent size={16} />, label: "Universe", value: "Indian Listed Equities" },
      { icon: <AlertCircle size={16} />, label: "Market Cap Bias", value: "Small & Mid Cap" },
      { icon: <Target size={16} />, label: "Launched", value: "March 28, 2023" },
      { icon: <Clock size={16} />, label: "Benchmark", value: "NIFTY 500 TRI" },
      { icon: <User size={16} />, label: "Reg", value: "SEBI" },
      // { icon: <Tag size={16} />, label: "Category", value: "Equity — Multi Cap" },
    ],
    documents: [
      { title: "Fund Factsheets", size: "2.4 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
      { title: "Application Forms", size: "1.1 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
      { title: "Scheme Documents", size: "3.8 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
      { title: "Annual Reports", size: "5.2 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
      { title: "Investment Brochures", size: "1.6 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
      { title: "KYC Documents", size: "0.8 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },  
    ],
    philosophyPoints: [
      { title: "Capital Efficiency", description: "Focusing on companies with high ROE and ROCE track records.", icon: "/images/icons/philosophy-capital.png" },
      { title: "Governance First", description: "Strict filters for management integrity and shareholder treatment.", icon: "/images/icons/philosophy-governance.png" },
      { title: "Structural Growth", description: "Investing in sectors with a 10+ year tailwind in India.", icon: "/images/icons/philosophy-growth.png" },
      { title: "Concentrated Conviction", description: "A high-conviction portfolio of 20-25 market-leading companies.", icon: "/images/icons/philosophy-conviction.png" },
    ],
    finalCTA: {
      title: "Invest in India's growth story.",
      description:
        "Request the fund presentation, PPM, and learn more about the onboarding process.",
      primaryCTA: {
        text: "Get in touch",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View other funds",
        href: "/pdf/pdf-1.pdf",
      },
    },
    performance: {
      // table: [
      //   { period: "1 Month", fundReturn: "+1.7%", benchmark: "+1.3%" },
      //   { period: "3 Months", fundReturn: "+4.1%", benchmark: "+3.5%" },
      //   { period: "Since Inception", fundReturn: "+196.4%", benchmark: "+152.8%" },
      // ],
      weekly: [
        { name: "Week 1", fund: 1.2, bench: 0.8, status: 0.5 },
        { name: "Week 2", fund: -0.5, bench: 0.2, status: -0.2 },
        { name: "Week 3", fund: 2.1, bench: 1.5, status: 0.8 },
        { name: "Week 4", fund: 0.8, bench: 1.2, status: 1.1 },
      ],
      monthly: [
        { name: "Jan", fund: 4.2, bench: 3.1, status: 2.0 },
        { name: "Feb", fund: 2.8, bench: 3.5, status: 1.5 },
        { name: "Mar", fund: 5.1, bench: 4.2, status: 3.2 },
        { name: "Apr", fund: 3.9, bench: 4.5, status: 2.8 },
        { name: "May", fund: 6.2, bench: 5.1, status: 4.0 },
        { name: "Jun", fund: 5.5, bench: 5.8, status: 4.2 },
      ],
      yearly: [
        { name: "2023", fund: 10.5, bench: 8.2, status: 6.1 },
        { name: "2024", fund: 15.2, bench: 12.5, status: 9.2 },
        { name: "2025", fund: 18.4, bench: 14.2, status: 11.5 },
        { name: "2026", fund: 22.2, bench: 18.5, status: 15.0 },
      ]
    }
  },
  "gold-silver-miners": {
    title: "Gold & Silver Miners' Fund",
    description: "A focused vehicle for strategic exposure to globally listed gold and silver mining companies — operated from GIFT City. No ETFs, no other commodities. Pure miners, pure conviction. Open to Indian residents and global investors.",
    color: "text-brand-maroon",
    overviewTitle:"Strategic exposure to the global",
    overviewTitleItalics:"precious metals opportunity.",
    overviewDesc: "In late 2023, we identified a structural shift in the global monetary order — central banks, led by China, were quietly but decisively selling their holdings of the US Treasury and replacing that with gold reserves. Fundamentally, the US economy was struggling and amidst the global political uncertainty, the faith in the US$ was declining. We realised gold would be a great bet in such time. Simultaneously, gold and silver mining equities were trading at multi-decade lows relative to the underlying commodity price, creating an extraordinary asymmetric opportunity. Which led us to use miners as a proxy for gold and silver to ensure our returns are exponential vs the commodities itself. We invested personally first. After validating the thesis with our own capital, we launched the GIFT City Fund in June 2025 to give investors structured access to this opportunity. The fund invests exclusively in listed mining companies globally — no ETFs, no physical gold, no other commodities.",
    stats: [
      { icon: <Wallet size={16} />, label: "Min. Investment", value: "US$ 150,000" },
      { icon: <Calendar size={16} />, label: "Fund Type", value: "Cat III AIF" },
      { icon: <BarChart3 size={16} />, label: "Strategy", value: "Long-Only Equity" },
      { icon: <ShieldCheck size={16} />, label: "Universe", value: "Global Mining Equities" },
      { icon: <Percent size={16} />, label: "Market Cap Bias", value: "Junior Miners" },
      { icon: <Clock size={16} />, label: "Launched", value: "June 2025" },
      { icon: <AlertCircle size={16} />, label: "Benchmark", value: "GDXJ" },
      { icon: <Target size={16} />, label: "Reg", value: "IFSCA" },
      { icon: <User size={16} />, label: "Eligible", value: "Indians & Global Investors" },
      // { icon: <Tag size={16} />, label: "Category", value: "Thematic — Metals" },
    ],
    documents: [
      { title: "Fund Factsheets", size: "2.4 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
      { title: "Application Forms", size: "1.1 MB",description: "Strategy guide", fileUrl: "/pdfs/pdf-1.pdf" },
      { title: "Scheme Documents", size: "3.8 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
      { title: "Annual Reports", size: "5.2 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
      { title: "Investment Brochures", size: "1.6 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
      { title: "KYC Documents", size: "0.8 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
    ],
    philosophyPoints: [
      { title: "Low-Cost Producers", description: "We prioritize miners with AISC in the bottom quartile.", icon: "/images/icons/philosophy-capital.png" },
      { title: "Reserve Quality", description: "We evaluate ore grade and mine life for long-term sustainability.", icon: "/images/icons/philosophy-governance.png" },
      { title: "Balance Sheet Strength", description: "Low leverage and strong cash flow are non-negotiable.", icon: "/images/icons/philosophy-growth.png" },
      { title: "Global Diversification", description: "Investing across geographies to reduce single-country risk.", icon: "/images/icons/philosophy-conviction.png" },
    ],
    finalCTA: {
      title: "Invest in the gold cycle.",
      description:
        "Request the fund presentation, PPM and onboarding details from our team.",
      primaryCTA: {
        text: "Get in touch",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View other funds",
        href: "/pdf/pdf-1.pdf",
      },
    },
    performance: {
      // table: [
      //   { period: "1 Month", fundReturn: "+1.7%", benchmark: "+1.3%" },
      //   { period: "3 Months", fundReturn: "+4.1%", benchmark: "+3.5%" },
      //   { period: "Since Inception", fundReturn: "+196.4%", benchmark: "+152.8%" },
      // ],
      weekly: [
        { name: "Week 1", fund: 1.2, bench: 0.8, status: 0.5 },
        { name: "Week 2", fund: -0.5, bench: 0.2, status: -0.2 },
        { name: "Week 3", fund: 2.1, bench: 1.5, status: 0.8 },
        { name: "Week 4", fund: 0.8, bench: 1.2, status: 1.1 },
      ],
      monthly: [
        { name: "Jan", fund: 4.2, bench: 3.1, status: 2.0 },
        { name: "Feb", fund: 2.8, bench: 3.5, status: 1.5 },
        { name: "Mar", fund: 5.1, bench: 4.2, status: 3.2 },
        { name: "Apr", fund: 3.9, bench: 4.5, status: 2.8 },
        { name: "May", fund: 6.2, bench: 5.1, status: 4.0 },
        { name: "Jun", fund: 5.5, bench: 5.8, status: 4.2 },
      ],
      yearly: [
        { name: "2023", fund: 10.5, bench: 8.2, status: 6.1 },
        { name: "2024", fund: 15.2, bench: 12.5, status: 9.2 },
        { name: "2025", fund: 18.4, bench: 14.2, status: 11.5 },
        { name: "2026", fund: 22.2, bench: 18.5, status: 15.0 },
      ]
    }
  },
  "absolute-return": {
    title: "Absolute Return Fund",
    description: "Market-neutral strategies aiming for consistent positive returns.",
    color: "text-brand-maroon",
    overviewTitle:"",
    overviewTitleItalics:"",
    overviewDesc: "Our Absolute Return Fund employs market-neutral strategies and arbitrage to generate steady returns with low correlation to broader equity markets, focusing on capital preservation.",
    stats: [
      { icon: <Wallet size={16} />, label: "Min. Investment", value: "₹25,000" },
      { icon: <Calendar size={16} />, label: "Min. SIP", value: "₹10,000/month" },
      { icon: <BarChart3 size={16} />, label: "AUM", value: "₹195 Cr" },
      { icon: <ShieldCheck size={16} />, label: "Risk Level", value: "Low to Moderate" },
      { icon: <Percent size={16} />, label: "Expense Ratio", value: "1.50%" },
      { icon: <AlertCircle size={16} />, label: "Exit Load", value: "Nil" },
      { icon: <Target size={16} />, label: "Benchmark", value: "Nifty 50 Arbitrage" },
      { icon: <Clock size={16} />, label: "Inception", value: "October 2018" },
      { icon: <User size={16} />, label: "Fund Manager", value: "Sanjay Mehta" },
      // { icon: <Tag size={16} />, label: "Category", value: "Hybrid — Arbitrage" },
    ],
    documents: [
      { title: "Fund Factsheets", size: "2.4 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
      { title: "Application Forms", size: "1.1 MB",description: "Strategy guide", fileUrl: "/pdfs/pdf-1.pdf" },
      { title: "Scheme Documents", size: "3.8 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
      { title: "Annual Reports", size: "5.2 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
      { title: "Investment Brochures", size: "1.6 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
      { title: "KYC Documents", size: "0.8 MB",description: "Strategy guide", fileUrl: "/pdf/pdf-1.pdf" },
    ],
    philosophyPoints: [
      { title: "Market Neutrality", description: "Strategies designed to perform regardless of market direction.", icon: "/images/icons/philosophy-capital.png" },
      { title: "Risk Arbitrage", description: "Capturing price inefficiencies between related financial instruments.", icon: "/images/icons/philosophy-governance.png" },
      { title: "Capital Preservation", description: "Focusing on low-volatility returns to protect investor principal.", icon: "/images/icons/philosophy-growth.png" },
      { title: "Low Correlation", description: "Providing returns that don't move in sync with traditional equities.", icon: "/images/icons/philosophy-conviction.png" },
    ],
    finalCTA: {
      title: "Ready to Invest in India's Growth?",
      description:
        "Partner with us to capture long-term opportunities in India's most promising businesses.",
      primaryCTA: {
        text: "Get in touch",
        href: "/contact",
      },
      secondaryCTA: {
        text: "View other funds",
        href: "/pdf/pdf-1.pdf",
      },
    },
    performance: {
      // table: [
      //   { period: "1 Month", fundReturn: "+1.7%", benchmark: "+1.3%" },
      //   { period: "3 Months", fundReturn: "+4.1%", benchmark: "+3.5%" },
      //   { period: "Since Inception", fundReturn: "+196.4%", benchmark: "+152.8%" },
      // ],
      weekly: [
        { name: "Week 1", fund: 1.2, bench: 0.8, status: 0.5 },
        { name: "Week 2", fund: -0.5, bench: 0.2, status: -0.2 },
        { name: "Week 3", fund: 2.1, bench: 1.5, status: 0.8 },
        { name: "Week 4", fund: 0.8, bench: 1.2, status: 1.1 },
      ],
      monthly: [
        { name: "Jan", fund: 4.2, bench: 3.1, status: 2.0 },
        { name: "Feb", fund: 2.8, bench: 3.5, status: 1.5 },
        { name: "Mar", fund: 5.1, bench: 4.2, status: 3.2 },
        { name: "Apr", fund: 3.9, bench: 4.5, status: 2.8 },
        { name: "May", fund: 6.2, bench: 5.1, status: 4.0 },
        { name: "Jun", fund: 5.5, bench: 5.8, status: 4.2 },
      ],
      yearly: [
        { name: "2023", fund: 10.5, bench: 8.2, status: 6.1 },
        { name: "2024", fund: 15.2, bench: 12.5, status: 9.2 },
        { name: "2025", fund: 18.4, bench: 14.2, status: 11.5 },
        { name: "2026", fund: 22.2, bench: 18.5, status: 15.0 },
      ]
    }
  }
};