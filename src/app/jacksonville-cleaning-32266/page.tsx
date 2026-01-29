import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32266');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32266 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32266.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32266`,
  keywords: ['Jacksonville 32266 cleaning', '32266 house cleaning', 'cleaning services 32266'],
});

export default function JacksonvilleCleaning32266Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
