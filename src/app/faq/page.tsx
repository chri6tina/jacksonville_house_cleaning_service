import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import FAQSection from '@/components/FAQSection';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = generateMetadata({
  title: 'Frequently Asked Questions - Jacksonville House Cleaning Service',
  description: 'Get answers to common questions about our professional cleaning services in Jacksonville, FL. Learn about pricing, scheduling, safety, and more.',
  keywords: ['Jacksonville cleaning FAQ', 'house cleaning questions', 'cleaning service FAQ', 'Jacksonville cleaning answers'],
  canonical: 'https://www.jacksonvillehousecleaningservice.com/faq'
});

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'FAQ', href: '/faq' }
          ]} 
        />

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Find answers to the most common questions about our professional cleaning services in Jacksonville, FL. 
            Can't find what you're looking for? Contact us directly at (904) 456-3851.
          </p>
        </div>

        {/* FAQ Content */}
        <FAQSection />
      </div>
    </div>
  );
}
