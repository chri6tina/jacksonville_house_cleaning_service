import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-checklist');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville Cleaning Checklist',
  description: pageData?.description ?? 'Jacksonville cleaning checklist and prep tips.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-checklist`,
  keywords: ['Jacksonville cleaning checklist', 'cleaning checklist', 'home cleaning tips Jacksonville'],
});

export default function JacksonvilleCleaningChecklistPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
