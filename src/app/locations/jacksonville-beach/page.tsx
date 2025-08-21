import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond, Trees, Camera, BookOpen, Coffee, Mountain, Waves, School, Church, Store, Utensils, Building, Briefcase, Globe, Train, Bus, ShoppingBag, Heart, PawPrint, Umbrella, Sun, Anchor, Fish, Sailboat } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jacksonville Beach House Cleaning Service | Beach & Vacation Rental Cleaning FL',
  description: 'Professional cleaning services in Jacksonville Beach, FL. Beach area cleaning, vacation rental turnover, and coastal home maintenance. Call (904) 456-3851 for trusted beach cleaning.',
  keywords: 'Jacksonville Beach cleaning service, beach area cleaning, vacation rental cleaning, coastal home cleaning, beach house maintenance, Jacksonville Beach FL cleaning',
  openGraph: {
    title: 'Jacksonville Beach House Cleaning Service | Beach & Vacation Rental Cleaning FL',
    description: 'Professional cleaning services in Jacksonville Beach, FL. Beach area cleaning, vacation rental turnover, and coastal home maintenance. Call (904) 456-3851 for trusted beach cleaning.',
    url: 'https://www.jacksonvillehousecleaningservice.com/locations/jacksonville-beach',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jacksonville House Cleaning Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacksonville Beach House Cleaning Service | Beach & Vacation Rental Cleaning FL',
    description: 'Professional cleaning services in Jacksonville Beach, FL. Beach area cleaning, vacation rental turnover, and coastal home maintenance.',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/locations/jacksonville-beach',
  },
};

export default function JacksonvilleBeachPage() {
  const jacksonvilleBeachServices = [
    {
      id: 'beach-area-cleaning',
      title: 'Beach Area Cleaning',
      description: 'Specialized cleaning for beach homes with sand, salt, and coastal elements',
      icon: Waves,
      features: ['Sand removal and prevention', 'Salt damage protection', 'Coastal environment cleaning', 'Outdoor area maintenance', 'Beach-specific challenges']
    },
    {
      id: 'vacation-rental-turnover',
      title: 'Vacation Rental Turnover',
      description: 'Professional cleaning for vacation rental properties and beach houses',
      icon: Calendar,
      features: ['Quick turnaround service', 'Hospitality-grade cleaning', 'Guest-ready standards', 'Flexible scheduling', 'Quality assurance']
    },
    {
      id: 'coastal-home-maintenance',
      title: 'Coastal Home Maintenance',
      description: 'Regular cleaning to protect beach homes from coastal elements',
      icon: Umbrella,
      features: ['Salt air protection', 'Humidity control', 'Outdoor furniture care', 'Deck and patio cleaning', 'Coastal wear prevention']
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
      description: 'Crystal clear windows for ocean views and natural light',
      icon: Building2,
      features: ['Interior and exterior cleaning', 'Screen cleaning', 'Streak-free results', 'Safety equipment used', 'Frame cleaning']
    },
    {
      id: 'kitchen-deep-clean',
      title: 'Kitchen Deep Clean',
      description: 'Thorough kitchen cleaning for food safety and hygiene',
      icon: Home,
      features: ['Appliance cleaning', 'Cabinet and drawer cleaning', 'Countertop sanitization', 'Sink and faucet cleaning', 'Floor care']
    },
    {
      id: 'bathroom-sanitization',
      title: 'Bathroom Sanitization',
      description: 'Complete bathroom cleaning and sanitization',
      icon: Droplets,
      features: ['Toilet sanitization', 'Shower and tub cleaning', 'Tile and grout care', 'Fixture polishing', 'Fresh scent']
    },
    {
      id: 'outdoor-living-areas',
      title: 'Outdoor Living Areas',
      description: 'Exterior cleaning for your beach outdoor spaces',
      icon: Trees,
      features: ['Deck and patio cleaning', 'Outdoor furniture care', 'Entryway cleaning', 'Curb appeal enhancement', 'Beach area maintenance']
    },
    {
      id: 'commercial-cleaning',
      title: 'Commercial Property Cleaning',
      description: 'Professional cleaning for Jacksonville Beach businesses and commercial properties',
      icon: Building2,
      features: ['Business standards', 'Flexible scheduling', 'Professional appearance', 'Customer satisfaction', 'Commercial expertise']
    }
  ];

  const jacksonvilleBeachFeatures = [
    'Beachfront community',
    'Vacation rental hub',
    'Coastal lifestyle',
    'Outdoor recreation',
    'Tourist destination',
    'Family-friendly beaches'
  ];

  const jacksonvilleBeachLandmarks = [
    'Jacksonville Beach Pier',
    'Beach Boulevard',
    'Seawalk Pavilion',
    'Jacksonville Beach Golf Club',
    'Beachside Shopping Center',
    'Oceanfront Park'
  ];

  const jacksonvilleBeachTestimonials = [
    {
      name: 'Sarah M.',
      location: 'Jacksonville Beach',
      rating: 5,
      comment: 'Perfect for our beach house! They handle all the sand and salt challenges perfectly.'
    },
    {
      name: 'Mike T.',
      location: 'Jacksonville Beach',
      rating: 5,
      comment: 'Excellent vacation rental turnover service. Our guests always comment on how clean the house is.'
    },
    {
      name: 'Lisa K.',
      location: 'Jacksonville Beach',
      rating: 5,
      comment: 'Professional, reliable, and understands beach homes. Exactly what we needed for our coastal property.'
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
            "description": "Professional cleaning services in Jacksonville Beach, FL. Beach area cleaning, vacation rental turnover, and coastal home maintenance.",
            "url": "https://www.jacksonvillehousecleaningservice.com/locations/jacksonville-beach",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.2949",
              "longitude": "-81.3931"
            },
            "areaServed": {
              "@type": "City",
              "name": "Jacksonville Beach"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Jacksonville Beach Cleaning Services",
              "itemListElement": jacksonvilleBeachServices.map(service => ({
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
              <span>Jacksonville Beach, FL</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Professional Cleaning Services in
              <span className="text-primary-blue block">Jacksonville Beach</span>
            </h1>
            
            <p className="text-xl text-charcoal/80 mb-8 max-w-3xl mx-auto">
              Beach area cleaning with coastal expertise. Serving Jacksonville Beach with specialized cleaning services 
              for beach homes, vacation rentals, and coastal properties.
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
              Jacksonville Beach Cleaning Services
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Comprehensive cleaning solutions designed for Jacksonville Beach properties. From beach area cleaning 
              to vacation rental turnover, we provide the services you need to maintain your coastal home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jacksonvilleBeachServices.map((service) => (
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
              Why Jacksonville Beach Chooses Us
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We understand the unique challenges of beach homes and coastal properties, providing cleaning services 
              that protect your investment and maintain your beach lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                 <Waves className="w-10 h-10 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Beach Area Expertise</h3>
              <p className="text-charcoal/70">
                Specialized knowledge for cleaning beach homes with sand, salt, and coastal challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-aqua/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Vacation Rental Ready</h3>
              <p className="text-charcoal/70">
                Professional turnover cleaning that meets hospitality standards for your guests.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Umbrella className="w-10 h-10 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Coastal Protection</h3>
              <p className="text-charcoal/70">
                Cleaning methods that protect your home from salt air, humidity, and coastal elements.
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
                Why We Love Jacksonville Beach
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">
                Jacksonville Beach is a vibrant coastal community known for its beautiful beaches, outdoor recreation, 
                and vacation rental opportunities. We're proud to serve this area with cleaning services that 
                understand the unique needs of beach properties.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {jacksonvilleBeachFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-charcoal/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {jacksonvilleBeachLandmarks.map((landmark, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-accent-aqua/10 p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    {index === 0 && <Anchor className="w-6 h-6 text-primary-blue" />}
                    {index === 1 && <Store className="w-6 h-6 text-primary-blue" />}
                    {index === 2 && <Building2 className="w-6 h-6 text-primary-blue" />}
                    {index === 3 && <Trophy className="w-6 h-6 text-primary-blue" />}
                    {index === 4 && <ShoppingBag className="w-6 h-6 text-primary-blue" />}
                    {index === 5 && <Trees className="w-6 h-6 text-primary-blue" />}
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
              What Jacksonville Beach Residents Say
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what Jacksonville Beach residents and property owners 
              are saying about our cleaning services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jacksonvilleBeachTestimonials.map((testimonial, index) => (
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
            Ready for Professional Beach Area Cleaning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the many Jacksonville Beach residents and property owners who trust us with their cleaning needs. 
            Get started today with a free quote and experience the difference professional beach cleaning makes.
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
              <span>Beach Area Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Vacation Rental Ready</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



