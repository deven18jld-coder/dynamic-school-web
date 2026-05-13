import { cn } from '@/lib/utils';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Consistent page wrapper providing max-width, padding, and vertical spacing.
 * Used by all public page components for uniform content containment.
 */
export default function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <main className={cn('min-h-screen', className)}>
      {children}
    </main>
  );
}
