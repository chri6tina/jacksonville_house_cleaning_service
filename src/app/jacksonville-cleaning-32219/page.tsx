import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32219');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32219 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32219.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32219`,
  keywords: ['Jacksonville 32219 cleaning', '32219 house cleaning', 'cleaning services 32219'],
});

export default function JacksonvilleCleaning32219Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
