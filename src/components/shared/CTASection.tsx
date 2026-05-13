import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
  variant?: 'primary' | 'accent' | 'neutral';
}

export default function CTASection({
  title = 'Ready to Join Our School Family?',
  description = 'Admissions are now open for the academic year 2025-26. Take the first step towards your child\'s bright future today.',
  primaryCtaText = 'Enquire Now',
  primaryCtaHref = '/admission',
  secondaryCtaText = 'Contact Support',
  secondaryCtaHref = '/contact',
  className,
  variant = 'primary',
}: CTASectionProps) {
  const variants = {
    primary: 'bg-primary text-white',
    accent: 'bg-accent text-neutral-900',
    neutral: 'bg-neutral-100 text-neutral-900',
  };

  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-10',
            variants[variant]
          )}
        >
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-black/5 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
              {title}
            </h2>
            <p
              className={cn(
                'text-lg md:text-xl opacity-90 leading-relaxed mb-0',
                variant === 'neutral' ? 'text-neutral-600' : 'text-white/90'
              )}
            >
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full lg:w-auto">
            <Link
              href={primaryCtaHref}
              className={cn(
                'w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg',
                variant === 'primary'
                  ? 'bg-accent text-neutral-900 hover:bg-accent-dark'
                  : 'bg-primary text-white hover:bg-primary-dark'
              )}
            >
              {primaryCtaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              href={secondaryCtaHref}
              className={cn(
                'w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10 border-2',
                variant === 'primary'
                  ? 'border-white/30 text-white'
                  : 'border-neutral-900/20 text-neutral-900'
              )}
            >
              {secondaryCtaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
