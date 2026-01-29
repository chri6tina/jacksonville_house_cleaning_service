import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-beach-cleaning');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville Beach Cleaning',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/jacksonville-beach-cleaning`,
  keywords: ["Jacksonville Beach Cleaning cleaning","Jacksonville Beach Cleaning service","Jacksonville cleaning"],
});

export default function JacksonvilleBeachCleaningPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
