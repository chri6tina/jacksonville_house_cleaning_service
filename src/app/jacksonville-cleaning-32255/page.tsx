import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32255');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32255 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32255.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32255`,
  keywords: ['Jacksonville 32255 cleaning', '32255 house cleaning', 'cleaning services 32255'],
});

export default function JacksonvilleCleaning32255Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
