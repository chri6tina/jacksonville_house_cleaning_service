import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32242');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32242 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32242.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32242`,
  keywords: ['Jacksonville 32242 cleaning', '32242 house cleaning', 'cleaning services 32242'],
});

export default function JacksonvilleCleaning32242Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
