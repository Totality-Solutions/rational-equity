
import type { Metadata, Viewport } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Playfair_Display, DM_Sans, Lato, EB_Garamond } from 'next/font/google';
import { siteConfig } from '@/lib/seo.config'; // Importing our new config
import './globals.css';
import SmartScrollToTop from '@/components/common/ScrollToTop';
import RouteLoader from '@/components/common/RouteLoader';
import FAQ from '@/components/sections/home/FAQ';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

// ─── Global Metadata (Updated for Rational Equity) ───────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: ['equity investment', 'strategic growth', 'rational business', 'capital management'],
  authors: [{ name: siteConfig.name, url: siteConfig.baseUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: './',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000', // Professional Rational Black
  width: 'device-width',
  initialScale: 1,
};

// ─── JSON-LD (Tells Google EXACTLY who you are) ──────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  logo: `${siteConfig.baseUrl}/images/logo.png`,
  description: siteConfig.description,
  sameAs: [
    'https://twitter.com/rationalequity',
    'https://linkedin.com/company/rationalequity',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
  lang="en"
  className={`${playfairDisplay.variable} ${dmSans.variable}`}
>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900 font-sans">

        <RouteLoader />

        <Navbar />
        <main>{children}</main>
        <FAQ />
        <Footer />
        <SmartScrollToTop />
      </body>
    </html>
  );
}