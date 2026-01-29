import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'post-construction-cleaning-cost-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Post Construction Cleaning Cost Jacksonville',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/post-construction-cleaning-cost-jacksonville`,
  keywords: ["Post Construction Cleaning Cost Jacksonville cleaning","Post Construction Cleaning Cost Jacksonville service","Jacksonville cleaning"],
});

export default function PostConstructionCleaningCostJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
