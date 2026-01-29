import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'southside-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Southside Cleaning Jacksonville',
  description: pageData?.description ?? 'Cleaning services for Southside Jacksonville.',
  canonical: `${SITE_CONFIG.url}/southside-cleaning-jacksonville`,
  keywords: ['Southside Jacksonville cleaning', 'Southside house cleaning', 'cleaning services Southside'],
});

export default function SouthsideCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
