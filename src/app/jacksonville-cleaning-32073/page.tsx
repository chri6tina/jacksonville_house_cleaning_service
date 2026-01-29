import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32073');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32073 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32073.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32073`,
  keywords: ['Jacksonville 32073 cleaning', '32073 house cleaning', 'cleaning services 32073'],
});

export default function JacksonvilleCleaning32073Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
