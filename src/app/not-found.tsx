import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold font-heading text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-semibold font-heading text-neutral-900">
        Page Not Found
      </h2>
      <p className="mt-3 max-w-md text-neutral-500">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
      >
        <Home className="h-4 w-4" />
        Back to Home
      </Link>
    </main>
  );
}
