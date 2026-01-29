import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32253');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32253 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32253.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32253`,
  keywords: ['Jacksonville 32253 cleaning', '32253 house cleaning', 'cleaning services 32253'],
});

export default function JacksonvilleCleaning32253Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
