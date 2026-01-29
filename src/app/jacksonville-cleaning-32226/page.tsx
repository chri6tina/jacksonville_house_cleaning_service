import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32226');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32226 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32226.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32226`,
  keywords: ['Jacksonville 32226 cleaning', '32226 house cleaning', 'cleaning services 32226'],
});

export default function JacksonvilleCleaning32226Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
