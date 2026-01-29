import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'baymeadows-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Baymeadows Cleaning Jacksonville',
  description: pageData?.description ?? 'Cleaning services for Baymeadows Jacksonville.',
  canonical: `${SITE_CONFIG.url}/baymeadows-cleaning-jacksonville`,
  keywords: ['Baymeadows Jacksonville cleaning', 'Baymeadows house cleaning', 'cleaning services Baymeadows'],
});

export default function BaymeadowsCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
