import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32221');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32221 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32221.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32221`,
  keywords: ['Jacksonville 32221 cleaning', '32221 house cleaning', 'cleaning services 32221'],
});

export default function JacksonvilleCleaning32221Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
