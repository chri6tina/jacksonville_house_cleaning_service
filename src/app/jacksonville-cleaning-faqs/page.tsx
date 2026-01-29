import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-faqs');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville Cleaning FAQs',
  description: pageData?.description ?? 'Jacksonville cleaning FAQs and local service answers.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-faqs`,
  keywords: ['Jacksonville cleaning FAQ', 'cleaning questions Jacksonville', 'local cleaning answers'],
});

export default function JacksonvilleCleaningFaqsPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
