import type { Metadata } from 'next';
import ContactSection from '@/components/sections/contact/ContactSection';
import MessageSection from '@/components/sections/contact/MessageSection';
import MapSection from '@/components/sections/contact/MapSection';
import { getContactPage } from '@/sanity/queries';
import { urlFor } from '@/sanity/image';

// ─── CONTACT PAGE SEO ───────────────────────────────────────────────────────
const defaultMetadata: Metadata = {
  title: 'Contact Our Investment Team', // Becomes "Contact Our Investment Team | Rational Equity"
  description:
    'Get in touch with Rational Equity. Whether you have inquiries about our investment approach or asset management solutions, our team is here to assist you.',
  keywords: ['contact rational equity', 'investment inquiries', 'asset management contact', 'invest with us'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Rational Equity',
    description: 'Reach out to the Rational Equity team for strategic investment inquiries.',
    url: '/contact',
    images: [{ url: '/images/og-contact.jpg', width: 1200, height: 630 }],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const contact = await getContactPage();
  const seo = contact?.seo;
  if (!seo) return defaultMetadata;

  return {
    ...defaultMetadata,
    title: seo.metaTitle || defaultMetadata.title,
    description: seo.metaDescription || defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: seo.metaTitle || defaultMetadata.openGraph?.title,
      description: seo.metaDescription || defaultMetadata.openGraph?.description,
      images: seo.ogImage ? [{ url: urlFor(seo.ogImage).width(1200).height(630).url(), width: 1200, height: 630 }] : defaultMetadata.openGraph?.images,
    },
  };
}

export default async function ContactPage() {
  const contact = await getContactPage();

  return (
    <>
      <main>
        <ContactSection header={contact?.header ?? undefined} cards={contact?.contactCards ?? undefined} />
        <MessageSection formSection={contact?.formSection ?? undefined} office={contact?.office ?? undefined} />
        <MapSection map={contact?.map ?? undefined} />
      </main>
    </>
  );
}
