import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'st-augustine-cleaning');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'St Augustine Cleaning',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/st-augustine-cleaning`,
  keywords: ["St Augustine Cleaning cleaning","St Augustine Cleaning service","Jacksonville cleaning"],
});

export default function StAugustineCleaningPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
