// src/lib/seo.config.ts
import type { NextSeoProps } from 'next-seo';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://designpov.com';

const SEO_CONFIG: NextSeoProps = {
  titleTemplate: '%s | DesignPOV',
  defaultTitle: 'DesignPOV — Digital Excellence',
  description:
    'We build exceptional digital experiences — strategy, design, and engineering under one roof.',
  canonical: baseUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'DesignPOV',
    images: [
      {
        url: `${baseUrl}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: 'DesignPOV',
      },
    ],
  },
  twitter: {
    handle: '@designpov',
    site: '@designpov',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0f0f0f' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'DesignPOV' },
  ],
};

export default SEO_CONFIG;