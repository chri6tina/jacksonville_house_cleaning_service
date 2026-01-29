import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-beach-cleaning');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville Beach Cleaning',
  description: pageData?.description ?? 'Cleaning services for Jacksonville Beach.',
  canonical: `${SITE_CONFIG.url}/jacksonville-beach-cleaning`,
  keywords: ['Jacksonville Beach cleaning', 'beach house cleaning', 'cleaning services Jacksonville Beach'],
});

export default function JacksonvilleBeachCleaningPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
