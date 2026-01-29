import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'jacksonville-cleaning-32225');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Jacksonville 32225 House Cleaning',
  description: pageData?.description ?? 'House cleaning services for Jacksonville 32225.',
  canonical: `${SITE_CONFIG.url}/jacksonville-cleaning-32225`,
  keywords: ['Jacksonville 32225 cleaning', '32225 house cleaning', 'cleaning services 32225'],
});

export default function JacksonvilleCleaning32225Page() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
