import { Metadata } from 'next';
import { 
  MapPin, 
  Star, 
  Phone, 
  Clock, 
  Users, 
  Shield, 
  Building2, 
  Home, 
  Car, 
  Wind, 
  Sparkles, 
  Truck, 
  Hammer, 
  PawPrint, 
  Heart, 
  PartyPopper, 
  CheckCircle, 
  Award, 
  Zap,
  Leaf,
  Calendar,
  Calculator,
  ArrowRight,
  Tree
} from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { generateLocationMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateLocationMetadata('avondale', 'Historic District Cleaning Service');

export default function AvondalePage() {
  const popularServices = [
    {
      title: 'Historic Home Cleaning',
      description: 'Specialized cleaning for Avondale\'s historic properties',
      icon: Home,
      href: '/recurring-cleaning',
      features: ['Period-appropriate cleaning methods', 'Gentle on historic materials', 'Attention to architectural details', 'Preservation-focused approach']
    },
    {
      title: 'Deep Cleaning',
      description: 'Comprehensive cleaning for seasonal refresh',
      icon: Sparkles,
      href: '/extreme-deep-cleaning',
      features: ['Deep appliance cleaning', 'Cabinet and drawer cleaning', 'Baseboard cleaning', 'Window cleaning']
    },
    {
      title: 'Move-In/Move-Out',
      description: 'Professional cleaning for real estate transactions',
      icon: Truck,
      href: '/move-in-move-out',
      features: ['Pre-move out cleaning', 'Post-move in sanitization', 'Construction debris removal', 'Odor elimination']
    },
    {
      title: 'Post-Construction',
      description: 'Complete cleanup after renovation projects',
      icon: Hammer,
      href: '/post-construction-cleaning',
      features: ['Construction dust removal', 'Fine debris elimination', 'Surface restoration', 'Move-in ready results']
    }
  ];

  const localFeatures = [
    {
      icon: MapPin,
      title: 'Historic District',
      description: 'Beautiful historic homes with unique architectural features and character'
    },
    {
      icon: Users,
      title: 'Established Community',
      description: 'Long-time residents who value quality and attention to detail'
    },
    {
      icon: Building2,
      title: 'Architectural Heritage',
      description: 'Preservation-focused community with stunning period homes'
    },
    {
      icon: Tree,
      title: 'Tree-Lined Streets',
      description: 'Mature oak trees and beautiful landscaping throughout the neighborhood'
    }
  ];

  const testimonials = [
    {
      name: 'Margaret Thompson',
      service: 'Historic Home Cleaning',
      rating: 5,
      review: 'The team understands how to clean our historic Avondale home properly. They\'re careful with our original fixtures and use the right products.',
      date: 'January 2024'
    },
    {
      name: 'David Rodriguez',
      service: 'Deep Cleaning',
      rating: 5,
      review: 'After hosting a neighborhood event, we needed thorough cleaning. The Avondale team exceeded expectations with their attention to detail.',
      date: 'December 2023'
    },
    {
      name: 'Elizabeth Chen',
      service: 'Move-Out Cleaning',
      rating: 5,
      review: 'When selling our Avondale home, the cleaning team made it look absolutely perfect for potential buyers. Highly recommend!',
      date: 'November 2023'
    }
  ];

  return (
    <>
      {/* LocalBusiness Schema for Avondale */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jacksonville House Cleaning Service - Avondale",
            "description": "Professional house cleaning services in Avondale, Jacksonville. Historic district cleaning with attention to architectural details and preservation.",
            "url": "https://jacksonvillehousecleaningservice.com/locations/avondale",
            "telephone": "+19044563851",
            "email": "info@jacksonvillehousecleaningservice.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Avondale",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "postalCode": "32205",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 30.3187,
              "longitude": -81.6923
            },
            "areaServed": {
              "@type": "City",
              "name": "Avondale, Jacksonville, FL"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 30.3187,
                "longitude": -81.6923
              },
              "geoRadius": "5000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Avondale House Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Historic Home Cleaning",
                    "description": "Specialized cleaning for Avondale's historic properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Deep Cleaning",
                    "description": "Comprehensive cleaning for seasonal refresh"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Move-In/Move-Out Cleaning",
                    "description": "Professional cleaning for real estate transactions"
                  }
                }
              ]
            },
            "openingHours": "Mo-Su 08:00-18:00",
            "priceRange": "$$",
            "paymentAccepted": "Cash, Credit Card, Check",
            "currenciesAccepted": "USD",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            },
            "review": testimonials.map(testimonial => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": testimonial.name
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating
              },
              "reviewBody": testimonial.review
            })),
            "sameAs": [
              "https://facebook.com/jacksonvillehousecleaningservice",
              "https://instagram.com/jacksonvillehousecleaningservice",
              "https://twitter.com/jacksonvillehousecleaningservice"
            ]
          })
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/90 to-accent-aqua/90"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                <span className="block">Professional Cleaning</span>
                <span className="block text-cyan-400">in Avondale</span>
                <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-white/90 mt-3">
                  Jacksonville&apos;s Historic District Cleaning Service
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed">
                We&apos;re your Avondale Jacksonville neighbors, providing specialized cleaning services 
                that understand historic homes. No corporate chains, just local professionals who care about 
                preserving the character of your beautiful property.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+19044563851"
                  className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Call (904) 456-3851
                </a>
                <Link
                  href="/contact"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Local Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <Users className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">300+ Historic Homes</h3>
                  <p className="text-white/80 text-xs leading-relaxed">Trust us with their preservation</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <Shield className="w-6 h-6 text-primary-blue" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">Licensed & Insured</h3>
                  <p className="text-white/80 text-xs leading-relaxed">Florida business license</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-accent-coral/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <Star className="w-6 h-6 text-accent-coral" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">5-Star Local Reviews</h3>
                  <p className="text-white/80 text-xs leading-relaxed">Avondale neighbors</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb 
              items={[
                { label: 'Service Areas', href: '/locations' },
                { label: 'Avondale', href: '/locations/avondale', current: true }
              ]}
            />
          </div>
        </section>

        {/* Avondale Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Welcome to Avondale Jacksonville
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Avondale is one of Jacksonville&apos;s most prestigious historic districts, 
                  known for its stunning period homes, tree-lined streets, and rich architectural heritage. 
                  With a population of over 12,000 residents, Avondale offers the perfect 
                  blend of historic charm and modern convenience.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our Avondale cleaning team understands the unique needs of historic properties - from 
                  careful handling of original fixtures to using preservation-appropriate cleaning methods. 
                  We&apos;re proud to serve our neighbors with the same level of care 
                  and attention we&apos;d want for our own historic homes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you have a century-old mansion or a carefully restored bungalow, 
                  we bring our Jacksonville cleaning expertise right to your doorstep.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-blue/20 to-accent-aqua/20 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-3xl font-bold">12K+</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Avondale Residents</h3>
                    <p className="text-gray-700">Proud to serve our historic community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Popular Services in Avondale
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our Avondale cleaning team specializes in historic home care, offering services 
                designed to preserve the beauty and character of your property.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className="w-16 h-16 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-accent-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-primary-blue font-medium hover:text-primary-blue/80 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Avondale Residents Choose Us
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We understand the unique characteristics of Avondale and provide cleaning services 
                that respect the historic nature of your home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {localFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent-aqua/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-accent-aqua" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What Avondale Residents Say
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Don&apos;t just take our word for it - hear from our satisfied Avondale customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&quot;{testimonial.review}&quot;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.service}</p>
                    </div>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready for Professional Cleaning in Avondale?
            </h2>
            <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto">
              Join hundreds of satisfied Avondale residents who trust us with their historic homes. 
              Get your free quote today and experience the difference of local, professional cleaning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19044563851"
                className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call (904) 456-3851
              </a>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
