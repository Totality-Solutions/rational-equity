'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import CTAButton from '../common/CTAButton';
import Container from '../common/Container';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'About Us', href: '/about' },
  {
    label: 'Products', 
    subMenu: [
      { label: 'India Long-Only Fund', href: '/product/india-long-only', img: '/images/icons/india-long-only-fund.svg' },
      { label: 'Gold & Silver Miners Fund', href: '/product/gold-silver-miners', img: '/images/icons/gold-&-silver-miners-fund.svg' },
      { label: 'Absolute Return Funds', href: '/product/absolute-return', img: '/images/icons/absolute-return-fund.svg' },
    ]
  },
  { label: 'Investment Approach', href: '/investment-approach' },
  { label: 'Thought Center', href: '/thought-center' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setIsMobileSubMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActiveLink = (link: any) => {
    if (link.href && pathname.startsWith(link.href)) return true;

    if (link.subMenu) {
      return link.subMenu.some((sub: any) =>
        pathname.startsWith(sub.href)
      );
    }

    return false;
  };

  return (
    <header className='sticky top-0 left-0 right-0 z-55 transition-all duration-300 bg-white border-b  border-b-gray-200 py-3'>
      <nav>
        <Container className="flex items-center justify-between">
          
          {/* LEFT SECTION: Logo */}
          <div className="flex-1 flex justify-start mr-6 xl:mr-10">
            <Link href="/" className="transition-transform duration-300 hover:scale-105">
              <div className="relative h-auto w-[150px] md:w-[200px]">
                <img
                  src="/images/logo.png"
                  alt="Rational Asset Management Logo"
                  className="h-full w-[150px] md:w-[200px] object-cover"
                />
              </div>
            </Link>
          </div>

          {/* CENTER SECTION: Nav Links */}
          <div className='flex'>
            <div className="hidden lg:flex items-center justify-center flex-auto">
              <ul className="flex items-center gap-6 xl:gap-10">
                {NAV_LINKS.map((link) => (
                  <li key={link.label} className="relative group py-5">
                    {link.subMenu ? (
                      <div className={`text-body-lg font-sans font-weight-medium cursor-default transition-colors duration-200 ${
                        isActiveLink(link) ? 'text-brand-maroon font-medium' : 'text-black hover:text-brand-maroon'
                      }`}>
                        {link.label}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`text-body-lg font-sans font-weight-medium transition-colors duration-200 whitespace-nowrap ${
                          isActiveLink(link) ? 'text-brand-maroon font-medium' : 'text-black hover:text-brand-maroon'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}

                    {/* Desktop Sub Menu Dropdown */}
                    {link.subMenu && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full w-[320px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <ul className="bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden p-4">
                          {link.subMenu.map((sub) => (
                            <Link
                                key={sub.href}
                                href={sub.href}>
                            <li
                              className={`flex items-center justify-start gap-4  hover:bg-[#ffe4e6] hover:text-brand-maroon hover:font-weight-bold px-4 py-4 hover:rounded-md ${
                                isActiveLink(sub) ? 'bg-[#ffe4e6] text-brand-maroon font-weight-bold rounded-md' : ''
                              }`}
                            >
                              <Image src={sub.img} alt="Arrow right" width={100} height={100} className="w-7 h-7" />
                              <div
                                className="block text-body-md text-gray-800 font-sans font-weight-medium text-center transition-all duration-300"
                              >
                                {sub.label}
                              </div>
                            </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center gap-4 xl:gap-6 mr-2 lg:mr-0 ml-6 2xl:ml-10 shrink-0">
              <Link
                href="https://wa.me/yournumber"
                target="_blank"
                className="text-[#00a884] hover:scale-110 transition-transform shrink-0"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Link>
              <div className='hidden lg:block'>
                <CTAButton
                  href="/contact"
                  text="Call us"
                  variant="maroon-bg"
                />
              </div>
            </div>
          </div>

          {/* Mobile Toggle & Mobile Icons */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible'}`}
      >
        <ul className="px-6 py-8 space-y-6 font-sans">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {link.subMenu ? (
                <div className="flex flex-col">
                  {/* Clickable Header */}
                  <button
                    onClick={() => setIsMobileSubMenuOpen(!isMobileSubMenuOpen)}
                    className={`flex items-center justify-between w-full text-xl font-bold focus:outline-none transition-colors duration-300 ${
                      isActiveLink(link) ? 'text-brand-maroon' : 'text-gray-800'
                    }`}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-4 h-4 text-brand-maroon transition-transform duration-300 ${isMobileSubMenuOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Sub-menu Items */}
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isMobileSubMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                    <div className="bg-white border border-gray-100 shadow-sm flex flex-col divide-y divide-brand-maroon/10">
                      {link.subMenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-5 text-[16px] font-sans font-medium text-start transition-all duration-300 ${
                            isActiveLink(sub) ? 'bg-[#ffe4e6] text-brand-maroon font-bold' : 'text-gray-800 active:bg-[#ffe4e6] active:text-brand-maroon active:font-bold'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-bold block transition-colors ${
                    isActiveLink(link) ? 'text-brand-maroon' : 'text-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}

          <li className="pt-4 flex items-center gap-6">
            <Link href="https://wa.me/yournumber" className="flex items-center gap-2 text-[#00a884] font-bold text-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </Link>

            <CTAButton
              href="/contact"
              text="Call us"
              variant="light"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}