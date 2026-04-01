import { Scissors, Sparkles, Clock, Users, Shield, Leaf, Check, Star, ArrowRight, Phone, MapPin, Award, Truck, Calendar, Home } from 'lucide-react';
import Link from 'next/link';
import UniversalServiceHero from '@/components/UniversalServiceHero';

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
        
        <UniversalServiceHero 
          title="Move-In & Move-Out Cleaning"
          subtitle="Professional cleaning services for Jacksonville homes during transitions. Get your security deposit back and start fresh in your new space."
          Icon={Home}
          primaryColor="blue"
          formServiceType="move-in-move-out"
        />

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
                <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Home className="w-8 h-8 text-primary-blue" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <div className="text-3xl font-bold text-primary-blue mb-2">{service.price}</div>
                    <p className="text-gray-700 text-sm">{service.description}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="block w-full text-center py-3 px-6 bg-primary-blue text-white rounded-lg font-semibold hover:bg-primary-blue transition-colors duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
