import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'downtown-jacksonville-cleaning');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Downtown Jacksonville Cleaning',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/downtown-jacksonville-cleaning`,
  keywords: ["Downtown Jacksonville Cleaning cleaning","Downtown Jacksonville Cleaning service","Jacksonville cleaning"],
});

export default function DowntownJacksonvilleCleaningPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
