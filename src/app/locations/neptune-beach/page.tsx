import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond, Trees, Camera, BookOpen, Coffee, Mountain, Waves, School, Church, Store, Utensils, Building, Briefcase, Globe, Train, Bus, ShoppingBag, Heart, PawPrint, Umbrella, Sun, Anchor, Fish, Sailboat } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neptune Beach House Cleaning Service | Beach Community & Family Cleaning FL',
  description: 'Professional cleaning services in Neptune Beach, FL. Beach community cleaning, family-friendly service, and coastal home maintenance. Call (904) 456-3851 for trusted cleaning.',
  keywords: 'Neptune Beach cleaning service, beach community cleaning, family cleaning service, coastal home cleaning, Neptune Beach FL cleaning, beach house maintenance',
  openGraph: {
    title: 'Neptune Beach House Cleaning Service | Beach Community & Family Cleaning FL',
    description: 'Professional cleaning services in Neptune Beach, FL. Beach community cleaning, family-friendly service, and coastal home maintenance. Call (904) 456-3851 for trusted cleaning.',
    url: 'https://www.jacksonvillehousecleaningservice.com/locations/neptune-beach',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jacksonville House Cleaning Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neptune Beach House Cleaning Service | Beach Community & Family Cleaning FL',
    description: 'Professional cleaning services in Neptune Beach, FL. Beach community cleaning, family-friendly service, and coastal home maintenance.',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/locations/neptune-beach',
  },
};

export default function NeptuneBeachPage() {
  const neptuneBeachServices = [
    {
      id: 'beach-community-cleaning',
      title: 'Beach Community Cleaning',
      description: 'Specialized cleaning for Neptune Beach homes with coastal elements and community standards',
      icon: Waves,
      features: ['Sand and salt management', 'Coastal environment cleaning', 'Community standards', 'Outdoor area maintenance', 'Beach-specific challenges']
    },
    {
      id: 'family-friendly-cleaning',
      title: 'Family-Friendly Cleaning',
      description: 'Safe, thorough cleaning designed for families with children and pets',
      icon: Users,
      features: ['Kid and pet-safe products', 'Family scheduling flexibility', 'Child-proof cleaning methods', 'Pet odor elimination', 'Safe for all ages']
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
      description: 'Professional cleaning for Neptune Beach businesses and commercial properties',
      icon: Building2,
      features: ['Business standards', 'Flexible scheduling', 'Professional appearance', 'Customer satisfaction', 'Commercial expertise']
    }
  ];

  const neptuneBeachFeatures = [
    'Family-oriented beach community',
    'Excellent schools and parks',
    'Coastal lifestyle',
    'Outdoor recreation',
    'Safe residential areas',
    'Strong community values'
  ];

  const neptuneBeachLandmarks = [
    'Neptune Beach Elementary',
    'Neptune Beach City Hall',
    'Neptune Beach Park',
    'Beach Boulevard',
    'Oceanfront Access Points',
    'Community Center'
  ];

  const neptuneBeachTestimonials = [
    {
      name: 'Jennifer R.',
      location: 'Neptune Beach',
      rating: 5,
      comment: 'Perfect for our beach community home! They understand the unique needs of coastal living.'
    },
    {
      name: 'Robert M.',
      location: 'Neptune Beach',
      rating: 5,
      comment: 'Family-friendly service that keeps our home clean and safe for our kids and pets.'
    },
    {
      name: 'Amanda T.',
      location: 'Neptune Beach',
      rating: 5,
      comment: 'Professional, reliable, and perfect for our Neptune Beach lifestyle. Highly recommend!'
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
            "description": "Professional cleaning services in Neptune Beach, FL. Beach community cleaning, family-friendly service, and coastal home maintenance.",
            "url": "https://www.jacksonvillehousecleaningservice.com/locations/neptune-beach",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3119",
              "longitude": "-81.4034"
            },
            "areaServed": {
              "@type": "City",
              "name": "Neptune Beach"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Neptune Beach Cleaning Services",
              "itemListElement": neptuneBeachServices.map(service => ({
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
              "reviewCount": "105"
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
              <span>Neptune Beach, FL</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Cleaning Services in
              <span className="text-primary-blue block">Neptune Beach</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Beach community cleaning with family-friendly service. Serving Neptune Beach with specialized cleaning services 
              for coastal homes and families.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neptune Beach Cleaning Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive cleaning solutions designed for Neptune Beach properties. From beach community cleaning 
              to family-friendly service, we provide the services you need to maintain your coastal home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neptuneBeachServices.map((service) => (
              <div key={service.id} className="bg-gradient-to-br from-blue-50 to-accent-aqua/10 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Neptune Beach Chooses Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We understand the unique needs of Neptune Beach families and coastal properties, providing cleaning services 
              that fit your beach community lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Waves className="w-10 h-10 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Beach Community Expertise</h3>
              <p className="text-gray-700">
                Specialized knowledge for cleaning beach homes with sand, salt, and coastal challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-aqua/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Family-Friendly Service</h3>
              <p className="text-gray-700">
                Safe cleaning solutions that are perfect for families with children and pets.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Umbrella className="w-10 h-10 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Coastal Protection</h3>
              <p className="text-gray-700">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why We Love Neptune Beach
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Neptune Beach is a wonderful family-oriented beach community known for its excellent schools, 
                safe residential areas, and strong community values. We're proud to serve this area with cleaning services 
                that match the quality and care this community deserves.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {neptuneBeachFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {neptuneBeachLandmarks.map((landmark, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-accent-aqua/10 p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    {index === 0 && <School className="w-6 h-6 text-primary-blue" />}
                    {index === 1 && <Building className="w-6 h-6 text-primary-blue" />}
                    {index === 2 && <Trees className="w-6 h-6 text-primary-blue" />}
                    {index === 3 && <Store className="w-6 h-6 text-primary-blue" />}
                    {index === 4 && <Waves className="w-6 h-6 text-primary-blue" />}
                    {index === 5 && <Building2 className="w-6 h-6 text-primary-blue" />}
                  </div>
                  <p className="text-sm font-medium text-gray-900">{landmark}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Neptune Beach Residents Say
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what families in Neptune Beach are saying 
              about our cleaning services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {neptuneBeachTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
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
            Ready for Professional Beach Community Cleaning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the many Neptune Beach families who trust us with their home cleaning needs. 
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
              <span>Beach Community Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Family-Friendly Service</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

