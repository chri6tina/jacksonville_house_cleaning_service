import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32207');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville Cleaning 32207',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32207`,
  keywords: ["Jacksonville Cleaning 32207 cleaning","Jacksonville Cleaning 32207 service","Jacksonville cleaning"],
});

export default function JacksonvilleCleaning32207Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
