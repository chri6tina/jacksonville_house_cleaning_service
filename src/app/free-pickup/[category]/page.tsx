import { Metadata } from 'next';
import { pickupCategories, getRelatedCategories } from '../categories';
import { generateMetadata as genMeta } from '@/lib/metadata';
import Link from 'next/link';
import { Phone, MapPin, Truck, Recycle, CheckCircle, Heart, ArrowRight, Gift, Package } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = pickupCategories.find(c => c.slug === category);
  
  if (!categoryData) {
    return {
      title: 'Category Not Found - Free Pickup Jacksonville',
      description: 'The requested pickup category could not be found.',
    };
  }

  return genMeta({
    title: `Free ${categoryData.name} Pickup Jacksonville FL | Donation & Pickup Service`,
    description: `${categoryData.description} We offer free pickup service throughout Jacksonville, Florida. Schedule your free pickup today!`,
    keywords: [...categoryData.keywords, 'free pickup Jacksonville', 'donation pickup', 'Jacksonville pickup service', 'free pickup Florida'],
    canonical: `https://www.jacksonvillehousecleaningservice.com/free-pickup/${category}`,
    openGraph: {
      title: `Free ${categoryData.name} Pickup in Jacksonville, Florida`,
      description: `${categoryData.description} Schedule your free pickup today!`,
      url: `https://www.jacksonvillehousecleaningservice.com/free-pickup/${category}`,
    },
  });
}

export async function generateStaticParams() {
  return pickupCategories.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryPickupPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryData = pickupCategories.find(c => c.slug === category);
  const relatedCategories = categoryData ? getRelatedCategories(categoryData.slug) : [];

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <Link href="/free-pickup" className="text-blue-600 hover:underline">
            View All Pickup Categories
          </Link>
        </div>
      </div>
    );
  }

  const benefits = [
    {
      icon: Truck,
      title: 'Free Pickup Service',
      description: 'We come to you! Free pickup throughout Jacksonville, Florida with no hidden fees.',
    },
    {
      icon: Recycle,
      title: 'Environmentally Friendly',
      description: 'Help reduce waste and give your items a second life through responsible recycling and resale.',
    },
    {
      icon: Heart,
      title: 'Supports Charity',
      description: 'Donated items help support local charities and community organizations in Jacksonville.',
    },
    {
      icon: CheckCircle,
      title: 'Easy Process',
      description: 'Simple scheduling process. Just call or contact us to arrange your free pickup.',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Contact Us',
      description: 'Call or fill out our form to schedule your free pickup. We\'ll confirm a convenient time.',
    },
    {
      step: '2',
      title: 'We Pick Up',
      description: 'Our team arrives at your location in Jacksonville to collect your items - completely free!',
    },
    {
      step: '3',
      title: 'Items Processed',
      description: 'Items are sorted, cleaned if needed, and prepared for resale or donation to charity.',
    },
    {
      step: '4',
      title: 'You\'re Done!',
      description: 'That\'s it! You\'ve decluttered, helped the environment, and supported a good cause.',
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `Free ${categoryData.name} Pickup Service Jacksonville`,
            "description": categoryData.description,
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Free {categoryData.name} Pickup in Jacksonville, Florida
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {categoryData.description}
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
                href="/contact?service=free-pickup&category=free-pickup"
                className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white/10 transition-colors text-lg"
              >
                Schedule Free Pickup
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Free Pickup Service?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We make it easy to declutter your home while helping the environment and supporting local charities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Free Pickup Process Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Simple, fast, and completely free. Get started in minutes!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-700 text-center">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Serving All of Jacksonville, Florida</h2>
                <p className="text-gray-700 mt-2">We provide free pickup throughout the Jacksonville area</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {['Jacksonville', 'Jacksonville Beach', 'Neptune Beach', 'Atlantic Beach', 'Ponte Vedra', 'Mandarin', 'Riverside', 'San Marco', 'Southside', 'Arlington', 'Orange Park', 'Fleming Island'].map((area) => (
                <div key={area} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories Section */}
      {relatedCategories.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Related Pickup Categories
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Looking to donate other items? Check out these related categories we also pick up for free.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCategories.map((related) => (
                <Link
                  key={related.slug}
                  href={`/free-pickup/${related.slug}`}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {related.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-700 text-sm">{related.description.substring(0, 120)}...</p>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/free-pickup"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                View All Pickup Categories
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Gift className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Schedule Your Free {categoryData.name} Pickup?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of Jacksonville residents who have decluttered their homes with our free pickup service.
              No fees, no hassle - just a simple way to help the environment and your community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:9044563851"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                Call (904) 456-3851
              </a>
              <Link
                href="/contact?service=free-pickup&category=free-pickup"
                className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white/10 transition-colors text-lg"
              >
                Schedule Free Pickup
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 rounded-lg p-6">
                <Truck className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold">Free Pickup</p>
                <p className="text-sm text-blue-100">No charges ever</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Recycle className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold">Eco-Friendly</p>
                <p className="text-sm text-blue-100">Helping the environment</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Heart className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold">Supports Charity</p>
                <p className="text-sm text-blue-100">Helping local causes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

