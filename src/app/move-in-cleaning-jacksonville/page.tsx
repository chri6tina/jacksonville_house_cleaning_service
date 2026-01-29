import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'move-in-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Move In Cleaning Jacksonville',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/move-in-cleaning-jacksonville`,
  keywords: ["Move In Cleaning Jacksonville cleaning","Move In Cleaning Jacksonville service","Jacksonville cleaning"],
});

export default function MoveInCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
