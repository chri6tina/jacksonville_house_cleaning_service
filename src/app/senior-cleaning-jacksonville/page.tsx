import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'senior-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Senior Cleaning Jacksonville',
  description: pageData?.description ?? 'Senior cleaning services in Jacksonville.',
  canonical: `${SITE_CONFIG.url}/senior-cleaning-jacksonville`,
  keywords: ['senior cleaning Jacksonville', 'senior home cleaning', 'cleaning for seniors'],
});

export default function SeniorCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
