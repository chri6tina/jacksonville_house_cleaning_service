import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32260');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32260 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32260.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32260`,
  keywords: ['Jacksonville 32260 cleaning', '32260 house cleaning', 'cleaning services 32260'],
});

export default function JacksonvilleCleaning32260Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
