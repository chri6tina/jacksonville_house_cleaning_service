import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'airbnb-turnover-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Airbnb Turnover Cleaning Jacksonville',
  description: pageData?.description ?? 'Turnover cleaning service for Jacksonville short-term rentals.',
  canonical: `${SITE_CONFIG.url}/airbnb-turnover-cleaning-jacksonville`,
  keywords: ['airbnb cleaning Jacksonville', 'turnover cleaning', 'short-term rental cleaning'],
});

export default function AirbnbTurnoverCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
