import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32239');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32239 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32239.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32239`,
  keywords: ['Jacksonville 32239 cleaning', '32239 house cleaning', 'cleaning services 32239'],
});

export default function JacksonvilleCleaning32239Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
