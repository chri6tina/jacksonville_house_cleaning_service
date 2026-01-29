import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'green-cove-springs-cleaning');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Green Cove Springs Cleaning',
  description: pageData?.description ?? 'Cleaning services for Green Cove Springs.',
  canonical: `${SITE_CONFIG.url}/green-cove-springs-cleaning`,
  keywords: ['Green Cove Springs cleaning', 'Green Cove Springs house cleaning', 'cleaning services Green Cove Springs'],
});

export default function GreenCoveSpringsCleaningPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
