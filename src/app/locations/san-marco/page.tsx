import Link from 'next/link';
import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond, Trees, Camera, BookOpen, Coffee } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'San Marco House Cleaning Service | Luxury Cleaning Jacksonville FL',
  description: 'Premium cleaning services in San Marco, Jacksonville FL. Luxury home cleaning, upscale maintenance, white-glove service. Call (904) 456-3851 for exceptional care.',
  keywords: 'San Marco cleaning service, Jacksonville luxury cleaning, San Marco house cleaning, upscale cleaning Jacksonville, premium cleaning San Marco, Jacksonville luxury home care',
  openGraph: {
    title: 'San Marco House Cleaning Service | Luxury Cleaning Jacksonville FL',
    description: 'Premium cleaning services in San Marco, Jacksonville FL. Luxury home cleaning, upscale maintenance, white-glove service. Call (904) 456-3851 for exceptional care.',
    url: 'https://www.jacksonvillehousecleaningservice.com/locations/san-marco',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jacksonville House Cleaning Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'San Marco House Cleaning Service | Luxury Cleaning Jacksonville FL',
    description: 'Premium cleaning services in San Marco, Jacksonville FL. Luxury home cleaning, upscale maintenance, white-glove service.',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/locations/san-marco',
  },
};

export default function SanMarcoPage() {
  const sanMarcoServices = [
    {
      id: 'luxury-deep-cleaning',
      title: 'Luxury Deep Cleaning',
      description: 'Comprehensive cleaning for San Marco luxury homes and estates',
      icon: Crown,
      features: ['White-glove service', 'Premium cleaning products', 'Attention to detail', 'Luxury standards', 'Estate maintenance']
    },
    {
      id: 'upscale-maintenance',
      title: 'Upscale Maintenance',
      description: 'Ongoing care to maintain San Marco luxury home standards',
      icon: Award,
      features: ['Weekly or bi-weekly service', 'Luxury product selection', 'Consistent quality', 'Priority scheduling', 'Custom care plans']
    },
    {
      id: 'estate-cleaning',
      title: 'Estate Cleaning',
      description: 'Specialized service for San Marco large luxury properties',
      icon: Building2,
      features: ['Large property expertise', 'Multiple room coordination', 'Luxury finish care', 'Professional team', 'Comprehensive coverage']
    },
    {
      id: 'luxury-window-care',
      title: 'Luxury Window Care',
      description: 'Premium window cleaning for San Marco luxury homes',
      icon: Building2,
      features: ['Interior and exterior cleaning', 'Luxury frame care', 'Streak-free results', 'Safety equipment', 'Premium finish']
    },
    {
      id: 'upscale-carpet-care',
      title: 'Upscale Carpet & Upholstery',
      description: 'Premium fabric care for San Marco luxury furnishings',
      icon: Droplets,
      features: ['Luxury fabric protection', 'Professional restoration', 'Odor elimination', 'Stain removal', 'Premium finish']
    },
    {
      id: 'luxury-kitchen-care',
      title: 'Luxury Kitchen Care',
      description: 'Detailed cleaning for San Marco gourmet kitchens',
      icon: Coffee,
      features: ['Appliance deep cleaning', 'Cabinet and counter care', 'Luxury finish protection', 'Detail attention', 'Sanitization']
    },
    {
      id: 'master-suite-cleaning',
      title: 'Master Suite Cleaning',
      description: 'Luxury care for San Marco master bedrooms and bathrooms',
      icon: Home,
      features: ['Luxury bedding care', 'Bathroom deep cleaning', 'Closet organization', 'Premium products', 'Detail focus']
    },
    {
      id: 'entertainment-area-care',
      title: 'Entertainment Area Care',
      description: 'Luxury cleaning for San Marco entertainment spaces',
      icon: Users,
      features: ['Media room cleaning', 'Bar area maintenance', 'Entertainment equipment care', 'Luxury finish protection', 'Guest-ready standards']
    },
    {
      id: 'outdoor-luxury-care',
      title: 'Outdoor Luxury Care',
      description: 'Premium cleaning for San Marco outdoor living spaces',
      icon: Trees,
      features: ['Pool area maintenance', 'Outdoor kitchen cleaning', 'Patio and deck care', 'Landscaping support', 'Curb appeal enhancement']
    },
    {
      id: 'luxury-move-service',
      title: 'Luxury Move-In/Move-Out',
      description: 'Premium cleaning for San Marco real estate transactions',
      icon: Car,
      features: ['Pre-move luxury preparation', 'Post-move restoration', 'Estate-ready standards', 'Final inspection', 'Luxury presentation']
    },
    {
      id: 'post-renovation-luxury',
      title: 'Post-Renovation Luxury Care',
      description: 'Premium cleanup after San Marco luxury home renovations',
      icon: Target,
      features: ['Construction debris removal', 'Luxury finish restoration', 'Detail cleaning', 'Final inspection', 'Luxury ready results']
    },
    {
      id: 'vacation-home-luxury',
      title: 'Vacation Home Luxury Care',
      description: 'Premium cleaning for San Marco vacation properties',
      icon: Building2,
      features: ['Guest-ready luxury standards', 'Quick turnaround service', 'Premium property care', 'Guest satisfaction focus', 'Luxury maintained']
    }
  ];

  const sanMarcoFeatures = [
    'Upscale residential community',
    'Luxury homes and estates',
    'Proximity to downtown Jacksonville',
    'Exclusive shopping and dining',
    'Professional residents',
    'High-end amenities and services'
  ];

  const sanMarcoLandmarks = [
    'San Marco Square',
    'San Marco Theatre',
    'Balis Park',
    'San Marco Library',
    'Luxury shopping districts',
    'Fine dining restaurants'
  ];

  const sanMarcoTestimonials = [
    {
      name: 'Elizabeth R.',
      location: 'San Marco',
      rating: 5,
      comment: 'Exceptional luxury service! Our San Marco estate has never looked more pristine. The attention to detail is outstanding.'
    },
    {
      name: 'David M.',
      location: 'San Marco',
      rating: 5,
      comment: 'Professional luxury cleaning that matches our San Marco standards. White-glove service every time.'
    },
    {
      name: 'Victoria L.',
      location: 'San Marco',
      rating: 5,
      comment: 'Perfect for our busy lifestyle in San Marco. The recurring luxury service keeps our home immaculate.'
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
            "description": "Premium cleaning services in San Marco, Jacksonville FL. Luxury home cleaning, upscale maintenance, white-glove service.",
            "url": "https://www.jacksonvillehousecleaningservice.com/locations/san-marco",
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
              "name": "San Marco"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "San Marco Cleaning Services",
              "itemListElement": sanMarcoServices.map(service => ({
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
              <Crown className="h-8 w-8 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold">San Marco</h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Premium cleaning services for San Marco luxury homes and estates. 
              Experience white-glove service that matches your upscale lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?service=luxury-deep-cleaning&location=san-marco"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact?service=upscale-maintenance&location=san-marco"
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
                Luxury Cleaning Services in San Marco
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Premium cleaning services designed for San Marco's luxury homes and upscale residences. 
                Experience the difference of white-glove care that matches your lifestyle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sanMarcoServices.map((service) => (
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
                    href={`/contact?service=${service.id}&location=san-marco`}
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
                Why San Marco Chooses Our Luxury Service
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                We understand the high standards of luxury homes and provide service that exceeds expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Crown className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Standards</h3>
                <p className="text-gray-700">Premium service quality that matches your San Marco lifestyle and expectations.</p>
              </div>
              <div className="text-center">
                <Award className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">White-Glove Service</h3>
                <p className="text-gray-700">Exceptional attention to detail and care for your luxury home and furnishings.</p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Team</h3>
                <p className="text-gray-700">Experienced professionals who understand luxury home care and maintenance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* San Marco Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  San Marco: Luxury Living in the Heart of Jacksonville
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  San Marco is one of Jacksonville's most prestigious communities, known for its luxury homes, 
                  upscale amenities, and professional residents. Our premium cleaning services are designed to 
                  maintain the luxury standards that San Marco residents expect.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Features</h3>
                    <ul className="space-y-2">
                      {sanMarcoFeatures.map((feature, index) => (
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
                      {sanMarcoLandmarks.map((landmark, index) => (
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">San Marco Service Pricing</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Luxury Standard Cleaning</span>
                    <span className="font-semibold text-gray-900">From $180</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Luxury Deep Cleaning</span>
                    <span className="font-semibold text-gray-900">From $350</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Estate Cleaning</span>
                    <span className="font-semibold text-gray-900">From $450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Luxury Maintenance</span>
                    <span className="font-semibold text-gray-900">From $140</span>
                  </div>
                </div>
                <Link 
                  href="/pricing-calculator?location=san-marco"
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
                What San Marco Residents Say
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our San Marco customers have to say about our luxury service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sanMarcoTestimonials.map((testimonial, index) => (
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
              Ready for Luxury Home Care in San Marco?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the difference of premium cleaning that matches your San Marco lifestyle. 
              Get your free quote today and see why we're the preferred choice for luxury homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?service=luxury-deep-cleaning&location=san-marco"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact?service=upscale-maintenance&location=san-marco"
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



