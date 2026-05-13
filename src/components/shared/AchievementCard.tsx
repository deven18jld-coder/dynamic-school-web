import Image from 'next/image';
import { Trophy, Calendar } from 'lucide-react';
import { cn, formatDate } from '@/lib/utils';

interface AchievementCardProps {
  title: string;
  studentName: string;
  studentClass: string;
  category: string;
  date: string;
  image?: string;
  description: string;
  className?: string;
}

export default function AchievementCard({
  title,
  studentName,
  studentClass,
  category,
  date,
  image,
  description,
  className,
}: AchievementCardProps) {
  return (
    <div
      className={cn(
        'group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-neutral-100 flex flex-col',
        className
      )}
    >
      {/* Visual Header */}
      {image ? (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-accent text-neutral-900 rounded-full p-2 shadow-lg">
            <Trophy className="h-5 w-5" />
          </div>
        </div>
      ) : (
        <div className="h-3 bg-accent" />
      )}

      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-neutral-500 text-[10px] uppercase font-bold tracking-widest mb-3">
          <span className="text-accent">{category}</span>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(date)}
          </div>
        </div>

        <h3 className="text-lg font-bold font-heading text-neutral-900 mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto flex items-center gap-3 pt-4 border-t border-neutral-50">
          <div className="h-10 w-10 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-sm shrink-0">
            {studentName.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-bold text-neutral-900 leading-none mb-1">
              {studentName}
            </p>
            <p className="text-xs text-neutral-500 leading-none">
              Class {studentClass}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
