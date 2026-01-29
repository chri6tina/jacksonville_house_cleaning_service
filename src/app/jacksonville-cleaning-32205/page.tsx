import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32205');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32205 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32205.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32205`,
  keywords: ['Jacksonville 32205 cleaning', '32205 house cleaning', 'cleaning services 32205'],
});

export default function JacksonvilleCleaning32205Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
