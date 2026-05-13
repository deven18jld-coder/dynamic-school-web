import Image from 'next/image';
import { cn } from '@/lib/utils';
import * as Icons from 'lucide-react';

interface FacilityCardProps {
  title: string;
  description: string;
  image: string;
  iconName?: keyof typeof Icons;
  className?: string;
}

export default function FacilityCard({
  title,
  description,
  image,
  iconName,
  className,
}: FacilityCardProps) {
  // Dynamically resolve icon if provided
  const Icon = iconName ? (Icons[iconName] as React.ElementType) : null;

  return (
    <div
      className={cn(
        'group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-neutral-100',
        className
      )}
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {Icon && (
          <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md rounded-lg p-2 text-white border border-white/30">
            <Icon className="h-6 w-6" />
          </div>
        )}
      </div>

      <div className="p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-bold font-heading text-neutral-900 mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
