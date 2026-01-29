import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'recurring-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Recurring Cleaning Jacksonville',
  description: pageData?.description ?? 'Recurring cleaning services in Jacksonville.',
  canonical: `${SITE_CONFIG.url}/recurring-cleaning-jacksonville`,
  keywords: ['recurring cleaning Jacksonville', 'weekly cleaning', 'bi-weekly cleaning Jacksonville'],
});

export default function RecurringCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
