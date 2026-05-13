import PageWrapper from '@/components/layout/PageWrapper';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/shared/SectionHeader';
import CTASection from '@/components/shared/CTASection';
import Reveal from '@/components/shared/Reveal';
import Image from 'next/image';
import { Target, Eye, Heart, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHero
        title="About Our School"
        subtitle="A legacy of excellence in education, nurturing students since 2005 with a blend of modern innovation and traditional values."
        backgroundImage="https://images.unsplash.com/photo-1523050335192-ce125a43129b?q=80&w=2070&auto=format&fit=crop"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* 1. Vision & Mission Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Reveal>
                <div className="flex items-start gap-4 mb-8">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Eye className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-neutral-900 mb-2 text-left">Our Vision</h3>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      To be a global leader in education, inspiring students to achieve academic excellence and social responsibility while fostering a lifelong passion for learning.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-neutral-900 mb-2 text-left">Our Mission</h3>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      We provide a holistic learning environment that empowers students to reach their full potential, develop critical thinking skills, and become innovative leaders of tomorrow.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            
            <div className="order-1 lg:order-2">
              <Reveal direction="right">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
                    alt="School Vision"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. History Section */}
      <section className="py-12 md:py-16 bg-neutral-50/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            overline="Our Journey"
            title="A Legacy of 20 Years"
            subtitle="From a small classroom to a multi-campus institution, we have grown while staying true to our core belief: Every child matters."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { year: '2005', title: 'Foundation', desc: 'The school was founded with 50 students and a vision to provide quality education.' },
              { year: '2015', title: 'CBSE Affiliation', desc: 'Achieved CBSE affiliation and expanded to senior secondary levels.' },
              { year: '2023', title: 'Excellence Award', desc: 'Ranked as the #1 school in the region for academic excellence.' },
            ].map((milestone, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="relative bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm text-left group hover:shadow-xl transition-all duration-300">
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
                    {milestone.year}
                  </div>
                  <h4 className="text-lg font-bold font-heading text-neutral-900 mt-2 mb-3">{milestone.title}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{milestone.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="The Pillars"
            title="Our Core Values"
            subtitle="The fundamental principles that guide our interactions, decisions, and curriculum every single day."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'Integrity', desc: 'Honesty and strong moral principles are at our core.' },
              { icon: Heart, title: 'Compassion', desc: 'We foster empathy and kindness in every student.' },
              { icon: Target, title: 'Excellence', desc: 'Striving for the highest standards in all we do.' },
              { icon: Heart, title: 'Respect', desc: 'Valuing diversity and treating everyone with dignity.' },
            ].map((value, idx) => (
              <Reveal key={idx} delay={idx * 0.1} width="100%">
                <div className="text-center p-6 rounded-3xl bg-neutral-50/50 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300 h-full">
                  <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-bold font-heading text-neutral-900 mb-2">{value.title}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
