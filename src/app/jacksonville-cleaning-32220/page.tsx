import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32220');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32220 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32220.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32220`,
  keywords: ['Jacksonville 32220 cleaning', '32220 house cleaning', 'cleaning services 32220'],
});

export default function JacksonvilleCleaning32220Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
