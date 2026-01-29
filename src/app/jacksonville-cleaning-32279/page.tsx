import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32279');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32279 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32279.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32279`,
  keywords: ['Jacksonville 32279 cleaning', '32279 house cleaning', 'cleaning services 32279'],
});

export default function JacksonvilleCleaning32279Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
