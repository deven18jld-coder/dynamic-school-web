import Image from 'next/image';
import Link from 'next/link';
import { Camera, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function GalleryPreview() {
  const images = [
    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524178232363-1fb280714553?q=80&w=2070&auto=format&fit=crop',
  ];

  return (
    <section className="py-12 md:py-16 bg-neutral-900 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Visual Journey"
          title="Campus Life in Photos"
          subtitle="Explore the vibrant moments of learning, play, and celebration at our school campus."
          centered
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                'group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg',
                index === 0 && 'col-span-2 row-span-2 aspect-auto'
              )}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes={index === 0 ? '(max-width: 1024px) 100vw, 50vw' : '25vw'}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}

          {/* View All Card */}
          <Link
            href="/gallery"
            className="group relative aspect-square rounded-2xl overflow-hidden bg-primary flex flex-col items-center justify-center text-center p-6 transition-all hover:bg-primary-dark"
          >
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
              <Camera className="h-6 w-6" />
            </div>
            <p className="text-white font-bold text-lg mb-1">View Full Gallery</p>
            <p className="text-white/70 text-xs">500+ Photos & Videos</p>
            <ArrowRight className="mt-4 h-5 w-5 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Inline helper because I can't import cn if I'm building a new file without checking exports
import { cn } from '@/lib/utils';
