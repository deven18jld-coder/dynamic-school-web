import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TopperCardProps {
  name: string;
  score: string;
  rank?: string;
  class_name: string;
  year: string;
  image: string;
  stream?: string;
  className?: string;
}

export default function TopperCard({
  name,
  score,
  rank,
  class_name,
  year,
  image,
  stream,
  className,
}: TopperCardProps) {
  return (
    <div
      className={cn(
        'group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-neutral-100 p-5 pt-8 text-center',
        className
      )}
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary-light/50 to-transparent" />

      {/* Photo with Frame */}
      <div className="relative w-32 h-32 md:w-36 md:h-36 mx-auto mb-6 z-10">
        <div className="absolute inset-0 rounded-full border-4 border-accent animate-pulse opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
            src={image}
            alt={name}
            fill
            sizes="144px"
            className="object-cover"
          />
        </div>
        {rank && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent text-neutral-900 text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md whitespace-nowrap">
            Rank #{rank}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="relative z-10">
        <h3 className="text-lg font-bold font-heading text-neutral-900 mb-1">
          {name}
        </h3>
        <p className="text-neutral-500 text-xs mb-4">
          Class {class_name} • {year} {stream && `• ${stream}`}
        </p>
        
        <div className="inline-block px-5 py-2 bg-primary text-white rounded-xl shadow-lg transform group-hover:scale-110 transition-transform">
          <span className="text-2xl font-black">{score}</span>
          <span className="text-xs font-bold ml-1 opacity-80">%</span>
        </div>
      </div>
    </div>
  );
}
