// src/constants/funds.tsx
import { 
  Wallet, Calendar, BarChart3, ShieldCheck, Percent, 
  AlertCircle, Target, Clock, User, Tag, 
  UserIcon
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

export interface ChartDataPoint {
  period: string;
  label: string;
  fund: number;
  bench: number;
}

export interface KPIItem {
  icon: string;
  label: string;
  value: string;
  valueColor?: string;
  sub: string;
  isPeriodKpi?: boolean;
}

export interface BacktestKPIItem {
  value: string;
  label: string;
  description: string;
  color: string;
}

export interface FundDetails {
  title: string;
  description: string;
  color: string;
  ctaTitle1:string;

  overviewTitle?: string;
  overviewTitleItalics?: string;
  overviewDesc: string[];

  stats: StatItem[];
  documents: PdfItem[];
  philosophyPoints: PhilosophyPoint[];
  philosophyTitle?: string;
  philosophyHighlight?: string;
  philosophyHighlightColor?: string;
  philosophySubheading?: string;

  finalCTA?: ReadyToStartProps;

  performance: {
    variant: "chart" | "backtest";
    heading: string;
    headingHighlight: string;
    subheading?: string;
    weekly?: GraphPoint[];
    monthly?: GraphPoint[];
    yearly?: GraphPoint[];
    chartData?: Record<string, ChartDataPoint[]>;
    kpis: KPIItem[];
    backtestKpis?: BacktestKPIItem[];
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
    ctaTitle1:"Ready to Start Investing?",
    overviewTitle:"Conviction-driven investing",
    overviewTitleItalics:"in India's growth story.",
    overviewDesc: ["Our India Long-Only Fund is designed to capture the highest-return opportunities within this theme — primarily in small and mid-cap companies that are under-researched and mispriced by the market. We are sector-agnostic. We go where the conviction is strongest and hold positions through the inevitable volatility that comes with high-conviction investing."],
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
      { title: "Indian Long-Only Fund", size: "1.1 MB",description: "Fund strategy & thesis", fileUrl: "/pdf/india-long-only-fund.pdf" }
    ],
    philosophyTitle:"Why invest in the India Long-Only Fund?",
    philosophyHighlight:"India Long-Only Fund?",
    philosophySubheading: "Three compelling reasons why the India Long-Only Fund belongs in your portfolio.",
    philosophyPoints: [
      { title: "India's Decade of Growth", description: "India is at the beginning of a structural multi-decade growth story — driven by a young population, manufacturing renaissance, financial inclusion and digital adoption. Small and mid-cap companies are the biggest beneficiaries of this transformation, and they remain significantly under-owned by global capital.", icon: "/images/icons/philosophy-capital.png" },
      { title: "Proven Outperformance", description: "Since launching at the market bottom in March 2023, the fund has delivered 30% CAGR — significantly beating the NIFTY 500 TRI benchmark and earning the #1 AIF ranking in India for FY24 with an 80% post-tax return. The track record reflects the quality of our research and the discipline of our process.", icon: "/images/icons/philosophy-governance.png" },
      { title: "Aligned Incentives", description: "The fund manager deployed 100% of the fund capital on Day 1 alongside his own net worth. We make money only when you make money, creating perfect alignment between manager and investor.", icon: "/images/icons/philosophy-growth.png" },
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
        text: "Schedule a call",
        href: "/contact",
      },
    },
    performance: {
      variant: "chart",
      heading: "Fund Performance",
      headingHighlight: "Performance",
      subheading: "Historical returns versus benchmark.",
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
      ],
      kpis: [
        {
          icon: "/images/icons/fund-nav.png",
          label: "3-Year CAGR (Since Inception)",
          value: "+30%",
          sub: "Benchmark: +17%",
        },
        {
          icon: "/images/icons/fund-return.png",
          label: "Return ({period})",
          value: "{fund}",
          valueColor: "text-green-700",
          sub: "Benchmark: {bench}",
          isPeriodKpi: true,
        },
      ],
      chartData: {
        '1M': [{ period: '1M', label: '1 Month', fund: 4.20, bench: 3.10 }],
        '3M': [
          { period: '1M', label: '1 Month',  fund: 4.20, bench: 3.10 },
          { period: '3M', label: '3 Months', fund: 8.75, bench: 6.40 },
        ],
        '6M': [
          { period: '1M', label: '1 Month',  fund: 4.20,  bench: 3.10 },
          { period: '3M', label: '3 Months', fund: 8.75,  bench: 6.40 },
          { period: '6M', label: '6 Months', fund: 13.42, bench: 9.85 },
        ],
        '1Y': [
          { period: '1M', label: '1 Month',  fund: 4.20,  bench: 3.10  },
          { period: '3M', label: '3 Months', fund: 8.75,  bench: 6.40  },
          { period: '6M', label: '6 Months', fund: 13.42, bench: 9.85  },
          { period: '1Y', label: '1 Year',   fund: 21.68, bench: 15.32 },
        ],
        '2Y': [
          { period: '1M', label: '1 Month',        fund: 4.20,  bench: 3.10  },
          { period: '3M', label: '3 Months',       fund: 8.75,  bench: 6.40  },
          { period: '6M', label: '6 Months',       fund: 13.42, bench: 9.85  },
          { period: '1Y', label: '1 Year',         fund: 21.68, bench: 15.32 },
          { period: '2Y', label: '2 Yrs (CAGR)',   fund: 22.91, bench: 16.47 },
        ],
        '3Y': [
          { period: '1M', label: '1 Month',       fund: 4.20,  bench: 3.10  },
          { period: '3M', label: '3 Months',      fund: 8.75,  bench: 6.40  },
          { period: '6M', label: '6 Months',      fund: 13.42, bench: 9.85  },
          { period: '1Y', label: '1 Year',        fund: 21.68, bench: 15.32 },
          { period: '2Y', label: '2 Yrs (CAGR)',  fund: 22.91, bench: 16.47 },
          { period: '3Y', label: '3 Yrs (CAGR)',  fund: 24.35, bench: 17.98 },
        ],
        'SI': [
          { period: '1M', label: '1 Month',             fund: 4.20,  bench: 3.10  },
          { period: '3M', label: '3 Months',            fund: 8.75,  bench: 6.40  },
          { period: '6M', label: '6 Months',            fund: 13.42, bench: 9.85  },
          { period: '1Y', label: '1 Year',              fund: 21.68, bench: 15.32 },
          { period: '2Y', label: '2 Yrs (CAGR)',        fund: 22.91, bench: 16.47 },
          { period: '3Y', label: '3 Yrs (CAGR)',        fund: 24.35, bench: 17.98 },
          { period: 'SI', label: 'Since Inception',     fund: 30, bench: 13.14 },
        ],
      }
    }
  },
  "gold-silver-miners": {
    title: "Gold & Silver Miners' Fund",
    description: "A focused vehicle for strategic exposure to globally listed gold and silver mining companies — operated from GIFT City. No ETFs, no other commodities. Pure miners, pure conviction. Open to Indian residents and global investors.",
    color: "text-brand-maroon",
    ctaTitle1:"Ready to invest in the gold cycle?",
    overviewTitle:"Strategic exposure to the global",
    overviewTitleItalics:"precious metals opportunity.",
    overviewDesc: ["In late 2023, we identified a structural shift in the global monetary order — central banks, led by China, were quietly but decisively selling their holdings of the US Treasury and replacing that with gold reserves. Fundamentally, the US economy was struggling and amidst the global political uncertainty, the faith in the US$ was declining. We realised gold would be a great bet in such time. Simultaneously, gold and silver mining equities were trading at multi-decade lows relative to the underlying commodity price, creating an extraordinary asymmetric opportunity. Which led us to use miners as a proxy for gold and silver to ensure our returns are exponential vs the commodities itself. We invested personally first. After validating the thesis with our own capital, we launched the GIFT City Fund in June 2025 to give investors structured access to this opportunity. The fund invests exclusively in listed mining companies globally — no ETFs, no physical gold, no other commodities."],
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
      { title: "Gold & Silver Miners' Fund", size: "1.1 MB",description: "Fund strategy & thesis", fileUrl: "/pdf/gold-silver-miners-fund.pdf" }
    ],
    philosophyTitle:"Why invest in the Miners' Fund?",
    philosophyHighlight:"Miners' Fund?",
    philosophySubheading: "Four structural forces that make gold and silver miners one of the most compelling investment opportunities of the decade — and why Rational is the only India-domiciled fund enabling Indian residents to access this opportunity.",
    philosophyPoints: [
      { title: "14-Year Breakout on Gold Prices", description: "Global gold prices broke out of a 14-year resistance in 2023 and have since been on a secular rise. Central banks — led by China — are unwinding US Treasury holdings and moving to gold. PBOC's US$ Treasury holdings are at their lowest since 2001. We have entered a multi-year bull market for Gold and Silver. Our view: Gold at $7,000 by 2030.", icon: "/images/icons/philosophy-capital.png" },
      { title: "Miners — The More Profitable Proxy", description: "Gold miners significantly underperformed gold over the past decade — gold was flat for 12 years but miners were down ~50%. This is now reversing. As gold prices rise, miner revenues grow faster than costs, creating operating leverage. Our portfolio targets junior miners with ~23% FCF yield, 121% 5-year production growth — vs GDX's 8% FCF yield and 17% production growth.", icon: "/images/icons/philosophy-governance.png" },
      { title: "Silver: Structural Supply Deficit", description: "Silver is expected to remain in deficit for the 6th consecutive year, driven by surging industrial demand (solar panels, EVs, electronics) and persistent lack of capex in the past decade. Despite prices doubling, supply has only increased 1% — a unique supply-demand dynamic that points to sustained price appreciation for silver and the companies mining it.", icon: "/images/icons/philosophy-growth.png" },
      { title: "Only India-Domiciled Fund for Indian Residents", description: "Rational Asset Management Fund is India's only GIFT City fund enabling Indian residents to invest in gold and silver mining companies listed globally. Through the LRS scheme, all resident Indians can invest up to US$250,000 annually. No need to open a USD account — just a simple form through your bank. Indian companies can also invest via the ODI/OPI route.", icon: "/images/icons/philosophy-conviction.png" },
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
        text: "Schedule a call",
        href: "/contact",
      },
    },
    performance: {
      variant: "chart",
      heading: "Fund Performance",
      headingHighlight: "Performance",
      subheading: "Historical returns versus benchmark.",
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
      ],
      kpis: [
        {
          icon: "/images/icons/fund-nav.png",
          label: "1-Year Return",
          value: "~75%",
          sub: "Gold & Silver Miners' Fund",
        },
        {
          icon: "/images/icons/fund-return.png",
          label: "Return Since Entry (Dec 2023)",
          value: "~100%",
          valueColor: "text-green-700",
          sub: "Personal & Fund combined | Benchmark: +13.14%",
        },
      ],
      chartData: {
        '1M': [{ period: '1M', label: '1 Month', fund: 6.40, bench: 4.20 }],
        '3M': [
          { period: '1M', label: '1 Month',  fund: 6.40, bench: 4.20 },
          { period: '3M', label: '3 Months', fund: 18.50, bench: 11.30 },
        ],
        '6M': [
          { period: '1M', label: '1 Month',  fund: 6.40,  bench: 4.20 },
          { period: '3M', label: '3 Months', fund: 18.50, bench: 11.30 },
          { period: '6M', label: '6 Months', fund: 32.10, bench: 18.60 },
        ],
        '1Y': [
          { period: '1M', label: '1 Month',  fund: 6.40,  bench: 4.20 },
          { period: '3M', label: '3 Months', fund: 18.50, bench: 11.30 },
          { period: '6M', label: '6 Months', fund: 32.10, bench: 18.60 },
          { period: '1Y', label: '1 Year',   fund: 75.00, bench: 38.00 },
        ],
        'SI': [
          { period: '1M', label: '1 Month',         fund: 6.40,  bench: 4.20 },
          { period: '3M', label: '3 Months',        fund: 18.50, bench: 11.30 },
          { period: '6M', label: '6 Months',        fund: 32.10, bench: 18.60 },
          { period: '1Y', label: '1 Year',          fund: 75.00, bench: 38.00 },
          { period: 'SI', label: 'Since Dec 2023',  fund: 100.00, bench: 13.14 },
        ],
      }
    }
  },
  "absolute-return": {
    title: "Absolute Return Fund",
    description: "A regime-aware long-short derivatives strategy on Indian listed equities — designed to systematically capture large directional moves at sentimental extremes while sitting out sideways choppiness. Open to Indian investors via SEBI AIF and to global investors via GIFT City.",
    color: "text-brand-maroon",
    ctaTitle1:"Ready to invest in the Absolute Return Fund?",
    overviewTitle:"Enter at peak fear.",
    overviewTitleItalics:"Exit at peak greed.",
    overviewDesc: [
      "In this long-short fund we wait for sentimental extremes to build up, then act decisively with concentrated directional positions. At peak fear we go long. At peak greed we go short or move to cash. In between, we sit out sideways choppiness entirely.",
      "The strategy trades in the Indian listed futures universe by creating a composite model based on multiple factors which identifies the regime before each trade. The result is a portfolio with low beta (0.33 full-period), strong convexity, and returns that are structurally uncorrelated to traditional long-only equity."
    ],
    stats: [
      { icon: <Wallet size={16} />, label: "Strategy", value: "Long-Short" },
      { icon: <Tag size={16} />, label: "Fund Type", value: "2 Cat III AIFs — India & GIFT City" },
      { icon: <Target size={16} />, label: "Universe", value: "Indian Listed Futures" },
      { icon: <ShieldCheck size={16} />, label: "Model", value: "Quant + Discretion" },
      { icon: <Calendar size={16} />, label: "Launch", value: "July 2026" },
      { icon: <UserIcon size={16} />, label: "Eligible", value: "Indians & Global" },
      // { icon: <Target size={16} />, label: "Benchmark", value: "Nifty 50 Arbitrage" },
      // { icon: <Clock size={16} />, label: "Inception", value: "October 2018" },
      // { icon: <User size={16} />, label: "Fund Manager", value: "Sanjay Mehta" },
      // { icon: <Tag size={16} />, label: "Category", value: "Hybrid — Arbitrage" },
    ],
    documents: [
      { title: "Absolute Returns Fund", size: "1.1 MB",description: "Fund strategy & thesis", fileUrl: "/pdf/absolute-return-fund.pdf" }
    ],
    philosophyTitle:"Why invest in the Absolute Returns Fund",
    philosophyPoints: [
      { title: "Returns in Both Directions", description: "A long-only portfolio only makes money when markets go up. This strategy is built to capture directional moves in both directions — profiting from the full bull run on the long side and from market corrections on the short side. The 10-year backtest includes years where markets fell sharply, and the model still delivered positive returns.", icon: "/images/icons/philosophy-capital.png" },
      { title: "Structural Diversification", description: "With a full-period beta of 0.33 and a near-zero to negative beta during corrections, the Absolute Return Fund provides genuine diversification that a second long-only fund cannot. It earns returns when long-only strategies struggle — making it a natural complement to the India Long-Only Fund in the same portfolio.", icon: "/images/icons/philosophy-governance.png" },
      { title: "Asymmetric Payoff Profile", description: "The strategy does not trades frequently targeting deep dislocations with asymmetric payoffs. The worst year in the 10-year backtest was -5.3% and the best year was +97.4%. A Sharpe ratio of 2.6 reflects exceptional risk-adjusted performance relative to the return generated.", icon: "/images/icons/philosophy-growth.png" },
    ],
    philosophySubheading: "Three reasons the Absolute Return Fund belongs alongside long-only equity in a sophisticated investor's portfolio.",
    finalCTA: {
      title: "Invest in absolute returns.",
      description:
        "Request the investor deck, model details and onboarding information from our team.",
      primaryCTA: {
        text: "Get in touch",
        href: "/contact",
      },
      secondaryCTA: {
        text: "Schedule a call",
        href: "/contact",
      },
    },
    performance: {
      variant: "backtest",
      heading: "10-year backtested model results.",
      headingHighlight: "model results.",
      subheading: "With minimal leverage and inclusive of transaction costs NAV grows from 100 to 3,505 over 10 years.",
      weekly: [
        { name: "Week 1", fund: 1.2, bench: 0.8, status: 0.5 },
        { name: "Week 2", fund: -0.5, bench: 0.2, status: -0.2 },
        { name: "Week 3", fund: 2.1, bench: 1.5, status: 0.8 },
        // { name: "Week 4", fund: 0.8, bench: 1.1 },
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
      ],
      kpis: [
        {
          icon: "/images/icons/fund-nav.png",
          label: "3-Year CAGR (Since Inception)",
          value: "+30%",
          sub: "Benchmark: +17%",
        },
        {
          icon: "/images/icons/fund-return.png",
          label: "Return ({period})",
          value: "{fund}",
          valueColor: "text-green-700",
          sub: "Benchmark: {bench}",
          isPeriodKpi: true,
        },
      ],
      backtestKpis: [
        {
          value: "41.7%",
          label: "Net CAGR",
          description: "Compounded Annual Growth Rate over 10 years",
          color: 'text-brand-maroon',
        },
        {
          value: "2.6",
          label: "Sharpe Ratio",
          description: "Risk-adjusted return — well above industry benchmarks",
          color: "text-secondary-ylw",
        },
        {
          value: "16.4%",
          label: "Annual Volatility",
          description: "Lower volatility than most long-only equity funds",
          color: "text-secondary-grn",
        },
        {
          value: "15%",
          label: "Max Drawdown",
          description: "Full-period beta to NIFTY 500",
          color: "text-secondary-blu",
        },
      ],
      // chartData: {
      //   '1M': [{ period: '1M', label: '1 Month', fund: 4.20, bench: 3.10 }],
      //   '3M': [
      //     { period: '1M', label: '1 Month',  fund: 4.20, bench: 3.10 },
      //     { period: '3M', label: '3 Months', fund: 8.75, bench: 6.40 },
      //   ],
      //   '6M': [
      //     { period: '1M', label: '1 Month',  fund: 4.20,  bench: 3.10 },
      //     { period: '3M', label: '3 Months', fund: 8.75,  bench: 6.40 },
      //     { period: '6M', label: '6 Months', fund: 13.42, bench: 9.85 },
      //   ],
      //   '1Y': [
      //     { period: '1M', label: '1 Month',  fund: 4.20,  bench: 3.10  },
      //     { period: '3M', label: '3 Months', fund: 8.75,  bench: 6.40  },
      //     { period: '6M', label: '6 Months', fund: 13.42, bench: 9.85  },
      //     { period: '1Y', label: '1 Year',   fund: 21.68, bench: 15.32 },
      //   ],
      //   '2Y': [
      //     { period: '1M', label: '1 Month',        fund: 4.20,  bench: 3.10  },
      //     { period: '3M', label: '3 Months',       fund: 8.75,  bench: 6.40  },
      //     { period: '6M', label: '6 Months',       fund: 13.42, bench: 9.85  },
      //     { period: '1Y', label: '1 Year',         fund: 21.68, bench: 15.32 },
      //     { period: '2Y', label: '2 Yrs (CAGR)',   fund: 22.91, bench: 16.47 },
      //   ],
      //   '3Y': [
      //     { period: '1M', label: '1 Month',       fund: 4.20,  bench: 3.10  },
      //     { period: '3M', label: '3 Months',      fund: 8.75,  bench: 6.40  },
      //     { period: '6M', label: '6 Months',      fund: 13.42, bench: 9.85  },
      //     { period: '1Y', label: '1 Year',        fund: 21.68, bench: 15.32 },
      //     { period: '2Y', label: '2 Yrs (CAGR)',  fund: 22.91, bench: 16.47 },
      //     { period: '3Y', label: '3 Yrs (CAGR)',  fund: 24.35, bench: 17.98 },
      //   ],
      //   '5Y': [
      //     { period: '1M', label: '1 Month',       fund: 4.20,  bench: 3.10  },
      //     { period: '3M', label: '3 Months',      fund: 8.75,  bench: 6.40  },
      //     { period: '6M', label: '6 Months',      fund: 13.42, bench: 9.85  },
      //     { period: '1Y', label: '1 Year',        fund: 21.68, bench: 15.32 },
      //     { period: '2Y', label: '2 Yrs (CAGR)',  fund: 22.91, bench: 16.47 },
      //     { period: '3Y', label: '3 Yrs (CAGR)',  fund: 24.35, bench: 17.98 },
      //     { period: '5Y', label: '5 Yrs (CAGR)',  fund: 23.17, bench: 16.12 },
      //   ],
      //   'SI': [
      //     { period: '1M', label: '1 Month',             fund: 4.20,  bench: 3.10  },
      //     { period: '3M', label: '3 Months',            fund: 8.75,  bench: 6.40  },
      //     { period: '6M', label: '6 Months',            fund: 13.42, bench: 9.85  },
      //     { period: '1Y', label: '1 Year',              fund: 21.68, bench: 15.32 },
      //     { period: '2Y', label: '2 Yrs (CAGR)',        fund: 22.91, bench: 16.47 },
      //     { period: '3Y', label: '3 Yrs (CAGR)',        fund: 24.35, bench: 17.98 },
      //     { period: '5Y', label: '5 Yrs (CAGR)',        fund: 23.17, bench: 16.12 },
      //     { period: 'SI', label: 'Since Inception',     fund: 19.28, bench: 13.14 },
      //   ],
      // }
    }
  }
};