import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32231');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32231 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32231.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32231`,
  keywords: ['Jacksonville 32231 cleaning', '32231 house cleaning', 'cleaning services 32231'],
});

export default function JacksonvilleCleaning32231Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
