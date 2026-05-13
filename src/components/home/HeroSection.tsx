import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  // Mock data for hero
  const heroData = {
    title: 'Nurturing Minds, Building',
    titleAccent: 'Futures',
    subtitle: 'Empowering students to become innovative leaders and compassionate global citizens through holistic learning and academic brilliance.',
    primaryCta: { label: 'Start Admission', href: '/admission' },
    secondaryCta: { label: 'Explore Campus', href: '/facilities' },
    backgroundImage: 'https://images.unsplash.com/photo-1544717305-27a734ef1904?q=80&w=2070&auto=format&fit=crop',
  };

  return (
    <section className="relative min-h-[90vh] md:h-[80vh] w-full flex items-center overflow-hidden bg-neutral-900 py-12 md:py-0">
      {/* Background Image with Priority for LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroData.backgroundImage}
          alt="School Students"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        {/* Refined Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/30 z-10" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-2xl py-8 md:py-0">
          {/* Outlined Badge as per Image */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border-2 border-accent text-accent text-[10px] md:text-sm font-bold uppercase tracking-widest mb-6 md:mb-8">
            Excellence in Education
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-[1.2] sm:leading-[1.1] mb-5 md:mb-6">
            {heroData.title}{' '}
            <span className="text-accent block sm:inline">{heroData.titleAccent}</span>
          </h1>
          
          <p className="text-sm sm:text-lg lg:text-xl text-neutral-200 mb-8 md:mb-10 max-w-xl leading-relaxed">
            {heroData.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href={heroData.primaryCta.href}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 md:px-10 md:py-4 bg-primary text-white rounded-xl font-bold transition-all hover:bg-primary-dark shadow-xl shadow-primary/30 group"
            >
              {heroData.primaryCta.label}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={heroData.secondaryCta.href}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 md:px-10 md:py-4 bg-white text-neutral-900 rounded-xl font-bold transition-all hover:bg-neutral-50 shadow-lg group"
            >
              <Play className="mr-2 h-4 w-4 md:h-5 md:w-5 fill-neutral-900 transition-transform group-hover:scale-110" />
              {heroData.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
