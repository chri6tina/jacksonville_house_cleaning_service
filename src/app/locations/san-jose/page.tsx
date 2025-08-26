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
  HeartHandshake,
  Building,
  Tree,
  School
} from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { generateLocationMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateLocationMetadata('san-jose', 'Established Community Cleaning Service');

export default function SanJosePage() {
  const popularServices = [
    {
      title: 'Established Home Cleaning',
      description: 'Specialized cleaning for San Jose\'s well-maintained residential properties',
      icon: Home,
      href: '/recurring-cleaning',
      features: ['Regular maintenance cleaning', 'Established home care', 'Family-friendly approach', 'Reliable service']
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
      icon: HeartHandshake,
      title: 'Established Community',
      description: 'Long-time residents with strong neighborhood bonds and community pride'
    },
    {
      icon: School,
      title: 'Family-Friendly',
      description: 'Excellent schools and family-oriented atmosphere throughout the area'
    },
    {
      icon: Building,
      title: 'Well-Maintained Homes',
      description: 'Beautiful residential properties with established landscaping and care'
    },
    {
      icon: Tree,
      title: 'Mature Neighborhood',
      description: 'Tree-lined streets and established residential character'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Martinez',
      service: 'Established Home Cleaning',
      rating: 5,
      review: 'The San Jose team provides consistent, reliable cleaning for our established home. They understand our neighborhood and deliver quality service every time.',
      date: 'January 2024'
    },
    {
      name: 'Lisa Chen',
      service: 'Deep Cleaning',
      rating: 5,
      review: 'After hosting family gatherings, we needed thorough cleaning. The San Jose team exceeded expectations with their attention to detail.',
      date: 'December 2023'
    },
    {
      name: 'David Thompson',
      service: 'Move-Out Cleaning',
      rating: 5,
      review: 'When selling our San Jose home, the cleaning team made it absolutely perfect for potential buyers. Outstanding service!',
      date: 'November 2023'
    }
  ];

  return (
    <>
      {/* LocalBusiness Schema for San Jose */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jacksonville House Cleaning Service - San Jose",
            "description": "Professional house cleaning services in San Jose, Jacksonville. Established community cleaning with reliable service and family-friendly approach.",
            "url": "https://jacksonvillehousecleaningservice.com/locations/san-jose",
            "telephone": "+19044563851",
            "email": "info@jacksonvillehousecleaningservice.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "San Jose",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "postalCode": "32217",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 30.3187,
              "longitude": -81.6923
            },
            "areaServed": {
              "@type": "City",
              "name": "San Jose, Jacksonville, FL"
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
              "name": "San Jose House Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Established Home Cleaning",
                    "description": "Specialized cleaning for San Jose's well-maintained residential properties"
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
              "reviewCount": "142"
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
                <span className="block text-cyan-400">in San Jose</span>
                <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-white/90 mt-3">
                   Jacksonville&apos;s Established Community Cleaning Service
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed">
                We&apos;re your San Jose Jacksonville neighbors, providing reliable cleaning services 
                that understand established community living. No corporate chains, just local professionals who care about 
                maintaining the beauty and comfort of your well-maintained home.
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
                  <h3 className="font-bold text-white text-base mb-2">600+ Established Homes</h3>
                  <p className="text-white/80 text-xs leading-relaxed">Trust us with their care</p>
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
                  <p className="text-white/80 text-xs leading-relaxed">San Jose neighbors</p>
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
                { label: 'San Jose', href: '/locations/san-jose', current: true }
              ]}
            />
          </div>
        </section>

        {/* San Jose Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Welcome to San Jose Jacksonville
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  San Jose is one of Jacksonville&apos;s most established residential communities, 
                  known for its well-maintained homes, excellent schools, and strong family values. 
                  With a population of over 18,000 residents, San Jose offers the perfect 
                  blend of suburban comfort and community spirit.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our San Jose cleaning team understands the unique needs of established residential properties - from 
                  regular maintenance cleaning to preserving the beauty of well-cared-for homes.
                  We&apos;re proud to serve our neighbors with the same level of care 
                  and attention we&apos;d want for our own established homes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you have a family home or a well-maintained property,
                  we bring our Jacksonville cleaning expertise right to your doorstep.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-blue/20 to-accent-aqua/20 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-3xl font-bold">18K+</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">San Jose Residents</h3>
                    <p className="text-gray-700">Proud to serve our established community</p>
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
                Popular Services in San Jose
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our San Jose cleaning team specializes in established home care, offering services 
                designed to maintain the beauty and comfort of your well-maintained property.
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
                Why San Jose Residents Choose Us
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We understand the unique characteristics of San Jose and provide cleaning services 
                that respect the established nature of your residential community.
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
                What San Jose Residents Say
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Don&apos;t just take our word for it - hear from our satisfied San Jose customers.
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
              Ready for Professional Cleaning in San Jose?
            </h2>
            <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto">
              Join hundreds of satisfied San Jose residents who trust us with their established homes. 
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
