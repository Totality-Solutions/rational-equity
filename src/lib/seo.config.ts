// src/lib/seo.config.ts

// We'll define a plain object so it's compatible with Next.js native Metadata
export const siteConfig = {
  name: 'Rational Equity',
  titleTemplate: '%s | Rational Equity',
  defaultTitle: 'Rational Equity — Strategic Investment & Logical Growth',
  description:
    'Rational Equity specializes in data-driven investment strategies and business execution to drive sustainable long-term value.',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://rationalequity.com',
  ogImage: '/images/og-default.jpg', // Ensure this exists in your public/images folder
  twitterHandle: '@rationalequity',
};

// This stays for any components still using next-seo, but updated for the new brand
const SEO_CONFIG = {
  titleTemplate: siteConfig.titleTemplate,
  defaultTitle: siteConfig.defaultTitle,
  description: siteConfig.description,
  canonical: siteConfig.baseUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.baseUrl}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    handle: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#000000' }, // Professional black/dark theme
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Rational Equity' },
  ],
};

export default SEO_CONFIG;