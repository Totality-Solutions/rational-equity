
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Container from '../common/Container';

interface FooterLink {
  label: string;
  href: string;
  color?: string; // The '?' makes it optional
}

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Investment Approach', href: '/investment-approach' },
  { label: 'Thought Center', href: '/thought-center' },
  { label: 'Call Us', href: '/contact' }
];

const PRODUCTS = [
  { label: 'India Long-Only Fund', href: '/product/india-long-only' },
  { label: 'Gold & Silver Miners Fund', href: '/product/gold-silver-miners' },
  { label: 'Absolute Return Fund', href: '/product/absolute-return' },
  { label: 'Invest With Us', href: '/invest-with-us' },
];

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  // Highlight check
  const isActive = (href: string) => pathname === href;

  return (
    <footer className="bg-black text-gray-300 font-sans border-t border-gray-900 px-3 md:px-8">
      <Container className="py-12 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 mb-16">

          {/* Column 1: Brand */}
          <div className="md:col-span-5 sm:col-span-2">
            <Link href="/" className="inline-block pb-6">
              <img
                src="/images/logo.png"
                alt="Rational Asset Management Logo"
                className="h-[50px] md:h-[65px] w-auto object-contain invert"
              />
            </Link>
            <h2 className='text-body-lg font-playfair uppercase text-white'>Rational Equity and Asset Managers</h2>
            <p className="text-body-md leading-relaxed max-w-sm text-gray-400 font-sans">
              A SEBI and GIFT City-registered fund based in Mumbai and GIFT City.
            </p>
            <div className="flex gap-4 mt-8">
              {/* Social Icons */}
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

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-[16px] transition-colors hover:text-white ${
                      isActive(link.href) ? 'text-brand-maroon font-bold' : 'text-gray-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="md:col-span-2">
            <h3 className="text-white  font-bold mb-6">Products</h3>
            <ul className="space-y-4">
              {PRODUCTS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-[16px] transition-colors hover:text-white ${
                      isActive(link.href) ? 'text-brand-maroon font-bold' : 'text-gray-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-5 md:mb-6 font-sans">Contact Us</h3>
            <ul className="space-y-4 md:space-y-5 text-[16px] font-sans">
              <li className="flex items-center gap-3">
                <MapPin className="text-white shrink-0" size={20} />
                <span className="text-gray-400">
                  Lower Parel, Mumbai
                </span>
              </li>
              <li className="lg:flex gap-3 text-gray-300">
                <Phone className="text-white shrink-0" size={20} /> 
                <span>+91 99119 00096</span>|
                <span>+91 99872 61105</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Mail className="text-white shrink-0" size={20} /> 
                <span>jaba@repllp.com</span>|
                <span>vikram@repllp.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="border-t border-gray-900 pt-10 text-center">
          <p className="text-xs md:text-sm tracking-[0.01em] text-gray-300 mb-6 uppercase font-sans">
            © {year}  Rational Equity Partners LLP. ALL RIGHTS RESERVED.
          </p>

          <div className="flex justify-center flex-wrap gap-6 text-body-md text-gray-400 mb-8 font-sans">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-300 hidden sm:block">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-gray-300 hidden sm:block">|</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>

          <p className="text-[12px] text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans">
            Investments are subject to market risk. Read all scheme-related documents carefully. Past performance is not indicative of future results.
          </p>
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