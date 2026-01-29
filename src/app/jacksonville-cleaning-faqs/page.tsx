import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-faqs');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville Cleaning Faqs',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-faqs`,
  keywords: ["Jacksonville Cleaning Faqs cleaning","Jacksonville Cleaning Faqs service","Jacksonville cleaning"],
});

export default function JacksonvilleCleaningFaqsPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
