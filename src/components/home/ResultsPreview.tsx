import SectionHeader from '@/components/shared/SectionHeader';
import TopperCard from '@/components/shared/TopperCard';
import Link from 'next/link';
import { ArrowRight, Award } from 'lucide-react';

export default function ResultsPreview() {
  const toppers = [
    {
      name: 'Aditya Sharma',
      score: '98.4',
      rank: '1',
      class_name: 'XII',
      year: '2024',
      stream: 'Science',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: 'Priya Verma',
      score: '97.8',
      rank: '2',
      class_name: 'XII',
      year: '2024',
      stream: 'Commerce',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: 'Rohan Gupta',
      score: '97.2',
      rank: '3',
      class_name: 'X',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-primary-light/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            overline="Academic Brilliance"
            title="Celebrating Board Results"
            subtitle="Our students consistently achieve outstanding results in board examinations, reflecting our commitment to academic excellence."
            className="mb-0 max-w-2xl"
          />
          <Link
            href="/results"
            className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all shrink-0"
          >
            View Full Results
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {toppers.map((topper) => (
            <TopperCard key={topper.name} {...topper} />
          ))}
        </div>

        {/* Quick Stats for Results */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-black text-primary mb-1">100%</p>
            <p className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest">Pass Percentage</p>
          </div>
          <div className="text-center border-l border-neutral-100">
            <p className="text-2xl md:text-3xl font-black text-primary mb-1">85%</p>
            <p className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest">Distinctions</p>
          </div>
          <div className="text-center border-l border-neutral-100">
            <p className="text-2xl md:text-3xl font-black text-primary mb-1">98.4%</p>
            <p className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest">Highest Score</p>
          </div>
          <div className="text-center border-l border-neutral-100">
            <p className="text-2xl md:text-3xl font-black text-primary mb-1">150+</p>
            <p className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest">90%+ Scorers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
