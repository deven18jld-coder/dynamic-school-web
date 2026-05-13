import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { cn, formatDate } from '@/lib/utils';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  slug: string;
  className?: string;
}

export default function EventCard({
  title,
  date,
  time,
  location,
  image,
  slug,
  className,
}: EventCardProps) {
  const eventDate = new Date(date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString('en-IN', { month: 'short' });

  return (
    <div
      className={cn(
        'group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-neutral-100',
        className
      )}
    >
      {/* Image Container with Date Badge */}
      <div className="relative h-48 sm:h-auto sm:w-2/5 shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 300px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-center rounded-xl p-2 min-w-[56px] shadow-lg">
          <span className="block text-xl font-bold leading-none">{day}</span>
          <span className="block text-[10px] uppercase font-bold tracking-wider mt-1">{month}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
        <h3 className="text-lg md:text-xl font-bold font-heading text-neutral-900 mb-4 line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/events/${slug}`}>{title}</Link>
        </h3>

        <div className="space-y-2.5 mb-6">
          <div className="flex items-center gap-2.5 text-neutral-500 text-sm">
            <Clock className="h-4 w-4 shrink-0 text-accent" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2.5 text-neutral-500 text-sm">
            <MapPin className="h-4 w-4 shrink-0 text-accent" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        <Link
          href={`/events/${slug}`}
          className="inline-flex items-center justify-center sm:justify-start px-5 py-2 text-sm font-bold text-primary bg-primary-light rounded-lg hover:bg-primary hover:text-white transition-colors w-full sm:w-auto"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
