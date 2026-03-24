'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Added for active state
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Investment Approach', href: '/approach' },
  { label: 'Thought Centre', href: '/thought-centre' },
];

export default function Navbar() {
  const pathname = usePathname(); // Get current URL path
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to determine if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm border-b-1 border-b-gray-200 ${scrolled ? 'shadow-md py-2' : 'py-4'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-2">
        {/* Logo Section */}
        {/* Logo Section */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-12 w-auto">
            <img
              src="/images/logo.png"
              alt="Rational Asset Management Logo"
              className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8" >
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-[20px] font-sans font-medium transition-colors duration-200 whitespace-nowrap hover:text-brand-maroon ${isActive(href)
                    ? 'text-brand-maroon' // Active State
                    : 'text-black'     // Default State
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 ml-4">
            {/* WhatsApp Icon */}
            <Link
              href="https://wa.me/yournumber"
              target="_blank"
              className="text-[#00a884] hover:scale-110 transition-transform"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </Link>

            {/* Call Us Button */}
            <Link href="tel:+9112345678" className="flex items-center border border-brand-maroon group overflow-hidden">
              <span className="px-5  text-brand-maroon font-sans font-bold text-[22px]  tracking-wider">Call us</span>
              <div className="bg-brand-maroon p-2.5 text-white transition-colors group-hover:bg-brand-maroon-hover">

                <img
                  src="/images/arrowbtn.png"
                  alt="Rational Asset Management Logo"
                  className="w-[20px] object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-black" aria-label="Toggle menu">
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'}`}>
        <ul className="p-6 space-y-4 font-sans">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold block hover:text-brand-maroon ${isActive(href) ? 'text-brand-maroon' : 'text-gray-800'
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}