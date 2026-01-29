import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32084');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32084 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32084.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32084`,
  keywords: ['Jacksonville 32084 cleaning', '32084 house cleaning', 'cleaning services 32084'],
});

export default function JacksonvilleCleaning32084Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
