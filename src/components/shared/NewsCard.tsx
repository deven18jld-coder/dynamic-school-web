import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { cn, formatDate } from '@/lib/utils';

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
  category: string;
  className?: string;
}

export default function NewsCard({
  title,
  excerpt,
  image,
  date,
  slug,
  category,
  className,
}: NewsCardProps) {
  return (
    <article
      className={cn(
        'group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100',
        className
      )}
    >
      {/* Image Container */}
      <Link href={`/news/${slug}`} className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex-1 p-5 md:p-6 flex flex-col">
        <div className="flex items-center gap-2 text-neutral-500 text-xs mb-3">
          <Calendar className="h-3.5 w-3.5" />
          <time dateTime={date}>{formatDate(date)}</time>
        </div>

        <h3 className="text-lg md:text-xl font-bold font-heading text-neutral-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/news/${slug}`}>{title}</Link>
        </h3>

        <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-neutral-50">
          <Link
            href={`/news/${slug}`}
            className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all"
          >
            Read More
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
