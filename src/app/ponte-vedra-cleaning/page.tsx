import { Metadata } from 'next';
import LocalSeoPage from '@/components/LocalSeoPage';
import { localSeoPages } from '@/data/localSeoPages';
import { SITE_CONFIG, generateMetadata as buildMetadata } from '@/lib/metadata';

const pageData = localSeoPages.find((page) => page.slug === 'ponte-vedra-cleaning');

export const metadata: Metadata = buildMetadata({
  title: pageData?.title ?? 'Ponte Vedra Cleaning',
  description: pageData?.description ?? 'Cleaning services for Ponte Vedra.',
  canonical: `${SITE_CONFIG.url}/ponte-vedra-cleaning`,
  keywords: ['Ponte Vedra cleaning', 'Ponte Vedra house cleaning', 'cleaning services Ponte Vedra'],
});

export default function PonteVedraCleaningPage() {
  if (!pageData) {
    return null;
  }
  return <LocalSeoPage data={pageData} />;
}
