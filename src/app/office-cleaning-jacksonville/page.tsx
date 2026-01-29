import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'office-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Office Cleaning Jacksonville',
  description: pageData?.description ?? 'Office cleaning services in Jacksonville.',
  canonical: `${SITE_CONFIG.url}/office-cleaning-jacksonville`,
  keywords: ['office cleaning Jacksonville', 'office cleaning service', 'commercial office cleaning'],
});

export default function OfficeCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
