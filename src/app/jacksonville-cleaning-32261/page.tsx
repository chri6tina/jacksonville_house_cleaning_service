import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32261');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32261 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32261.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32261`,
  keywords: ['Jacksonville 32261 cleaning', '32261 house cleaning', 'cleaning services 32261'],
});

export default function JacksonvilleCleaning32261Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
