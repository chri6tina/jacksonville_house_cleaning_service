import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32234');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32234 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32234.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32234`,
  keywords: ['Jacksonville 32234 cleaning', '32234 house cleaning', 'cleaning services 32234'],
});

export default function JacksonvilleCleaning32234Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
