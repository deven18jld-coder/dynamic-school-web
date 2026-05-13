import PageWrapper from '@/components/layout/PageWrapper';

interface GalleryAlbumPageProps {
  params: Promise<{ album: string }>;
}

export default async function GalleryAlbumPage({ params }: GalleryAlbumPageProps) {
  const { album } = await params;

  return (
    <PageWrapper>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold font-heading text-neutral-900">Gallery Album: {album}</h1>
        <p className="mt-4 text-neutral-500">This is a placeholder for the Gallery Album page. Full UI will be built in Phase 3.</p>
      </div>
    </PageWrapper>
  );
}
