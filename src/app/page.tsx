import PageWrapper from '@/components/layout/PageWrapper';
import HeroSection from '@/components/home/HeroSection';
import AdmissionBanner from '@/components/home/AdmissionBanner';
import StatsBar from '@/components/home/StatsBar';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FacilitiesPreview from '@/components/home/FacilitiesPreview';
import ResultsPreview from '@/components/home/ResultsPreview';
import AchievementsPreview from '@/components/home/AchievementsPreview';
import PrincipalPreview from '@/components/home/PrincipalPreview';
import NewsPreview from '@/components/home/NewsPreview';
import EventsPreview from '@/components/home/EventsPreview';
import GalleryPreview from '@/components/home/GalleryPreview';
import Testimonials from '@/components/home/Testimonials';
import NoticesPreview from '@/components/home/NoticesPreview';
import EnquiryFormInline from '@/components/home/EnquiryFormInline';
import MapSection from '@/components/home/MapSection';

export default function HomePage() {
  return (
    <PageWrapper>
      {/* 1. Hero Section (Above the fold) */}
      <HeroSection />

      {/* 2. Admission Banner */}
      <AdmissionBanner />

      {/* 3. Key Stats */}
      <StatsBar />

      {/* 4. Core Values / Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Facilities Preview */}
      <FacilitiesPreview />

      {/* 6. Board Results Celebration */}
      <ResultsPreview />

      {/* 7. Student Achievements */}
      <AchievementsPreview />

      {/* 8. Principal's Message */}
      <PrincipalPreview />

      {/* 9. Latest News & Stories */}
      <NewsPreview />

      {/* 10. Upcoming Events */}
      <EventsPreview />

      {/* 11. Campus Gallery */}
      <GalleryPreview />

      {/* 12. Testimonials */}
      <Testimonials />

      {/* 13. Notice Board */}
      <NoticesPreview />

      {/* 14. Lead Capture Form */}
      <EnquiryFormInline />

      {/* 15. Location Map */}
      <MapSection />
    </PageWrapper>
  );
}
