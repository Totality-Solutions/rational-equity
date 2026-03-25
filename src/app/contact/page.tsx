// import type { Metadata } from 'next';
// import ContactSection from '@/components/sections/contact/ContactSection';
// import MessageSection from '@/components/sections/contact/MessageSection';


// export default function ContactPage() {
//   return (
//     <>
//       <ContactSection />
//       <MessageSection />
//     </>
//   );
// }


import type { Metadata } from 'next';
import ContactSection from '@/components/sections/contact/ContactSection';
import MessageSection from '@/components/sections/contact/MessageSection';

// ─── CONTACT PAGE SEO ───────────────────────────────────────────────────────
export const metadata: Metadata = {
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

export default function ContactPage() {
  return (
    <>
      <main>
        <ContactSection />
        <MessageSection />
      </main>
    </>
  );
}