import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'deerwood-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Deerwood Cleaning Jacksonville',
  description: pageData?.description ?? 'Cleaning services for Deerwood Jacksonville.',
  canonical: `${SITE_CONFIG.url}/deerwood-cleaning-jacksonville`,
  keywords: ['Deerwood Jacksonville cleaning', 'Deerwood house cleaning', 'cleaning services Deerwood'],
});

export default function DeerwoodCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
