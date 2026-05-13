'use client';

import SectionHeader from '@/components/shared/SectionHeader';
import TestimonialCard from '@/components/shared/TestimonialCard';
import { cn } from '@/lib/utils';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Malhotra',
      role: 'Parent of Class 8 Student',
      content: 'The school has provided an incredible platform for my son to grow not just academically, but also in his sports abilities. The faculty is extremely supportive and approachable.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
      rating: 5,
    },
    {
      name: 'Anjali Sharma',
      role: 'Parent of Class 2 Student',
      content: 'Choosing this school was the best decision for our daughter. The holistic approach to education and the emphasis on values really sets them apart from others.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'Alumni (Batch of 2018)',
      content: 'The foundation I received here has been instrumental in my career. The teachers didnt just teach subjects; they taught us how to think and innovate.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Voice of Parents"
          title="What People Say About Us"
          subtitle="Join the thousands of happy families who have entrusted their children's future to our institution."
          centered
        />

        {/* Lightweight CSS Scroll-Snap Slider */}
        <div className="relative">
          <div 
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-center"
              >
                <TestimonialCard {...testimonial} className="h-full" />
              </div>
            ))}
          </div>

          {/* Custom Scrollbar / Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === 0 ? "w-8 bg-primary" : "w-2 bg-neutral-200"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
