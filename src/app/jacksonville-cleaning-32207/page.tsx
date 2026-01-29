import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32207');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32207 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32207.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32207`,
  keywords: ['Jacksonville 32207 cleaning', '32207 house cleaning', 'cleaning services 32207'],
});

export default function JacksonvilleCleaning32207Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
