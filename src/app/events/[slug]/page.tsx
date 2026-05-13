import PageWrapper from '@/components/layout/PageWrapper';

interface EventDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;

  return (
    <PageWrapper>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold font-heading text-neutral-900">Event: {slug}</h1>
        <p className="mt-4 text-neutral-500">This is a placeholder for the Event Detail page. Full UI will be built in Phase 3.</p>
      </div>
    </PageWrapper>
  );
}
