import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond, Trees, Camera, BookOpen, Coffee, Mountain, Waves, School, Church, Store, Utensils, Building, Briefcase, Globe, Train, Bus, ShoppingBag, Heart, PawPrint, Truck, Hammer, Wind } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orange Park Jacksonville House Cleaning Service | Family & Pet-Friendly Cleaning FL',
  description: 'Professional cleaning services in Orange Park, Jacksonville FL. Family-friendly cleaning, pet-safe solutions, and reliable service for busy families. Call (904) 456-3851 for trusted cleaning.',
  keywords: 'Orange Park Jacksonville cleaning service, Jacksonville family cleaning, Orange Park house cleaning, pet-friendly cleaning Jacksonville, family cleaning service, reliable cleaning Orange Park',
  openGraph: {
    title: 'Orange Park Jacksonville House Cleaning Service | Family & Pet-Friendly Cleaning FL',
    description: 'Professional cleaning services in Orange Park, Jacksonville FL. Family-friendly cleaning, pet-safe solutions, and reliable service for busy families. Call (904) 456-3851 for trusted cleaning.',
    url: 'https://www.jacksonvillehousecleaningservice.com/locations/orange-park',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jacksonville House Cleaning Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange Park Jacksonville House Cleaning Service | Family & Pet-Friendly Cleaning FL',
    description: 'Professional cleaning services in Orange Park, Jacksonville FL. Family-friendly cleaning, pet-safe solutions, and reliable service for busy families.',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/locations/orange-park',
  },
};

export default function OrangeParkPage() {
  const orangeParkServices = [
    {
      id: 'family-friendly-cleaning',
      title: 'Family-Friendly Cleaning',
      description: 'Safe, thorough cleaning designed for families with children and pets',
      icon: Users,
      features: ['Kid and pet-safe products', 'Family scheduling flexibility', 'Child-proof cleaning methods', 'Pet odor elimination', 'Safe for all ages']
    },
    {
      id: 'pet-friendly-cleaning',
      title: 'Pet-Friendly Cleaning',
      description: 'Specialized cleaning solutions safe for pets and pet owners',
      icon: PawPrint,
      features: ['Pet-safe cleaning products', 'Pet odor elimination', 'Allergen reduction', 'Pet hair removal', 'Safe for sensitive pets']
    },
    {
      id: 'recurring-maintenance',
      title: 'Recurring Maintenance',
      description: 'Consistent cleaning to maintain your home\'s cleanliness and comfort',
      icon: Calendar,
      features: ['Weekly, bi-weekly, or monthly options', 'Flexible scheduling', 'Priority booking', 'Custom service plans', 'Consistent quality']
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
      description: 'Exterior cleaning for your outdoor spaces',
      icon: Trees,
      features: ['Porch and deck cleaning', 'Patio maintenance', 'Outdoor furniture care', 'Entryway cleaning', 'Curb appeal enhancement']
    },
    {
      id: 'commercial-cleaning',
      title: 'Commercial Property Cleaning',
      description: 'Professional cleaning for Orange Park businesses and commercial properties',
      icon: Building2,
      features: ['Business standards', 'Flexible scheduling', 'Professional appearance', 'Customer satisfaction', 'Commercial expertise']
    }
  ];

  const orangeParkFeatures = [
    'Family-oriented community',
    'Excellent schools and parks',
    'Shopping and entertainment',
    'Pet-friendly neighborhoods',
    'Safe, quiet residential areas',
    'Strong community values'
  ];

  const orangeParkLandmarks = [
    'Orange Park Mall',
    'Orange Park Regional Library',
    'Orange Park Medical Center',
    'Orange Park Town Hall',
    'Orange Park Country Club',
    'Orange Park Shopping Center'
  ];

  const orangeParkTestimonials = [
    {
      name: 'Amanda R.',
      location: 'Orange Park',
      rating: 5,
      comment: 'Perfect for our busy family! The pet-friendly products give me peace of mind with our dogs.'
    },
    {
      name: 'James T.',
      location: 'Orange Park',
      rating: 5,
      comment: 'Reliable service that fits our family schedule. Our home always looks amazing after their visits.'
    },
    {
      name: 'Michelle K.',
      location: 'Orange Park',
      rating: 5,
      comment: 'Professional, trustworthy, and family-friendly. Exactly what we needed for our Orange Park home.'
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
            "description": "Professional cleaning services in Orange Park, Jacksonville FL. Family-friendly cleaning, pet-safe solutions, and reliable service for busy families.",
            "url": "https://www.jacksonvillehousecleaningservice.com/locations/orange-park",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.1669",
              "longitude": "-81.7065"
            },
            "areaServed": {
              "@type": "City",
              "name": "Orange Park"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Orange Park Jacksonville Cleaning Services",
              "itemListElement": orangeParkServices.map(service => ({
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
              "reviewCount": "95"
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
              <span>Orange Park, Jacksonville FL</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Professional Cleaning Services in
              <span className="text-primary-blue block">Orange Park</span>
            </h1>
            
            <p className="text-xl text-charcoal/80 mb-8 max-w-3xl mx-auto">
              Family-friendly cleaning with pet-safe solutions. Serving Orange Park families with reliable, 
              professional cleaning services that keep your home safe and beautiful for everyone.
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
              Orange Park Cleaning Services
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Comprehensive cleaning solutions designed for Orange Park families. From regular maintenance 
              to deep cleaning, we provide the services you need to maintain a healthy, beautiful home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orangeParkServices.map((service) => (
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
              Why Orange Park Families Choose Us
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We understand the unique needs of Orange Park families and provide cleaning services 
              that fit your lifestyle and values.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Family-Safe Products</h3>
              <p className="text-charcoal/70">
                Eco-friendly cleaning solutions that are safe for children, pets, and sensitive individuals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-aqua/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <PawPrint className="w-10 h-10 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Pet-Friendly Cleaning</h3>
              <p className="text-charcoal/70">
                Specialized cleaning solutions that are safe for pets and eliminate pet odors and allergens.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Flexible Scheduling</h3>
              <p className="text-charcoal/70">
                Work around your family's busy schedule with convenient appointment times and recurring options.
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
                Why We Love Orange Park
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">
                Orange Park is a wonderful family community known for its excellent schools, shopping 
                centers, and family-friendly atmosphere. We're proud to serve this area with cleaning services 
                that match the quality and care this community deserves.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {orangeParkFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-charcoal/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {orangeParkLandmarks.map((landmark, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-accent-aqua/10 p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    {index === 0 && <ShoppingBag className="w-6 h-6 text-primary-blue" />}
                    {index === 1 && <BookOpen className="w-6 h-6 text-primary-blue" />}
                    {index === 2 && <Building2 className="w-6 h-6 text-primary-blue" />}
                    {index === 3 && <Building className="w-6 h-6 text-primary-blue" />}
                    {index === 4 && <Trophy className="w-6 h-6 text-primary-blue" />}
                    {index === 5 && <Store className="w-6 h-6 text-primary-blue" />}
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
              What Orange Park Families Say
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what families in Orange Park are saying 
              about our cleaning services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {orangeParkTestimonials.map((testimonial, index) => (
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
            Ready for a Cleaner Orange Park Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the many Orange Park families who trust us with their home cleaning needs. 
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
              <span>Family-Safe Products</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Pet-Friendly Cleaning</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

