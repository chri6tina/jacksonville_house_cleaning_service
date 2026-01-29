import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'mandarin-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Mandarin Cleaning Jacksonville',
  description: pageData?.description ?? 'Cleaning services for Mandarin Jacksonville.',
  canonical: `${SITE_CONFIG.url}/mandarin-cleaning-jacksonville`,
  keywords: ['Mandarin Jacksonville cleaning', 'Mandarin house cleaning', 'cleaning services Mandarin'],
});

export default function MandarinCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
