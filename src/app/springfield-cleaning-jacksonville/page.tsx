import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'springfield-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Springfield Cleaning Jacksonville',
  description: pageData?.description ?? 'Cleaning services for Springfield Jacksonville.',
  canonical: `${SITE_CONFIG.url}/springfield-cleaning-jacksonville`,
  keywords: ['Springfield Jacksonville cleaning', 'Springfield house cleaning', 'cleaning services Springfield'],
});

export default function SpringfieldCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
