import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  light?: boolean;
}

export default function Breadcrumb({ items, className, light = false }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center space-x-2 text-sm font-medium mb-6', className)}
    >
      <Link
        href="/"
        className={cn(
          'flex items-center transition-colors',
          light ? 'text-neutral-300 hover:text-white' : 'text-neutral-500 hover:text-primary'
        )}
      >
        <Home className="h-4 w-4 mr-1" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => (
        <div key={item.label} className="flex items-center space-x-2">
          <ChevronRight
            className={cn('h-4 w-4', light ? 'text-neutral-500' : 'text-neutral-300')}
          />
          {index === items.length - 1 || !item.href ? (
            <span className={cn(light ? 'text-white' : 'text-neutral-900')}>
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className={cn(
                'transition-colors',
                light ? 'text-neutral-300 hover:text-white' : 'text-neutral-500 hover:text-primary'
              )}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
