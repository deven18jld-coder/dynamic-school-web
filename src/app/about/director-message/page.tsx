import PageWrapper from '@/components/layout/PageWrapper';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import Reveal from '@/components/shared/Reveal';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function DirectorMessagePage() {
  const director = {
    name: 'Mr. Rajesh Khanna',
    role: 'Director, Sunrise Public School',
    credentials: 'M.B.A., Former Educational Consultant',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    message: [
      "Our vision for Sunrise Public School has always been to create a space where innovation meets tradition. We are not just building a school; we are building a community of thinkers, creators, and leaders.",
      "As the Director, I am focused on ensuring that our institution provides the best infrastructure and the most advanced teaching methodologies. We invest heavily in our faculty's growth, as we believe that inspired teachers inspire students.",
      "Education is the most powerful tool for social change. By providing a safe and stimulating environment, we aim to help our students find their unique voice and use it for the betterment of society.",
      "Thank you for being a part of our journey as we continue to push the boundaries of what is possible in school education.",
    ]
  };

  return (
    <PageWrapper>
      <PageHero
        title="Director's Message"
        subtitle="Exploring the strategic vision and administrative commitment behind our institution's growth."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: "Director's Message" },
        ]}
      />

      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20">
            {/* Director Image & Credentials */}
            <div className="lg:w-1/3">
              <Reveal direction="right" width="100%">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-100">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-8 text-right lg:text-left">
                  <h2 className="text-2xl font-bold font-heading text-neutral-900 mb-1">{director.name}</h2>
                  <p className="text-primary font-bold text-sm mb-2">{director.role}</p>
                  <p className="text-neutral-500 text-xs italic">{director.credentials}</p>
                </div>
              </Reveal>
            </div>

            {/* Message Content */}
            <div className="lg:w-2/3">
              <Reveal>
                <Quote className="h-12 w-12 text-primary mb-8 fill-primary/10 opacity-50 rotate-180" />
                <div className="space-y-6">
                  {director.message.map((para, i) => (
                    <p key={i} className="text-lg text-neutral-700 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                
                <div className="mt-12 pt-10 border-t border-neutral-100">
                  <p className="text-neutral-900 font-bold italic mb-1">Sincerely,</p>
                  <p className="text-xl font-display font-black text-primary">{director.name}</p>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">Director</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
