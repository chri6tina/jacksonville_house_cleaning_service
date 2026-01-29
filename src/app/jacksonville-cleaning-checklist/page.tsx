import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-checklist');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville Cleaning Checklist',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-checklist`,
  keywords: ["Jacksonville Cleaning Checklist cleaning","Jacksonville Cleaning Checklist service","Jacksonville cleaning"],
});

export default function JacksonvilleCleaningChecklistPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
