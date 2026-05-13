import SectionHeader from '@/components/shared/SectionHeader';
import EventCard from '@/components/shared/EventCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function EventsPreview() {
  const events = [
    {
      title: 'Parent-Teacher Meeting (Term 1)',
      date: '2024-06-15',
      time: '09:00 AM - 01:00 PM',
      location: 'School Auditorium',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb280714553?q=80&w=2070&auto=format&fit=crop',
      slug: 'ptm-term-1-2024',
    },
    {
      title: 'Inter-House Drama Competition',
      date: '2024-07-02',
      time: '10:30 AM onwards',
      location: 'Activity Hall',
      image: 'https://images.unsplash.com/photo-1503091315242-cb8bb2321c8e?q=80&w=2070&auto=format&fit=crop',
      slug: 'drama-competition-2024',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            overline="Upcoming"
            title="Mark Your Calendar"
            subtitle="Don't miss out on our upcoming academic schedules, workshops, and extracurricular activities."
            className="mb-0 max-w-2xl"
          />
          <Link
            href="/events"
            className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all shrink-0"
          >
            View All Events
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
