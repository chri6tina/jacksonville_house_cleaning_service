import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'orange-park-cleaning');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Orange Park Cleaning',
  description: pageData?.description ?? 'Cleaning services for Orange Park.',
  canonical: `${SITE_CONFIG.url}/orange-park-cleaning`,
  keywords: ['Orange Park cleaning', 'Orange Park house cleaning', 'cleaning services Orange Park'],
});

export default function OrangeParkCleaningPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
