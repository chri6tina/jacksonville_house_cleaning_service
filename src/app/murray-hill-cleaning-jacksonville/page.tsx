import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'murray-hill-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Murray Hill Cleaning Jacksonville',
  description: pageData?.description ?? 'Cleaning services for Murray Hill Jacksonville.',
  canonical: `${SITE_CONFIG.url}/murray-hill-cleaning-jacksonville`,
  keywords: ['Murray Hill Jacksonville cleaning', 'Murray Hill house cleaning', 'cleaning services Murray Hill'],
});

export default function MurrayHillCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
