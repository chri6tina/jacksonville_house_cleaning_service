import Link from 'next/link';
import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond, Trees, Camera, BookOpen, Coffee } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arlington House Cleaning Service | Suburban Home Cleaning Jacksonville FL',
  description: 'Professional cleaning services in Arlington, Jacksonville FL. Suburban home cleaning, family-friendly service, reliable maintenance. Call (904) 456-3851 for quality care.',
  keywords: 'Arlington cleaning service, Jacksonville suburban cleaning, Arlington house cleaning, suburban home cleaning Jacksonville, family cleaning Arlington, Jacksonville Arlington cleaning',
  openGraph: {
    title: 'Arlington House Cleaning Service | Suburban Home Cleaning Jacksonville FL',
    description: 'Professional cleaning services in Arlington, Jacksonville FL. Suburban home cleaning, family-friendly service, reliable maintenance. Call (904) 456-3851 for quality care.',
    url: 'https://www.jacksonvillehousecleaningservice.com/locations/arlington',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jacksonville House Cleaning Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arlington House Cleaning Service | Suburban Home Cleaning Jacksonville FL',
    description: 'Professional cleaning services in Arlington, Jacksonville FL. Suburban home cleaning, family-friendly service, reliable maintenance.',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/locations/arlington',
  },
};

export default function ArlingtonPage() {
  const arlingtonServices = [
    {
      id: 'suburban-standard-cleaning',
      title: 'Suburban Standard Cleaning',
      description: 'Comprehensive cleaning for Arlington suburban homes and families',
      icon: Home,
      features: ['Regular maintenance cleaning', 'Family-friendly methods', 'Suburban home expertise', 'Consistent quality', 'Reliable service']
    },
    {
      id: 'family-home-care',
      title: 'Family Home Care',
      description: 'Safe, thorough cleaning for Arlington families with children and pets',
      icon: Users,
      features: ['Kid and pet-safe products', 'Family scheduling flexibility', 'Child-proof cleaning methods', 'Pet odor elimination', 'Safe for all ages']
    },
    {
      id: 'suburban-deep-cleaning',
      title: 'Suburban Deep Cleaning',
      description: 'Comprehensive cleaning for Arlington homes needing thorough attention',
      icon: Target,
      features: ['Complete suburban home cleaning', 'Family area focus', 'Safe cleaning methods', 'Thorough but gentle', 'Quality standards']
    },
    {
      id: 'move-in-move-out-suburban',
      title: 'Suburban Move-In/Move-Out',
      description: 'Specialized cleaning for Arlington real estate transactions',
      icon: Car,
      features: ['Pre-move suburban preparation', 'Post-move restoration', 'Home-ready standards', 'Final inspection', 'Move-in ready results']
    },
    {
      id: 'carpet-suburban-care',
      title: 'Suburban Carpet & Upholstery',
      description: 'Professional fabric care for Arlington suburban furnishings',
      icon: Droplets,
      features: ['Professional stain removal', 'Suburban fabric protection', 'Odor elimination', 'Professional restoration', 'Quality finish']
    },
    {
      id: 'kitchen-suburban-care',
      title: 'Suburban Kitchen Care',
      description: 'Detailed cleaning for Arlington family kitchens',
      icon: Coffee,
      features: ['Appliance deep cleaning', 'Cabinet and counter care', 'Family finish protection', 'Detail attention', 'Safe sanitization']
    },
    {
      id: 'bathroom-suburban-care',
      title: 'Suburban Bathroom Care',
      description: 'Thorough cleaning for Arlington family bathrooms',
      icon: Home,
      features: ['Deep bathroom cleaning', 'Family-safe products', 'Mold and mildew removal', 'Fixture care', 'Hygiene focus']
    },
    {
      id: 'bedroom-suburban-care',
      title: 'Suburban Bedroom Care',
      description: 'Gentle cleaning for Arlington family bedrooms',
      icon: Home,
      features: ['Bedding care', 'Closet organization', 'Safe products', 'Detail focus', 'Family comfort']
    },
    {
      id: 'outdoor-suburban-care',
      title: 'Outdoor Suburban Care',
      description: 'Professional cleaning for Arlington outdoor spaces',
      icon: Trees,
      features: ['Patio and deck cleaning', 'Driveway maintenance', 'Professional outdoor cleaning', 'Landscaping support', 'Curb appeal']
    },
    {
      id: 'post-construction-suburban',
      title: 'Post-Construction Suburban Care',
      description: 'Professional cleanup after Arlington home renovations',
      icon: Target,
      features: ['Construction debris removal', 'Suburban finish restoration', 'Professional cleaning methods', 'Final inspection', 'Home ready results']
    },
    {
      id: 'vacation-rental-suburban',
      title: 'Vacation Rental Suburban Care',
      description: 'Professional cleaning for Arlington vacation properties',
      icon: Building2,
      features: ['Guest-ready standards', 'Quick turnaround service', 'Professional property care', 'Guest satisfaction focus', 'Quality maintained']
    },
    {
      id: 'recurring-suburban-care',
      title: 'Recurring Suburban Care',
      description: 'Consistent cleaning to maintain Arlington suburban home standards',
      icon: Calendar,
      features: ['Weekly, bi-weekly, or monthly options', 'Suburban standards maintained', 'Priority scheduling', 'Custom care plans', 'Consistent quality']
    }
  ];

  const arlingtonFeatures = [
    'Family-friendly suburban community',
    'Excellent schools and education',
    'Safe residential environment',
    'Parks and recreational areas',
    'Family shopping and dining',
    'Strong community involvement'
  ];

  const arlingtonLandmarks = [
    'Arlington Park',
    'Arlington Library',
    'Arlington High School',
    'Arlington Shopping Center',
    'St. Johns River access',
    'Family recreation areas'
  ];

  const arlingtonTestimonials = [
    {
      name: 'Robert M.',
      location: 'Arlington',
      rating: 5,
      comment: 'Great suburban cleaning service! Our Arlington home has never looked better. Reliable and family-friendly.'
    },
    {
      name: 'Lisa T.',
      location: 'Arlington',
      rating: 5,
      comment: 'Perfect for our busy family in Arlington. The recurring cleaning keeps our suburban home immaculate.'
    },
    {
      name: 'David K.',
      location: 'Arlington',
      rating: 5,
      comment: 'Professional service that understands suburban homes. Highly recommend for Arlington residents!'
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
            "description": "Professional cleaning services in Arlington, Jacksonville FL. Suburban home cleaning, family-friendly service, reliable maintenance.",
            "url": "https://www.jacksonvillehousecleaningservice.com/locations/arlington",
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
              "name": "Arlington"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Arlington Cleaning Services",
              "itemListElement": arlingtonServices.map(service => ({
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
              "reviewCount": "160"
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-primary-blue/5 to-accent-aqua/5">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-blue to-accent-aqua text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-6">
              <Home className="h-8 w-8 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold">Arlington</h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional cleaning services for Arlington suburban homes and families. 
              Experience reliable, family-friendly cleaning that works for your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?service=suburban-standard-cleaning&location=arlington"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact?service=recurring-suburban-care&location=arlington"
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
                Suburban Cleaning Services in Arlington
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Professional cleaning services designed for Arlington's suburban homes and families. 
                Experience the difference of reliable, family-friendly care that keeps your home clean and comfortable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {arlingtonServices.map((service) => (
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
                    href={`/contact?service=${service.id}&location=arlington`}
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
                Why Arlington Chooses Our Suburban Service
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                We understand the unique needs of suburban homes and provide reliable service that works for families.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Home className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Suburban Expertise</h3>
                <p className="text-gray-700">Specialized knowledge for Arlington suburban homes and family needs.</p>
              </div>
              <div className="text-center">
                <Shield className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Safe</h3>
                <p className="text-gray-700">Safe cleaning products and methods that protect your children and pets.</p>
              </div>
              <div className="text-center">
                <Calendar className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Service</h3>
                <p className="text-gray-700">Consistent, dependable cleaning that works around your family schedule.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Arlington Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Arlington: Suburban Living in the Heart of Jacksonville
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Arlington is one of Jacksonville's most family-friendly suburban communities, known for its excellent schools, 
                  safe environment, and strong community spirit. Our suburban cleaning services are designed to 
                  support the comfortable lifestyle that Arlington families enjoy.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Features</h3>
                    <ul className="space-y-2">
                      {arlingtonFeatures.map((feature, index) => (
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
                      {arlingtonLandmarks.map((landmark, index) => (
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Arlington Service Pricing</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Suburban Standard Cleaning</span>
                    <span className="font-semibold text-gray-900">From $130</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Suburban Deep Cleaning</span>
                    <span className="font-semibold text-gray-900">From $240</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Family Move-In/Out</span>
                    <span className="font-semibold text-gray-900">From $280</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Recurring Care</span>
                    <span className="font-semibold text-gray-900">From $100</span>
                  </div>
                </div>
                <Link 
                  href="/pricing-calculator?location=arlington"
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
                What Arlington Residents Say
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our Arlington customers have to say about our suburban service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {arlingtonTestimonials.map((testimonial, index) => (
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
              Ready for Suburban Home Care in Arlington?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the difference of reliable, family-friendly cleaning that works for your suburban lifestyle. 
              Get your free quote today and see why we're the preferred choice for Arlington families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?service=suburban-standard-cleaning&location=arlington"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact?service=recurring-suburban-care&location=arlington"
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



