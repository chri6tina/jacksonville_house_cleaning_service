import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32249');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32249 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32249.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32249`,
  keywords: ['Jacksonville 32249 cleaning', '32249 house cleaning', 'cleaning services 32249'],
});

export default function JacksonvilleCleaning32249Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
