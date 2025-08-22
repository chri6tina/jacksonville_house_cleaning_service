import Link from 'next/link';
import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond, Trees, Camera, BookOpen, Coffee } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ponte Vedra Beach House Cleaning Service | Beach Home Cleaning Jacksonville FL',
  description: 'Premium cleaning services in Ponte Vedra Beach, Jacksonville FL. Beach home cleaning, luxury maintenance, coastal property care. Call (904) 456-3851 for exceptional service.',
  keywords: 'Ponte Vedra Beach cleaning service, Jacksonville beach cleaning, Ponte Vedra Beach house cleaning, beach home cleaning Jacksonville, coastal cleaning Ponte Vedra, Jacksonville beach property care',
  openGraph: {
    title: 'Ponte Vedra Beach House Cleaning Service | Beach Home Cleaning Jacksonville FL',
    description: 'Premium cleaning services in Ponte Vedra Beach, Jacksonville FL. Beach home cleaning, luxury maintenance, coastal property care. Call (904) 456-3851 for exceptional service.',
    url: 'https://www.jacksonvillehousecleaningservice.com/locations/ponte-vedra-beach',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jacksonville House Cleaning Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ponte Vedra Beach House Cleaning Service | Beach Home Cleaning Jacksonville FL',
    description: 'Premium cleaning services in Ponte Vedra Beach, Jacksonville FL. Beach home cleaning, luxury maintenance, coastal property care.',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/locations/ponte-vedra-beach',
  },
};

export default function PonteVedraBeachPage() {
  const ponteVedraServices = [
    {
      id: 'beach-luxury-cleaning',
      title: 'Beach Luxury Cleaning',
      description: 'Premium cleaning for Ponte Vedra Beach luxury homes and coastal properties',
      icon: Crown,
      features: ['Luxury beach home care', 'Premium cleaning products', 'Coastal property expertise', 'White-glove service', 'Beach standards']
    },
    {
      id: 'coastal-property-care',
      title: 'Coastal Property Care',
      description: 'Specialized cleaning for Ponte Vedra Beach oceanfront and coastal homes',
      icon: Building2,
      features: ['Oceanfront property expertise', 'Salt air considerations', 'Coastal finish protection', 'Beach area maintenance', 'Luxury standards']
    },
    {
      id: 'beach-deep-cleaning',
      title: 'Beach Deep Cleaning',
      description: 'Comprehensive cleaning for Ponte Vedra Beach homes needing thorough attention',
      icon: Target,
      features: ['Complete beach home cleaning', 'Coastal area focus', 'Luxury cleaning methods', 'Thorough but gentle', 'Beach home standards']
    },
    {
      id: 'vacation-rental-beach',
      title: 'Beach Vacation Rental Care',
      description: 'Premium cleaning for Ponte Vedra Beach vacation properties',
      icon: Building2,
      features: ['Guest-ready luxury standards', 'Quick turnaround service', 'Beach property care', 'Guest satisfaction focus', 'Luxury maintained']
    },
    {
      id: 'beach-window-care',
      title: 'Beach Window Care',
      description: 'Premium window cleaning for Ponte Vedra Beach oceanfront homes',
      icon: Building2,
      features: ['Ocean view maintenance', 'Salt air protection', 'Luxury frame care', 'Streak-free results', 'Beach standards']
    },
    {
      id: 'outdoor-beach-care',
      title: 'Outdoor Beach Care',
      description: 'Premium cleaning for Ponte Vedra Beach outdoor living spaces',
      icon: Trees,
      features: ['Pool area maintenance', 'Beach deck cleaning', 'Outdoor kitchen care', 'Coastal landscaping', 'Ocean view enhancement']
    },
    {
      id: 'beach-kitchen-care',
      title: 'Beach Kitchen Care',
      description: 'Detailed cleaning for Ponte Vedra Beach gourmet kitchens',
      icon: Coffee,
      features: ['Appliance deep cleaning', 'Cabinet and counter care', 'Luxury finish protection', 'Detail attention', 'Beach standards']
    },
    {
      id: 'master-suite-beach',
      title: 'Beach Master Suite Care',
      description: 'Luxury care for Ponte Vedra Beach master bedrooms and bathrooms',
      icon: Home,
      features: ['Luxury bedding care', 'Ocean view maintenance', 'Bathroom deep cleaning', 'Premium products', 'Beach luxury focus']
    },
    {
      id: 'entertainment-beach',
      title: 'Beach Entertainment Care',
      description: 'Luxury cleaning for Ponte Vedra Beach entertainment spaces',
      icon: Users,
      features: ['Media room cleaning', 'Beach bar maintenance', 'Entertainment equipment care', 'Luxury finish protection', 'Guest-ready standards']
    },
    {
      id: 'beach-move-service',
      title: 'Beach Move-In/Move-Out',
      description: 'Premium cleaning for Ponte Vedra Beach real estate transactions',
      icon: Car,
      features: ['Pre-move beach preparation', 'Post-move restoration', 'Beach-ready standards', 'Final inspection', 'Luxury presentation']
    },
    {
      id: 'post-renovation-beach',
      title: 'Post-Renovation Beach Care',
      description: 'Premium cleanup after Ponte Vedra Beach luxury home renovations',
      icon: Target,
      features: ['Construction debris removal', 'Beach finish restoration', 'Luxury cleaning methods', 'Final inspection', 'Beach ready results']
    },
    {
      id: 'recurring-beach-care',
      title: 'Recurring Beach Care',
      description: 'Consistent cleaning to maintain Ponte Vedra Beach luxury standards',
      icon: Calendar,
      features: ['Weekly, bi-weekly, or monthly options', 'Beach standards maintained', 'Priority scheduling', 'Custom care plans', 'Luxury focus']
    }
  ];

  const ponteVedraFeatures = [
    'Luxury beachfront community',
    'World-class golf courses',
    'Exclusive shopping and dining',
    'Professional residents',
    'High-end amenities and services',
    'Oceanfront properties'
  ];

  const ponteVedraLandmarks = [
    'TPC Sawgrass',
    'Ponte Vedra Beach',
    'Sawgrass Marriott Golf Resort',
    'Ponte Vedra Concert Hall',
    'Luxury shopping districts',
    'Fine dining restaurants'
  ];

  const ponteVedraTestimonials = [
    {
      name: 'Elizabeth R.',
      location: 'Ponte Vedra Beach',
      rating: 5,
      comment: 'Exceptional beach luxury service! Our Ponte Vedra Beach home has never looked more pristine. Coastal expertise is outstanding.'
    },
    {
      name: 'David M.',
      location: 'Ponte Vedra Beach',
      rating: 5,
      comment: 'Professional beach cleaning that matches our Ponte Vedra standards. Oceanfront property care is exceptional.'
    },
    {
      name: 'Victoria L.',
      location: 'Ponte Vedra Beach',
      rating: 5,
      comment: 'Perfect for our luxury lifestyle in Ponte Vedra Beach. The recurring beach service keeps our coastal home immaculate.'
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
            "description": "Premium cleaning services in Ponte Vedra Beach, Jacksonville FL. Beach home cleaning, luxury maintenance, coastal property care.",
            "url": "https://www.jacksonvillehousecleaningservice.com/locations/ponte-vedra-beach",
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
              "name": "Ponte Vedra Beach"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Ponte Vedra Beach Cleaning Services",
              "itemListElement": ponteVedraServices.map(service => ({
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
              "reviewCount": "140"
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
              <h1 className="text-4xl md:text-6xl font-bold">Ponte Vedra Beach</h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Premium cleaning services for Ponte Vedra Beach luxury homes and coastal properties. 
              Experience white-glove service that matches your beach lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?service=beach-luxury-cleaning&location=ponte-vedra-beach"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact?service=recurring-beach-care&location=ponte-vedra-beach"
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
                Beach Luxury Cleaning Services in Ponte Vedra Beach
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Premium cleaning services designed for Ponte Vedra Beach's luxury homes and coastal properties. 
                Experience the difference of beach-focused care that preserves your oceanfront lifestyle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ponteVedraServices.map((service) => (
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
                    href={`/contact?service=${service.id}&location=ponte-vedra-beach`}
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
                Why Ponte Vedra Beach Chooses Our Beach Luxury Service
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                We understand the unique needs of beach homes and provide premium service that exceeds coastal expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Crown className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Beach Luxury Standards</h3>
                <p className="text-gray-700">Premium service quality that matches your Ponte Vedra Beach lifestyle and expectations.</p>
              </div>
              <div className="text-center">
                <Building2 className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Coastal Expertise</h3>
                <p className="text-gray-700">Specialized knowledge for oceanfront properties and coastal home maintenance.</p>
              </div>
              <div className="text-center">
                <Award className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">White-Glove Service</h3>
                <p className="text-gray-700">Exceptional attention to detail and care for your beach home and furnishings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ponte Vedra Beach Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Ponte Vedra Beach: Luxury Living on the Atlantic Coast
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Ponte Vedra Beach is one of Jacksonville's most prestigious coastal communities, known for its luxury homes, 
                  world-class golf courses, and pristine Atlantic beaches. Our premium cleaning services are designed to 
                  maintain the luxury standards that Ponte Vedra Beach residents expect.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Features</h3>
                    <ul className="space-y-2">
                      {ponteVedraFeatures.map((feature, index) => (
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
                      {ponteVedraLandmarks.map((landmark, index) => (
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ponte Vedra Beach Service Pricing</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Beach Luxury Cleaning</span>
                    <span className="font-semibold text-gray-900">From $200</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Coastal Deep Cleaning</span>
                    <span className="font-semibold text-gray-900">From $380</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Beach Property Care</span>
                    <span className="font-semibold text-gray-900">From $450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Luxury Maintenance</span>
                    <span className="font-semibold text-gray-900">From $160</span>
                  </div>
                </div>
                <Link 
                  href="/pricing-calculator?location=ponte-vedra-beach"
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
                What Ponte Vedra Beach Residents Say
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our Ponte Vedra Beach customers have to say about our beach luxury service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ponteVedraTestimonials.map((testimonial, index) => (
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
              Ready for Beach Luxury Care in Ponte Vedra Beach?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the difference of premium cleaning that matches your Ponte Vedra Beach lifestyle. 
              Get your free quote today and see why we're the preferred choice for beach luxury homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?service=beach-luxury-cleaning&location=ponte-vedra-beach"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact?service=recurring-beach-care&location=ponte-vedra-beach"
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

