import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32065');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32065 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32065.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32065`,
  keywords: ['Jacksonville 32065 cleaning', '32065 house cleaning', 'cleaning services 32065'],
});

export default function JacksonvilleCleaning32065Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
