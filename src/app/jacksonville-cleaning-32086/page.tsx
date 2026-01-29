import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32086');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32086 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32086.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32086`,
  keywords: ['Jacksonville 32086 cleaning', '32086 house cleaning', 'cleaning services 32086'],
});

export default function JacksonvilleCleaning32086Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
