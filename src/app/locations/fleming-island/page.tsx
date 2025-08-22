import Link from 'next/link';
import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fleming Island House Cleaning Service | Luxury Cleaning Jacksonville FL',
  description: 'Premium cleaning services in Fleming Island, Jacksonville FL. Luxury home cleaning, estate maintenance, deep cleaning. Call (904) 456-3851 for white-glove service.',
  keywords: 'Fleming Island cleaning service, Jacksonville luxury cleaning, Fleming Island house cleaning, estate cleaning Jacksonville, premium cleaning Fleming Island, Jacksonville deep cleaning',
  openGraph: {
    title: 'Fleming Island House Cleaning Service | Luxury Cleaning Jacksonville FL',
    description: 'Premium cleaning services in Fleming Island, Jacksonville FL. Luxury home cleaning, estate maintenance, deep cleaning. Call (904) 456-3851 for white-glove service.',
    url: 'https://www.jacksonvillehousecleaningservice.com/locations/fleming-island',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jacksonville House Cleaning Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fleming Island House Cleaning Service | Luxury Cleaning Jacksonville FL',
    description: 'Premium cleaning services in Fleming Island, Jacksonville FL. Luxury home cleaning, estate maintenance, deep cleaning.',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/locations/fleming-island',
  },
};

export default function FlemingIslandPage() {
  const flemingIslandServices = [
    {
      id: 'luxury-deep-cleaning',
      title: 'Luxury Deep Cleaning',
      description: 'Premium cleaning service for Fleming Island luxury homes and estates',
      icon: Crown,
      features: ['Premium cleaning products', 'Attention to architectural details', 'Luxury finish care', 'White-glove service standards', 'Custom cleaning plans']
    },
    {
      id: 'estate-maintenance',
      title: 'Estate Maintenance Cleaning',
      description: 'Comprehensive cleaning for large Fleming Island properties',
      icon: Trophy,
      features: ['Multi-level home cleaning', 'Large property maintenance', 'Outdoor living area care', 'Premium equipment usage', 'Flexible scheduling']
    },
    {
      id: 'move-in-move-out',
      title: 'Luxury Move-In/Move-Out',
      description: 'Premium cleaning for Fleming Island real estate transactions',
      icon: Car,
      features: ['Pre-move luxury cleaning', 'Post-move restoration', 'Estate preparation', 'Final luxury inspection', 'Move-in ready results']
    },
    {
      id: 'recurring-luxury',
      title: 'Recurring Luxury Cleaning',
      description: 'Consistent premium cleaning for Fleming Island estates',
      icon: Calendar,
      features: ['Weekly, bi-weekly, or monthly options', 'Luxury standards maintained', 'Priority scheduling', 'Custom service plans', 'Concierge service']
    },
    {
      id: 'post-construction',
      title: 'Post-Construction Luxury Cleaning',
      description: 'Premium cleanup after luxury renovations',
      icon: Target,
      features: ['Construction debris removal', 'Luxury finish restoration', 'Detailed surface cleaning', 'Final luxury inspection', 'Move-in ready results']
    },
    {
      id: 'carpet-luxury',
      title: 'Luxury Carpet & Upholstery',
      description: 'Premium fabric care for luxury Fleming Island homes',
      icon: Droplets,
      features: ['Premium stain removal', 'Luxury fabric protection', 'Odor elimination', 'Professional restoration', 'Fast drying technology']
    },
    {
      id: 'window-luxury',
      title: 'Luxury Window Cleaning',
      description: 'Crystal clear views for Fleming Island estates',
      icon: Building2,
      features: ['Interior and exterior cleaning', 'Luxury window care', 'Streak-free results', 'Safety equipment used', 'Premium finish protection']
    },
    {
      id: 'pressure-washing-luxury',
      title: 'Luxury Pressure Washing',
      description: 'Premium exterior cleaning for Fleming Island properties',
      icon: Zap,
      features: ['Luxury surface restoration', 'Safe pressure settings', 'Eco-friendly solutions', 'Premium finish care', 'Outdoor living area cleaning']
    },
    {
      id: 'gutter-luxury',
      title: 'Luxury Gutter Maintenance',
      description: 'Premium gutter care for Fleming Island estates',
      icon: Droplets,
      features: ['Debris removal', 'Downspout clearing', 'Luxury property inspection', 'Preventive maintenance', 'Safety protocols']
    },
    {
      id: 'air-duct-luxury',
      title: 'Luxury Air Duct Cleaning',
      description: 'Premium indoor air quality for luxury homes',
      icon: Gauge,
      features: ['Complete duct system cleaning', 'Premium air quality', 'Energy efficiency improvement', 'Luxury home standards', 'Professional equipment']
    },
    {
      id: 'vacation-rental-luxury',
      title: 'Luxury Vacation Rental Turnover',
      description: 'Premium cleaning for Fleming Island short-term rentals',
      icon: Building2,
      features: ['Luxury guest standards', 'Quick turnaround service', 'Premium property care', 'Guest-ready luxury', 'Concierge service']
    },
    {
      id: 'commercial-luxury',
      title: 'Luxury Commercial Cleaning',
      description: 'Premium cleaning for Fleming Island businesses',
      icon: Building2,
      features: ['Luxury business standards', 'Flexible scheduling', 'Premium service quality', 'Corporate standards', 'Concierge support']
    }
  ];

  const flemingIslandFeatures = [
    'High-income suburban community',
    'Luxury homes and estates',
    'Golf course communities',
    'Excellent schools and amenities',
    'Growing business district',
    'Family-oriented environment'
  ];

  const flemingIslandLandmarks = [
    'Fleming Island Golf Club',
    'Fleming Island Plantation',
    'Orange Park Medical Center',
    'Fleming Island High School',
    'Fleming Island Shopping Center',
    'St. Johns River access'
  ];

  const flemingIslandTestimonials = [
    {
      name: 'Sarah M.',
      location: 'Fleming Island',
      rating: 5,
      comment: 'The luxury cleaning service exceeded our expectations. Our Fleming Island estate has never looked better!'
    },
    {
      name: 'Michael R.',
      location: 'Fleming Island',
      rating: 5,
      comment: 'Professional, reliable, and maintains the highest standards for our luxury home. Highly recommend!'
    },
    {
      name: 'Lisa T.',
      location: 'Fleming Island',
      rating: 5,
      comment: 'Perfect for our busy family. The recurring luxury cleaning keeps our home immaculate.'
    }
  ];

  return (
    <>
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jacksonville House Cleaning Service",
            "description": "Premium cleaning services in Fleming Island, Jacksonville FL. Luxury home cleaning, estate maintenance, deep cleaning.",
            "url": "https://www.jacksonvillehousecleaningservice.com/locations/fleming-island",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3322",
              "longitude": "-81.6557"
            },
            "areaServed": {
              "@type": "City",
              "name": "Fleming Island"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Fleming Island Cleaning Services",
              "itemListElement": flemingIslandServices.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                }
              }))
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "150"
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-primary-blue/5 to-accent-aqua/5">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-blue to-accent-aqua text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold">Fleming Island</h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Premium cleaning services for Fleming Island luxury homes and estates. 
              Experience white-glove service that matches your home's prestige.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?service=deep-cleaning&location=fleming-island"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact?service=recurring-cleaning&location=fleming-island"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors"
              >
                Schedule Service
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Premium Cleaning Services in Fleming Island
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Luxury cleaning services tailored for Fleming Island's prestigious homes and estates. 
                Experience the difference of premium care and attention to detail.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {flemingIslandServices.map((service) => (
                <div key={service.id} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-primary-blue mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/contact?service=${service.id}&location=fleming-island`}
                    className="inline-block mt-6 bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors"
                  >
                    Book Service
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Fleming Island Chooses Our Premium Service
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                We understand the unique needs of luxury homes and provide service that exceeds expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Crown className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Standards</h3>
                <p className="text-gray-700">Premium cleaning products and white-glove service for your luxury home.</p>
              </div>
              <div className="text-center">
                <Gem className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Attention to Detail</h3>
                <p className="text-gray-700">Meticulous care for architectural details and luxury finishes.</p>
              </div>
              <div className="text-center">
                <Trophy className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Estate Expertise</h3>
                <p className="text-gray-700">Specialized knowledge for large properties and luxury estates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fleming Island Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Fleming Island: Luxury Living at Its Finest
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Fleming Island is one of Jacksonville's most prestigious communities, known for its luxury homes, 
                  excellent schools, and world-class amenities. Our premium cleaning services are designed to 
                  maintain the high standards that Fleming Island residents expect.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Features</h3>
                    <ul className="space-y-2">
                      {flemingIslandFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-accent-green mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Landmarks</h3>
                    <ul className="space-y-2">
                      {flemingIslandLandmarks.map((landmark, index) => (
                        <li key={index} className="flex items-center">
                          <MapPin className="h-4 w-4 text-primary-blue mr-2" />
                          <span className="text-gray-700">{landmark}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary-blue/10 to-accent-aqua/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Fleming Island Service Area</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Standard Cleaning</span>
                    <span className="font-semibold text-gray-900">From $150</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Luxury Deep Cleaning</span>
                    <span className="font-semibold text-gray-900">From $300</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Estate Maintenance</span>
                    <span className="font-semibold text-gray-900">From $400</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Recurring Service</span>
                    <span className="font-semibold text-gray-900">From $120</span>
                  </div>
                </div>
                <Link 
                  href="/pricing-calculator?location=fleming-island"
                  className="block w-full bg-primary-blue text-white text-center py-3 rounded-lg font-semibold mt-6 hover:bg-primary-blue/90 transition-colors"
                >
                  Get Detailed Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Fleming Island Residents Say
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our Fleming Island customers have to say about our premium service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {flemingIslandTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-blue to-accent-aqua text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Premium Cleaning in Fleming Island?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the difference of luxury cleaning service that matches your Fleming Island home's prestige. 
              Get your free quote today and see why we're the preferred choice for luxury homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?service=luxury-deep-cleaning&location=fleming-island"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact?service=recurring-luxury&location=fleming-island"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-lg">Call (904) 456-3851 for immediate assistance</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
