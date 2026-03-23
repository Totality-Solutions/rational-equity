// src/components/layout/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-10">
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Design<span className="text-blue-600">POV</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden relative z-10 p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all duration-200" />
          <span
            className={`block w-5 h-0.5 bg-current mb-1 transition-all duration-200 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span className="block w-5 h-0.5 bg-current transition-all duration-200" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-b border-gray-100`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="mt-2">
            <Link
              href="/contact"
              className="block text-center px-4 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
