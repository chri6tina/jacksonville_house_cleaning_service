import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32228');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32228 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32228.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32228`,
  keywords: ['Jacksonville 32228 cleaning', '32228 house cleaning', 'cleaning services 32228'],
});

export default function JacksonvilleCleaning32228Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
