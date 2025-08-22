import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, CheckCircle, Award, Zap } from 'lucide-react';
import Link from 'next/link';

export default function LocationsPage() {
  const locations = [
    {
      name: 'Downtown Jacksonville',
      zipCodes: '32202, 32204, 32206',
      population: '25,000+ residents',
      description: 'Urban center with diverse property types and business districts',
      services: ['All 17 services available'],
      color: 'blue',
      link: '/locations/downtown-jacksonville'
    },
    {
      name: 'Jacksonville Beach',
      zipCodes: '32250',
      population: '23,000+ residents',
      description: 'Coastal community with beachfront properties and vacation rentals',
      services: ['All 17 services available'],
      color: 'teal',
      link: '/locations/jacksonville-beach'
    },
    {
      name: 'Southside',
      zipCodes: '32216, 32256',
      population: '45,000+ residents',
      description: 'Suburban area with shopping centers and family homes',
      services: ['All 17 services available'],
      color: 'green',
      link: '/locations/southside'
    },
    {
      name: 'Arlington',
      zipCodes: '32211, 32225',
      population: '30,000+ residents',
      description: 'Residential area with diverse housing and local businesses',
      services: ['All 17 services available'],
      color: 'purple',
      link: '/locations/arlington'
    },
    {
      name: 'Mandarin',
      zipCodes: '32223, 32257',
      population: '20,000+ residents',
      description: 'Historic area with upscale homes and riverfront properties',
      services: ['All 17 services available'],
      color: 'orange',
      link: '/locations/mandarin'
    },
    {
      name: 'San Marco',
      zipCodes: '32207',
      population: '15,000+ residents',
      description: 'Historic district with boutique businesses and residential charm',
      services: ['All 17 services available'],
      color: 'indigo',
      link: '/locations/san-marco'
    },
    {
      name: 'Riverside',
      zipCodes: '32205, 32206',
      population: '18,000+ residents',
      description: 'Arts district with historic homes and cultural attractions',
      services: ['All 17 services available'],
      color: 'rose',
      link: '/locations/riverside'
    },
    {
      name: 'Orange Park',
      zipCodes: '32073, 32065',
      population: '8,500+ residents',
      description: 'Suburban community with military families and medical facilities',
      services: ['All 17 services available'],
      color: 'amber',
      link: '/locations/orange-park'
    },
    {
      name: 'Atlantic Beach',
      zipCodes: '32233',
      population: '13,000+ residents',
      description: 'Historic coastal community with beachfront properties',
      services: ['All 17 services available'],
      color: 'cyan',
      link: '/locations/atlantic-beach'
    },
    {
      name: 'Neptune Beach',
      zipCodes: '32266',
      population: '7,000+ residents',
      description: 'Charming beach community with cozy cottages',
      services: ['All 17 services available'],
      color: 'emerald',
      link: '/locations/neptune-beach'
    },
    {
      name: 'Ponte Vedra Beach',
      zipCodes: '32082',
      population: '25,000+ residents',
      description: 'Luxury coastal community with golf courses',
      services: ['All 17 services available'],
      color: 'purple',
      link: '/locations/ponte-vedra-beach'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Local Business Style */}
      <section 
        className="relative py-20 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(/hero1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Local Business Badge */}
            <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/50 shadow-lg">
              <MapPin className="w-4 h-4 text-primary-blue" />
              Serving All of Jacksonville & Beyond
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              <span className="block">Jacksonville</span>
              <span className="block text-cyan-400">Service Areas</span>
              <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-white/90 mt-3">
                From the Beaches to Downtown, We&apos;re Your Local Cleaning Team
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed">
              As your Jacksonville neighbors, we&apos;re proud to serve homes and businesses throughout 
              the city and surrounding communities. No matter where you are in the area, we bring 
              the same quality service and local care.
            </p>

            {/* Local Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <MapPin className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">25+ Areas</h3>
                <p className="text-white/80 text-xs leading-relaxed">Jacksonville & surrounding</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Truck className="w-6 h-6 text-primary-blue" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">Local Team</h3>
                <p className="text-white/80 text-xs leading-relaxed">Jacksonville residents</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-accent-coral/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Clock className="w-6 h-6 text-accent-coral" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">Flexible Scheduling</h3>
                <p className="text-white/80 text-xs leading-relaxed">Work around your schedule</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Jacksonville & Surrounding Areas
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We serve homes and businesses throughout Jacksonville and nearby communities. 
              Our local team knows the area and provides reliable service wherever you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((area) => (
              <div key={area.name} className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Header with subtle accent */}
                <div className="px-6 py-5 border-b border-gray-50">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{area.name}</h3>
                    <div className="flex items-center space-x-0.5">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                </div>

                {/* Content - flex-grow to push button to bottom */}
                <div className="px-6 py-4 flex-grow flex flex-col">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Population</p>
                        <p className="text-sm font-semibold text-gray-900">{area.population}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">ZIP Codes</p>
                        <p className="text-sm font-semibold text-gray-900">{area.zipCodes}</p>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Popular Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.services.slice(0, 3).map((service, index) => (
                        <span key={index} className="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-100">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-grow"></div>

                  {/* CTA Button - now at bottom of card */}
                  <Link
                    href={area.link}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:bg-blue-700 group-hover:bg-blue-700 mt-auto"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>View {area.name} Services</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose a Local Jacksonville Cleaning Company?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We know Jacksonville because we live here, work here, and care about our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Knowledge</h3>
              <p className="text-gray-600">
                We understand Jacksonville&apos;s unique climate, housing types, and local cleaning challenges
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600">
                Local team means faster response times and better availability for your area
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Trust</h3>
              <p className="text-gray-600">
                Trusted by thousands of Jacksonville residents and businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Local Jacksonville Cleaning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free quote for your specific Jacksonville area
          </p>
          <Link
            href="/contact"
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
