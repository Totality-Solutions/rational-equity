// src/app/about/page.tsx
// ─── Example: Per-Page SEO Override ─────────────────────────────────────────
// Copy this pattern for every page: /services, /work, /contact, etc.

import type { Metadata } from 'next';

// Per-page SEO — overrides layout defaults
export const metadata: Metadata = {
  title: 'About Us',                          // → "About Us | DesignPOV"
  description:
    'Learn about DesignPOV — our story, our team, and why we do what we do.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | DesignPOV',
    description: 'Learn about DesignPOV — our story, our team, and why we do what we do.',
    url: '/about',
    images: [{ url: '/images/og-about.jpg', width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold tracking-tight mb-4">About Us</h1>
      <p className="text-gray-500 text-lg max-w-2xl">
        This is the About page. Replace this content with your own sections.
      </p>
    </section>
  );
}
