import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'vacation-rental-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Vacation Rental Cleaning Jacksonville',
  description: pageData?.description ?? 'Vacation rental cleaning services in Jacksonville.',
  canonical: `${SITE_CONFIG.url}/vacation-rental-cleaning-jacksonville`,
  keywords: ['vacation rental cleaning Jacksonville', 'short-term rental cleaning', 'rental turnover cleaning'],
});

export default function VacationRentalCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
