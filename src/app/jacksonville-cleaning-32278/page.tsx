import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32278');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32278 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32278.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32278`,
  keywords: ['Jacksonville 32278 cleaning', '32278 house cleaning', 'cleaning services 32278'],
});

export default function JacksonvilleCleaning32278Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
