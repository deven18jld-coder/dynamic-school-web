import SectionHeader from '@/components/shared/SectionHeader';
import AchievementCard from '@/components/shared/AchievementCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AchievementsPreview() {
  const achievements = [
    {
      title: 'First Prize in National Science Olympiad',
      studentName: 'Aryan Kapoor',
      studentClass: 'IX',
      category: 'Academic',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
      description: 'Aryan secured the gold medal in the National Science Olympiad, competing against 5000+ students across India.',
    },
    {
      title: 'State Level Inter-School Football Champions',
      studentName: 'Senior Boys Team',
      studentClass: 'X-XII',
      category: 'Sports',
      date: '2024-02-10',
      image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop',
      description: 'Our school football team clinched the state championship trophy for the second consecutive year.',
    },
    {
      title: 'Winners of Regional Debate Competition',
      studentName: 'Meera & Sameer',
      studentClass: 'XI',
      category: 'Cultural',
      date: '2024-04-05',
      image: 'https://images.unsplash.com/photo-1475721027187-402ad2989a3b?q=80&w=2070&auto=format&fit=crop',
      description: 'Our debating duo won the "Best Speaker" and "Best Team" awards at the Inter-School Regional Debate.',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            overline="Beyond Academics"
            title="Recent Achievements"
            subtitle="Celebrating the diverse talents and exceptional accomplishments of our students across sports, arts, and innovation."
            className="mb-0 max-w-2xl"
          />
          <Link
            href="/achievements"
            className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all shrink-0"
          >
            Explore All Achievements
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.title} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}
