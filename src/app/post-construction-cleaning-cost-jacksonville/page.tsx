import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'post-construction-cleaning-cost-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Post-Construction Cleaning Cost Jacksonville',
  description: pageData?.description ?? 'Post-construction cleaning cost guide for Jacksonville.',
  canonical: `${SITE_CONFIG.url}/post-construction-cleaning-cost-jacksonville`,
  keywords: ['post-construction cleaning cost Jacksonville', 'construction cleanup pricing', 'Jacksonville cleanup estimate'],
});

export default function PostConstructionCleaningCostJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
