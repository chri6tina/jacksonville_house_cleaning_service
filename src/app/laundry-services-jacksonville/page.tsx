import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'laundry-services-jacksonville');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Laundry Services Jacksonville',
  description: pageData?.description ?? 'Jacksonville cleaning service information.',
  canonical: `${SITE_CONFIG.url}/laundry-services-jacksonville`,
  keywords: ["Laundry Services Jacksonville cleaning","Laundry Services Jacksonville service","Jacksonville cleaning"],
});

export default function LaundryServicesJacksonvillePage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
