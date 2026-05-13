import Image from 'next/image';
import Breadcrumb from './Breadcrumb';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumbItems?: { label: string; href?: string }[];
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
  breadcrumbItems = [],
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative min-h-[35vh] md:min-h-[45vh] flex items-center bg-neutral-900 overflow-hidden',
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16">
        {breadcrumbItems.length > 0 && (
          <Breadcrumb items={breadcrumbItems} light className="mb-6 md:mb-8" />
        )}
        
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg text-neutral-200 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
