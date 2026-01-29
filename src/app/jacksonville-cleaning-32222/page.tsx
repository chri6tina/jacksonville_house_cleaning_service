import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32222');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32222 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32222.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32222`,
  keywords: ['Jacksonville 32222 cleaning', '32222 house cleaning', 'cleaning services 32222'],
});

export default function JacksonvilleCleaning32222Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
