import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32247');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32247 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32247.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32247`,
  keywords: ['Jacksonville 32247 cleaning', '32247 house cleaning', 'cleaning services 32247'],
});

export default function JacksonvilleCleaning32247Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
