import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'eastside-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Eastside Cleaning Jacksonville',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/eastside-cleaning-jacksonville`,
  keywords: ["Eastside Cleaning Jacksonville cleaning","Eastside Cleaning Jacksonville service","Jacksonville cleaning"],
});

export default function EastsideCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
