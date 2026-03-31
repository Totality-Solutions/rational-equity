
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Container from '../common/Container';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Investment Approach', href: '/investment-approach' },
  { label: 'Thought Centre', href: '/thought-centre' },
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
    <footer className="bg-black text-gray-300 font-sans border-t border-gray-900">
      <Container className="py-12 md:py-20">
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
            <p className="text-[16px] text-gray-300 max-w-sm">
              A leading asset management company committed to delivering superior risk-adjusted returns
              through disciplined investment strategies.
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
                    className={`text-[14px] transition-colors hover:text-white ${
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
            <h3 className="text-white font-bold mb-6">Products</h3>
            <ul className="space-y-4">
              {PRODUCTS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-[14px] transition-colors hover:text-white ${
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
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3 text-gray-300">
                <MapPin className="text-white shrink-0" size={20} /> 
                <span>Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Phone className="text-white shrink-0" size={20} /> 
                <span>+91 22 1234 5678</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Mail className="text-white shrink-0" size={20} /> 
                <span>info@rationalamc.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="border-t border-gray-900 pt-10 text-center">
          <p className="text-xs md:text-sm tracking-[0.01em] text-gray-300 mb-6 uppercase font-sans">
            © {year} RATIONAL ASSET MANAGEMENT COMPANY. ALL RIGHTS RESERVED.
          </p>

          <div className="flex justify-center flex-wrap gap-4 md:gap-6 text-[14px] md:text-[16px] text-gray-300 mb-8 font-sans">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-300 hidden sm:block">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-gray-300 hidden sm:block">|</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>

          <p className="text-[12px] text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans">
            Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
          </p>
        </div>
      </Container>
    </footer>
  );
}