import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond, Trees, Camera, BookOpen, Coffee, Mountain, Waves, School, Church, Store, Utensils, Building, Briefcase, Globe, Train, Bus } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downtown Jacksonville House Cleaning Service | Urban & Business District Cleaning FL',
  description: 'Professional cleaning services in Downtown Jacksonville, FL. Urban district cleaning, business center maintenance, and residential cleaning for city living. Call (904) 456-3851 for expert service.',
  keywords: 'Downtown Jacksonville cleaning service, Jacksonville urban cleaning, Downtown house cleaning, business district cleaning Jacksonville, city center cleaning, urban area maintenance',
  openGraph: {
    title: 'Downtown Jacksonville House Cleaning Service | Urban & Business District Cleaning FL',
    description: 'Professional cleaning services in Downtown Jacksonville, FL. Urban district cleaning, business center maintenance, and residential cleaning for city living. Call (904) 456-3851 for expert service.',
    url: 'https://www.jacksonvillehousecleaningservice.com/locations/downtown-jacksonville',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jacksonville House Cleaning Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Downtown Jacksonville House Cleaning Service | Urban & Business District Cleaning FL',
    description: 'Professional cleaning services in Downtown Jacksonville, FL. Urban district cleaning, business center maintenance, and residential cleaning for city living.',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/locations/downtown-jacksonville',
  },
};

export default function DowntownJacksonvillePage() {
  const downtownJacksonvilleServices = [
    {
      id: 'urban-residential-cleaning',
      title: 'Urban Residential Cleaning',
      description: 'Specialized cleaning for Downtown Jacksonville apartments and condos',
      icon: Building,
      features: ['Apartment and condo expertise', 'Urban living solutions', 'Space-efficient cleaning', 'City-specific challenges', 'Modern home care']
    },
    {
      id: 'business-district-maintenance',
      title: 'Business District Maintenance',
      description: 'Professional cleaning for Downtown businesses and commercial properties',
      icon: Briefcase,
      features: ['Business standards', 'Professional appearance', 'Flexible scheduling', 'Quick response service', 'Commercial expertise']
    },
    {
      id: 'high-rise-cleaning',
      title: 'High-Rise Cleaning',
      description: 'Specialized cleaning for Downtown Jacksonville high-rise buildings',
      icon: Building2,
      features: ['High-rise expertise', 'Elevator access', 'Security protocols', 'Building regulations', 'Professional standards']
    },
    {
      id: 'urban-outdoor-cleaning',
      title: 'Urban Outdoor Cleaning',
      description: 'Exterior cleaning for Downtown properties and outdoor spaces',
      icon: Trees,
      features: ['Balcony cleaning', 'Terrace maintenance', 'Outdoor furniture care', 'City view optimization', 'Urban environment care']
    },
    {
      id: 'quick-turnaround-service',
      title: 'Quick Turnover Service',
      description: 'Fast cleaning for busy Downtown residents and professionals',
      icon: Clock,
      features: ['Same-day service', 'Quick turnaround', 'Flexible scheduling', 'Emergency cleaning', 'Time-sensitive solutions']
    },
    {
      id: 'deep-cleaning',
      title: 'Deep Cleaning',
      description: 'Comprehensive cleaning for Downtown homes needing thorough attention',
      icon: Target,
      features: ['Complete home cleaning', 'Hard-to-reach areas', 'Detailed attention', 'Thorough sanitization', 'Fresh start feeling']
    },
    {
      id: 'move-in-move-out',
      title: 'Move-In/Move-Out Cleaning',
      description: 'Professional cleaning for Downtown real estate transactions',
      icon: Car,
      features: ['Pre-move preparation', 'Post-move cleanup', 'Real estate ready', 'Final inspection', 'Move-in ready results']
    },
    {
      id: 'post-construction',
      title: 'Post-Construction Cleanup',
      description: 'Professional cleanup after Downtown renovations and projects',
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
      description: 'Crystal clear windows for Downtown city views',
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
    }
  ];

  const downtownJacksonvilleFeatures = [
    'Urban business district',
    'High-rise buildings and condos',
    'Cultural and entertainment hub',
    'Transportation center',
    'Professional services',
    'City living amenities'
  ];

  const downtownJacksonvilleLandmarks = [
    'Jacksonville Landing',
    'Times-Union Center',
    'Museum of Contemporary Art',
    'Hemming Plaza',
    'St. Johns River',
    'Jacksonville Transportation Center'
  ];

  const downtownJacksonvilleTestimonials = [
    {
      name: 'David M.',
      location: 'Downtown Jacksonville',
      rating: 5,
      comment: 'Perfect for our Downtown condo! Quick, professional service that fits our busy city lifestyle.'
    },
    {
      name: 'Sarah L.',
      location: 'Downtown Jacksonville',
      rating: 5,
      comment: 'Excellent urban cleaning service. They understand the unique needs of Downtown living.'
    },
    {
      name: 'Michael R.',
      location: 'Downtown Jacksonville',
      rating: 5,
      comment: 'Professional, reliable, and perfect for our high-rise apartment. Highly recommend!'
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
            "description": "Professional cleaning services in Downtown Jacksonville, FL. Urban district cleaning, business center maintenance, and residential cleaning for city living.",
            "url": "https://www.jacksonvillehousecleaningservice.com/locations/downtown-jacksonville",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3322",
              "longitude": "-81.6557"
            },
            "areaServed": {
              "@type": "City",
              "name": "Downtown Jacksonville"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Downtown Jacksonville Cleaning Services",
              "itemListElement": downtownJacksonvilleServices.map(service => ({
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
              <span>Downtown Jacksonville, FL</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Professional Cleaning Services in
              <span className="text-primary-blue block">Downtown Jacksonville</span>
            </h1>
            
            <p className="text-xl text-charcoal/80 mb-8 max-w-3xl mx-auto">
              Urban district cleaning with professional standards. Serving Downtown Jacksonville with expert cleaning services 
              for city living, business centers, and urban residences.
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
              Downtown Jacksonville Cleaning Services
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Comprehensive cleaning solutions designed for Downtown Jacksonville's unique urban environment. From high-rise 
              apartments to business centers, we provide the services that keep your city space clean and professional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downtownJacksonvilleServices.map((service) => (
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
              Why Downtown Jacksonville Chooses Us
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We understand the unique challenges and requirements of Downtown Jacksonville, from urban living 
              to business district standards and high-rise maintenance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Urban Expertise</h3>
              <p className="text-charcoal/70">
                Specialized knowledge for Downtown Jacksonville's unique urban environment and challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-aqua/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Quick Turnaround</h3>
              <p className="text-charcoal/70">
                Fast, efficient service that fits Downtown's busy lifestyle and professional schedules.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Business Standards</h3>
              <p className="text-charcoal/70">
                Professional cleaning that meets Downtown Jacksonville's high business district standards.
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
                Why We Love Downtown Jacksonville
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">
                Downtown Jacksonville is the heart of the city, known for its urban energy, business district, 
                and cultural attractions. We're proud to serve this vibrant area with cleaning services that 
                match its professional standards and urban lifestyle.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {downtownJacksonvilleFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-charcoal/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {downtownJacksonvilleLandmarks.map((landmark, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-accent-aqua/10 p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    {index === 0 && <Building2 className="w-6 h-6 text-primary-blue" />}
                    {index === 1 && <Building className="w-6 h-6 text-primary-blue" />}
                    {index === 2 && <Camera className="w-6 h-6 text-primary-blue" />}
                    {index === 3 && <Trees className="w-6 h-6 text-primary-blue" />}
                    {index === 4 && <Waves className="w-6 h-6 text-primary-blue" />}
                    {index === 5 && <Train className="w-6 h-6 text-primary-blue" />}
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
              What Downtown Jacksonville Residents Say
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what Downtown Jacksonville residents and professionals 
              are saying about our cleaning services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downtownJacksonvilleTestimonials.map((testimonial, index) => (
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
            Ready for Professional Downtown Cleaning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the many Downtown Jacksonville residents and professionals who trust us with their cleaning needs. 
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
              <span>Urban Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Quick Turnaround</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



