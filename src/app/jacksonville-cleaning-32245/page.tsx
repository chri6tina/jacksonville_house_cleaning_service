import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32245');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32245 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32245.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32245`,
  keywords: ['Jacksonville 32245 cleaning', '32245 house cleaning', 'cleaning services 32245'],
});

export default function JacksonvilleCleaning32245Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
