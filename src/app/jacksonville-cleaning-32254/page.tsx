import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32254');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32254 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32254.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32254`,
  keywords: ['Jacksonville 32254 cleaning', '32254 house cleaning', 'cleaning services 32254'],
});

export default function JacksonvilleCleaning32254Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
