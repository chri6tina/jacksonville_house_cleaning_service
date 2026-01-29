import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32092');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32092 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32092.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32092`,
  keywords: ['Jacksonville 32092 cleaning', '32092 house cleaning', 'cleaning services 32092'],
});

export default function JacksonvilleCleaning32092Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
