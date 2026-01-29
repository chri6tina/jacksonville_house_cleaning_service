import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'fleming-island-cleaning');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Fleming Island Cleaning',
  description: pageData?.description ?? 'Cleaning services for Fleming Island.',
  canonical: `${SITE_CONFIG.url}/fleming-island-cleaning`,
  keywords: ['Fleming Island cleaning', 'Fleming Island house cleaning', 'cleaning services Fleming Island'],
});

export default function FlemingIslandCleaningPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
