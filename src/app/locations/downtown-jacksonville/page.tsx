import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, CheckCircle, Award, Zap, Droplets, Gauge, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function DowntownJacksonvillePage() {
  const downtownServices = [
    {
      id: 'recurring-cleaning',
      title: 'Recurring House Cleaning',
      description: 'Regular maintenance cleaning to keep your Downtown Jacksonville home consistently clean',
      icon: Home,
      color: 'blue',
      features: ['Weekly, bi-weekly, or monthly schedules', 'Dust all surfaces and furniture', 'Vacuum and mop all floors', 'Kitchen and bathroom cleaning']
    },
    {
      id: 'deep-cleaning',
      title: 'Deep Cleaning',
      description: 'Comprehensive cleaning service for thorough sanitization of Downtown properties',
      icon: Sparkles,
      color: 'purple',
      features: ['Deep clean inside appliances', 'Clean inside cabinets and drawers', 'Detailed bathroom sanitization', 'Clean baseboards and trim']
    },
    {
      id: 'move-in-out',
      title: 'Move-In/Move-Out Cleaning',
      description: 'Specialized cleaning for Downtown Jacksonville real estate transactions',
      icon: Truck,
      color: 'green',
      features: ['Pre-move out deep cleaning', 'Post-move in sanitization', 'Construction dust removal', 'Move-in ready results']
    },
    {
      id: 'office-cleaning',
      title: 'Office Cleaning',
      description: 'Professional office cleaning for Downtown Jacksonville businesses',
      icon: Building2,
      color: 'orange',
      features: ['Daily, weekly, or monthly schedules', 'After-hours cleaning available', 'High-traffic area focus', 'Professional appearance maintenance']
    },
    {
      id: 'commercial-office-cleaning',
      title: 'Commercial Office Cleaning',
      description: 'Large-scale commercial cleaning for Downtown office buildings',
      icon: Building2,
      color: 'indigo',
      features: ['Multi-floor cleaning', 'Common area maintenance', '24/7 availability', 'Corporate standards compliance']
    },
    {
      id: 'air-duct-cleaning',
      title: 'Air Duct & Vent Cleaning',
      description: 'Professional air duct cleaning to improve Downtown indoor air quality',
      icon: Sparkles,
      color: 'teal',
      features: ['Complete duct system inspection', 'Remove dust and allergens', 'Sanitize duct surfaces', 'Improve HVAC efficiency']
    },
    {
      id: 'pressure-washing',
      title: 'Pressure Washing Services',
      description: 'Professional exterior cleaning for Downtown properties',
      icon: Droplets,
      color: 'emerald',
      features: ['Building exterior cleaning', 'Sidewalk and entryway cleaning', 'Safe pressure settings', 'Eco-friendly solutions']
    },
    {
      id: 'gutter-cleaning',
      title: 'Gutter Cleaning',
      description: 'Professional gutter maintenance for Downtown properties',
      icon: Gauge,
      color: 'amber',
      features: ['Remove leaves and debris', 'Clean downspouts', 'Inspect for damage', 'Test water flow']
    },
    {
      id: 'carpet-cleaning',
      title: 'Carpet & Upholstery Cleaning',
      description: 'Professional fabric cleaning for Downtown properties',
      icon: Car,
      color: 'cyan',
      features: ['Deep stain removal', 'Odor elimination', 'Fabric protection treatment', 'Hot water extraction method']
    },
    {
      id: 'window-cleaning',
      title: 'Window Cleaning',
      description: 'Crystal clear views for Downtown buildings',
      icon: Wind,
      color: 'sky',
      features: ['Interior and exterior cleaning', 'High-rise access', 'Streak-free results', 'Safe for all window types']
    },
    {
      id: 'post-construction-cleaning',
      title: 'Post-Construction Cleaning',
      description: 'Construction cleanup for Downtown renovation projects',
      icon: Hammer,
      color: 'rose',
      features: ['Construction debris removal', 'Fine dust elimination', 'Detailed surface cleaning', 'Move-in ready results']
    },
    {
      id: 'pet-friendly-cleaning',
      title: 'Pet-Friendly Deep Cleaning',
      description: 'Specialized cleaning for Downtown homes with pets',
      icon: PawPrint,
      color: 'pink',
      features: ['Pet odor neutralization', 'Allergen reduction', 'Pet-safe cleaning products', 'HEPA filtration']
    },
    {
      id: 'senior-citizen-cleaning',
      title: 'Senior Citizen Cleaning',
      description: 'Gentle, accessible cleaning for Downtown senior households',
      icon: Heart,
      color: 'red',
      features: ['Gentle cleaning products', 'Accessibility assessment', 'Companionship during cleaning', 'Health-conscious approach']
    },
    {
      id: 'vacation-rental-cleaning',
      title: 'Vacation Rental Turnover',
      description: 'Professional turnover cleaning for Downtown short-term rentals',
      icon: Calendar,
      color: 'violet',
      features: ['Hospitality-grade cleaning', 'Quick turnaround times', 'Quality assurance', 'Flexible scheduling']
    },
    {
      id: 'medical-facility-cleaning',
      title: 'Medical Facility Cleaning',
      description: 'Specialized cleaning for Downtown medical offices and facilities',
      icon: Shield,
      color: 'lime',
      features: ['Surface sanitization', 'Compliance documentation', 'Safety protocols', 'Regulatory standards']
    },
    {
      id: 'event-venue-cleaning',
      title: 'Event Venue Cleaning',
      description: 'Professional cleaning for Downtown event spaces and venues',
      icon: PartyPopper,
      color: 'fuchsia',
      features: ['Pre-event preparation', 'Post-event cleanup', 'Hospitality standards', 'Quick turnaround']
    },
    {
      id: 'apartment-cleaning',
      title: 'Apartment Cleaning',
      description: 'Comprehensive cleaning for Downtown apartment complexes',
      icon: Home,
      color: 'slate',
      features: ['Complete surface cleaning', 'Kitchen deep cleaning', 'Bathroom sanitization', 'Balcony/patio cleaning']
    }
  ];

  const downtownHighlights = [
    {
      title: 'Business District',
      description: 'Home to major corporations, law firms, and financial institutions',
      icon: Building2
    },
    {
      title: 'Historic Architecture',
      description: 'Beautiful historic buildings requiring specialized cleaning care',
      icon: Home
    },
    {
      title: 'High-Rise Properties',
      description: 'Multi-story buildings with unique cleaning challenges',
      icon: Building2
    },
    {
      title: 'Tourist Attractions',
      description: 'Riverfront, museums, and entertainment venues',
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50">
      {/* Minimalist Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-200 shadow-sm">
            <MapPin className="w-4 h-4" />
            Downtown Jacksonville • 32202, 32204, 32206
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800">
            Downtown Jacksonville
            <br />
            <span className="text-blue-600">Cleaning Services</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional cleaning services for Downtown Jacksonville businesses, offices, and residential properties. 
            Local expertise, reliable service, exceptional results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </Link>
            <Link 
              href="#services" 
              className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              View Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          {/* Simple Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/70 rounded-2xl border border-blue-100 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Downtown Experts</h3>
              <p className="text-gray-600 text-sm">Local knowledge of every building</p>
            </div>
            
            <div className="text-center p-6 bg-white/70 rounded-2xl border border-blue-100 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">24/7 Availability</h3>
              <p className="text-gray-600 text-sm">After-hours & weekend service</p>
            </div>
            
            <div className="text-center p-6 bg-white/70 rounded-2xl border border-blue-100 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">Corporate compliance guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Downtown Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Downtown Jacksonville
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Downtown Jacksonville is the vibrant business and cultural heart of the city, home to 
                  major corporations, historic architecture, and the beautiful St. Johns River waterfront.
                </p>
                <p>
                  With its mix of high-rise office buildings, historic properties, and modern developments, 
                  Downtown Jacksonville requires specialized cleaning services that understand the unique 
                  challenges of urban environments.
                </p>
                <p>
                  Our local team knows Downtown Jacksonville inside and out, providing reliable cleaning 
                  services for businesses, offices, and residential properties throughout the area.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">ZIP Codes</h3>
                    <p className="text-gray-600">32202, 32204, 32206</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Population</h3>
                    <p className="text-gray-600">40,000+ residents and workers</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Property Types</h3>
                    <p className="text-gray-600">High-rise condos, offices, historic homes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Hours</h3>
                    <p className="text-gray-600">24/7 availability for businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downtown Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Downtown Jacksonville?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Downtown Jacksonville offers unique opportunities and challenges that require specialized cleaning expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downtownHighlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Services */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cleaning Services in Downtown Jacksonville
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning solutions designed specifically for Downtown Jacksonville properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downtownServices.map((service, index) => {
              // Define color schemes for each service
              const colorSchemes = [
                { bg: 'bg-blue-500', hover: 'hover:bg-blue-600', accent: 'bg-blue-100', text: 'text-blue-600', dot: 'bg-blue-500', border: 'border-blue-500' },
                { bg: 'bg-purple-500', hover: 'hover:bg-purple-600', accent: 'bg-purple-100', text: 'text-purple-600', dot: 'bg-purple-500', border: 'border-purple-500' },
                { bg: 'bg-green-500', hover: 'hover:bg-green-600', accent: 'bg-green-100', text: 'text-green-600', dot: 'bg-green-500', border: 'border-green-500' },
                { bg: 'bg-orange-500', hover: 'hover:bg-orange-600', accent: 'bg-orange-100', text: 'text-orange-600', dot: 'bg-orange-500', border: 'border-orange-500' },
                { bg: 'bg-indigo-500', hover: 'hover:bg-indigo-600', accent: 'bg-indigo-100', text: 'text-indigo-600', dot: 'bg-indigo-500', border: 'border-indigo-500' },
                { bg: 'bg-teal-500', hover: 'hover:bg-teal-600', accent: 'bg-teal-100', text: 'text-teal-600', dot: 'bg-teal-500', border: 'border-teal-500' },
                { bg: 'bg-emerald-500', hover: 'hover:bg-emerald-600', accent: 'bg-emerald-100', text: 'text-emerald-600', dot: 'bg-emerald-500', border: 'border-emerald-500' },
                { bg: 'bg-amber-500', hover: 'hover:bg-amber-600', accent: 'bg-amber-100', text: 'text-amber-600', dot: 'bg-amber-500', border: 'border-amber-500' },
                { bg: 'bg-cyan-500', hover: 'hover:bg-cyan-600', accent: 'bg-cyan-100', text: 'text-cyan-600', dot: 'bg-cyan-500', border: 'border-cyan-500' },
                { bg: 'bg-sky-500', hover: 'hover:bg-sky-600', accent: 'bg-sky-100', text: 'text-sky-600', dot: 'bg-sky-500', border: 'border-sky-500' },
                { bg: 'bg-rose-500', hover: 'hover:bg-rose-600', accent: 'bg-rose-100', text: 'text-rose-600', dot: 'bg-rose-500', border: 'border-rose-500' },
                { bg: 'bg-pink-500', hover: 'hover:bg-pink-600', accent: 'bg-pink-100', text: 'text-pink-600', dot: 'bg-pink-500', border: 'border-pink-500' },
                { bg: 'bg-red-500', hover: 'hover:bg-red-600', accent: 'bg-red-100', text: 'text-red-600', dot: 'bg-red-500', border: 'border-red-500' },
                { bg: 'bg-violet-500', hover: 'hover:bg-violet-600', accent: 'bg-violet-100', text: 'text-violet-600', dot: 'bg-violet-500', border: 'border-violet-500' },
                { bg: 'bg-lime-500', hover: 'hover:bg-lime-600', accent: 'bg-lime-100', text: 'text-lime-600', dot: 'bg-lime-500', border: 'border-lime-500' },
                { bg: 'bg-fuchsia-500', hover: 'hover:bg-fuchsia-600', accent: 'bg-fuchsia-100', text: 'text-fuchsia-600', dot: 'bg-fuchsia-500', border: 'border-fuchsia-500' },
                { bg: 'bg-slate-500', hover: 'hover:bg-slate-600', accent: 'bg-slate-100', text: 'text-slate-600', dot: 'bg-slate-500', border: 'border-slate-500' }
              ];
              
              const colorScheme = colorSchemes[index % colorSchemes.length];
              
              return (
                <div key={service.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`h-3 ${colorScheme.bg} rounded-t-xl`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${colorScheme.accent} rounded-full flex items-center justify-center mr-4`}>
                        <service.icon className={`w-6 h-6 ${colorScheme.text}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 ${colorScheme.dot} rounded-full`}></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3">
                      <Link
                        href={`/${service.id}`}
                        className={`w-full ${colorScheme.bg} ${colorScheme.hover} text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2`}
                      >
                        <span>Learn More</span>
                      </Link>
                      <Link
                        href={`/contact?service=${service.id}&location=downtown-jacksonville`}
                        className={`w-full border ${colorScheme.border} ${colorScheme.text} py-2 px-4 rounded-lg font-medium hover:${colorScheme.bg} hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2`}
                      >
                        <Phone className="w-4 h-4" />
                        <span>Get Quote</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us for Downtown Jacksonville?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local expertise that understands Downtown Jacksonville's unique cleaning needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Knowledge</h3>
              <p className="text-gray-600">
                We understand Downtown Jacksonville's unique architecture, traffic patterns, and cleaning challenges
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                After-hours cleaning for businesses, weekend availability, and emergency service when needed
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Standards</h3>
              <p className="text-gray-600">
                Meeting the high standards expected by Downtown Jacksonville businesses and residents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Downtown Jacksonville Cleaning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free quote for your Downtown Jacksonville property
          </p>
          <Link
            href="/contact?location=downtown-jacksonville"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-6 h-6" />
            <span>Get Your Free Quote</span>
          </Link>
        </div>
      </section>
    </div>
  );
}



