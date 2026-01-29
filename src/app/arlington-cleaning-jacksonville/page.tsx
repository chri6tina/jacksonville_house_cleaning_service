import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'arlington-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Arlington Cleaning Jacksonville',
  description: pageData?.description ?? 'Cleaning services for Arlington Jacksonville.',
  canonical: `${SITE_CONFIG.url}/arlington-cleaning-jacksonville`,
  keywords: ['Arlington Jacksonville cleaning', 'Arlington house cleaning', 'cleaning services Arlington'],
});

export default function ArlingtonCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
