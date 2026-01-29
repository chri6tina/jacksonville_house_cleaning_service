import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32236');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville Cleaning 32236',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32236`,
  keywords: ["Jacksonville Cleaning 32236 cleaning","Jacksonville Cleaning 32236 service","Jacksonville cleaning"],
});

export default function JacksonvilleCleaning32236Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
