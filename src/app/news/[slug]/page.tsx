import PageWrapper from '@/components/layout/PageWrapper';

interface NewsPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params;

  return (
    <PageWrapper>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold font-heading text-neutral-900">News: {slug}</h1>
        <p className="mt-4 text-neutral-500">This is a placeholder for the News Post page. Full UI will be built in Phase 3.</p>
      </div>
    </PageWrapper>
  );
}
