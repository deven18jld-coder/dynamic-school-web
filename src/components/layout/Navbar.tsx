'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS, SCHOOL_INFO } from '@/lib/constants';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      {/* Admission Open Ticker — conditional */}
      {SCHOOL_INFO.admissionOpen && (
        <div className="bg-accent text-neutral-900 text-center py-2.5 text-xs sm:text-sm font-bold font-heading">
          <Link href="/admission" className="hover:underline flex items-center justify-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Admissions Open for 2025-26 — Enquire Now →
          </Link>
        </div>
      )}

      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-white border-b border-neutral-100'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between transition-all duration-300">
            {/* Logo and School Name */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                <GraduationCap className="h-6 w-6 md:h-7 md:w-7" />
              </div>
              <div className="flex flex-col">
                <p className="text-base sm:text-xl font-black font-heading text-neutral-900 leading-none mb-0.5 sm:mb-1">
                  {SCHOOL_INFO.name}
                </p>
                <p className="text-[10px] sm:text-xs text-neutral-500 font-bold tracking-tight uppercase">
                  CBSE Affiliated
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && handleDropdownEnter(item.label)
                  }
                  onMouseLeave={() => item.children && handleDropdownLeave()}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary transition-colors rounded-md hover:bg-primary-light"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary transition-colors rounded-md hover:bg-primary-light"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-200',
                          openDropdown === item.label && 'rotate-180'
                        )}
                      />
                    </button>
                  )}

                  {/* Dropdown */}
                  {item.children && openDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-1 z-50">
                      <div className="min-w-[200px] rounded-lg bg-white py-2 shadow-lg ring-1 ring-neutral-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-light hover:text-primary transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side: CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/admission"
                className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors shadow-sm"
              >
                Apply Now
              </Link>

              {/* Mobile Hamburger */}
              <button
                className="lg:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100 transition-colors"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
