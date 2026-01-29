import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'st-johns-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'St. Johns Cleaning Services',
  description: pageData?.description ?? 'Cleaning services for St. Johns.',
  canonical: `${SITE_CONFIG.url}/st-johns-cleaning-jacksonville`,
  keywords: ['St. Johns cleaning', 'St. Johns house cleaning', 'cleaning services St. Johns'],
});

export default function StJohnsCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
