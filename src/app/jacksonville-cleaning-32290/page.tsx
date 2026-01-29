import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32290');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32290 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32290.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32290`,
  keywords: ['Jacksonville 32290 cleaning', '32290 house cleaning', 'cleaning services 32290'],
});

export default function JacksonvilleCleaning32290Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
