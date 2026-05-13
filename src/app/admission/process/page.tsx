import PageWrapper from '@/components/layout/PageWrapper';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/shared/SectionHeader';
import CTASection from '@/components/shared/CTASection';
import Reveal from '@/components/shared/Reveal';
import { ClipboardCheck, FileText, Calendar, UserCheck, CreditCard } from 'lucide-react';

export default function AdmissionProcessPage() {
  const steps = [
    {
      icon: FileText,
      title: 'Enquiry & Registration',
      desc: 'Fill out the online enquiry form or visit the school campus to register your child.'
    },
    {
      icon: UserCheck,
      title: 'Interaction / Assessment',
      desc: 'An informal interaction with the child and parents to understand the student\'s aptitude.'
    },
    {
      icon: ClipboardCheck,
      title: 'Document Verification',
      desc: 'Submit required documents including birth certificate and previous academic records.'
    },
    {
      icon: CreditCard,
      title: 'Fee Payment',
      desc: 'Upon selection, complete the admission formalities by paying the admission and first-term fees.'
    }
  ];

  const documents = [
    'Birth Certificate (Attested Copy)',
    'Previous Class Report Card (Original)',
    'Transfer Certificate (Original)',
    '6 Passport Size Photographs (Child)',
    'Aadhar Card (Child & Parents)',
    'Proof of Residence (Electricity Bill/Voter ID)'
  ];

  return (
    <PageWrapper>
      <PageHero
        title="Admission Process"
        subtitle="A clear, step-by-step guide to securing your child's future at Sunrise Public School."
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Admission', href: '/admission' },
          { label: 'Process' },
        ]}
      />

      {/* 1. Step-by-Step Flow */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="The Journey"
            title="How to Apply"
            subtitle="Follow these simple steps to complete your child's admission process."
            centered
          />

          <div className="relative mt-16">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-neutral-100 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="flex flex-col items-center text-center p-6 bg-white border border-neutral-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
                    <div className="h-16 w-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div className="absolute top-4 right-6 text-4xl font-black text-neutral-50 group-hover:text-primary/5 transition-colors">
                      {idx + 1}
                    </div>
                    <h3 className="text-lg font-bold font-heading text-neutral-900 mb-3">{step.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Documents Section */}
      <section className="py-12 md:py-16 bg-neutral-900 text-white overflow-hidden relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal direction="left">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Documents Required</h2>
                <p className="text-neutral-400 mb-10 leading-relaxed max-w-xl">
                  Please ensure you have the following documents ready for a smooth admission process. All photocopies must be self-attested.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {documents.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Calendar className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm font-medium text-neutral-200">{doc}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            
            <div className="hidden lg:block">
              <Reveal direction="right">
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
                  <div className="absolute inset-8 border-2 border-white/10 rounded-full" />
                  <div className="absolute inset-16 bg-neutral-800 rounded-3xl shadow-2xl flex items-center justify-center border border-white/5">
                    <FileText className="h-24 w-24 text-primary" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Important Notes */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="p-8 rounded-[2.5rem] bg-accent/10 border-2 border-accent/20">
              <h3 className="text-xl font-bold font-heading text-neutral-900 mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Important Dates
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-accent/10">
                  <span className="text-sm font-medium text-neutral-700">Admission Starts</span>
                  <span className="text-sm font-bold text-neutral-900">1st September 2024</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-accent/10">
                  <span className="text-sm font-medium text-neutral-700">Entrance Test (Grade 1+)</span>
                  <span className="text-sm font-bold text-neutral-900">Bi-weekly Saturdays</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-neutral-700">Orientation Day</span>
                  <span className="text-sm font-bold text-neutral-900">TBD (March 2025)</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
