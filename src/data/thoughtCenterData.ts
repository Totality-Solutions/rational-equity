// src/data/thoughtCenterData.ts

export interface Article {
  id: number;
  title: string;
  category: "Investment Insights" | "Letters to investors" | "What we Read" | "In the News";
  author: string;
  date: string;
  thumbnail: string;
  slug: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "The Case for Quality in Volatile Markets",
    category: "Investment Insights",
    author: "Rational Equity",
    date: "February 15, 2026",
    thumbnail: "https://placehold.co/627x269",
    slug: "case-for-quality-volatile-markets"
  },
  {
    id: 2,
    title: "Annual Shareholder Letter: Fiscal Year 2025",
    category: "Letters to investors",
    author: "Rational Equity",
    date: "January 10, 2026",
    thumbnail: "https://placehold.co/627x269",
    slug: "annual-shareholder-letter-2025"
  },
  {
    id: 3,
    title: "Structural Growth in the Indian Tech Sector",
    category: "Investment Insights",
    author: "Rational Equity",
    date: "March 05, 2026",
    thumbnail: "https://placehold.co/627x269",
    slug: "structural-growth-indian-tech"
  },
  {
    id: 4,
    title: "The Psychology of Long-Term Investing",
    category: "What we Read",
    author: "Rational Equity",
    date: "December 20, 2025",
    thumbnail: "https://placehold.co/627x269",
    slug: "psychology-long-term-investing"
  },
  {
    id: 5,
    title: "Rational Equity Featured in Financial Times",
    category: "In the News",
    author: "Rational Equity",
    date: "February 28, 2026",
    thumbnail: "https://placehold.co/627x269",
    slug: "featured-in-financial-times"
  },
  {
    id: 6,
    title: "Risk Arbitrage: Navigating Uncertain Waters",
    category: "Investment Insights",
    author: "Rational Equity",
    date: "April 02, 2026",
    thumbnail: "https://placehold.co/627x269",
    slug: "risk-arbitrage-uncertain-waters"
  },
  {
    id: 7,
    title: "The Case for Quality in Volatile Markets",
    category: "Investment Insights",
    author: "Rational Equity",
    date: "February 15, 2026",
    thumbnail: "https://placehold.co/627x269",
    slug: "case-for-quality-volatile-markets"
  },
];