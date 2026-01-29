import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32238');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32238 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32238.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32238`,
  keywords: ['Jacksonville 32238 cleaning', '32238 house cleaning', 'cleaning services 32238'],
});

export default function JacksonvilleCleaning32238Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
