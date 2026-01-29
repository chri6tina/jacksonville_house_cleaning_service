import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'riverside-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Riverside Cleaning Jacksonville',
  description: pageData?.description ?? 'Cleaning services for Riverside Jacksonville.',
  canonical: `${SITE_CONFIG.url}/riverside-cleaning-jacksonville`,
  keywords: ['Riverside Jacksonville cleaning', 'Riverside house cleaning', 'cleaning services Riverside'],
});

export default function RiversideCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
