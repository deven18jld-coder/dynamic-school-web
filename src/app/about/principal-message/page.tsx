import PageWrapper from '@/components/layout/PageWrapper';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import Reveal from '@/components/shared/Reveal';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function PrincipalMessagePage() {
  const principal = {
    name: 'Dr. Sarah Johnson',
    role: 'Principal, Sunrise Public School',
    credentials: 'M.A., B.Ed., PhD in Educational Leadership',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    message: [
      "Welcome to Sunrise Public School. As the Principal, it is my privilege to lead an institution that is deeply committed to the holistic development of every child.",
      "In today's rapidly changing world, education must go beyond textbooks. We focus on nurturing critical thinking, emotional intelligence, and moral values, ensuring our students are not just career-ready, but life-ready.",
      "Our faculty works tirelessly to create a stimulating environment where curiosity is encouraged and every achievement, however small, is celebrated. We believe in the power of partnership between school and parents to help children reach their full potential.",
      "I invite you to explore our campus and witness the vibrant learning culture that defines us.",
    ]
  };

  return (
    <PageWrapper>
      <PageHero
        title="Principal's Message"
        subtitle="Insights and vision from the desk of our leader, guiding our school toward a brighter future."
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb280714553?q=80&w=2070&auto=format&fit=crop"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: "Principal's Message" },
        ]}
      />

      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Principal Image & Credentials */}
            <div className="lg:w-1/3">
              <Reveal direction="left" width="100%">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-100">
                  <Image
                    src={principal.image}
                    alt={principal.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-8">
                  <h2 className="text-2xl font-bold font-heading text-neutral-900 mb-1">{principal.name}</h2>
                  <p className="text-primary font-bold text-sm mb-2">{principal.role}</p>
                  <p className="text-neutral-500 text-xs italic">{principal.credentials}</p>
                </div>
              </Reveal>
            </div>

            {/* Message Content */}
            <div className="lg:w-2/3">
              <Reveal>
                <Quote className="h-12 w-12 text-primary mb-8 fill-primary/10 opacity-50" />
                <div className="space-y-6">
                  {principal.message.map((para, i) => (
                    <p key={i} className="text-lg text-neutral-700 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                
                <div className="mt-12 pt-10 border-t border-neutral-100">
                  <p className="text-neutral-900 font-bold italic mb-1">Warm Regards,</p>
                  <p className="text-xl font-display font-black text-primary">{principal.name}</p>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">Principal</p>
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
