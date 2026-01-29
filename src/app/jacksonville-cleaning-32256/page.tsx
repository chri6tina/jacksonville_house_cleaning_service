import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32256');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32256 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32256.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32256`,
  keywords: ['Jacksonville 32256 cleaning', '32256 house cleaning', 'cleaning services 32256'],
});

export default function JacksonvilleCleaning32256Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
