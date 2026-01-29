import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'same-day-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Same-Day Cleaning Jacksonville',
  description: pageData?.description ?? 'Same-day cleaning service in Jacksonville.',
  canonical: `${SITE_CONFIG.url}/same-day-cleaning-jacksonville`,
  keywords: ['same-day cleaning Jacksonville', 'fast cleaning service', 'local cleaning Jacksonville'],
});

export default function SameDayCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
