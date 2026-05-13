import SectionHeader from '@/components/shared/SectionHeader';
import Reveal from '@/components/shared/Reveal';
import NewsCard from '@/components/shared/NewsCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NewsPreview() {
  const newsItems = [
    {
      title: 'Annual Sports Meet 2024: A Grand Success',
      excerpt: 'The annual sports meet concluded yesterday with the Blue House winning the championship trophy.',
      image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop',
      date: '2024-05-10',
      slug: 'annual-sports-meet-2024-success',
      category: 'Sports',
    },
    {
      title: 'School Reopens for Academic Year 2024-25',
      excerpt: 'We are excited to welcome students back for the new session starting this Monday.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop',
      date: '2024-04-01',
      slug: 'school-reopens-2024',
      category: 'Academic',
    },
    {
      title: 'Inter-School Science Fair Winners',
      excerpt: 'Our students bagged three awards at the Regional Science Fair held at Science City.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop',
      date: '2024-03-20',
      slug: 'science-fair-winners-2024',
      category: 'Academic',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-neutral-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            overline="School Updates"
            title="Latest News & Stories"
            subtitle="Stay informed about the latest happenings, academic achievements, and cultural events at our school."
            className="mb-0 max-w-2xl"
          />
          <Link
            href="/news"
            className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all shrink-0"
          >
            Explore All News
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <Reveal key={news.title} delay={index * 0.1} width="100%">
              <NewsCard {...news} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
