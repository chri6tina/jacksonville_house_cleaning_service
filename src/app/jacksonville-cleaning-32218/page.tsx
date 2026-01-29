import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32218');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32218 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32218.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32218`,
  keywords: ['Jacksonville 32218 cleaning', '32218 house cleaning', 'cleaning services 32218'],
});

export default function JacksonvilleCleaning32218Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
