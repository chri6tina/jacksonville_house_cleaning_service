import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32201');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32201 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32201.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32201`,
  keywords: ['Jacksonville 32201 cleaning', '32201 house cleaning', 'cleaning services 32201'],
});

export default function JacksonvilleCleaning32201Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
