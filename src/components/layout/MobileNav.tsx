'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronDown, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS, SCHOOL_INFO } from '@/lib/constants';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <nav
        className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl animate-slide-in-right overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
          <Link href="/" className="flex items-center gap-2" onClick={onClose}>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-base font-bold font-heading text-neutral-900">
              {SCHOOL_INFO.name}
            </span>
          </Link>
          <button
            className="p-2 rounded-md text-neutral-500 hover:bg-neutral-100 transition-colors"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav Items */}
        <div className="px-3 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
                    onClick={() => toggleExpand(item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        expandedItem === item.label && 'rotate-180'
                      )}
                    />
                  </button>

                  {/* Expanded children */}
                  {expandedItem === item.label && item.children && (
                    <div className="ml-4 pl-4 border-l-2 border-primary-light space-y-1 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-neutral-600 hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="px-5 py-4 border-t border-neutral-200">
          <Link
            href="/admission"
            className="block w-full text-center px-5 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors shadow-sm"
            onClick={onClose}
          >
            Apply for Admission
          </Link>
          <Link
            href="/enquiry"
            className="block w-full text-center mt-3 px-5 py-3 text-base font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            onClick={onClose}
          >
            Enquire Now
          </Link>
        </div>
      </nav>
    </div>
  );
}
