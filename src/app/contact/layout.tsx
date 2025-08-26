import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Booking - Jacksonville House Cleaning Service',
  description: 'Contact Jacksonville House Cleaning Service for professional residential and commercial cleaning. Get free quotes, book appointments, and experience the difference today!',
  keywords: 'Jacksonville cleaning service, house cleaning contact, booking, free quote, professional cleaning',
  openGraph: {
    title: 'Contact & Booking - Jacksonville House Cleaning Service',
    description: 'Contact Jacksonville House Cleaning Service for professional residential and commercial cleaning. Get free quotes, book appointments, and experience the difference today!',
    url: 'https://www.jacksonvillehousecleaningservice.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Booking - Jacksonville House Cleaning Service',
    description: 'Contact Jacksonville House Cleaning Service for professional residential and commercial cleaning. Get free quotes, book appointments, and experience the difference today!',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

