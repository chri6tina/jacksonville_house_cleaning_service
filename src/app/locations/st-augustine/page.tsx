import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond, Trees, Camera, BookOpen, Coffee, Mountain, Waves, School, Church, Store, Utensils, Castle, Flag, Anchor, Compass } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'St. Augustine House Cleaning Service | Historic City Cleaning Jacksonville FL',
  description: 'Professional cleaning services in St. Augustine, Jacksonville FL. Historic city cleaning, tourist area maintenance, and luxury home care. Call (904) 456-3851 for exceptional service.',
  keywords: 'St. Augustine cleaning service, Jacksonville historic cleaning, St. Augustine house cleaning, tourist area cleaning Jacksonville, luxury home cleaning St. Augustine, historic city maintenance',
  openGraph: {
    title: 'St. Augustine House Cleaning Service | Historic City Cleaning Jacksonville FL',
    description: 'Professional cleaning services in St. Augustine, Jacksonville FL. Historic city cleaning, tourist area maintenance, and luxury home care. Call (904) 456-3851 for exceptional service.',
    url: 'https://www.jacksonvillehousecleaningservice.com/locations/st-augustine',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jacksonville House Cleaning Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'St. Augustine House Cleaning Service | Historic City Cleaning Jacksonville FL',
    description: 'Professional cleaning services in St. Augustine, Jacksonville FL. Historic city cleaning, tourist area maintenance, and luxury home care.',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/locations/st-augustine',
  },
};

export default function StAugustinePage() {
  const stAugustineServices = [
    {
      id: 'historic-home-care',
      title: 'Historic Home Care',
      description: 'Specialized cleaning for St. Augustine historic properties and architectural details',
      icon: Castle,
      features: ['Gentle cleaning methods', 'Historic preservation', 'Architectural detail care', 'Period-appropriate techniques', 'Heritage home expertise']
    },
    {
      id: 'luxury-home-cleaning',
      title: 'Luxury Home Cleaning',
      description: 'Premium cleaning services for St. Augustine luxury properties and estates',
      icon: Crown,
      features: ['Premium cleaning products', 'Attention to detail', 'Luxury standards', 'White glove service', 'Estate maintenance']
    },
    {
      id: 'tourist-area-maintenance',
      title: 'Tourist Area Maintenance',
      description: 'Professional cleaning for vacation rentals and tourist accommodations',
      icon: Flag,
      features: ['Guest-ready standards', 'Quick turnaround service', 'Tourist satisfaction focus', 'Property protection', 'Consistent quality']
    },
    {
      id: 'beach-property-care',
      title: 'Beach Property Care',
      description: 'Specialized cleaning for coastal properties and beachfront homes',
      icon: Waves,
      features: ['Salt air protection', 'Sand removal', 'Coastal maintenance', 'Weather-resistant cleaning', 'Beach area expertise']
    },
    {
      id: 'vacation-rental-turnover',
      title: 'Vacation Rental Turnover',
      description: 'Professional cleaning for short-term rental properties',
      icon: Building2,
      features: ['Guest-ready standards', 'Quick turnaround service', 'Quality assurance', 'Guest satisfaction focus', 'Property protection']
    },
    {
      id: 'deep-cleaning',
      title: 'Deep Cleaning',
      description: 'Comprehensive cleaning for homes needing thorough attention',
      icon: Target,
      features: ['Complete home cleaning', 'Hard-to-reach areas', 'Detailed attention', 'Thorough sanitization', 'Fresh start feeling']
    },
    {
      id: 'move-in-move-out',
      title: 'Move-In/Move-Out Cleaning',
      description: 'Professional cleaning for real estate transactions and relocations',
      icon: Car,
      features: ['Pre-move preparation', 'Post-move cleanup', 'Real estate ready', 'Final inspection', 'Move-in ready results']
    },
    {
      id: 'post-construction',
      title: 'Post-Construction Cleanup',
      description: 'Professional cleanup after home renovations and projects',
      icon: Target,
      features: ['Construction debris removal', 'Dust and particle cleanup', 'Surface restoration', 'Final inspection', 'Move-in ready']
    },
    {
      id: 'carpet-care',
      title: 'Carpet & Upholstery Care',
      description: 'Professional fabric cleaning and stain removal',
      icon: Droplets,
      features: ['Deep stain removal', 'Odor elimination', 'Fabric protection', 'Professional equipment', 'Extended freshness']
    },
    {
      id: 'window-cleaning',
      title: 'Window Cleaning',
      description: 'Crystal clear windows for better natural light and views',
      icon: Building2,
      features: ['Interior and exterior cleaning', 'Screen cleaning', 'Streak-free results', 'Safety equipment used', 'Frame cleaning']
    },
    {
      id: 'outdoor-living-areas',
      title: 'Outdoor Living Areas',
      description: 'Exterior cleaning for your outdoor spaces',
      icon: Trees,
      features: ['Porch and deck cleaning', 'Patio maintenance', 'Outdoor furniture care', 'Entryway cleaning', 'Curb appeal enhancement']
    },
    {
      id: 'commercial-cleaning',
      title: 'Commercial Property Cleaning',
      description: 'Professional cleaning for St. Augustine businesses and commercial properties',
      icon: Building2,
      features: ['Business standards', 'Flexible scheduling', 'Professional appearance', 'Customer satisfaction', 'Commercial expertise']
    }
  ];

  const stAugustineFeatures = [
    'Historic Spanish architecture',
    'Tourist destination and attractions',
    'Beachfront and coastal properties',
    'Luxury homes and estates',
    'Cultural heritage sites',
    'Year-round tourism'
  ];

  const stAugustineLandmarks = [
    'Castillo de San Marcos',
    'St. George Street',
    'Flagler College',
    'Lightner Museum',
    'St. Augustine Beach',
    'Fountain of Youth'
  ];

  const stAugustineTestimonials = [
    {
      name: 'Elizabeth R.',
      location: 'St. Augustine',
      rating: 5,
      comment: 'Exceptional service for our historic St. Augustine home. They understand the care these properties need.'
    },
    {
      name: 'Thomas W.',
      location: 'St. Augustine',
      rating: 5,
      comment: 'Perfect for our vacation rental. Quick turnaround and guest-ready results every time.'
    },
    {
      name: 'Maria S.',
      location: 'St. Augustine',
      rating: 5,
      comment: 'Luxury home cleaning at its finest. Our St. Augustine estate has never looked better.'
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
            "description": "Professional cleaning services in St. Augustine, Jacksonville FL. Historic city cleaning, tourist area maintenance, and luxury home care.",
            "url": "https://www.jacksonvillehousecleaningservice.com/locations/st-augustine",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "29.9012",
              "longitude": "-81.3124"
            },
            "areaServed": {
              "@type": "City",
              "name": "St. Augustine"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "St. Augustine Cleaning Services",
              "itemListElement": stAugustineServices.map(service => ({
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
              "reviewCount": "110"
            }
          })
        }}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-blue/10 to-accent-aqua/10 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-accent-aqua/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary-blue mb-6">
              <MapPin className="w-4 h-4" />
              <span>St. Augustine, Jacksonville FL</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Professional Cleaning Services in
              <span className="text-primary-blue block">St. Augustine</span>
            </h1>
            
            <p className="text-xl text-charcoal/80 mb-8 max-w-3xl mx-auto">
              Historic city cleaning with luxury standards. Serving St. Augustine with professional cleaning services 
              that preserve the beauty of America's oldest city while maintaining modern cleanliness standards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:9044563851"
                className="inline-flex items-center gap-2 bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (904) 456-3851
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold border-2 border-primary-blue hover:bg-primary-blue/10 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              St. Augustine Cleaning Services
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Comprehensive cleaning solutions designed for St. Augustine's unique needs. From historic preservation 
              to luxury home care, we provide the services that maintain the beauty of America's oldest city.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stAugustineServices.map((service) => (
              <div key={service.id} className="bg-gradient-to-br from-blue-50 to-accent-aqua/10 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4">{service.title}</h3>
                <p className="text-charcoal/70 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-charcoal/80">
                      <CheckCircle className="w-4 h-4 text-accent-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-accent-aqua/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Why St. Augustine Property Owners Choose Us
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We understand the unique challenges and requirements of St. Augustine properties, from historic 
              preservation to luxury standards and tourist area maintenance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Castle className="w-10 h-10 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Historic Preservation</h3>
              <p className="text-charcoal/70">
                Specialized cleaning methods that protect and preserve St. Augustine's historic architecture.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-aqua/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-10 h-10 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Luxury Standards</h3>
              <p className="text-charcoal/70">
                Premium cleaning services that meet the high standards of St. Augustine luxury properties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flag className="w-10 h-10 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Tourist Area Expertise</h3>
              <p className="text-charcoal/70">
                Professional cleaning for vacation rentals and tourist accommodations with quick turnaround.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Why We Love St. Augustine
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">
                St. Augustine is America's oldest city, known for its rich history, Spanish architecture, 
                and beautiful coastal location. We're proud to serve this historic area with cleaning services 
                that respect its heritage while maintaining modern standards.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stAugustineFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-charcoal/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stAugustineLandmarks.map((landmark, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-accent-aqua/10 p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    {index === 0 && <Castle className="w-6 h-6 text-primary-blue" />}
                    {index === 1 && <Flag className="w-6 h-6 text-primary-blue" />}
                    {index === 2 && <School className="w-6 h-6 text-primary-blue" />}
                    {index === 3 && <Building2 className="w-6 h-6 text-primary-blue" />}
                    {index === 4 && <Waves className="w-6 h-6 text-primary-blue" />}
                    {index === 5 && <Anchor className="w-6 h-6 text-primary-blue" />}
                  </div>
                  <p className="text-sm font-medium text-charcoal">{landmark}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-accent-aqua/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              What St. Augustine Property Owners Say
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what property owners in St. Augustine are saying 
              about our cleaning services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stAugustineTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal/80 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-charcoal/60">{testimonial.location}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-blue" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local CTA Section */}
      <section className="py-20 bg-primary-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Exceptional St. Augustine Cleaning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the many St. Augustine property owners who trust us with their cleaning needs. 
            Get started today with a free quote and experience the difference professional cleaning makes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:9044563851"
              className="inline-flex items-center gap-2 bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (904) 456-3851
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white/10 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Historic Preservation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Luxury Standards</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
