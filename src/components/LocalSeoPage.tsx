import Link from 'next/link';
import { CheckCircle, MapPin, Phone, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import type { LocalSeoPageData } from '@/data/localSeoPages';

interface LocalSeoPageProps {
  data: LocalSeoPageData;
}

export default function LocalSeoPage({ data }: LocalSeoPageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-cyan-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{data.title}</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">{data.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call (904) 456-3851
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Jacksonville Local Expertise
              </h2>
              <p className="text-lg text-gray-700 mb-6">{data.intro}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
              <div className="space-y-3">
                {data.serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 hover:text-blue-600 hover:border-blue-200 transition-colors"
                  >
                    <span>{link.label}</span>
                    <Sparkles className="w-4 h-4 text-blue-500" />
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-blue-500" />
                Serving Jacksonville & surrounding areas
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 mt-2">Local answers for Jacksonville customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.faqs.map((faq) => (
              <div key={faq.question} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Request a free quote and get local Jacksonville service you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              <span className="inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (904) 456-3851
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
