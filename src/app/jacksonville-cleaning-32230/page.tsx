import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32230');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32230 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32230.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32230`,
  keywords: ['Jacksonville 32230 cleaning', '32230 house cleaning', 'cleaning services 32230'],
});

export default function JacksonvilleCleaning32230Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
