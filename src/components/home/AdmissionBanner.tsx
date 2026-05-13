import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';

export default function AdmissionBanner() {
  return (
    <div className="bg-accent py-4 md:py-6 overflow-hidden relative group">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <div className="hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-white/20 border border-white/30 text-neutral-900">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold font-heading text-neutral-900">
                Admissions Open for Academic Year 2025-26
              </h2>
              <p className="text-sm text-neutral-800 font-medium opacity-80">
                Limited seats available for Pre-Nursery to Class IX and Class XI.
              </p>
            </div>
          </div>
          
          <Link
            href="/admission"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl font-bold text-sm transition-all hover:bg-neutral-800 hover:gap-3 group-hover:scale-105"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Background Pattern */}
      <div className="absolute top-0 right-0 h-full w-1/4 bg-white/10 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 h-full w-1/4 bg-black/5 skew-x-12 -translate-x-1/2 pointer-events-none" />
    </div>
  );
}
