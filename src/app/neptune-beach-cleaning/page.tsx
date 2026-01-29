import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'neptune-beach-cleaning');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Neptune Beach Cleaning',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/neptune-beach-cleaning`,
  keywords: ["Neptune Beach Cleaning cleaning","Neptune Beach Cleaning service","Jacksonville cleaning"],
});

export default function NeptuneBeachCleaningPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
