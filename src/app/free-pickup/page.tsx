import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { pickupCategories } from './categories';
import Link from 'next/link';
import { Phone, Package, Truck, Recycle, Heart, Search, ArrowRight, MapPin } from 'lucide-react';

export const metadata: Metadata = genMeta({
  title: 'Free Pickup & Donation Service Jacksonville FL | 100+ Item Categories',
  description: 'Free pickup service in Jacksonville, Florida for 100+ categories of items including electronics, books, jewelry, collectibles, and more. Schedule your free pickup today!',
  keywords: ['free pickup Jacksonville', 'donation pickup', 'Jacksonville pickup service', 'free pickup Florida', 'item pickup', 'donation service'],
  canonical: 'https://www.jacksonvillehousecleaningservice.com/free-pickup',
  openGraph: {
    title: 'Free Pickup & Donation Service Jacksonville FL',
    description: 'Free pickup service in Jacksonville, Florida for 100+ categories of items. Electronics, books, jewelry, collectibles, and more.',
    url: 'https://www.jacksonvillehousecleaningservice.com/free-pickup',
  },
});

// Group categories by type for better organization
const categoryGroups = [
  {
    name: 'Electronics',
    categories: pickupCategories.slice(0, 25),
    icon: '📱',
  },
  {
    name: 'Books & Media',
    categories: pickupCategories.slice(25, 40),
    icon: '📚',
  },
  {
    name: 'Jewelry & Accessories',
    categories: pickupCategories.slice(40, 50),
    icon: '💍',
  },
  {
    name: 'Collectibles',
    categories: pickupCategories.slice(50, 70),
    icon: '🎯',
  },
  {
    name: 'Musical Instruments',
    categories: pickupCategories.slice(70, 80),
    icon: '🎵',
  },
  {
    name: 'Tools & Hardware',
    categories: pickupCategories.slice(80, 90),
    icon: '🔧',
  },
  {
    name: 'Sports & Recreation',
    categories: pickupCategories.slice(90, 100),
    icon: '⚽',
  },
];

export default function FreePickupPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Free Pickup & Donation Service Jacksonville",
            "description": "Free pickup service in Jacksonville, Florida for 100+ categories of items including electronics, books, jewelry, collectibles, and more.",
            "provider": {
              "@type": "Organization",
              "name": "Jacksonville House Cleaning Service",
              "telephone": "+19044563851",
              "email": "info@jacksonvillehousecleaningservice.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jacksonville",
                "addressRegion": "FL",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "serviceType": "Pickup Service",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "description": "Free pickup service"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pickup Categories",
              "itemListElement": pickupCategories.map((cat, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": `Free ${cat.name} Pickup`,
                  "description": cat.description
                },
                "position": index + 1
              }))
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 rounded-full p-3 mb-6">
              <Package className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Free Pickup & Donation Service in Jacksonville, Florida
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              We offer free pickup for 100+ categories of items. Electronics, books, jewelry, collectibles, 
              musical instruments, tools, sports equipment, and much more!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9044563851"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                Call (904) 456-3851
              </a>
              <Link
                href="/contact?service=free-pickup"
                className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white/10 transition-colors text-lg"
              >
                Schedule Free Pickup
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Free Pickup Service?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Make decluttering easy while helping the environment and supporting local charities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Free</h3>
              <p className="text-gray-700">No charges, no fees, no hidden costs. Completely free pickup service.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Eco-Friendly</h3>
              <p className="text-gray-700">Reduce waste and give items a second life through responsible recycling.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supports Charity</h3>
              <p className="text-gray-700">Donated items help support local charities and community organizations.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Jacksonville Area</h3>
              <p className="text-gray-700">Serving all of Jacksonville, Florida and surrounding communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Categories by Group */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              100+ Categories We Pick Up For Free
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Browse our complete list of items we accept for free pickup and donation.
            </p>
          </div>

          <div className="space-y-16">
            {categoryGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl">{group.icon}</span>
                  <h3 className="text-3xl font-bold text-gray-900">{group.name}</h3>
                  <span className="text-gray-600">({group.categories.length} categories)</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/free-pickup/${category.slug}`}
                      className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1">
                          {category.name}
                        </h4>
                        <ArrowRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                      </div>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.keywords.slice(0, 2).map((keyword, idx) => (
                          <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Categories</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">0</div>
              <div className="text-blue-100">Pickup Fee</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">All</div>
              <div className="text-blue-100">Jacksonville Area</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Scheduling</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Getting started is simple - just follow these easy steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Browse Categories', desc: 'Find the items you want to donate from our 100+ categories' },
              { step: '2', title: 'Contact Us', desc: 'Call or fill out our form to schedule your free pickup' },
              { step: '3', title: 'We Pick Up', desc: 'Our team arrives at your location - completely free!' },
              { step: '4', title: 'Items Processed', desc: 'Items are sorted, cleaned, and prepared for resale or donation' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 text-white p-12 rounded-2xl shadow-2xl">
            <Package className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Schedule Your Free Pickup?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of Jacksonville residents who have decluttered their homes with our free pickup service.
              Help the environment, support charity, and free up space - all at no cost to you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9044563851"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                Call (904) 456-3851
              </a>
              <Link
                href="/contact?service=free-pickup"
                className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white/10 transition-colors text-lg"
              >
                Schedule Free Pickup
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

