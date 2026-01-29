import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'riverside-avondale-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Riverside Avondale Cleaning Jacksonville',
  description: pageData?.description ?? 'Cleaning services for Riverside Avondale Jacksonville.',
  canonical: `${SITE_CONFIG.url}/riverside-avondale-cleaning-jacksonville`,
  keywords: ['Riverside Avondale cleaning', 'Riverside Avondale house cleaning', 'cleaning services Riverside Avondale'],
});

export default function RiversideAvondaleCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
