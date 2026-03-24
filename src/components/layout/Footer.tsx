// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Linkedin, Twitter, Repeat, MapPin, Phone, Mail } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand & Description */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center shrink-0 pb-6">
              <div className="relative h-12 w-auto  ">
                <img
                  src="/images/logo.png"
                  alt="Rational Asset Management Logo"
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105 invert"
                />
              </div>
            </Link>
            <p className="text-[16px] leading-relaxed max-w-sm text-white-400 font-sans">
              A leading asset management company committed to delivering superior risk-adjusted returns
              through disciplined investment strategies and unwavering focus on long-term value creation.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              {['in', 'tw', 're'].map((icon) => (
                <Link
                  key={icon}
                  href="#"
                  // Cleaned up the className: removed font-bold, italic, and text-sm
                  className="w-10 h-10 rounded-full bg-brand-maroon flex items-center justify-center text-white hover:bg-brand-maroon-hover transition-colors"
                >
                  {/* Your current logic is correct! */}
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
            <h3 className="text-white font-bold mb-6 font-sans">Quick Links</h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[14px] hover:text-white transition-colors font-sans">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 font-sans">Products</h3>
            <ul className="space-y-4">
              {PRODUCTS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[14px] hover:text-white transition-colors font-sans">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}

          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-6 font-sans">Contact Us</h3>
            <ul className="space-y-5 text-[14px] font-sans">
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

                <Mail className=" shrink-0" size={20} />
                <span className="text-gray-400">info@rationalamc.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="border-t border-gray-800 pt-10 text-center">
          <p className="text-[14px] tracking-[0.1em] text-gray-500 mb-6 uppercase font-sans">
            © {year} RATIONAL ASSET MANAGEMENT COMPANY. ALL RIGHTS RESERVED.
          </p>

          <div className="flex justify-center gap-6 text-[16px] text-gray-400 mb-8 font-sans">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <span className="text-gray-700">|</span>
            <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
          </div>

          <p className="text-[12px] text-gray-600 max-w-3xl mx-auto leading-relaxed  font-sans">
            Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}