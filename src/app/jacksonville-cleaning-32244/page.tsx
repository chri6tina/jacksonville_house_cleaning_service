import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32244');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32244 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32244.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32244`,
  keywords: ['Jacksonville 32244 cleaning', '32244 house cleaning', 'cleaning services 32244'],
});

export default function JacksonvilleCleaning32244Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
