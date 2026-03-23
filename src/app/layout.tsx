// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const geistSans = Geist({ variable: '--font-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-mono', subsets: ['latin'] });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://designpov.com';

// ─── Global Metadata (SEO) ───────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'DesignPOV — Digital Excellence',
    template: '%s | DesignPOV',
  },
  description:
    'We build exceptional digital experiences — strategy, design, and engineering under one roof.',
  keywords: ['digital agency', 'web design', 'software development', 'branding'],
  authors: [{ name: 'DesignPOV', url: BASE_URL }],
  creator: 'DesignPOV',
  publisher: 'DesignPOV',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'DesignPOV',
    title: 'DesignPOV — Digital Excellence',
    description:
      'We build exceptional digital experiences — strategy, design, and engineering under one roof.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'DesignPOV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DesignPOV',
    creator: '@DesignPOV',
    title: 'DesignPOV — Digital Excellence',
    description:
      'We build exceptional digital experiences — strategy, design, and engineering under one roof.',
    images: ['/images/og-default.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
  width: 'device-width',
  initialScale: 1,
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DesignPOV',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  sameAs: [
    'https://twitter.com/DesignPOV',
    'https://linkedin.com/company/DesignPOV',
    'https://instagram.com/DesignPOV',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@designpov.com',
    contactType: 'customer support',
  },
};

// ─── Layout ──────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
