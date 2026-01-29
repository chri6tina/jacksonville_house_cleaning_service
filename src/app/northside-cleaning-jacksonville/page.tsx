import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'northside-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Northside Cleaning Jacksonville',
  description: pageData?.description ?? 'Cleaning services for Northside Jacksonville.',
  canonical: `${SITE_CONFIG.url}/northside-cleaning-jacksonville`,
  keywords: ['Northside Jacksonville cleaning', 'Northside house cleaning', 'cleaning services Northside'],
});

export default function NorthsideCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
