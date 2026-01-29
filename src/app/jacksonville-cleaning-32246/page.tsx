import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32246');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32246 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32246.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32246`,
  keywords: ['Jacksonville 32246 cleaning', '32246 house cleaning', 'cleaning services 32246'],
});

export default function JacksonvilleCleaning32246Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
