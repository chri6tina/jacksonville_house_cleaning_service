import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'san-jose-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'San Jose Cleaning Jacksonville',
  description: pageData?.description ?? 'Cleaning services for San Jose Jacksonville.',
  canonical: `${SITE_CONFIG.url}/san-jose-cleaning-jacksonville`,
  keywords: ['San Jose Jacksonville cleaning', 'San Jose house cleaning', 'cleaning services San Jose'],
});

export default function SanJoseCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
