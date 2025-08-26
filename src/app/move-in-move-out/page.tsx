import { Scissors, Sparkles, Clock, Users, Shield, Leaf, Check, Star, ArrowRight, Phone, MapPin, Award, Truck, Calendar, Home } from 'lucide-react';
import Link from 'next/link';

export default function MoveInMoveOutPage() {
  const services = [
    {
      name: 'Move-In Cleaning',
      price: 'From $200',
      description: 'Prepare your new home for a fresh start',
      features: ['Deep cleaning of all surfaces', 'Appliance cleaning', 'Cabinet and drawer cleaning', 'Floor sanitization', 'Air duct cleaning available']
    },
    {
      name: 'Move-Out Cleaning',
      price: 'From $250',
      description: 'Leave your old home spotless for the next tenant',
      features: ['Complete home cleaning', 'Stain removal', 'Appliance deep cleaning', 'Floor restoration', 'Final inspection']
    },
    {
      name: 'Vacation Rental Turnover',
      price: 'From $180',
      description: 'Professional cleaning between guests',
      features: ['Quick turnaround', 'Linen and towel service', 'Kitchen sanitization', 'Bathroom deep clean', 'Guest-ready results']
    },
    {
      name: 'Property Management',
      price: 'From $300',
      description: 'Comprehensive cleaning for property managers',
      features: ['Regular scheduling', 'Quality assurance', 'Detailed reporting', 'Emergency service', 'Bulk pricing available']
    }
  ];

  const benefits = [
    {
      title: 'Fast Turnaround',
      description: 'Same-day service available',
      icon: Clock
    },
    {
      title: 'Security Deposit Protection',
      description: 'Maximize your deposit return',
      icon: Shield
    },
    {
      title: 'Professional Equipment',
      description: 'Industrial-grade cleaning tools',
      icon: Sparkles
    },
    {
      title: 'Jacksonville Local',
      description: 'Your neighbors since 2015',
      icon: MapPin
    }
  ];

  return (
    <>
      {/* Structured Data for Move-In/Move-Out Cleaning Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Jacksonville Move-In/Move-Out Cleaning Services",
            "description": "Professional move-in and move-out cleaning services in Jacksonville, FL. Prepare your new home or leave your old one spotless with our comprehensive cleaning packages.",
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
            "serviceType": "Move-In/Move-Out Cleaning",
            "category": "Cleaning Service",
            "offers": {
              "@type": "Offer",
              "price": "From $180",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Jacksonville Move-In/Move-Out Cleaning Options",
              "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.name,
                  "description": service.description
                },
                "price": service.price,
                "priceCurrency": "USD"
              }))
            }
          })
        }}
      />

      {/* Service Schema for Each Move-In/Move-Out Option */}
      {services.map((service, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": `${service.name} - Jacksonville`,
              "description": service.description,
              "provider": {
                "@type": "Organization",
                "name": "Jacksonville House Cleaning Service",
                "telephone": "+19044563851",
                "email": "info@jacksonvillehousecleaningservice.com"
              },
              "areaServed": {
                "@type": "City",
                "name": "Jacksonville"
              },
              "serviceType": "Move-In/Move-Out Cleaning",
              "category": "Cleaning Service",
              "offers": {
                "@type": "Offer",
                "price": service.price,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": `${service.name} Features`,
                "itemListElement": service.features.map((feature, featureIndex) => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": feature,
                    "description": `Included in ${service.name} service`
                  }
                }))
              }
            })
          }}
        />
      ))}

      <div className="min-h-screen bg-white">
        {/* Hero Section - Local Business Style */}
        <section className="relative py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
          
          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Local Business Badge */}
            <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/50 shadow-lg">
              <MapPin className="w-4 h-4 text-purple-600" />
              Jacksonville Move-In/Out Cleaning Experts
            </div>

            <div className="flex justify-center mb-6">
              <Scissors className="w-16 h-16 text-purple-200" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Move-In & Move-Out Cleaning
            </h1>
            <p className="text-xl sm:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Professional cleaning services for Jacksonville homes during transitions. 
              Get your security deposit back and start fresh in your new space.
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="w-12 h-12 bg-purple-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Award className="w-6 h-6 text-purple-200" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">Licensed & Insured</h3>
                <p className="text-white/80 text-xs">Jacksonville business since 2015</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="w-12 h-12 bg-purple-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Truck className="w-6 h-6 text-purple-200" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">Same-Day Service</h3>
                <p className="text-white/80 text-xs">Available throughout Jacksonville</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="w-12 h-12 bg-purple-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Star className="w-6 h-6 text-purple-200" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">5-Star Reviews</h3>
                <p className="text-white/80 text-xs">Trusted by Jacksonville families</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9044563851"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call (904) 456-3851
              </a>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Jacksonville Move-In/Out Cleaning Services
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Choose the perfect cleaning package for your Jacksonville home transition. 
                All packages include our eco-friendly products and satisfaction guarantee.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Home className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-2">{service.price}</div>
                    <p className="text-gray-700 text-sm">{service.description}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="block w-full text-center py-3 px-6 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Jacksonville Move-In/Out Cleaning?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We're your local cleaning experts, providing reliable, thorough service that ensures 
                smooth transitions for Jacksonville families.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready for a Smooth Home Transition?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for move-in/out cleaning services in Jacksonville. 
              Free estimates and same-day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9044563851"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
