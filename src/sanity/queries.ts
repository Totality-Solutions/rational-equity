import type { PortableTextBlock } from '@portabletext/react';
import { sanityClient } from './client';

// Sanity being briefly unreachable shouldn't 500 the whole site (the root
// layout depends on these queries for every page) — fall back gracefully and
// let each component's own default content render instead.
async function safeFetch<T>(query: string, params: Record<string, unknown>, fallback: T): Promise<T> {
  try {
    return await sanityClient.fetch(query, params, { cache: 'no-store' });
  } catch (error) {
    console.error('Sanity fetch failed, using fallback content:', error);
    return fallback;
  }
}

export interface SanityArticle {
  _id: string;
  title: string;
  slug: string;
  series: { title: string; slug: string } | null;
  subtitle: string | null;
  readTime: string | null;
  mainImage: { asset: { _ref: string; url: string }; alt: string | null; caption: string | null } | null;
  author: { name: string } | null;
  publishedAt: string;
  tags: string[] | null;
  featured: boolean | null;
  externalUrl: string | null;
  showDisclaimer: boolean | null;
  content: PortableTextBlock[] | null;
}

const articleProjection = /* groq */ `{
  _id,
  title,
  "slug": slug.current,
  "series": series->{ title, "slug": slug.current },
  subtitle,
  readTime,
  mainImage{ asset->{_ref, url}, alt, caption },
  "author": author->{ name },
  publishedAt,
  tags,
  featured,
  externalUrl,
  showDisclaimer,
  content
}`;

export const allArticlesQuery = /* groq */ `*[_type == "article"] | order(publishedAt desc) ${articleProjection}`;

export const featuredArticlesQuery = /* groq */ `*[_type == "article"] | order(featured desc, publishedAt desc) [0...$limit] ${articleProjection}`;

export const legalDisclaimerQuery = /* groq */ `*[_type == "thoughtCenterConfig"][0].legalDisclaimer`;

export async function getAllArticles(): Promise<SanityArticle[]> {
  return safeFetch(allArticlesQuery, {}, []);
}

export async function getFeaturedArticles(limit = 3): Promise<SanityArticle[]> {
  return safeFetch(featuredArticlesQuery, { limit }, []);
}

export async function getLegalDisclaimer(): Promise<PortableTextBlock[] | null> {
  return safeFetch(legalDisclaimerQuery, {}, null);
}

export interface SanityImage {
  asset: { _ref: string; url: string };
  alt: string | null;
}

export interface SanityContactPage {
  header: { heading: string; highlightText: string; subtext: string } | null;
  contactCards: { type: 'visit' | 'call' | 'email'; label: string; value: string; subValue: string }[] | null;
  formSection: {
    heading: string;
    highlightText: string;
    subtext: string;
    fundOptions: string[] | null;
    submitLabel: string;
  } | null;
  office: {
    title: string;
    image: SanityImage | null;
    address: string;
    phone1: string;
    phone2: string;
    mapLink: string;
    mapLinkText: string;
  } | null;
  map: { iframe: string } | null;
  seo: { metaTitle: string | null; metaDescription: string | null; ogImage: SanityImage | null } | null;
}

// Contact Page is authored as 6 separate single-purpose documents in Studio
// (Header / Info Cards / Message Form / Office / Map / SEO) instead of one big
// document — this combines them back into a single shape for the frontend.
const contactPageQuery = /* groq */ `{
  "header": *[_type == "contactHeaderSection"][0]{ heading, highlightText, subtext },
  "contactCards": *[_type == "contactCardsSection"][0].cards,
  "formSection": *[_type == "contactMessageFormSection"][0]{ heading, highlightText, subtext, fundOptions, submitLabel },
  "office": *[_type == "contactOfficeSection"][0]{ ..., image{ asset->{_ref, url}, alt } },
  "map": *[_type == "contactMapSection"][0]{ iframe },
  "seo": *[_type == "contactSeoSection"][0]{ metaTitle, metaDescription, ogImage{ asset->{_ref, url}, alt } }
}`;

export async function getContactPage(): Promise<SanityContactPage | null> {
  return safeFetch(contactPageQuery, {}, null);
}

// ─── Global (shown on every page via the root layout) ──────────────────────

export interface SanityNavLink {
  label: string;
  href: string | null;
  submenu: { label: string; href: string }[] | null;
}

export interface SanityHeader {
  navLinks: SanityNavLink[] | null;
  whatsappLink: string | null;
  ctaText: string | null;
  ctaLink: string | null;
}

export interface SanityFooter {
  description: string | null;
  quickLinks: SanityNavLink[] | null;
  fundLinks: SanityNavLink[] | null;
  address: string | null;
  phone1: string | null;
  phone2: string | null;
  email1: string | null;
  email2: string | null;
  socialLinks: { platform: string; url: string }[] | null;
  disclaimerText: string | null;
  companyName: string | null;
}

export interface SanityFaqItem {
  question: string;
  answer: string[] | null;
}

export interface SanityFaq {
  heading: string | null;
  highlightText: string | null;
  subtext: string | null;
  faqs: SanityFaqItem[] | null;
}

const siteHeaderQuery = /* groq */ `*[_type == "siteHeader"][0]{ navLinks, whatsappLink, ctaText, ctaLink }`;
const siteFooterQuery = /* groq */ `*[_type == "siteFooter"][0]`;
const siteFaqQuery = /* groq */ `*[_type == "siteFaq"][0]{ heading, highlightText, subtext, faqs }`;

export async function getSiteHeader(): Promise<SanityHeader | null> {
  return safeFetch(siteHeaderQuery, {}, null);
}

export async function getSiteFooter(): Promise<SanityFooter | null> {
  return safeFetch(siteFooterQuery, {}, null);
}

export async function getSiteFaq(): Promise<SanityFaq | null> {
  return safeFetch(siteFaqQuery, {}, null);
}

// ─── Home Page ───────────────────────────────────────────────────────────────

export interface SanityHeroStatCard {
  prefix: string | null;
  value: string;
  suffix: string | null;
  label: string;
  subLabel: string | null;
  icon: SanityImage | null;
  bgImage: SanityImage | null;
}

export interface SanityTickerLogo {
  name: string;
  icon: string;
}

export interface SanityStatsCard {
  value: string;
  label: string;
}

export interface SanityHomeFundCard {
  title: string;
  description: string;
  bullets: string[] | null;
  returns: string;
  returnsLabel: string;
  href: string;
  icon: SanityImage | null;
  pdfFile: { asset: { url: string } } | null;
}

export interface SanityTeamMember {
  name: string;
  role: string;
  image: SanityImage | null;
  philosophy: string | null;
  linkedin: string | null;
}

export interface SanityMilestone {
  num: string;
  year: string;
  title: string;
  description: string;
  image: SanityImage | null;
}

export interface SanityPrinciple {
  title: string;
  description: string;
  quote: string;
}

export interface SanityHomeTestimonial {
  text: string;
  name: string;
  location: string;
  image: SanityImage | null;
}

export interface SanityBannerSegment {
  text: string;
  highlighted: boolean;
}

export interface SanityHomePage {
  topBanner: { segments: SanityBannerSegment[] | null } | null;
  hero: {
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    statsCards: SanityHeroStatCard[] | null;
    tickerLogos: SanityTickerLogo[] | null;
  } | null;
  intro: {
    heading: string;
    headingItalic: string;
    description: string;
    metrics: SanityStatsCard[] | null;
    chartTitle1: string;
    chartTitle2: string;
    chartSinceText: string;
  } | null;
  solutions: {
    heading: string;
    highlightText: string;
    subheading: string;
    funds: SanityHomeFundCard[] | null;
  } | null;
  cta: { title: string; description: string; primaryBtnText: string; primaryBtnLink: string } | null;
  team: { heading: string; subheading: string; members: SanityTeamMember[] | null } | null;
  journey: { heading: string; highlightText: string; subheading: string; milestones: SanityMilestone[] | null } | null;
  principles: { heading: string; highlightText: string; subheading: string; principles: SanityPrinciple[] | null } | null;
  testimonials: { heading: string; highlightText: string; subheading: string; testimonials: SanityHomeTestimonial[] | null } | null;
}

const imageProjection = /* groq */ `{ asset->{_ref, url}, alt }`;

const homePageQuery = /* groq */ `{
  "topBanner": *[_type == "homeTopBanner"][0]{ segments },
  "hero": *[_type == "homeHero"][0]{
    titleLine1, titleLine2, description,
    primaryCtaText, primaryCtaLink, secondaryCtaText, secondaryCtaLink,
    statsCards[]{ prefix, value, suffix, label, subLabel, icon${imageProjection}, bgImage${imageProjection} },
    tickerLogos
  },
  "intro": *[_type == "homeIntro"][0]{ heading, headingItalic, description, metrics, chartTitle1, chartTitle2, chartSinceText },
  "solutions": *[_type == "homeSolutions"][0]{
    heading, highlightText, subheading,
    funds[]{ title, description, bullets, returns, returnsLabel, href, icon${imageProjection}, pdfFile{asset->{url}} }
  },
  "cta": *[_type == "homeCta"][0]{ title, description, primaryBtnText, primaryBtnLink },
  "team": *[_type == "homeTeam"][0]{
    heading, subheading,
    members[]{ name, role, image${imageProjection}, philosophy, linkedin }
  },
  "journey": *[_type == "homeJourney"][0]{
    heading, highlightText, subheading,
    milestones[]{ num, year, title, description, image${imageProjection} }
  },
  "principles": *[_type == "homePrinciples"][0]{ heading, highlightText, subheading, principles },
  "testimonials": *[_type == "homeTestimonials"][0]{
    heading, highlightText, subheading,
    testimonials[]{ text, name, location, image${imageProjection} }
  }
}`;

const emptyHomePage: SanityHomePage = {
  topBanner: null,
  hero: null,
  intro: null,
  solutions: null,
  cta: null,
  team: null,
  journey: null,
  principles: null,
  testimonials: null,
};

export async function getHomePage(): Promise<SanityHomePage> {
  return safeFetch(homePageQuery, {}, emptyHomePage);
}

// Journey/Milestones is reused on both the Home and About pages.
const journeyQuery = /* groq */ `*[_type == "homeJourney"][0]{
  heading, highlightText, subheading,
  milestones[]{ num, year, title, description, image${imageProjection} }
}`;

export async function getJourney(): Promise<SanityHomePage['journey']> {
  return safeFetch(journeyQuery, {}, null);
}

// ─── About Page ──────────────────────────────────────────────────────────────

export interface SanityAboutFundStat {
  percentage: string;
  subtitle: string;
  name: string;
  color: string;
}

export interface SanityAboutPrinciple {
  title: string;
  description: string;
  quote: string;
}

export interface SanityAboutTeamMember {
  name: string;
  title: string;
  linkedIn: string;
  description: string;
  education: string;
  image: SanityImage | null;
}

export interface SanityAboutPage {
  hero: { title: string; highlightText: string; description: string; subText: string } | null;
  returns: { heading: string; highlightText: string; funds: SanityAboutFundStat[] | null; ctaText: string; ctaLink: string } | null;
  story: { heading: string; headingHighlight: string; subheading: string; content: PortableTextBlock[] | null } | null;
  principlesFour: { heading: string; highlightText: string; subheading: string; principles: SanityAboutPrinciple[] | null } | null;
  principlesTwo: { heading: string; highlightText: string; principles: SanityAboutPrinciple[] | null } | null;
  team: { heading: string; highlightText: string; members: SanityAboutTeamMember[] | null } | null;
  ctaTop: { title: string; description: string; primaryBtnText: string; primaryBtnLink: string } | null;
  ctaBottom: {
    title: string;
    description: string;
    primaryBtnText: string;
    primaryBtnLink: string;
    secondaryBtnText: string;
    secondaryBtnLink: string;
  } | null;
}

const aboutPageQuery = /* groq */ `{
  "hero": *[_type == "aboutHeroSection"][0]{ title, highlightText, description, subText },
  "returns": *[_type == "aboutReturns"][0]{ heading, highlightText, funds, ctaText, ctaLink },
  "story": *[_type == "aboutStory"][0]{ heading, headingHighlight, subheading, content },
  "principlesFour": *[_type == "aboutPrinciplesFour"][0]{ heading, highlightText, subheading, principles },
  "principlesTwo": *[_type == "aboutPrinciplesTwo"][0]{ heading, highlightText, principles },
  "team": *[_type == "aboutTeam"][0]{
    heading, highlightText,
    members[]{ name, title, description, education, image${imageProjection} }
  },
  "ctaTop": *[_type == "aboutCtaTop"][0]{ title, description, primaryBtnText, primaryBtnLink },
  "ctaBottom": *[_type == "aboutCtaBottom"][0]{ title, description, primaryBtnText, primaryBtnLink, secondaryBtnText, secondaryBtnLink }
}`;

const emptyAboutPage: SanityAboutPage = {
  hero: null,
  returns: null,
  story: null,
  principlesFour: null,
  principlesTwo: null,
  team: null,
  ctaTop: null,
  ctaBottom: null,
};

export async function getAboutPage(): Promise<SanityAboutPage> {
  return safeFetch(aboutPageQuery, {}, emptyAboutPage);
}

// ─── Investment Approach Page ───────────────────────────────────────────────

export interface SanityPrincipleItem {
  title: string;
  description: string;
}

export interface SanityLensItem {
  title: string;
  description: string;
  quote: string;
}

export interface SanityProcessStepItem {
  category: string;
  title: string;
  description: string;
}

export interface SanityAllocationFund {
  label: string;
  name: string;
  description: string;
  statValue: string;
  statLabel: string;
}

export interface SanityApproachPage {
  hero: { title: string; titleItalic: string; subheading: string } | null;
  principles: {
    headingLine1: string;
    headingLine2: string;
    paragraph1: string;
    paragraph2: string;
    quote: string;
    principles: SanityPrincipleItem[] | null;
  } | null;
  lenses: { heading: string; subheading: string; lenses: SanityLensItem[] | null } | null;
  insight: { heading: string; subheading: string; steps: SanityProcessStepItem[] | null } | null;
  allocation: { heading: string; subheading: string; funds: SanityAllocationFund[] | null } | null;
  ctaTop: { title: string; description: string; primaryBtnText: string; primaryBtnLink: string } | null;
  ctaBottom: {
    title: string;
    description: string;
    primaryBtnText: string;
    primaryBtnLink: string;
    secondaryBtnText: string;
    secondaryBtnLink: string;
  } | null;
}

const approachPageQuery = /* groq */ `{
  "hero": *[_type == "approachHero"][0]{ title, titleItalic, subheading },
  "principles": *[_type == "approachPrinciples"][0]{ headingLine1, headingLine2, paragraph1, paragraph2, quote, principles },
  "lenses": *[_type == "analyticalLenses"][0]{ heading, subheading, lenses },
  "insight": *[_type == "insightToInvestment"][0]{ heading, subheading, steps },
  "allocation": *[_type == "capitalAllocation"][0]{ heading, subheading, funds },
  "ctaTop": *[_type == "approachCtaTop"][0]{ title, description, primaryBtnText, primaryBtnLink },
  "ctaBottom": *[_type == "approachCtaBottom"][0]{ title, description, primaryBtnText, primaryBtnLink, secondaryBtnText, secondaryBtnLink }
}`;

const emptyApproachPage: SanityApproachPage = {
  hero: null,
  principles: null,
  lenses: null,
  insight: null,
  allocation: null,
  ctaTop: null,
  ctaBottom: null,
};

export async function getApproachPage(): Promise<SanityApproachPage> {
  return safeFetch(approachPageQuery, {}, emptyApproachPage);
}

// ─── Invest With Us Page ─────────────────────────────────────────────────────

export interface SanityInvestStatItem {
  value: string;
  name: string;
  slug: string;
  subtitle: string;
}

export interface SanityStatRow {
  label: string;
  value: string;
}

export interface SanityFundListItem {
  slug: string;
  label: string;
  subtitle: string;
  stats: SanityStatRow[] | null;
  performanceValue: string;
  performanceLabel: string;
}

export interface SanityInvestResource {
  title: string;
  file: { asset: { url: string; originalFilename: string; size: number } } | null;
}

export interface SanityInvestWithUsPage {
  hero: { titleLine1: string; titleLine2: string; description: string; stats: SanityInvestStatItem[] | null } | null;
  fundList: { heading: string; highlightText: string; subheading: string; funds: SanityFundListItem[] | null } | null;
  contact: {
    heading: string;
    highlightText: string;
    whatsappNumber: string;
    whatsappLink: string;
    email1: string;
    email2: string;
    phone: string;
    phoneLink: string;
    formHeading: string;
    formDescription: string;
    fundOptions: string[] | null;
    submitLabel: string;
  } | null;
  resources: { heading: string; highlightText: string; subheading: string; documents: SanityInvestResource[] | null } | null;
}

const investWithUsPageQuery = /* groq */ `{
  "hero": *[_type == "investHero"][0]{ titleLine1, titleLine2, description, stats },
  "fundList": *[_type == "investFundList"][0]{ heading, highlightText, subheading, funds },
  "contact": *[_type == "investContact"][0]{
    heading, highlightText, whatsappNumber, whatsappLink, email1, email2, phone, phoneLink,
    formHeading, formDescription, fundOptions, submitLabel
  },
  "resources": *[_type == "investResources"][0]{
    heading, highlightText, subheading,
    documents[]{ title, file{ asset->{url, originalFilename, size} } }
  }
}`;

const emptyInvestWithUsPage: SanityInvestWithUsPage = {
  hero: null,
  fundList: null,
  contact: null,
  resources: null,
};

export async function getInvestWithUsPage(): Promise<SanityInvestWithUsPage> {
  return safeFetch(investWithUsPageQuery, {}, emptyInvestWithUsPage);
}
