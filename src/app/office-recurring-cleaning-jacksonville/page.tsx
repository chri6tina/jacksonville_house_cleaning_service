import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'office-recurring-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Office Recurring Cleaning Jacksonville',
  description: pageData?.description ?? 'Recurring office cleaning service in Jacksonville.',
  canonical: `${SITE_CONFIG.url}/office-recurring-cleaning-jacksonville`,
  keywords: ['office cleaning Jacksonville', 'recurring office cleaning', 'commercial cleaning Jacksonville'],
});

export default function OfficeRecurringCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
