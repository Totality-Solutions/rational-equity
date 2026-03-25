import type { Metadata } from 'next';
import ContactSection from '@/components/sections/contact/ContactSection';
import MessageSection from '@/components/sections/contact/MessageSection';


export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <MessageSection />
    </>
  );
}
