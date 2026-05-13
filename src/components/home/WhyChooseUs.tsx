import SectionHeader from '@/components/shared/SectionHeader';
import Reveal from '@/components/shared/Reveal';
import { ShieldCheck, Target, Zap, Globe, Heart, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Academic Excellence',
      description: 'Consistently achieving 100% board results with a focus on conceptual clarity and critical thinking.',
      icon: Target,
      color: 'bg-blue-500',
    },
    {
      title: 'Holistic Development',
      description: 'Balancing academics with sports, arts, and value-based education for all-round personality growth.',
      icon: Heart,
      color: 'bg-red-500',
    },
    {
      title: 'Modern Infrastructure',
      description: 'Smart classrooms, advanced labs, and a sprawling campus designed for safe and engaging learning.',
      icon: Zap,
      color: 'bg-amber-500',
    },
    {
      title: 'Global Perspective',
      description: 'Preparing students for global challenges through international collaborations and modern curriculum.',
      icon: Globe,
      color: 'bg-indigo-500',
    },
    {
      title: 'Expert Mentors',
      description: 'A highly qualified and compassionate faculty dedicated to unlocking the potential of every child.',
      icon: ShieldCheck,
      color: 'bg-emerald-500',
    },
    {
      title: 'Legacy of Trust',
      description: 'Over 25 years of experience in shaping the futures of thousands of successful alumni.',
      icon: Award,
      color: 'bg-purple-500',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-neutral-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="The School Difference"
          title="Why Choose Our School?"
          subtitle="We combine tradition with innovation to provide an educational experience that goes beyond textbooks."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.1} width="100%">
              <div
                className="group bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 h-full flex flex-col items-start"
              >
                <div
                  className={cn(
                    'h-12 w-12 rounded-2xl flex items-center justify-center mb-5 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg',
                    feature.color
                  )}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
