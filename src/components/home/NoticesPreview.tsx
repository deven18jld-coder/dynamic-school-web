import SectionHeader from '@/components/shared/SectionHeader';
import NoticeItem from '@/components/shared/NoticeItem';
import Link from 'next/link';
import { ArrowRight, Bell } from 'lucide-react';

export default function NoticesPreview() {
  const notices = [
    {
      title: 'Summer Vacation Schedule for Academic Year 2024',
      category: 'Holiday',
      date: '2024-05-12',
      isUrgent: true,
      description: 'The school will remain closed for summer break from May 20th to June 30th. Administrative office will remain open.',
      attachmentUrl: '#',
    },
    {
      title: 'Final Examination Datesheet - Class X & XII',
      category: 'Exam',
      date: '2024-05-08',
      description: 'Download the updated datesheet for the upcoming final board examinations starting from next month.',
      attachmentUrl: '#',
    },
    {
      title: 'Revised School Timings from Next Monday',
      category: 'General',
      date: '2024-05-05',
      description: 'Please note the change in school timings due to the upcoming heatwave conditions.',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-neutral-50/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Column 1: Header */}
          <div className="lg:w-1/3">
            <SectionHeader
              overline="Information"
              title="Notice Board"
              subtitle="Get the latest updates, circulars, and official announcements directly from the school administration."
              className="mb-8"
            />
            
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <div className="flex items-center gap-3 text-primary font-bold mb-4">
                <Bell className="h-5 w-5 animate-bounce" />
                <span>Urgent Updates</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Never miss an important update. We recommend checking the notice board daily for exams and event news.
              </p>
              <Link
                href="/notices"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm transition-all hover:bg-primary-dark"
              >
                View Full Notice Board
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: List */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {notices.map((notice, index) => (
                <NoticeItem key={index} {...notice} />
              ))}
            </div>
            
            <div className="mt-8 text-center lg:text-left">
              <Link
                href="/notices"
                className="inline-flex items-center text-sm font-bold text-neutral-500 hover:text-primary transition-colors"
              >
                See past circulars and archives
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
