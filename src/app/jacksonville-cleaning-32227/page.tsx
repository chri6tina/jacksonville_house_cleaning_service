import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32227');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32227 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32227.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32227`,
  keywords: ['Jacksonville 32227 cleaning', '32227 house cleaning', 'cleaning services 32227'],
});

export default function JacksonvilleCleaning32227Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
