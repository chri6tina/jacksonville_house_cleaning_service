import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32252');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32252 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32252.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32252`,
  keywords: ['Jacksonville 32252 cleaning', '32252 house cleaning', 'cleaning services 32252'],
});

export default function JacksonvilleCleaning32252Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
