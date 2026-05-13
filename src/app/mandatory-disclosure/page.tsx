import PageWrapper from '@/components/layout/PageWrapper';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/shared/SectionHeader';
import Reveal from '@/components/shared/Reveal';
import { FileText, Download, CheckCircle2 } from 'lucide-react';

export default function MandatoryDisclosurePage() {
  const documents = [
    { name: 'Affiliation Letter', link: '#' },
    { name: 'Trust/Society/Company Registration', link: '#' },
    { name: 'No Objection Certificate (NOC)', link: '#' },
    { name: 'Recognition Certificate', link: '#' },
    { name: 'Building Safety Certificate', link: '#' },
    { name: 'Fire Safety Certificate', link: '#' },
    { name: 'DEO Certificate for Affiliation', link: '#' },
    { name: 'Water & Sanitation Certificate', link: '#' },
  ];

  const statistics = [
    { label: 'Total Campus Area', value: '5 Acres' },
    { label: 'Total Classrooms', value: '45' },
    { label: 'Laboratories', value: '8' },
    { label: 'Library Facilities', value: 'Available' },
    { label: 'Playground Area', value: '15000 sq m' },
  ];

  return (
    <PageWrapper>
      <PageHero
        title="Mandatory Disclosure"
        subtitle="Transparent information and official documentation as per the latest CBSE guidelines."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Mandatory Disclosure' },
        ]}
      />

      {/* 1. Official Documents Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Transparency"
            title="A: Documents & Information"
            subtitle="View or download the official certificates and legal documents pertaining to the school operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc, idx) => (
              <Reveal key={idx} delay={idx * 0.05} width="100%">
                <div className="flex items-center justify-between p-4 rounded-xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:border-primary/20 hover:shadow-md transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-bold text-neutral-800">{doc.name}</span>
                  </div>
                  <a
                    href={doc.link}
                    className="p-2 rounded-lg bg-white border border-neutral-200 text-neutral-400 hover:text-primary hover:border-primary transition-all shadow-sm"
                    title="Download Document"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Infrastructure Stats Section */}
      <section className="py-12 md:py-16 bg-neutral-50/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Facilities"
            title="B: Infrastructure Details"
            subtitle="Comprehensive breakdown of physical assets and educational infrastructure available on campus."
          />

          <div className="bg-white rounded-3xl overflow-x-auto shadow-xl border border-neutral-100">
            <table className="w-full text-left border-collapse min-w-[500px] md:min-w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-sm font-bold">Category</th>
                  <th className="px-6 py-4 text-sm font-bold">Details</th>
                  <th className="px-6 py-4 text-sm font-bold hidden sm:table-cell">Status</th>
                </tr>
              </thead>
              <tbody>
                {statistics.map((stat, idx) => (
                  <tr key={idx} className="border-b border-neutral-50 hover:bg-neutral-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-neutral-900">{stat.label}</td>
                    <td className="px-6 py-4 text-sm text-neutral-600">{stat.value}</td>
                    <td className="px-6 py-4 hidden sm:table-cell">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Academic Details (Optional Preview) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Academics"
            title="C: Results & Academics"
            subtitle="Overview of academic performance and teaching methodologies."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-neutral-900 text-white flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold mb-4">Last 3 Year Result</h4>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  The school has consistently maintained a 100% pass rate in CBSE Board Examinations for the last three consecutive years.
                </p>
              </div>
              <button className="w-fit px-6 py-2 border border-white/20 rounded-lg text-xs font-bold hover:bg-white hover:text-neutral-900 transition-all">
                View Detailed Results
              </button>
            </div>
            
            <div className="p-8 rounded-3xl bg-primary text-white flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold mb-4">School Management</h4>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  Information about the SMC (School Management Committee) and PTA (Parent Teacher Association) members.
                </p>
              </div>
              <button className="w-fit px-6 py-2 bg-white text-primary rounded-lg text-xs font-bold hover:bg-neutral-100 transition-all shadow-lg">
                View SMC Members
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
