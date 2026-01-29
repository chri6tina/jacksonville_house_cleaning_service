import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'ponte-vedra-beach-cleaning');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Ponte Vedra Beach Cleaning',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/ponte-vedra-beach-cleaning`,
  keywords: ["Ponte Vedra Beach Cleaning cleaning","Ponte Vedra Beach Cleaning service","Jacksonville cleaning"],
});

export default function PonteVedraBeachCleaningPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
