import Link from 'next/link';
import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, MapPinIcon, UsersIcon, BuildingIcon, CarIcon } from 'lucide-react';

export default function OrangeParkPage() {
  const orangeParkServices = [
    {
      id: 'standard-cleaning',
      title: 'Standard Cleaning',
      description: 'Regular maintenance cleaning tailored for Orange Park homes and families',
      icon: Home,
      features: ['Dusting and wiping surfaces', 'Vacuuming and mopping floors', 'Bathroom sanitization', 'Kitchen deep cleaning', 'Trash removal']
    },
    {
      id: 'deep-cleaning',
      title: 'Deep Cleaning',
      description: 'Comprehensive cleaning service for thorough Orange Park home refreshment',
      icon: Sparkles,
      features: ['Detailed surface cleaning', 'Inside appliance cleaning', 'Baseboard and corner cleaning', 'Window and blind cleaning', 'Cabinet organization']
    },
    {
      id: 'move-in-move-out',
      title: 'Move In/Out Cleaning',
      description: 'Complete cleaning service for smooth transitions in Orange Park',
      icon: Car,
      features: ['Pre-move deep cleaning', 'Post-move restoration', 'Appliance deep cleaning', 'Cabinet and drawer cleaning', 'Final inspection']
    },
    {
      id: 'recurring-cleaning',
      title: 'Recurring Cleaning',
      description: 'Consistent cleaning schedule to maintain your Orange Park home',
      icon: Calendar,
      features: ['Weekly, bi-weekly, or monthly options', 'Customizable service plans', 'Consistent quality standards', 'Flexible scheduling', 'Priority booking']
    },
    {
      id: 'vacation-rental-cleaning',
      title: 'Vacation Rental Turnover',
      description: 'Professional cleaning for Orange Park vacation rental properties',
      icon: Building2,
      features: ['Quick turnaround cleaning', 'Linen and towel replacement', 'Kitchen deep sanitization', 'Bathroom refresh', 'Guest-ready standards']
    },
    {
      id: 'post-construction-cleaning',
      title: 'Post-Construction Cleaning',
      description: 'Comprehensive cleanup after construction or renovation projects',
      icon: Target,
      features: ['Construction debris removal', 'Dust and particle cleanup', 'Surface restoration', 'Final detail cleaning', 'Quality inspection']
    },
    {
      id: 'carpet-cleaning',
      title: 'Carpet Cleaning',
      description: 'Professional carpet cleaning and stain removal services',
      icon: Droplets,
      features: ['Deep carpet extraction', 'Stain and spot treatment', 'Odor elimination', 'Protective treatment', 'Fast drying technology']
    },
    {
      id: 'window-cleaning',
      title: 'Window Cleaning',
      description: 'Crystal clear windows for your Orange Park home',
      icon: Building2,
      features: ['Interior and exterior cleaning', 'Screen cleaning', 'Track and sill cleaning', 'Streak-free results', 'Safety equipment used']
    },
    {
      id: 'pressure-washing',
      title: 'Pressure Washing',
      description: 'Exterior surface cleaning for your home and driveway',
      icon: Zap,
      features: ['Driveway and walkway cleaning', 'House siding cleaning', 'Deck and patio cleaning', 'Safe pressure settings', 'Eco-friendly solutions']
    },
    {
      id: 'gutter-cleaning',
      title: 'Gutter Cleaning',
      description: 'Maintain proper drainage with professional gutter cleaning',
      icon: Droplets,
      features: ['Debris removal', 'Downspout clearing', 'Gutter inspection', 'Preventive maintenance', 'Safety protocols']
    },
    {
      id: 'air-duct-cleaning',
      title: 'Air Duct Cleaning',
      description: 'Improve indoor air quality with professional duct cleaning',
      icon: Gauge,
      features: ['Duct system cleaning', 'Vent cleaning', 'Filter replacement', 'Air quality testing', 'Energy efficiency improvement']
    },
    {
      id: 'apartment-cleaning',
      title: 'Apartment Cleaning',
      description: 'Specialized cleaning for Orange Park apartment residents',
      icon: Building2,
      features: ['Compact space optimization', 'Efficient cleaning methods', 'Flexible scheduling', 'Move-in/out services', 'Regular maintenance']
    },
    {
      id: 'commercial-office-cleaning',
      title: 'Commercial Office Cleaning',
      description: 'Professional cleaning for Orange Park businesses and offices',
      icon: Building2,
      features: ['Daily maintenance cleaning', 'Sanitization protocols', 'Common area cleaning', 'Restroom maintenance', 'Flexible scheduling']
    },
    {
      id: 'medical-facility-cleaning',
      title: 'Medical Facility Cleaning',
      description: 'Specialized cleaning for healthcare environments',
      icon: Shield,
      features: ['Medical-grade sanitization', 'Infection control protocols', 'HIPAA compliance', 'Specialized equipment', 'Certified technicians']
    },
    {
      id: 'event-venue-cleaning',
      title: 'Event Venue Cleaning',
      description: 'Pre and post-event cleaning for venues and special occasions',
      icon: Users,
      features: ['Pre-event preparation', 'Post-event cleanup', 'Large space handling', 'Quick turnaround', 'Specialized equipment']
    },
    {
      id: 'senior-citizen-cleaning',
      title: 'Senior Citizen Cleaning',
      description: 'Compassionate cleaning services for seniors in Orange Park',
      icon: Users,
      features: ['Gentle cleaning methods', 'Accessibility considerations', 'Regular maintenance', 'Companionship during service', 'Flexible scheduling']
    },
    {
      id: 'pet-friendly-cleaning',
      title: 'Pet-Friendly Cleaning',
      description: 'Safe cleaning solutions for homes with pets',
      icon: Leaf,
      features: ['Pet-safe cleaning products', 'Odor elimination', 'Hair removal', 'Stain treatment', 'Non-toxic solutions']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-20">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Professional Cleaning Services in Orange Park
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 mb-8 max-w-4xl mx-auto">
            Trusted cleaning solutions for homes and businesses in Orange Park, Florida. 
            Serving ZIP codes 32073 and 32065 with excellence and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact?location=orange-park"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="#services"
              className="bg-white/80 hover:bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border-2 border-blue-600"
            >
              View Services
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-blue-800 font-semibold">5-Star Rated</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-blue-800 font-semibold">Fully Insured</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-blue-800 font-semibold">On-Time Service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-blue-800 font-semibold">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Park Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Orange Park: A Family-Friendly Community with Unique Cleaning Needs
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Orange Park, located in Clay County just south of Jacksonville, is a vibrant suburban community 
                  known for its family-friendly atmosphere, excellent schools, and growing business district. 
                  With a population of over 8,500 residents and growing, Orange Park offers a unique blend of 
                  suburban comfort and urban convenience.
                </p>
                <p>
                  The area&apos;s proximity to NAS Jacksonville, the Orange Park Medical Center, and major shopping 
                  centers like the Orange Park Mall creates diverse cleaning needs that require specialized expertise. 
                  From military families who need flexible scheduling to medical professionals who require 
                  sanitization-focused services, Orange Park residents have unique cleaning requirements.
                </p>
                <p>
                  Our local team understands Orange Park&apos;s distinctive character, from the historic homes in 
                  the Town Center area to the modern developments near the St. Johns Town Center. We've built 
                  strong relationships with local businesses, schools, and community organizations to provide 
                  cleaning services that truly serve the Orange Park community.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">ZIP Codes</h3>
                    <p className="text-gray-600">32073, 32065</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <UsersIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Population</h3>
                    <p className="text-gray-600">8,500+ residents</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <BuildingIcon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Property Types</h3>
                    <p className="text-gray-600">Suburban homes, townhouses, apartments, businesses</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <CarIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Hours</h3>
                    <p className="text-gray-600">Flexible scheduling available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us for Orange Park Cleaning?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local expertise that understands Orange Park&apos;s unique cleaning challenges and community needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Military Family Support</h3>
              <p className="text-gray-600">
                We understand the unique needs of military families stationed at NAS Jacksonville, 
                offering flexible scheduling, emergency services, and special rates for service members.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Medical Facility Expertise</h3>
              <p className="text-gray-600">
                With the Orange Park Medical Center nearby, we provide specialized medical facility 
                cleaning with proper protocols, HIPAA compliance, and infection control standards.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Partnership</h3>
              <p className="text-gray-600">
                We&apos;re proud partners with Orange Park schools, local businesses, and community 
                organizations, demonstrating our commitment to the area's growth and prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Challenges & Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Orange Park-Specific Cleaning Challenges & Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding and addressing the unique cleaning needs of Orange Park properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Suburban Family Homes</h3>
              <p className="text-blue-800 mb-4">
                Orange Park&apos;s suburban setting means larger homes with more square footage, 
                multiple bathrooms, and family-focused living spaces that require efficient, 
                thorough cleaning approaches.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Efficient cleaning methods for larger spaces</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Family-friendly cleaning products</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Flexible scheduling for busy families</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Business District Support</h3>
              <p className="text-green-800 mb-4">
                With the Orange Park Mall, medical facilities, and growing business corridors, 
                we provide commercial cleaning services that support local economic development.
              </p>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>After-hours commercial cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Medical facility compliance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Retail space maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Cleaning Services in Orange Park
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional cleaning solutions designed specifically for Orange Park properties and community needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orangeParkServices.map((service, index) => {
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
                        href={`/contact?service=${service.id}&location=orange-park`}
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

      {/* Local Benefits & Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Orange Park-Specific Benefits & Service Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How our local expertise delivers exceptional results for Orange Park residents and businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Local Service Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Military Family Support</h4>
                    <p className="text-gray-600">Special scheduling flexibility and rates for NAS Jacksonville families</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Partnership</h4>
                    <p className="text-gray-600">Strong relationships with local schools, businesses, and organizations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Emergency Response</h4>
                    <p className="text-gray-600">Quick response times for urgent cleaning needs in Orange Park</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Service Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Assessment</h4>
                    <p className="text-gray-600">We evaluate your Orange Park property&apos;s specific cleaning needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Customized Plan</h4>
                    <p className="text-gray-600">Develop a cleaning plan tailored to your property and schedule</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Service</h4>
                    <p className="text-gray-600">Our local team delivers exceptional results with attention to detail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to Experience Professional Cleaning in Orange Park?
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied Orange Park residents and businesses who trust us with their cleaning needs. 
            Get your free quote today and discover why we&apos;re the preferred cleaning service in Orange Park!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?location=orange-park"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="tel:+19045551234"
              className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border-2 border-blue-600"
            >
              <span>Call Now</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

