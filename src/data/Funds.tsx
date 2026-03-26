// src/constants/funds.tsx
import { 
  Wallet, Calendar, BarChart3, ShieldCheck, Percent, 
  AlertCircle, Target, Clock, User, Tag 
} from "lucide-react";
import { ReactNode } from "react";

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
}

export interface PerformanceRow {
  period: string;
  fundReturn: string;
  benchmark: string;
}

export interface FundDetails {
  title: string;
  description: string;
  color: string;
  overviewDesc: string;
  stats: StatItem[];
  documents: PdfItem[];
  philosophyPoints: PhilosophyPoint[];
  performance: PerformanceRow[];
}

export const FUND_DATA: Record<string, FundDetails> = {
  "india-long-only": {
    title: "Indian Long-Only Fund",
    description: "Concentrated exposure to high-quality Indian equities for long-term growth.",
    color: "text-brand-maroon",
    overviewDesc: "This fund focuses on market leaders within India's structural growth sectors. We prioritize companies with high capital efficiency and strong corporate governance to deliver superior risk-adjusted returns.",
    stats: [
      { icon: <Wallet size={16} />, label: "Min. Investment", value: "₹10,000" },
      { icon: <Calendar size={16} />, label: "Min. SIP", value: "₹5,000/month" },
      { icon: <BarChart3 size={16} />, label: "AUM", value: "₹340 Cr" },
      { icon: <ShieldCheck size={16} />, label: "Risk Level", value: "High" },
      { icon: <Percent size={16} />, label: "Expense Ratio", value: "1.95%" },
      { icon: <AlertCircle size={16} />, label: "Exit Load", value: "1% within 1 year" },
      { icon: <Target size={16} />, label: "Benchmark", value: "Nifty 500 TRI" },
      { icon: <Clock size={16} />, label: "Inception", value: "June 2014" },
      { icon: <User size={16} />, label: "Fund Manager", value: "Rajesh Verma, CFA" },
      { icon: <Tag size={16} />, label: "Category", value: "Equity — Multi Cap" },
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
      { title: "Capital Efficiency", description: "Focusing on companies with high ROE and ROCE track records." },
      { title: "Governance First", description: "Strict filters for management integrity and shareholder treatment." },
      { title: "Structural Growth", description: "Investing in sectors with a 10+ year tailwind in India." },
      { title: "Concentrated Conviction", description: "A high-conviction portfolio of 20-25 market-leading companies." },
    ],
    performance: [
      { period: "1 Month", fundReturn: "+1.7%", benchmark: "+1.3%" },
      { period: "3 Months", fundReturn: "+4.1%", benchmark: "+3.5%" },
      { period: "6 Months", fundReturn: "+7.2%", benchmark: "+6.1%" },
      { period: "1 Year", fundReturn: "+12.3%", benchmark: "+9.8%" },
      { period: "3 Years", fundReturn: "+38.6%", benchmark: "+31.2%" },
      { period: "5 Years", fundReturn: "+84.5%", benchmark: "+68.7%" },
      { period: "Since Inception", fundReturn: "+196.4%", benchmark: "+152.8%" },
    ]
  },
  "gold-miners": {
    title: "Gold & Silver Miners Fund",
    description: "Strategic precious metals exposure for portfolio diversification.",
    color: "text-brand-maroon",
    overviewDesc: "The Gold & Silver Miners Fund provides investors with exposure to carefully selected precious metals mining companies globally. The fund acts as a portfolio diversifier and inflation hedge.",
    stats: [
      { icon: <Wallet size={16} />, label: "Min. Investment", value: "₹10,000" },
      { icon: <Calendar size={16} />, label: "Min. SIP", value: "₹5,000/month" },
      { icon: <BarChart3 size={16} />, label: "AUM", value: "₹280 Cr" },
      { icon: <ShieldCheck size={16} />, label: "Risk Level", value: "Moderate" },
      { icon: <Percent size={16} />, label: "Expense Ratio", value: "2.10%" },
      { icon: <AlertCircle size={16} />, label: "Exit Load", value: "1% within 6 months" },
      { icon: <Target size={16} />, label: "Benchmark", value: "NYSE Arca Gold Miners" },
      { icon: <Clock size={16} />, label: "Inception", value: "April 2016" },
      { icon: <User size={16} />, label: "Fund Manager", value: "Anita Sharma, CFA" },
      { icon: <Tag size={16} />, label: "Category", value: "Thematic — Metals" },
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
      { title: "Low-Cost Producers", description: "We prioritize miners with AISC in the bottom quartile." },
      { title: "Reserve Quality", description: "We evaluate ore grade and mine life for long-term sustainability." },
      { title: "Balance Sheet Strength", description: "Low leverage and strong cash flow are non-negotiable." },
      { title: "Global Diversification", description: "Investing across geographies to reduce single-country risk." },
    ],
    performance: [
      { period: "1 Month", fundReturn: "+1.7%", benchmark: "+1.3%" },
      { period: "3 Months", fundReturn: "+4.1%", benchmark: "+3.5%" },
      { period: "6 Months", fundReturn: "+7.2%", benchmark: "+6.1%" },
      { period: "1 Year", fundReturn: "+12.3%", benchmark: "+9.8%" },
      { period: "3 Years", fundReturn: "+38.6%", benchmark: "+31.2%" },
      { period: "5 Years", fundReturn: "+84.5%", benchmark: "+68.7%" },
      { period: "Since Inception", fundReturn: "+196.4%", benchmark: "+152.8%" },
    ]
  },
  "absolute-return": {
    title: "Absolute Return Fund",
    description: "Market-neutral strategies aiming for consistent positive returns.",
    color: "text-brand-maroon",
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
      { icon: <Tag size={16} />, label: "Category", value: "Hybrid — Arbitrage" },
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
      { title: "Market Neutrality", description: "Strategies designed to perform regardless of market direction." },
      { title: "Risk Arbitrage", description: "Capturing price inefficiencies between related financial instruments." },
      { title: "Capital Preservation", description: "Focusing on low-volatility returns to protect investor principal." },
      { title: "Low Correlation", description: "Providing returns that don't move in sync with traditional equities." },
    ],
    performance: [
      { period: "1 Month", fundReturn: "+1.7%", benchmark: "+1.3%" },
      { period: "3 Months", fundReturn: "+4.1%", benchmark: "+3.5%" },
      { period: "6 Months", fundReturn: "+7.2%", benchmark: "+6.1%" },
      { period: "1 Year", fundReturn: "+12.3%", benchmark: "+9.8%" },
      { period: "3 Years", fundReturn: "+38.6%", benchmark: "+31.2%" },
      { period: "5 Years", fundReturn: "+84.5%", benchmark: "+68.7%" },
      { period: "Since Inception", fundReturn: "+196.4%", benchmark: "+152.8%" },
    ]
  }
};