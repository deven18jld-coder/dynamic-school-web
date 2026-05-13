import PageWrapper from '@/components/layout/PageWrapper';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/shared/SectionHeader';
import CTASection from '@/components/shared/CTASection';
import Reveal from '@/components/shared/Reveal';
import { CheckCircle2, User, Phone, Mail, GraduationCap, Send, HelpCircle, ChevronDown } from 'lucide-react';

export default function AdmissionPage() {
  return (
    <PageWrapper>
      <PageHero
        title="Admissions 2025-26"
        subtitle="Begin your child's journey toward excellence. Our admission process is transparent, straightforward, and designed to welcome your family into our community."
        backgroundImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Admission' },
        ]}
      />

      {/* 1. Admission Overview & Highlights */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  Limited Seats Available
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6">
                  Nurturing the Next Generation of Leaders
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  We are now accepting applications for the 2025-26 academic session for classes Pre-Nursery to Grade IX and Grade XI. Join a community that prioritizes holistic growth and academic brilliance.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Age-appropriate curriculum for all levels',
                    'Experienced and passionate teaching faculty',
                    'State-of-the-art labs and sports facilities',
                    'Strong focus on values and character building',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-neutral-800 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Compact Enquiry Form */}
            <div id="enquiry-form">
              <Reveal direction="right">
                <div className="bg-neutral-50 p-6 md:p-8 rounded-[2rem] border border-neutral-100 shadow-xl shadow-neutral-200/50">
                  <h3 className="text-xl font-bold font-heading text-neutral-900 mb-2">Admission Enquiry</h3>
                  <p className="text-sm text-neutral-500 mb-6">Fill the form below and our admission counselor will contact you shortly.</p>
                  
                  <form className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                      <input 
                        type="text" 
                        placeholder="Student Name" 
                        className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                        <input 
                          type="tel" 
                          placeholder="Parent Phone" 
                          className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                        <select className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
                          <option value="">Select Class</option>
                          <option value="nursery">Nursery</option>
                          <option value="primary">Primary</option>
                          <option value="secondary">Secondary</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
                      </div>
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                      <textarea 
                        rows={3}
                        placeholder="Any specific questions?" 
                        className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full py-4 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
                    >
                      Submit Application
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAQ Section (Accordion) */}
      <section className="py-12 md:py-16 bg-neutral-50/50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Common Questions"
            title="Admission FAQs"
            subtitle="Everything you need to know about joining Sunrise Public School."
            centered
          />

          <div className="space-y-4 mt-8">
            {[
              { q: 'What is the minimum age for Nursery admission?', a: 'As per Govt. norms, the child should be 3+ years old as of 31st March of the admission year.' },
              { q: 'Do you provide school transport?', a: 'Yes, we have a safe and well-connected transport network covering all major parts of the city.' },
              { q: 'What are the documents required during admission?', a: 'Birth Certificate, Aadhar Card, Previous Class Report Card, and Passport size photographs.' },
              { q: 'Is there an entrance test for new admissions?', a: 'Yes, an interaction/assessment is conducted for Grade 1 onwards to understand the student\'s level.' },
            ].map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.1} width="100%">
                <div className="bg-white rounded-2xl border border-neutral-100 p-5 shadow-sm group hover:border-primary/20 transition-all cursor-pointer">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-primary" />
                      <h4 className="text-sm md:text-base font-bold text-neutral-900">{faq.q}</h4>
                    </div>
                    <ChevronDown className="h-4 w-4 text-neutral-400 group-hover:text-primary transition-all" />
                  </div>
                  <div className="mt-3 text-sm text-neutral-500 leading-relaxed pl-8 border-l-2 border-primary/10 ml-2.5">
                    {faq.a}
                  </div>
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
