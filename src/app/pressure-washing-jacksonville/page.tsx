import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'pressure-washing-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Pressure Washing Jacksonville',
  description: pageData?.description ?? 'Pressure washing services in Jacksonville.',
  canonical: `${SITE_CONFIG.url}/pressure-washing-jacksonville`,
  keywords: ['pressure washing Jacksonville', 'exterior cleaning Jacksonville', 'driveway cleaning Jacksonville'],
});

export default function PressureWashingJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
