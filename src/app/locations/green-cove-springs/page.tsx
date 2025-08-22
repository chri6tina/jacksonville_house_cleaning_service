import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond, Trees, Camera, BookOpen, Coffee, Mountain, Waves, School, Church, Store, Utensils } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Green Cove Springs House Cleaning Service | Family-Friendly Cleaning Jacksonville FL',
  description: 'Professional cleaning services in Green Cove Springs, Jacksonville FL. Family-friendly cleaning, eco-friendly products, and reliable service for busy families. Call (904) 456-3851 for trusted cleaning.',
  keywords: 'Green Cove Springs cleaning service, Jacksonville family cleaning, Green Cove Springs house cleaning, family-friendly cleaning Jacksonville, eco-friendly cleaning Green Cove Springs, reliable cleaning service',
  openGraph: {
    title: 'Green Cove Springs House Cleaning Service | Family-Friendly Cleaning Jacksonville FL',
    description: 'Professional cleaning services in Green Cove Springs, Jacksonville FL. Family-friendly cleaning, eco-friendly products, and reliable service for busy families. Call (904) 456-3851 for trusted cleaning.',
    url: 'https://www.jacksonvillehousecleaningservice.com/locations/green-cove-springs',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jacksonville House Cleaning Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Cove Springs House Cleaning Service | Family-Friendly Cleaning Jacksonville FL',
    description: 'Professional cleaning services in Green Cove Springs, Jacksonville FL. Family-friendly cleaning, eco-friendly products, and reliable service for busy families.',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/locations/green-cove-springs',
  },
};

export default function GreenCoveSpringsPage() {
  const greenCoveSpringsServices = [
    {
      id: 'family-friendly-cleaning',
      title: 'Family-Friendly Cleaning',
      description: 'Safe, thorough cleaning designed for families with children and pets',
      icon: Users,
      features: ['Kid and pet-safe products', 'Family scheduling flexibility', 'Child-proof cleaning methods', 'Pet odor elimination', 'Safe for all ages']
    },
    {
      id: 'eco-friendly-cleaning',
      title: 'Eco-Friendly Cleaning',
      description: 'Green cleaning solutions that protect your family and the environment',
      icon: Leaf,
      features: ['Non-toxic cleaning products', 'Environmentally responsible', 'Safe for sensitive individuals', 'Green certification', 'Sustainable practices']
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
      id: 'post-construction',
      title: 'Post-Construction Cleanup',
      description: 'Professional cleanup after home renovations and projects',
      icon: Target,
      features: ['Construction debris removal', 'Dust and particle cleanup', 'Surface restoration', 'Final inspection', 'Move-in ready']
    },
    {
      id: 'vacation-rental',
      title: 'Vacation Rental Turnover',
      description: 'Professional cleaning for short-term rental properties',
      icon: Building2,
      features: ['Guest-ready standards', 'Quick turnaround service', 'Quality assurance', 'Guest satisfaction focus', 'Property protection']
    }
  ];

  const greenCoveSpringsFeatures = [
    'Family-oriented community',
    'Excellent schools and parks',
    'Safe, quiet neighborhoods',
    'Close to shopping and amenities',
    'Natural springs and outdoor activities',
    'Strong community values'
  ];

  const greenCoveSpringsLandmarks = [
    'Spring Park',
    'Green Cove Springs Elementary',
    'Clay County Fairgrounds',
    'Magnolia Point Golf & Country Club',
    'St. Johns River access',
    'Spring Park Pool'
  ];

  const greenCoveSpringsTestimonials = [
    {
      name: 'Sarah M.',
      location: 'Green Cove Springs',
      rating: 5,
      comment: 'Perfect for our busy family! The eco-friendly products give me peace of mind with our kids and pets.'
    },
    {
      name: 'Michael R.',
      location: 'Green Cove Springs',
      rating: 5,
      comment: 'Reliable service that fits our family schedule. Our home always looks amazing after their visits.'
    },
      {
      name: 'Lisa T.',
      location: 'Green Cove Springs',
      rating: 5,
      comment: 'Professional, trustworthy, and family-friendly. Exactly what we needed for our Green Cove Springs home.'
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
            "description": "Professional cleaning services in Green Cove Springs, Jacksonville FL. Family-friendly cleaning, eco-friendly products, and reliable service for busy families.",
            "url": "https://www.jacksonvillehousecleaningservice.com/locations/green-cove-springs",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "29.9919",
              "longitude": "-81.6784"
            },
            "areaServed": {
              "@type": "City",
              "name": "Green Cove Springs"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Green Cove Springs Cleaning Services",
              "itemListElement": greenCoveSpringsServices.map(service => ({
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
              <span>Green Cove Springs, Jacksonville FL</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Cleaning Services in
              <span className="text-primary-blue block">Green Cove Springs</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Family-friendly cleaning solutions with eco-friendly products. Serving Green Cove Springs families with reliable, 
              professional cleaning services that keep your home safe and beautiful.
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
              Green Cove Springs Cleaning Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive cleaning solutions designed for Green Cove Springs families. From regular maintenance 
              to deep cleaning, we provide the services you need to maintain a healthy, beautiful home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {greenCoveSpringsServices.map((service) => (
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
              Why Green Cove Springs Families Choose Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We understand the unique needs of Green Cove Springs families and provide cleaning services 
              that fit your lifestyle and values.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Family-Safe Products</h3>
              <p className="text-gray-700">
                Eco-friendly cleaning solutions that are safe for children, pets, and sensitive individuals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-aqua/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Scheduling</h3>
              <p className="text-gray-700">
                Work around your family's busy schedule with convenient appointment times and recurring options.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Service</h3>
              <p className="text-gray-700">
                Reliable, professional cleaning that you can count on week after week, month after month.
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
                Why We Love Green Cove Springs
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Green Cove Springs is a wonderful family community known for its natural springs, excellent schools, 
                and strong community values. We're proud to serve this area with cleaning services that match 
                the quality and care this community deserves.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {greenCoveSpringsFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {greenCoveSpringsLandmarks.map((landmark, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-accent-aqua/10 p-6 rounded-xl text-center">
                                     <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                     {index === 0 && <Trees className="w-6 h-6 text-primary-blue" />}
                     {index === 1 && <School className="w-6 h-6 text-primary-blue" />}
                     {index === 2 && <Building2 className="w-6 h-6 text-primary-blue" />}
                     {index === 3 && <Trophy className="w-6 h-6 text-primary-blue" />}
                     {index === 4 && <Waves className="w-6 h-6 text-primary-blue" />}
                     {index === 5 && <Droplets className="w-6 h-6 text-primary-blue" />}
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
                What Green Cove Springs Families Say
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what families in Green Cove Springs are saying 
                about our cleaning services.
              </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {greenCoveSpringsTestimonials.map((testimonial, index) => (
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
            Ready for a Cleaner Green Cove Springs Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the many Green Cove Springs families who trust us with their home cleaning needs. 
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
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
