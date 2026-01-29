import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32236');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32236 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32236.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32236`,
  keywords: ['Jacksonville 32236 cleaning', '32236 house cleaning', 'cleaning services 32236'],
});

export default function JacksonvilleCleaning32236Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
