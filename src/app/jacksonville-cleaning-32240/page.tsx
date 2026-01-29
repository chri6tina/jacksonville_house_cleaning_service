import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32240');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32240 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32240.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32240`,
  keywords: ['Jacksonville 32240 cleaning', '32240 house cleaning', 'cleaning services 32240'],
});

export default function JacksonvilleCleaning32240Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
