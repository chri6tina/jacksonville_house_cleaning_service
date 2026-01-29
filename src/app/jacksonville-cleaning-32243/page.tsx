import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32243');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32243 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32243.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32243`,
  keywords: ['Jacksonville 32243 cleaning', '32243 house cleaning', 'cleaning services 32243'],
});

export default function JacksonvilleCleaning32243Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
