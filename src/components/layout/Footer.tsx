

// src/components/layout/Footer.tsx
"use client";

import Link from 'next/link';
import { Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

// 1. Types for dynamic styling
interface FooterLink {
  label: string;
  href: string;
  color?: string; // Optional: e.g., 'text-brand-maroon' or 'text-emerald-400'
}

const QUICK_LINKS: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Investment Approach', href: '/approach' },
  { label: 'Thought Center', href: '/thought-center' },
  { label: 'Call Us', href: '/contact' }
];

const PRODUCTS: FooterLink[] = [
  { label: 'India Long-Only Fund', href: '/products/long-only' },
  { label: 'Gold & Silver Miners Fund', href: '/products/miners' },
  { label: 'Absolute Return Fund', href: '/products/absolute-return' },
  { label: 'Invest With Us', href: '/invest-with-us', color: 'text-brand-maroon' }, // 🔹 Custom Color Example
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 font-sans border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 mb-16">

          {/* Brand & Description */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center shrink-0 pb-6">
              <div className="relative h-12 w-auto">
                <img
                  src="/images/logo.png"
                  alt="Rational Asset Management Logo"
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105 invert"
                />
              </div>
            </Link>
            <p className="text-[16px] leading-relaxed max-w-sm text-gray-400 font-sans">
              A leading asset management company committed to delivering superior risk-adjusted returns
              through disciplined investment strategies and unwavering focus on long-term value creation.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              {['in', 'tw', 're'].map((icon) => (
                <Link
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-maroon flex items-center justify-center text-white hover:bg-opacity-80 transition-all"
                >
                  {icon === 'in' && <Linkedin size={18} />}
                  {icon === 'tw' && <Twitter size={18} />}
                  {icon === 're' && (
                    <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M22.539 8.242H1.46V5.406h21.079v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.079V0z" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <FooterColumn title="Quick Links" links={QUICK_LINKS} />

          {/* Products Column */}
          <FooterColumn title="Products" links={PRODUCTS} />

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-5 md:mb-6 font-sans">Contact Us</h3>
            <ul className="space-y-4 md:space-y-5 text-sm font-sans">
              <li className="flex gap-3">
                <MapPin className="text-white shrink-0" size={20} />
                <span className="text-gray-400">
                  123 Financial District,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-white shrink-0" size={20} />
                <span className="text-gray-400">+91 22 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-white shrink-0" size={20} />
                <span className="text-gray-400">info@rationalamc.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="border-t border-gray-900 pt-10 text-center">
          <p className="text-xs md:text-sm tracking-[0.1em] text-gray-500 mb-6 uppercase font-sans">
            © {year} RATIONAL ASSET MANAGEMENT COMPANY. ALL RIGHTS RESERVED.
          </p>

          <div className="flex justify-center flex-wrap gap-6 text-[16px] text-gray-400 mb-8 font-sans">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-700 hidden sm:block">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-gray-700 hidden sm:block">|</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>

          <p className="text-[12px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
            Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
          </p>
        </div>
      </div>
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
              className={`text-[14px] transition-colors font-sans hover:text-white ${
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