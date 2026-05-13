import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  overline?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  overline,
  centered = false,
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-8 lg:mb-10 max-w-3xl',
        centered && 'mx-auto text-center',
        className
      )}
    >
      {overline && (
        <span
          className={cn(
            'inline-block text-xs font-bold uppercase tracking-widest mb-3',
            light ? 'text-accent-light' : 'text-primary'
          )}
        >
          {overline}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4',
          light ? 'text-white' : 'text-neutral-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-base md:text-lg leading-relaxed',
            light ? 'text-neutral-300' : 'text-neutral-600'
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'h-1.5 w-20 mt-6 rounded-full',
          light ? 'bg-accent' : 'bg-primary',
          centered && 'mx-auto'
        )}
      />
    </div>
  );
}
