import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32229');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32229 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32229.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32229`,
  keywords: ['Jacksonville 32229 cleaning', '32229 house cleaning', 'cleaning services 32229'],
});

export default function JacksonvilleCleaning32229Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
