import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'atlantic-beach-cleaning');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Atlantic Beach Cleaning',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/atlantic-beach-cleaning`,
  keywords: ["Atlantic Beach Cleaning cleaning","Atlantic Beach Cleaning service","Jacksonville cleaning"],
});

export default function AtlanticBeachCleaningPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
