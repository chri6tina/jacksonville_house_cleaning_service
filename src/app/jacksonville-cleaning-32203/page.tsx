import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32203');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32203 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32203.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32203`,
  keywords: ['Jacksonville 32203 cleaning', '32203 house cleaning', 'cleaning services 32203'],
});

export default function JacksonvilleCleaning32203Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
