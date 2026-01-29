import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32257');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32257 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32257.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32257`,
  keywords: ['Jacksonville 32257 cleaning', '32257 house cleaning', 'cleaning services 32257'],
});

export default function JacksonvilleCleaning32257Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
