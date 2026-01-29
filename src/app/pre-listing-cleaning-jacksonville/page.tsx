import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'pre-listing-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Pre-Listing Cleaning Jacksonville',
  description: pageData?.description ?? 'Pre-listing cleaning service in Jacksonville.',
  canonical: `${SITE_CONFIG.url}/pre-listing-cleaning-jacksonville`,
  keywords: ['pre-listing cleaning Jacksonville', 'realtor cleaning Jacksonville', 'home staging cleaning'],
});

export default function PreListingCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
