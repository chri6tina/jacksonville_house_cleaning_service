import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'ortega-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Ortega Cleaning Jacksonville',
  description: pageData?.description ?? 'Cleaning services for Ortega Jacksonville.',
  canonical: `${SITE_CONFIG.url}/ortega-cleaning-jacksonville`,
  keywords: ['Ortega Jacksonville cleaning', 'Ortega house cleaning', 'cleaning services Ortega'],
});

export default function OrtegaCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
