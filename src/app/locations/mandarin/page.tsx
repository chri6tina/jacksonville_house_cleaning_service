import Link from 'next/link';
import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond, Trees, Camera, BookOpen, Coffee } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mandarin House Cleaning Service | Family Cleaning Jacksonville FL',
  description: 'Family-friendly cleaning services in Mandarin, Jacksonville FL. Safe cleaning for families with children and pets. Call (904) 456-3851 for reliable family care.',
  keywords: 'Mandarin cleaning service, Jacksonville family cleaning, Mandarin house cleaning, family-friendly cleaning Jacksonville, safe cleaning Mandarin, Jacksonville family home care',
  openGraph: {
    title: 'Mandarin House Cleaning Service | Family Cleaning Jacksonville FL',
    description: 'Family-friendly cleaning services in Mandarin, Jacksonville FL. Safe cleaning for families with children and pets. Call (904) 456-3851 for reliable family care.',
    url: 'https://www.jacksonvillehousecleaningservice.com/locations/mandarin',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jacksonville House Cleaning Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mandarin House Cleaning Service | Family Cleaning Jacksonville FL',
    description: 'Family-friendly cleaning services in Mandarin, Jacksonville FL. Safe cleaning for families with children and pets.',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/locations/mandarin',
  },
};

export default function MandarinPage() {
  const mandarinServices = [
    {
      id: 'family-friendly-cleaning',
      title: 'Family-Friendly Cleaning',
      description: 'Safe, thorough cleaning for Mandarin families with children and pets',
      icon: Users,
      features: ['Kid and pet-safe products', 'Family scheduling flexibility', 'Child-proof cleaning methods', 'Pet odor elimination', 'Safe for all ages']
    },
    {
      id: 'recurring-family-care',
      title: 'Recurring Family Care',
      description: 'Consistent cleaning to maintain Mandarin family home standards',
      icon: Calendar,
      features: ['Weekly, bi-weekly, or monthly options', 'Family-friendly scheduling', 'Priority scheduling', 'Custom care plans', 'Consistent quality']
    },
    {
      id: 'deep-family-cleaning',
      title: 'Deep Family Cleaning',
      description: 'Comprehensive cleaning for Mandarin homes needing thorough attention',
      icon: Target,
      features: ['Complete family home cleaning', 'Child and pet area focus', 'Safe cleaning methods', 'Thorough but gentle', 'Family standards']
    },
    {
      id: 'move-in-move-out-family',
      title: 'Family Move-In/Move-Out',
      description: 'Specialized cleaning for Mandarin family real estate transactions',
      icon: Car,
      features: ['Pre-move family preparation', 'Post-move restoration', 'Family-ready standards', 'Final inspection', 'Move-in ready results']
    },
    {
      id: 'carpet-family-care',
      title: 'Family Carpet & Upholstery',
      description: 'Safe fabric care for Mandarin family furnishings',
      icon: Droplets,
      features: ['Safe stain removal', 'Family fabric protection', 'Odor elimination', 'Professional restoration', 'Child-safe methods']
    },
    {
      id: 'kitchen-family-care',
      title: 'Family Kitchen Care',
      description: 'Detailed cleaning for Mandarin family kitchens',
      icon: Coffee,
      features: ['Appliance deep cleaning', 'Cabinet and counter care', 'Family finish protection', 'Detail attention', 'Safe sanitization']
    },
    {
      id: 'bathroom-family-care',
      title: 'Family Bathroom Care',
      description: 'Thorough cleaning for Mandarin family bathrooms',
      icon: Home,
      features: ['Deep bathroom cleaning', 'Child-safe products', 'Mold and mildew removal', 'Fixture care', 'Hygiene focus']
    },
    {
      id: 'bedroom-family-care',
      title: 'Family Bedroom Care',
      description: 'Gentle cleaning for Mandarin family bedrooms',
      icon: Home,
      features: ['Bedding care', 'Closet organization', 'Safe products', 'Detail focus', 'Family comfort']
    },
    {
      id: 'outdoor-family-care',
      title: 'Outdoor Family Care',
      description: 'Safe cleaning for Mandarin family outdoor spaces',
      icon: Trees,
      features: ['Patio and deck cleaning', 'Play area maintenance', 'Safe outdoor cleaning', 'Landscaping support', 'Family safety']
    },
    {
      id: 'post-construction-family',
      title: 'Post-Construction Family Care',
      description: 'Safe cleanup after Mandarin family home renovations',
      icon: Target,
      features: ['Construction debris removal', 'Family finish restoration', 'Safe cleaning methods', 'Final inspection', 'Family ready results']
    },
    {
      id: 'vacation-rental-family',
      title: 'Vacation Rental Family Care',
      description: 'Professional cleaning for Mandarin family vacation properties',
      icon: Building2,
      features: ['Family-ready standards', 'Quick turnaround service', 'Safe property care', 'Family satisfaction focus', 'Quality maintained']
    },
    {
      id: 'emergency-family-care',
      title: 'Emergency Family Care',
      description: 'Quick response cleaning for Mandarin family emergencies',
      icon: Zap,
      features: ['24/7 emergency response', 'Family safety priority', 'Quick cleanup service', 'Professional team', 'Family support']
    }
  ];

  const mandarinFeatures = [
    'Family-friendly community',
    'Excellent schools and education',
    'Safe suburban environment',
    'Parks and recreational areas',
    'Family shopping and dining',
    'Strong community involvement'
  ];

  const mandarinLandmarks = [
    'Mandarin Park',
    'Mandarin Library',
    'Mandarin High School',
    'Mandarin Shopping Center',
    'St. Johns River access',
    'Family recreation areas'
  ];

  const mandarinTestimonials = [
    {
      name: 'Sarah M.',
      location: 'Mandarin',
      rating: 5,
      comment: 'Perfect for our family! Safe cleaning that keeps our Mandarin home spotless while protecting our kids and pets.'
    },
    {
      name: 'Michael R.',
      location: 'Mandarin',
      rating: 5,
      comment: 'Reliable family service in Mandarin. They work around our busy schedule and always deliver quality results.'
    },
    {
      name: 'Jennifer L.',
      location: 'Mandarin',
      rating: 5,
      comment: 'Great family cleaning service! Our Mandarin home has never been cleaner, and they use safe products for our children.'
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
            "description": "Family-friendly cleaning services in Mandarin, Jacksonville FL. Safe cleaning for families with children and pets.",
            "url": "https://www.jacksonvillehousecleaningservice.com/locations/mandarin",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3187",
              "longitude": "-81.6920"
            },
            "areaServed": {
              "@type": "City",
              "name": "Mandarin"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mandarin Cleaning Services",
              "itemListElement": mandarinServices.map(service => ({
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
              "reviewCount": "180"
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-primary-blue/5 to-accent-aqua/5">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-blue to-accent-aqua text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-8 w-8 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold">Mandarin</h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Family-friendly cleaning services for Mandarin homes with children and pets. 
              Experience safe, thorough cleaning that works for busy families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?service=family-friendly-cleaning&location=mandarin"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact?service=recurring-family-care&location=mandarin"
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
                Family-Friendly Cleaning Services in Mandarin
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Safe, thorough cleaning services designed for Mandarin families with children and pets. 
                Experience the difference of family-focused care that keeps your home clean and safe.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mandarinServices.map((service) => (
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
                    href={`/contact?service=${service.id}&location=mandarin`}
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
                Why Mandarin Families Choose Our Family Service
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                We understand the unique needs of families and provide safe, reliable service that works for busy schedules.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Safe</h3>
                <p className="text-gray-700">Safe cleaning products and methods that protect your children and pets.</p>
              </div>
              <div className="text-center">
                <Calendar className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Flexible</h3>
                <p className="text-gray-700">Flexible scheduling that works around your family's busy lifestyle.</p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Focused</h3>
                <p className="text-gray-700">Service designed specifically for families with children and pets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mandarin Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Mandarin: Family Living in the Heart of Jacksonville
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Mandarin is one of Jacksonville's most family-friendly communities, known for its excellent schools, 
                  safe environment, and strong community spirit. Our family-focused cleaning services are designed to 
                  support the busy lifestyle that Mandarin families lead.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Features</h3>
                    <ul className="space-y-2">
                      {mandarinFeatures.map((feature, index) => (
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
                      {mandarinLandmarks.map((landmark, index) => (
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Mandarin Service Pricing</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Family Standard Cleaning</span>
                    <span className="font-semibold text-gray-900">From $120</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Family Deep Cleaning</span>
                    <span className="font-semibold text-gray-900">From $220</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Family Move-In/Out</span>
                    <span className="font-semibold text-gray-900">From $280</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Family Maintenance</span>
                    <span className="font-semibold text-gray-900">From $90</span>
                  </div>
                </div>
                <Link 
                  href="/pricing-calculator?location=mandarin"
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
                What Mandarin Families Say
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our Mandarin families have to say about our family service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mandarinTestimonials.map((testimonial, index) => (
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
              Ready for Family-Friendly Care in Mandarin?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the difference of safe, family-focused cleaning that works for your busy lifestyle. 
              Get your free quote today and see why we're the preferred choice for Mandarin families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?service=family-friendly-cleaning&location=mandarin"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact?service=recurring-family-care&location=mandarin"
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



