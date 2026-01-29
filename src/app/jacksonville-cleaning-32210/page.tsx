import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32210');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32210 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32210.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32210`,
  keywords: ['Jacksonville 32210 cleaning', '32210 house cleaning', 'cleaning services 32210'],
});

export default function JacksonvilleCleaning32210Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
