import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Professional House Cleaning Services Jacksonville',
  description: 'Comprehensive house cleaning services in Jacksonville, FL. From regular maintenance to deep cleaning and specialized services. Licensed, insured, and trusted by thousands of Jacksonville families.',
  keywords: ['Jacksonville cleaning services', 'house cleaning', 'deep cleaning', 'move-in move-out cleaning', 'post-construction cleaning', 'recurring cleaning'],
  canonical: 'https://www.jacksonvillehousecleaningservice.com/services'
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
