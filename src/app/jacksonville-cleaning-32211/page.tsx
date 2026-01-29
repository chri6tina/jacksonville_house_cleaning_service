import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32211');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32211 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32211.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32211`,
  keywords: ['Jacksonville 32211 cleaning', '32211 house cleaning', 'cleaning services 32211'],
});

export default function JacksonvilleCleaning32211Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
