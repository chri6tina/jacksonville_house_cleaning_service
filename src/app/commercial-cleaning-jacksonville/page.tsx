import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'commercial-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Commercial Cleaning Jacksonville',
  description: pageData?.description ?? 'Commercial cleaning services in Jacksonville.',
  canonical: `${SITE_CONFIG.url}/commercial-cleaning-jacksonville`,
  keywords: ['commercial cleaning Jacksonville', 'business cleaning Jacksonville', 'commercial janitorial'],
});

export default function CommercialCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
