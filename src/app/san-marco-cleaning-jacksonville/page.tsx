import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'san-marco-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'San Marco Cleaning Jacksonville',
  description: pageData?.description ?? 'Cleaning services for San Marco Jacksonville.',
  canonical: `${SITE_CONFIG.url}/san-marco-cleaning-jacksonville`,
  keywords: ['San Marco Jacksonville cleaning', 'San Marco house cleaning', 'cleaning services San Marco'],
});

export default function SanMarcoCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
