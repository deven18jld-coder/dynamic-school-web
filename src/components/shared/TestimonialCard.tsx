import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role: string; // e.g., "Parent of Class 5 student"
  content: string;
  image?: string;
  rating?: number;
  className?: string;
}

export default function TestimonialCard({
  name,
  role,
  content,
  image,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-100 flex flex-col',
        className
      )}
    >
      <div className="mb-6 flex justify-between items-start">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-4 w-4',
                i < rating ? 'fill-accent text-accent' : 'text-neutral-200'
              )}
            />
          ))}
        </div>
        <Quote className="h-10 w-10 text-primary-light opacity-50" />
      </div>

      <p className="text-neutral-600 italic leading-relaxed mb-8 flex-1">
        "{content}"
      </p>

      <div className="flex items-center gap-4">
        {image ? (
          <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0 border-2 border-neutral-50">
            <Image
              src={image}
              alt={name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-12 w-12 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center font-bold text-lg shrink-0">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-base font-bold text-neutral-900 leading-tight mb-1">
            {name}
          </p>
          <p className="text-xs text-neutral-500 leading-tight">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
