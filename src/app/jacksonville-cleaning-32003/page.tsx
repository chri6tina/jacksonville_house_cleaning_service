import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32003');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32003 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32003.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32003`,
  keywords: ['Jacksonville 32003 cleaning', '32003 house cleaning', 'cleaning services 32003'],
});

export default function JacksonvilleCleaning32003Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
