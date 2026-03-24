

// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Investment Approach', href: '/approach' },
  { label: 'Thought Center', href: '/thought-center' },
];

const PRODUCTS = [
  { label: 'India Long-Only Fund', href: '/products/long-only' },
  { label: 'Gold & Silver Miners Fund', href: '/products/miners' },
  { label: 'Absolute Return Fund', href: '/products/absolute-return' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 font-sans border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 mb-16">

          {/* Brand & Description */}
          <div className="col-span-1 sm:col-span-2 md:col-span-5">
            <Link href="/" className="inline-block pb-6">
              <div className="relative h-10 md:h-12 w-auto">
                <img
                  src="/images/logo.png"
                  alt="Rational Asset Management Logo"
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105 invert"
                />
              </div>
            </Link>
            <p className="text-base leading-relaxed max-w-sm text-gray-400 font-sans">
              A leading asset management company committed to delivering superior risk-adjusted returns
              through disciplined investment strategies and unwavering focus on long-term value creation.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              {['in', 'tw', 're'].map((icon) => (
                <Link
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-maroon flex items-center justify-center text-white hover:bg-brand-maroon-hover transition-all hover:-translate-y-1"
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

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-5 md:mb-6 font-sans">Quick Links</h3>
            <ul className="space-y-3 md:space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors font-sans py-1 block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-5 md:mb-6 font-sans">Products</h3>
            <ul className="space-y-3 md:space-y-4">
              {PRODUCTS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors font-sans py-1 block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-5 md:mb-6 font-sans">Contact Us</h3>
            <ul className="space-y-4 md:space-y-5 text-sm font-sans">
              <li className="flex gap-3">
                <MapPin className=" shrink-0" size={20} />
                <span className="text-gray-400">
                  123 Financial District,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className=" shrink-0" size={20} />
                <span className="text-gray-400">+91 22 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0" size={20} />
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

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base text-gray-400 mb-8 font-sans">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline text-gray-800">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="hidden sm:inline text-gray-800">|</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>

          <p className="text-[11px] md:text-[12px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans px-4">
            Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}