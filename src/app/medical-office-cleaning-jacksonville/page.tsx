import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'medical-office-cleaning-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Medical Office Cleaning Jacksonville',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/medical-office-cleaning-jacksonville`,
  keywords: ["Medical Office Cleaning Jacksonville cleaning","Medical Office Cleaning Jacksonville service","Jacksonville cleaning"],
});

export default function MedicalOfficeCleaningJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
