import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32253');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville Cleaning 32253',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32253`,
  keywords: ["Jacksonville Cleaning 32253 cleaning","Jacksonville Cleaning 32253 service","Jacksonville cleaning"],
});

export default function JacksonvilleCleaning32253Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
