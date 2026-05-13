import PageWrapper from '@/components/layout/PageWrapper';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/shared/SectionHeader';
import Reveal from '@/components/shared/Reveal';
import CTASection from '@/components/shared/CTASection';
import { Info, CheckCircle2, ShieldCheck, Bus, GraduationCap } from 'lucide-react';

export default function FeeStructurePage() {
  const feeData = [
    { class: 'Nursery - KG', registration: '1,000', admission: '15,000', monthly: '4,500' },
    { class: 'Class 1 - 5', registration: '1,000', admission: '20,000', monthly: '5,500' },
    { class: 'Class 6 - 8', registration: '1,000', admission: '25,000', monthly: '6,500' },
    { class: 'Class 9 - 10', registration: '1,000', admission: '30,000', monthly: '7,500' },
    { class: 'Class 11 - 12', registration: '1,000', admission: '35,000', monthly: '8,500' },
  ];

  return (
    <PageWrapper>
      <PageHero
        title="Fee Structure"
        subtitle="Transparent and affordable investment in your child's future academic excellence."
        backgroundImage="https://images.unsplash.com/photo-1554224155-169641357599?q=80&w=2070&auto=format&fit=crop"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Admission', href: '/admission' },
          { label: 'Fee Structure' },
        ]}
      />

      {/* 1. Fee Table Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Investment in Future"
            title="Standard Fee Schedule"
            subtitle="Academic Year 2025-26. Please note that fees are subject to revision as per school management guidelines."
            centered
          />

          <div className="mt-12 bg-white rounded-[2rem] overflow-x-auto shadow-2xl shadow-neutral-200/50 border border-neutral-100">
            <table className="w-full text-left border-collapse min-w-[700px] md:min-w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider">Class Range</th>
                  <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider">Reg. Fee (One Time)</th>
                  <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider">Admission Fee (One Time)</th>
                  <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider">Monthly Tuition Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeData.map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-50 hover:bg-neutral-50/50 transition-colors">
                    <td className="px-8 py-5 font-bold text-neutral-900">{row.class}</td>
                    <td className="px-8 py-5 text-neutral-600 font-medium">₹ {row.registration}</td>
                    <td className="px-8 py-5 text-neutral-600 font-medium">₹ {row.admission}</td>
                    <td className="px-8 py-5 font-black text-primary">₹ {row.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-2xl">
            <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-xs text-blue-700 leading-relaxed">
              <strong>Note:</strong> Admission fee is non-refundable. Security deposit (if applicable) will be extra and refundable at the time of leaving the school. External examination fees, excursions, and uniforms are not included in the above structure.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Additional Services (Transport/Scholarship) */}
      <section className="py-12 md:py-16 bg-neutral-50/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Transport Card */}
            <Reveal direction="left" width="100%">
              <div className="h-full bg-white p-8 rounded-[2.5rem] border border-neutral-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                    <Bus className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-neutral-900 mb-4">Transport Facility</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                    We provide a safe, GPS-tracked transport network across the city. Transport charges vary based on distance.
                  </p>
                  <ul className="space-y-2">
                    {['Up to 5 KM: ₹ 1,500', '5 - 10 KM: ₹ 2,200', 'Above 10 KM: ₹ 3,000+'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold text-neutral-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Scholarship Card */}
            <Reveal direction="right" width="100%">
              <div className="h-full bg-white p-8 rounded-[2.5rem] border border-neutral-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-neutral-900 mb-4">Scholarship Policy</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                    Meritorious students and siblings of existing students are eligible for scholarships on tuition fees.
                  </p>
                  <ul className="space-y-2">
                    {['Sibling Discount: 25% Off', 'Sports Achievement: 10-50% Off', 'Merit-based (90%+): Up to 100% Off'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold text-neutral-700">
                        <ShieldCheck className="h-4 w-4 text-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
