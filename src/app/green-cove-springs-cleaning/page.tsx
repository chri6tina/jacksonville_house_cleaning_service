import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'green-cove-springs-cleaning');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Green Cove Springs Cleaning',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/green-cove-springs-cleaning`,
  keywords: ["Green Cove Springs Cleaning cleaning","Green Cove Springs Cleaning service","Jacksonville cleaning"],
});

export default function GreenCoveSpringsCleaningPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
