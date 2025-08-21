import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond, Trees, Camera, BookOpen, Coffee } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Riverside House Cleaning Service | Historic Home Cleaning Jacksonville FL',
  description: 'Professional cleaning services in Riverside & Avondale, Jacksonville FL. Historic home care, architectural detail cleaning, preservation-focused service. Call (904) 456-3851 for meticulous care.',
  keywords: 'Riverside cleaning service, Jacksonville historic home cleaning, Riverside house cleaning, historic home care Jacksonville, architectural cleaning Riverside, preservation cleaning Jacksonville',
  openGraph: {
    title: 'Riverside House Cleaning Service | Historic Home Cleaning Jacksonville FL',
    description: 'Professional cleaning services in Riverside & Avondale, Jacksonville FL. Historic home care, architectural detail cleaning, preservation-focused service. Call (904) 456-3851 for meticulous care.',
    url: 'https://www.jacksonvillehousecleaningservice.com/locations/riverside-avondale',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jacksonville House Cleaning Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riverside House Cleaning Service | Historic Home Cleaning Jacksonville FL',
    description: 'Professional cleaning services in Riverside & Avondale, Jacksonville FL. Historic home care, architectural detail cleaning, preservation-focused service.',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/locations/riverside-avondale',
  },
};

export default function RiversideAvondalePage() {
  const riversideServices = [
    {
      id: 'historic-home-care',
      title: 'Historic Home Care',
      description: 'Specialized cleaning for Riverside historic homes and architectural details',
      icon: BookOpen,
      features: ['Gentle cleaning methods', 'Architectural detail preservation', 'Historic finish care', 'Period-appropriate techniques', 'Heritage home expertise']
    },
    {
      id: 'architectural-cleaning',
      title: 'Architectural Detail Cleaning',
      description: 'Meticulous care for Riverside homes with unique architectural features',
      icon: Building2,
      features: ['Crown molding cleaning', 'Wainscoting care', 'Stained glass attention', 'Hardwood floor preservation', 'Vintage fixture care']
    },
    {
      id: 'preservation-cleaning',
      title: 'Preservation-Focused Service',
      description: 'Cleaning that protects and maintains Riverside historic home integrity',
      icon: Shield,
      features: ['Gentle product selection', 'Surface protection methods', 'Long-term preservation', 'Expert consultation', 'Heritage maintenance']
    },
    {
      id: 'family-friendly',
      title: 'Family-Friendly Cleaning',
      description: 'Safe, thorough cleaning for Riverside families with children and pets',
      icon: Users,
      features: ['Kid and pet-safe products', 'Family scheduling flexibility', 'Child-proof cleaning methods', 'Pet odor elimination', 'Safe for all ages']
    },
    {
      id: 'recurring-maintenance',
      title: 'Recurring Maintenance',
      description: 'Consistent care to maintain Riverside historic home beauty',
      icon: Calendar,
      features: ['Weekly, bi-weekly, or monthly options', 'Historic standards maintained', 'Priority scheduling', 'Custom service plans', 'Preservation focus']
    },
    {
      id: 'move-in-move-out',
      title: 'Historic Home Move-In/Move-Out',
      description: 'Specialized cleaning for Riverside real estate transactions',
      icon: Car,
      features: ['Pre-move historic preparation', 'Post-move restoration', 'Heritage home preparation', 'Final preservation inspection', 'Move-in ready results']
    },
    {
      id: 'deep-cleaning',
      title: 'Historic Deep Cleaning',
      description: 'Comprehensive cleaning for Riverside homes needing thorough attention',
      icon: Target,
      features: ['Complete historic home cleaning', 'Architectural detail focus', 'Preservation methods', 'Gentle but thorough', 'Heritage standards']
    },
    {
      id: 'carpet-care',
      title: 'Historic Carpet & Upholstery',
      description: 'Gentle fabric care for Riverside vintage furnishings',
      icon: Droplets,
      features: ['Gentle stain removal', 'Vintage fabric protection', 'Odor elimination', 'Professional restoration', 'Preservation focus']
    },
    {
      id: 'window-cleaning',
      title: 'Historic Window Cleaning',
      description: 'Careful cleaning for Riverside vintage windows and frames',
      icon: Building2,
      features: ['Interior and exterior cleaning', 'Vintage window care', 'Streak-free results', 'Safety equipment used', 'Frame preservation']
    },
    {
      id: 'outdoor-maintenance',
      title: 'Outdoor Living Area Care',
      description: 'Exterior cleaning for Riverside historic home outdoor spaces',
      icon: Trees,
      features: ['Porch and deck cleaning', 'Garden area maintenance', 'Exterior surface care', 'Landscaping support', 'Curb appeal enhancement']
    },
    {
      id: 'post-construction',
      title: 'Post-Renovation Cleaning',
      description: 'Cleanup after Riverside historic home renovations',
      icon: Target,
      features: ['Construction debris removal', 'Historic finish restoration', 'Detailed surface cleaning', 'Final preservation inspection', 'Heritage ready results']
    },
    {
      id: 'vacation-rental',
      title: 'Vacation Rental Turnover',
      description: 'Professional cleaning for Riverside short-term rental properties',
      icon: Building2,
      features: ['Guest-ready standards', 'Quick turnaround service', 'Historic property care', 'Guest satisfaction focus', 'Preservation maintained']
    }
  ];

  const riversideFeatures = [
    'Historic architecture and charm',
    'Tree-lined streets and parks',
    'Vibrant arts and culture scene',
    'Excellent restaurants and cafes',
    'Strong community involvement',
    'Walkable neighborhood design'
  ];

  const riversideLandmarks = [
    'Riverside Arts Market',
    'Memorial Park',
    'Cummer Museum of Art & Gardens',
    'Riverside Baptist Church',
    'Five Points District',
    'St. Johns River access'
  ];

  const riversideTestimonials = [
    {
      name: 'Jennifer L.',
      location: 'Riverside',
      rating: 5,
      comment: 'They understand historic homes! Our Riverside Victorian has never looked better while preserving all its character.'
    },
    {
      name: 'Robert M.',
      location: 'Riverside',
      rating: 5,
      comment: 'Professional service that respects the architectural details of our historic Riverside home. Highly recommend!'
    },
    {
      name: 'Amanda T.',
      location: 'Riverside',
      rating: 5,
      comment: 'Perfect for our busy family in Riverside. The recurring cleaning keeps our historic home immaculate.'
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
            "description": "Professional cleaning services in Riverside & Avondale, Jacksonville FL. Historic home care, architectural detail cleaning, preservation-focused service.",
            "url": "https://www.jacksonvillehousecleaningservice.com/locations/riverside-avondale",
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
              "name": "Riverside & Avondale"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Riverside & Avondale Cleaning Services",
              "itemListElement": riversideServices.map(service => ({
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
              "reviewCount": "120"
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
              <h1 className="text-4xl md:text-6xl font-bold">Riverside & Avondale</h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional cleaning services for Riverside & Avondale historic homes. 
              Experience meticulous care that preserves your home's architectural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=historic-home-care&location=riverside-avondale"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </a>
              <a 
                href="/contact?service=recurring-maintenance&location=riverside-avondale"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors"
              >
                Schedule Service
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Historic Home Cleaning Services in Riverside & Avondale
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Specialized cleaning services designed for Riverside & Avondale's historic homes and architectural treasures. 
                Experience the difference of preservation-focused care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {riversideServices.map((service) => (
                <div key={service.id} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-primary-blue mr-3" />
                    <h3 className="text-xl font-semibold text-charcoal">{service.title}</h3>
                  </div>
                  <p className="text-charcoal/70 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-charcoal/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`/contact?service=${service.id}&location=riverside-avondale`}
                    className="inline-block mt-6 bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors"
                  >
                    Book Service
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Why Riverside & Avondale Chooses Our Historic Home Service
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                We understand the unique needs of historic homes and provide service that preserves architectural integrity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <BookOpen className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Historic Expertise</h3>
                <p className="text-charcoal/70">Specialized knowledge for preserving Riverside historic home beauty and character.</p>
              </div>
              <div className="text-center">
                <Shield className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Preservation Focus</h3>
                <p className="text-charcoal/70">Cleaning methods that protect and maintain your home's architectural integrity.</p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Family Friendly</h3>
                <p className="text-charcoal/70">Safe, thorough cleaning that works for Riverside families with children and pets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Riverside Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                  Riverside & Avondale: Historic Charm in the Heart of Jacksonville
                </h2>
                <p className="text-lg text-charcoal/70 mb-8">
                  Riverside & Avondale is one of Jacksonville's most historic communities, known for its beautiful architecture, 
                  tree-lined streets, and vibrant arts scene. Our specialized cleaning services are designed to 
                  maintain the architectural beauty that Riverside residents cherish.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Community Features</h3>
                    <ul className="space-y-2">
                      {riversideFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-accent-green mr-2" />
                          <span className="text-charcoal/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Local Landmarks</h3>
                    <ul className="space-y-2">
                      {riversideLandmarks.map((landmark, index) => (
                        <li key={index} className="flex items-center">
                          <MapPin className="h-4 w-4 text-primary-blue mr-2" />
                          <span className="text-charcoal/80">{landmark}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary-blue/10 to-accent-aqua/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-6">Riverside Service Area</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal/80">Standard Cleaning</span>
                    <span className="font-semibold text-charcoal">From $140</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal/80">Historic Deep Cleaning</span>
                    <span className="font-semibold text-charcoal">From $280</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal/80">Architectural Care</span>
                    <span className="font-semibold text-charcoal">From $350</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal/80">Recurring Service</span>
                    <span className="font-semibold text-charcoal">From $110</span>
                  </div>
                </div>
                <a 
                  href="/pricing-calculator?location=riverside-avondale"
                  className="block w-full bg-primary-blue text-white text-center py-3 rounded-lg font-semibold mt-6 hover:bg-primary-blue/90 transition-colors"
                >
                  Get Detailed Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                What Riverside & Avondale Residents Say
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our Riverside & Avondale customers have to say about our historic home service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {riversideTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-charcoal/80 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">{testimonial.name}</p>
                      <p className="text-charcoal/60 text-sm">{testimonial.location}</p>
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
              Ready for Historic Home Care in Riverside & Avondale?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the difference of specialized cleaning that preserves your Riverside historic home's architectural beauty. 
              Get your free quote today and see why we're the preferred choice for historic homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=historic-home-care&location=riverside-avondale"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </a>
              <a 
                href="/contact?service=recurring-maintenance&location=riverside-avondale"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors"
              >
                Schedule Consultation
              </a>
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
