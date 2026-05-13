import { Trophy, Users, BookOpen, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StatsBar() {
  const stats = [
    {
      label: 'Years of Excellence',
      value: '25+',
      icon: Clock,
      color: 'text-primary',
      bg: 'bg-primary-light',
    },
    {
      label: 'Students Enrolled',
      value: '2500+',
      icon: Users,
      color: 'text-accent-dark',
      bg: 'bg-accent-light',
    },
    {
      label: 'Qualified Teachers',
      value: '120+',
      icon: BookOpen,
      color: 'text-success',
      bg: 'bg-green-50',
    },
    {
      label: 'State/National Awards',
      value: '50+',
      icon: Trophy,
      color: 'text-danger',
      bg: 'bg-red-50',
    },
  ];

  return (
    <section className="py-8 md:py-14 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                'flex flex-col items-center text-center p-5 rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-neutral-200/40 border border-transparent hover:border-neutral-100',
                index % 2 === 0 ? 'bg-neutral-50/50' : 'bg-white'
              )}
            >
              <div
                className={cn(
                  'h-14 w-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm',
                  stat.bg,
                  stat.color
                )}
              >
                <stat.icon className="h-7 w-7" />
              </div>
              <p className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-2">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm font-bold text-neutral-500 uppercase tracking-widest leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
