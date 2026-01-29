import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'move-out-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Move-Out Cleaning Jacksonville',
  description: pageData?.description ?? 'Move-out cleaning service in Jacksonville.',
  canonical: `${SITE_CONFIG.url}/move-out-cleaning-jacksonville`,
  keywords: ['move-out cleaning Jacksonville', 'rental cleaning Jacksonville', 'move out cleaning service'],
});

export default function MoveOutCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
