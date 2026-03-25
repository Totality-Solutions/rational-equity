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

export interface FundDetails {
  title: string;
  description: string;
  color: string;
  overviewDesc: string;
  stats: StatItem[];
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
    ]
  }
};