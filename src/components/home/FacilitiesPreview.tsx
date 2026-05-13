import SectionHeader from '@/components/shared/SectionHeader';
import Reveal from '@/components/shared/Reveal';
import FacilityCard from '@/components/shared/FacilityCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FacilitiesPreview() {
  const facilities = [
    {
      title: 'Science Laboratories',
      description: 'Fully equipped physics, chemistry, and biology labs to encourage hands-on scientific exploration.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop',
      iconName: 'Beaker',
    },
    {
      title: 'Digital Library',
      description: 'A vast collection of books and digital resources to foster a lifelong habit of reading and research.',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop',
      iconName: 'Book',
    },
    {
      title: 'Smart Classrooms',
      description: 'Interactive digital boards and audio-visual aids to make learning more engaging and effective.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop',
      iconName: 'Monitor',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            overline="Our Campus"
            title="World-Class Facilities"
            subtitle="We provide a safe and stimulating environment equipped with modern infrastructure to support your child's growth."
            className="mb-0 max-w-2xl"
          />
          <Link
            href="/facilities"
            className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all shrink-0"
          >
            View All Facilities
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Reveal key={facility.title} delay={index * 0.1} width="100%">
              <FacilityCard {...facility} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
