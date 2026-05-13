import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FacultyCardProps {
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  image: string;
  className?: string;
}

export default function FacultyCard({
  name,
  designation,
  department,
  qualification,
  experience,
  image,
  className,
}: FacultyCardProps) {
  return (
    <div
      className={cn(
        'group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-neutral-100 p-4 md:p-5 text-center',
        className
      )}
    >
      {/* Photo Container */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-5 rounded-full overflow-hidden border-4 border-primary-light shadow-inner">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 128px, 160px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Info */}
      <h3 className="text-lg md:text-xl font-bold font-heading text-neutral-900 mb-1 group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3">
        {designation}
      </p>

      <div className="space-y-1.5 pt-4 border-t border-neutral-50">
        <p className="text-neutral-500 text-xs">
          <span className="font-semibold text-neutral-700">Dept:</span> {department}
        </p>
        <p className="text-neutral-500 text-xs">
          <span className="font-semibold text-neutral-700">Exp:</span> {experience}
        </p>
        <p className="text-neutral-600 text-xs mt-2 italic line-clamp-1">
          {qualification}
        </p>
      </div>
    </div>
  );
}
