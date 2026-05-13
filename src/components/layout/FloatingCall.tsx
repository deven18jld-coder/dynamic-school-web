'use client';

import { Phone } from 'lucide-react';
import { SCHOOL_INFO } from '@/lib/constants';

export default function FloatingCall() {
  return (
    <a
      href={`tel:${SCHOOL_INFO.phonePrimary.replace(/\s/g, '')}`}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-lg hover:scale-110 transition-transform duration-200 hover:shadow-xl md:hidden"
      aria-label="Call school"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
