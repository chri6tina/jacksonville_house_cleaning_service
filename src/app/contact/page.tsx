import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import ContactFormClient from './ContactFormClient';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Jacksonville House Cleaning Service',
  description: 'Get your free cleaning quote today. We serve all of Jacksonville and surrounding areas with professional, reliable house cleaning services. Call (904) 456-3851.',
  keywords: ['Jacksonville cleaning contact', 'cleaning quote', 'cleaning service contact', 'Jacksonville cleaning phone'],
  canonical: 'https://jacksonvillehousecleaningservice.com/contact'
});

export default function ContactPage() {
  return <ContactFormClient />;
}
