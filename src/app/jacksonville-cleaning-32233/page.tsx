import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32233');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32233 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32233.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32233`,
  keywords: ['Jacksonville 32233 cleaning', '32233 house cleaning', 'cleaning services 32233'],
});

export default function JacksonvilleCleaning32233Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
