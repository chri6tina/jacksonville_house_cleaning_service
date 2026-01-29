import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'beaches-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville Beaches Cleaning',
  description: pageData?.description ?? 'Cleaning services for Jacksonville Beach communities.',
  canonical: `${SITE_CONFIG.url}/beaches-cleaning-jacksonville`,
  keywords: ['Jacksonville beaches cleaning', 'beach house cleaning', 'cleaning services Jacksonville Beaches'],
});

export default function BeachesCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
