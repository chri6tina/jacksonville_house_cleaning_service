import { 
  Camera, 
  Star, 
  CheckCircle, 
  MapPin, 
  Clock, 
  Users, 
  Home, 
  Building2, 
  Sparkles, 
  Leaf,
  ArrowRight,
  Phone,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

export default function GalleryPage() {
  const galleryCategories = [
    {
      id: 'residential',
      title: 'Residential Cleaning',
      description: 'Transform your Jacksonville home with our professional cleaning services',
      image: '/hero1.png',
      count: 24,
      services: ['House Cleaning', 'Deep Cleaning', 'Move-in/Out', 'Post-Construction']
    },
    {
      id: 'commercial',
      title: 'Commercial Cleaning',
      description: 'Professional cleaning solutions for Jacksonville businesses',
      image: '/hero1.png',
      count: 18,
      services: ['Office Cleaning', 'Medical Facilities', 'Event Venues', 'Retail Spaces']
    },
    {
      id: 'specialized',
      title: 'Specialized Services',
      description: 'Expert cleaning for specific needs and challenges',
      image: '/hero1.png',
      count: 32,
      services: ['Carpet Cleaning', 'Window Cleaning', 'Air Duct Cleaning', 'Pressure Washing']
    }
  ];

  const beforeAfterProjects = [
    {
      id: 1,
      title: 'Post-Construction Cleanup - Riverside Home',
      location: 'Riverside, Jacksonville',
      beforeImage: '/hero1.png',
      afterImage: '/hero1.png',
      description: 'Complete transformation after major renovation project',
      services: ['Post-Construction Cleaning', 'Deep Cleaning', 'Air Duct Cleaning'],
      duration: '8 hours',
      customerRating: 5,
      testimonial: 'Amazing job! Our home was spotless and ready to move in immediately.'
    },
    {
      id: 2,
      title: 'Deep Cleaning - San Marco Condo',
      location: 'San Marco, Jacksonville',
      beforeImage: '/hero1.png',
      afterImage: '/hero1.png',
      description: 'Comprehensive deep cleaning for a family with allergies',
      services: ['Deep Cleaning', 'Eco-Friendly Products', 'Allergen Reduction'],
      duration: '6 hours',
      customerRating: 5,
      testimonial: 'The difference is incredible. Our allergies have improved significantly.'
    },
    {
      id: 3,
      title: 'Move-Out Cleaning - Mandarin House',
      location: 'Mandarin, Jacksonville',
      beforeImage: '/hero1.png',
      afterImage: '/hero1.png',
      description: 'Professional move-out cleaning for real estate sale',
      services: ['Move-Out Cleaning', 'Carpet Cleaning', 'Window Cleaning'],
      duration: '5 hours',
      customerRating: 5,
      testimonial: 'Our realtor was impressed. The house sold above asking price!'
    },
    {
      id: 4,
      title: 'Office Cleaning - Downtown Jacksonville',
      location: 'Downtown Jacksonville',
      beforeImage: '/hero1.png',
      afterImage: '/hero1.png',
      description: 'Regular office maintenance for professional environment',
      services: ['Commercial Office Cleaning', 'Daily Maintenance', 'Sanitization'],
      duration: '3 hours',
      customerRating: 5,
      testimonial: 'Our employees love coming to a clean, fresh office every day.'
    },
    {
      id: 5,
      title: 'Vacation Rental Turnover - Jacksonville Beach',
      location: 'Jacksonville Beach',
      beforeImage: '/hero1.png',
      afterImage: '/hero1.png',
      description: 'Quick turnover cleaning for vacation rental property',
      services: ['Vacation Rental Cleaning', 'Quick Turnaround', 'Hospitality Standards'],
      duration: '4 hours',
      customerRating: 5,
      testimonial: 'Perfect every time. Our guests always leave 5-star reviews.'
    },
    {
      id: 6,
      title: 'Pet-Friendly Cleaning - Southside Home',
      location: 'Southside, Jacksonville',
      beforeImage: '/hero1.png',
      afterImage: '/hero1.png',
      description: 'Specialized cleaning for homes with multiple pets',
      services: ['Pet-Friendly Cleaning', 'Odor Removal', 'Allergen Reduction'],
      duration: '5 hours',
      customerRating: 5,
      testimonial: 'Finally, a cleaning service that understands pet households!'
    }
  ];

  const serviceHighlights = [
    {
      icon: Home,
      title: 'Residential Excellence',
      description: 'From studio apartments to luxury homes, we deliver consistent quality',
      count: '500+ homes cleaned'
    },
    {
      icon: Building2,
      title: 'Commercial Expertise',
      description: 'Professional cleaning for offices, medical facilities, and retail spaces',
      count: '100+ businesses served'
    },
    {
      icon: Sparkles,
      title: 'Specialized Services',
      description: 'Expert cleaning for carpets, windows, air ducts, and more',
      count: '16+ service types'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Approach',
      description: 'Safe, non-toxic cleaning products for your family and pets',
      count: '100% eco-friendly'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Local Business Style */}
      <section 
        className="relative py-20 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(/jhcs_hero2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Local Business Badge */}
            <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/50 shadow-lg">
              <Camera className="w-4 h-4 text-primary-blue" />
              Jacksonville Cleaning Portfolio
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              <span className="block">See Our</span>
              <span className="block text-cyan-400">Jacksonville Work</span>
              <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-white/90 mt-3">
                Before & After Transformations
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed">
              Browse our portfolio of cleaning projects across Jacksonville. From residential homes 
              to commercial spaces, see the dramatic difference our professional cleaning services make.
            </p>

            {/* Local Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Camera className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">Real Projects</h3>
                <p className="text-white/80 text-xs leading-relaxed">Jacksonville homes & businesses</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Star className="w-6 h-6 text-primary-blue" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">5-Star Results</h3>
                <p className="text-white/80 text-xs leading-relaxed">Customer satisfaction guaranteed</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-accent-coral/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <MapPin className="w-6 h-6 text-accent-coral" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">Local Expertise</h3>
                <p className="text-white/80 text-xs leading-relaxed">Jacksonville area specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Explore Our Cleaning Portfolio
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Browse our work by category and see the quality we deliver across all our Jacksonville cleaning services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {category.count} Photos
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {category.services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent-green" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={`#${category.id}`}
                    className="inline-flex items-center space-x-2 text-primary-blue hover:text-primary-blue/80 font-semibold transition-colors duration-200"
                  >
                    <span>View Photos</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Before & After Transformations
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See the dramatic difference our professional cleaning services make in Jacksonville homes and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {beforeAfterProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(project.customerRating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                    <span>•</span>
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {project.services.map((service, index) => (
                      <span key={index} className="inline-block bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={project.beforeImage} 
                      alt={`Before - ${project.title}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={project.afterImage} 
                      alt={`After - ${project.title}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      AFTER
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gray-50">
                  <blockquote className="text-gray-700 italic">
                    "{project.testimonial}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Jacksonville Chooses Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our track record speaks for itself. See why hundreds of Jacksonville families and businesses trust us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-700 text-sm mb-3">{highlight.description}</p>
                <p className="text-primary-blue font-semibold text-sm">{highlight.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-accent-aqua">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            See the difference professional cleaning makes. Contact us today for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:+19044563851"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors duration-200"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call (904) 456-3851
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
