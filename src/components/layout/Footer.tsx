
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Container from '../common/Container';
import type { SanityFooter } from '@/sanity/queries';

interface FooterLink {
  label: string;
  href: string;
  color?: string; // The '?' makes it optional
}

const defaultDescription = 'A SEBI and GIFT City-registered fund based in Mumbai and GIFT City.';

const defaultQuickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Investment Approach', href: '/investment-approach' },
  { label: 'Thought Center', href: '/thought-center' },
  { label: 'Call Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

const defaultFundLinks = [
  { label: 'India Long-Only Fund', href: '/product/india-long-only' },
  { label: 'Gold & Silver Miners Fund', href: '/product/gold-silver-miners' },
  { label: 'Absolute Return Fund', href: '/product/absolute-return' },
  { label: 'Invest With Us', href: '/invest-with-us' },
];

const defaultContact = {
  address: 'Lower Parel, Mumbai',
  phone1: '+91 99119 00096',
  phone2: '+91 99872 61105',
  email1: 'jaba@repllp.com',
  email2: 'vikram@repllp.com',
};

const defaultDisclaimer =
  'Investments are subject to market risk. Read all scheme-related documents carefully. Past performance is not indicative of future results.';

const defaultCompanyName = 'Rational Equity Partners LLP. ALL RIGHTS RESERVED.';

export default function Footer({ footer }: { footer?: SanityFooter }) {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const isActive = (href: string) => pathname === href;

  const description = footer?.description || defaultDescription;
  const quickLinks = footer?.quickLinks && footer.quickLinks.length > 0 ? footer.quickLinks : defaultQuickLinks;
  const fundLinks = footer?.fundLinks && footer.fundLinks.length > 0 ? footer.fundLinks : defaultFundLinks;
  const address = footer?.address || defaultContact.address;
  const phone1 = footer?.phone1 || defaultContact.phone1;
  const phone2 = footer?.phone2 || defaultContact.phone2;
  const email1 = footer?.email1 || defaultContact.email1;
  const email2 = footer?.email2 || defaultContact.email2;
  const disclaimerText = footer?.disclaimerText || defaultDisclaimer;
  const companyName = footer?.companyName || defaultCompanyName;

  return (
    <footer className="bg-black text-gray-300 font-sans border-t border-gray-900 md:px-8">
      <Container className="pt-12 pb-6">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-8 mb-4">

          {/* Left Side: Brand + Links */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Brand */} 
            <div className="col-span-2">
              <Link href="/" className="inline-block pb-6">
                <img
                  src="/images/logo.png"
                  alt="Rational Asset Management Logo"
                  className="h-[50px] md:h-16 lg:h-[65px] w-auto object-contain invert"
                />
              </Link>
              <h2 className="text-body-lg font-playfair uppercase text-white">
                Rational Equity and Asset Managers
              </h2>
              <p className="text-body-md leading-relaxed max-w-sm text-gray-400 font-sans">
                {description}
              </p>
              <div className="flex gap-4 mt-8">
                <Link href="#" className="w-10 h-10 rounded-full bg-brand-maroon flex items-center justify-center hover:opacity-80 transition-all">
                  <Linkedin size={18} className="text-white" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-brand-maroon flex items-center justify-center hover:opacity-80 transition-all">
                  <Twitter size={18} className="text-white" />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-brand-maroon flex items-center justify-center hover:opacity-80 transition-all">
                  <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M22.539 8.242H1.46V5.406h21.079v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.079V0z" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>

          {/* Right Side: Explore + Fund + Contact */}
          <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {/* Explore */}
            <div>
              <h3 className="text-white/60 font-semibold mb-6 uppercase">Explore</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href || '#'}
                      className={`text-[16px] transition-colors hover:text-white ${
                        isActive(link.href || '') ? 'text-brand-maroon font-bold' : 'text-gray-300'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fund */}
            <div>
              <h3 className="text-white/60 font-semibold mb-6 uppercase">Fund</h3>
              <ul className="space-y-4">
                {fundLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href || '#'}
                      className={`text-[16px] transition-colors hover:text-white ${
                        isActive(link.href || '') ? 'text-brand-maroon font-bold' : 'text-gray-300'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white/60 font-semibold mb-6 uppercase">Contact</h3>
              <ul className="space-y-4 text-[16px] font-sans">
                <li className="flex items-start gap-3">
                  <MapPin className="text-white shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-400">{address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="text-white shrink-0 mt-0.5" size={20} />
                  <div className="flex flex-col">
                    <span className="text-gray-300">{phone1}</span>
                    <span className="text-gray-300">{phone2}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="text-white shrink-0 mt-0.5" size={20} />
                  <div className="flex flex-col">
                    <span className="text-gray-300">{email1}</span>
                    <span className="text-gray-300">{email2}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="lg:flex lg:justify-between border-t border-gray-900 pt-4 space-y-6 ">
          <div className=' max-w-[600px]'>
            <p className="text-sm text-gray-300 max-w-4xl mx-auto leading-relaxed font-sans">
              {disclaimerText}
            </p>
          </div>
          <div>
            <p className="text-xs md:text-sm tracking-[0.01em] text-gray-300 uppercase font-sans">
              &copy; {year} {companyName}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/**
 * 🔹 Reusable Column Component
 * Handles Default vs. Custom Color logic
 */
function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="md:col-span-2">
      <h3 className="text-white font-bold mb-6 font-sans">{title}</h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`text-body-sm transition-colors font-sans hover:text-white ${
                link.color || 'text-gray-400' // 🔹 Default to gray-400 if no color provided
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}