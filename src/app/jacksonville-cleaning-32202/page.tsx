import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32202');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32202 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32202.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32202`,
  keywords: ['Jacksonville 32202 cleaning', '32202 house cleaning', 'cleaning services 32202'],
});

export default function JacksonvilleCleaning32202Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
