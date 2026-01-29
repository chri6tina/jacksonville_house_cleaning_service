import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'westside-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Westside Cleaning Jacksonville',
  description: pageData?.description ?? 'Cleaning services for Westside Jacksonville.',
  canonical: `${SITE_CONFIG.url}/westside-cleaning-jacksonville`,
  keywords: ['Westside Jacksonville cleaning', 'Westside house cleaning', 'cleaning services Westside'],
});

export default function WestsideCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
