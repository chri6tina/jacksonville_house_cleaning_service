import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'apartment-deep-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Apartment Deep Cleaning Jacksonville',
  description: pageData?.description ?? 'Apartment deep cleaning service in Jacksonville.',
  canonical: `${SITE_CONFIG.url}/apartment-deep-cleaning-jacksonville`,
  keywords: ['apartment deep cleaning Jacksonville', 'apartment cleaning Jacksonville', 'deep cleaning apartments'],
});

export default function ApartmentDeepCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
