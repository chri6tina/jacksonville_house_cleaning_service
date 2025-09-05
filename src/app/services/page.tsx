'use client';

import { useState } from 'react';
import { 
  Home, 
  Sparkles, 
  Truck, 
  Building2, 
  Car, 
  Wind, 
  Hammer,
  Check,
  Clock,
  Users,
  Shield,
  Leaf,
  Star,
  ArrowRight,
  Phone,
  Calendar,
  Calculator,
  MapPin,
  Fan,
  Droplets,
  Gauge,
  PawPrint,
  Heart,
  PartyPopper,
  Umbrella,
  Search,
  Filter,
  X,
  ChevronDown,
  Eye,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const services = [
    {
      id: 'recurring',
      title: 'Recurring House Cleaning',
      icon: Home,
      description: 'Regular maintenance cleaning to keep your home consistently clean and comfortable.',
      shortDescription: 'Weekly, bi-weekly, or monthly cleaning to maintain your home',
      features: [
        'Dust all surfaces and furniture',
        'Vacuum and mop all floors',
        'Clean bathrooms (sink, toilet, shower, tub)',
        'Wipe down kitchen surfaces and appliances',
        'Empty trash bins and replace liners',
        'Make beds and straighten rooms',
        'Clean mirrors and glass surfaces',
        'Sweep and mop entryways'
      ],
      benefits: [
        'Maintains consistent cleanliness',
        'Reduces allergens and dust buildup',
        'Saves time on daily cleaning tasks',
        'Flexible scheduling options'
      ],
      pricing: 'Starting at $120 per visit',
      duration: '2-3 hours',
      frequency: 'Weekly, bi-weekly, or monthly',
      popular: true,
      color: 'blue',
      category: 'residential',
      tags: ['regular', 'maintenance', 'weekly', 'bi-weekly', 'monthly'],
      rating: 4.9,
      reviews: 127
    },
    {
      id: 'deep-cleaning',
      title: 'Deep Cleaning',
      icon: Sparkles,
      description: 'Comprehensive cleaning service for thorough sanitization and deep dirt removal.',
      shortDescription: 'Intensive cleaning for seasonal refresh and deep sanitization',
      features: [
        'Everything in recurring cleaning',
        'Deep clean inside appliances (oven, refrigerator, microwave)',
        'Clean inside cabinets and drawers',
        'Detailed bathroom sanitization',
        'Clean baseboards, crown molding, and trim',
        'Dust blinds, light fixtures, and ceiling fans',
        'Clean inside windows and window sills',
        'Sanitize high-touch surfaces',
        'Clean under furniture and appliances'
      ],
      benefits: [
        'Eliminates deep-seated dirt and grime',
        'Improves indoor air quality',
        'Perfect for seasonal cleaning',
        'Sanitizes high-touch areas'
      ],
      pricing: 'Starting at $200 per visit',
      duration: '4-6 hours',
      frequency: 'One-time or seasonal',
      popular: false,
      color: 'purple',
      category: 'residential',
      tags: ['deep', 'seasonal', 'sanitization', 'intensive', 'thorough'],
      rating: 4.8,
      reviews: 89
    },
    {
      id: 'move-in-out',
      title: 'Move-In/Move-Out Cleaning',
      icon: Truck,
      description: 'Specialized cleaning service for real estate transactions and relocations.',
      shortDescription: 'Professional cleaning for real estate and relocation needs',
      features: [
        'Pre-move out deep cleaning',
        'Post-move in sanitization',
        'Clean all surfaces, floors, and fixtures',
        'Remove construction dust and debris',
        'Clean inside appliances and cabinets',
        'Sanitize bathrooms and kitchens',
        'Clean windows and window sills',
        'Remove all traces of previous occupants',
        'Inspection-ready results'
      ],
      benefits: [
        'Ensures property is move-in ready',
        'Meets real estate inspection standards',
        'Removes all traces of previous occupants',
        'Professional results for property managers'
      ],
      pricing: 'Starting at $250 per visit',
      duration: '4-8 hours',
      frequency: 'One-time service',
      popular: true,
      color: 'green',
      category: 'specialized',
      tags: ['move-in', 'move-out', 'real-estate', 'relocation', 'inspection'],
      rating: 4.9,
      reviews: 156
    },
    {
      id: 'post-construction',
      title: 'Post-Construction Cleaning',
      icon: Hammer,
      description: 'Comprehensive cleanup after construction, renovation, or remodeling projects.',
      shortDescription: 'Complete cleanup after construction and renovation work',
      features: [
        'Remove construction dust and debris',
        'Clean all surfaces and fixtures',
        'Detailed window and glass cleaning',
        'Clean inside cabinets and appliances',
        'Remove paint overspray and residue',
        'Clean air ducts and vents',
        'Sanitize all areas',
        'Final inspection and touch-ups',
        'Move-in ready results'
      ],
      benefits: [
        'Eliminates construction debris',
        'Ensures safe living environment',
        'Removes harmful dust particles',
        'Professional finish to your project'
      ],
      pricing: 'Starting at $300 per visit',
      duration: '6-10 hours',
      frequency: 'One-time service',
      popular: false,
      color: 'orange',
      category: 'specialized',
      tags: ['construction', 'renovation', 'remodeling', 'debris', 'cleanup'],
      rating: 4.7,
      reviews: 73
    }
  ];

  // Filter services based on search term and category
  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'residential', name: 'Residential', count: services.filter(s => s.category === 'residential').length },
    { id: 'specialized', name: 'Specialized', count: services.filter(s => s.category === 'specialized').length },
    { id: 'commercial', name: 'Commercial', count: services.filter(s => s.category === 'commercial').length }
  ];

  return (
    <>
      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Jacksonville House Cleaning Service",
            "description": "Professional house cleaning services in Jacksonville, FL. Offering recurring cleaning, deep cleaning, move-in/move-out cleaning, and post-construction cleaning.",
            "url": "https://www.jacksonvillehousecleaningservice.com/services",
            "telephone": "+19044563851",
            "email": "info@jacksonvillehousecleaningservice.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Jacksonville House Cleaning Services",
              "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description,
                  "provider": {
                    "@type": "Organization",
                    "name": "Jacksonville House Cleaning Service"
                  },
                  "areaServed": {
                    "@type": "City",
                    "name": "Jacksonville"
                  },
                  "serviceType": "House Cleaning",
                  "category": "Cleaning Service"
                },
                "price": service.pricing,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }))
            },
            "sameAs": [
              "https://www.facebook.com/jacksonvillehousecleaningservice",
              "https://www.google.com/maps?cid=123456789"
            ]
          })
        }}
      />

      {/* Service Schema for Each Service */}
      {services.map((service, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.title,
              "description": service.description,
              "provider": {
                "@type": "Organization",
                "name": "Jacksonville House Cleaning Service",
                "telephone": "+19044563851",
                "email": "info@jacksonvillehousecleaningservice.com"
              },
              "areaServed": {
                "@type": "City",
                "name": "Jacksonville"
              },
              "serviceType": "House Cleaning",
              "category": "Cleaning Service",
              "offers": {
                "@type": "Offer",
                "price": service.pricing,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      ))}

      <div className="min-h-screen">
        {/* Enhanced Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
          {/* Background with animated elements */}
          <div className="absolute inset-0 bg-blue-600"></div>
          <div className="absolute inset-0 bg-blue-900/80"></div>
          <div className="absolute inset-0 bg-[url('/hero1.png')] bg-cover bg-center opacity-20"></div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent-aqua/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent-coral/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-white/15 rounded-full animate-bounce"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-white/90">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent-aqua" />
                  <span className="text-sm font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent-coral" />
                  <span className="text-sm font-medium">1000+ Happy Customers</span>
                </div>
              </div>

              {/* Main heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Professional House Cleaning
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-accent-aqua">
                  Services in Jacksonville
                </span>
              </h1>
              
              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                From regular maintenance to deep cleaning and specialized services, we offer comprehensive 
                cleaning solutions tailored to your needs.
              </p>

              {/* Key benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-accent-aqua/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-6 h-6 text-accent-aqua" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Residential Cleaning</h3>
                  <p className="text-white/80 text-sm">Regular maintenance and deep cleaning for your home</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-accent-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-accent-coral" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Commercial Cleaning</h3>
                  <p className="text-white/80 text-sm">Professional cleaning for offices and businesses</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Specialized Services</h3>
                  <p className="text-white/80 text-sm">Move-in/out, post-construction, and more</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group bg-accent-coral text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-accent-coral/25 hover:scale-105 flex items-center justify-center gap-3"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+19044563851"
                  className="group bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-primary-blue px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Call (904) 456-3851
                </a>
              </div>

              {/* Additional trust indicators */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/70">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent-green" />
                  <span className="text-sm">Free Estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent-green" />
                  <span className="text-sm">Satisfaction Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent-green" />
                  <span className="text-sm">Eco-Friendly Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent-green" />
                  <span className="text-sm">Flexible Scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/services', current: true }
              ]}
            />
          </div>
        </section>

        {/* Enhanced Services Directory */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Core Cleaning Services</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We offer a comprehensive range of cleaning services to meet all your needs, from regular maintenance 
                to specialized deep cleaning and post-construction cleanup.
              </p>
            </div>

            {/* Search and Filter Controls */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Filter Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Filter className="w-5 h-5" />
                    <span>Filter</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Filter Dropdown */}
                  {showFilters && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => {
                                setSelectedCategory(category.id);
                                setShowFilters(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                                selectedCategory === category.id
                                  ? 'bg-primary-blue text-white'
                                  : 'hover:bg-gray-100'
                              }`}
                            >
                              <div className="flex justify-between items-center">
                                <span>{category.name}</span>
                                <span className="text-sm opacity-75">({category.count})</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Active Filters */}
              {(searchTerm || selectedCategory !== 'all') && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {searchTerm && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-blue text-white rounded-full text-sm">
                      Search: "{searchTerm}"
                      <button
                        onClick={() => setSearchTerm('')}
                        className="hover:bg-white/20 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedCategory !== 'all' && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent-aqua text-white rounded-full text-sm">
                      Category: {categories.find(c => c.id === selectedCategory)?.name}
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className="hover:bg-white/20 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-600">
                Showing {filteredServices.length} of {services.length} services
              </p>
            </div>

            {/* Enhanced Service Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredServices.map((service, index) => (
                <div key={service.id} className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  service.popular ? 'border-primary-blue' : 'border-gray-100'
                } hover:scale-[1.02]`}>
                  {service.popular && (
                    <div className="bg-primary-blue text-white text-center py-2 rounded-t-2xl">
                      <span className="text-sm font-semibold">⭐ Most Popular</span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    {/* Header with Icon and Rating */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ${
                          service.color === 'blue' ? 'bg-primary-blue/20' : 
                          service.color === 'purple' ? 'bg-purple-500/20' : 
                          service.color === 'green' ? 'bg-accent-green/20' : 
                          'bg-orange-500/20'
                        }`}>
                          <service.icon className={`w-8 h-8 ${
                            service.color === 'blue' ? 'text-primary-blue' : 
                            service.color === 'purple' ? 'text-purple-500' : 
                            service.color === 'green' ? 'text-accent-green' : 
                            'text-orange-500'
                          }`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-blue transition-colors duration-200">{service.title}</h3>
                          <p className="text-gray-600">{service.shortDescription}</p>
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-semibold text-gray-900">{service.rating}</span>
                        </div>
                        <p className="text-sm text-gray-500">{service.reviews} reviews</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features and Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent-green" />
                          What&apos;s Included:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-sm text-primary-blue font-medium">
                              +{service.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                          <Star className="w-4 h-4 text-accent-coral" />
                          Key Benefits:
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-3">
                              <Star className="w-4 h-4 text-accent-coral mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Pricing Info */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm text-gray-600">Starting Price</div>
                        <div className="font-semibold text-gray-900">{service.pricing}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="font-semibold text-gray-900">{service.duration}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm text-gray-600">Frequency</div>
                        <div className="font-semibold text-gray-900">{service.frequency}</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/contact?service=${service.id}`}
                        className="flex-1 bg-primary-blue text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg"
                      >
                        <Calculator className="w-4 h-4" />
                        <span>Get Quote</span>
                      </Link>
                      <Link
                        href={`/${service.id === 'deep-cleaning' ? 'deep-cleaning' : service.id === 'move-in-out' ? 'move-in-move-out' : service.id === 'post-construction' ? 'post-construction-cleaning' : service.id}`}
                        className="flex-1 border border-primary-blue text-primary-blue py-3 px-4 rounded-lg font-medium hover:bg-primary-blue hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Learn More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="text-primary-blue hover:text-primary-blue/80 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Specialized Cleaning Services</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Beyond our core services, we offer specialized cleaning solutions for unique needs and situations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-accent-aqua/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-accent-aqua" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Commercial Cleaning</h3>
                <p className="text-gray-700 text-center text-sm mb-4">
                  Professional cleaning for offices, retail spaces, and commercial properties
                </p>
                <Link href="/commercial-office-cleaning" className="w-full bg-accent-aqua text-white py-2 px-4 rounded-lg font-medium hover:bg-accent-aqua/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PawPrint className="w-8 h-8 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Pet-Friendly Cleaning</h3>
                <p className="text-gray-700 text-center text-sm mb-4">
                  Safe cleaning solutions for homes with pets and families
                </p>
                <Link href="/pet-friendly-cleaning" className="w-full bg-accent-green text-white py-2 px-4 rounded-lg font-medium hover:bg-accent-green/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-accent-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Umbrella className="w-8 h-8 text-accent-coral" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Vacation Rental</h3>
                <p className="text-gray-700 text-center text-sm mb-4">
                  Professional turnover cleaning for vacation rental properties
                </p>
                <Link href="/vacation-rental-cleaning" className="w-full bg-accent-coral text-white py-2 px-4 rounded-lg font-medium hover:bg-accent-coral/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Air Duct Cleaning</h3>
                <p className="text-gray-700 text-center text-sm mb-4">
                  Improve indoor air quality with professional duct cleaning
                </p>
                <Link href="/air-duct-cleaning" className="w-full bg-primary-blue text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-blue/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-purple-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Pressure Washing</h3>
                <p className="text-gray-700 text-center text-sm mb-4">
                  Exterior cleaning for driveways, sidewalks, and building exteriors
                </p>
                <Link href="/pressure-washing" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-orange-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Holiday Cleaning</h3>
                <p className="text-gray-700 text-center text-sm mb-4">
                  Special cleaning services for holidays and special occasions
                </p>
                <Link href="/holiday-cleaning" className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Don&apos;t see the service you need? We offer custom cleaning solutions for unique requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors duration-200"
                >
                  Request Custom Service
                </Link>
                <a
                  href="tel:+19044563851"
                  className="border border-primary-blue text-primary-blue px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Call for Details
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Jacksonville Service Areas</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We serve all of Jacksonville and surrounding areas. Find your neighborhood below or contact us to confirm service availability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Jacksonville Beach Area</h3>
                <div className="space-y-2 text-sm">
                  <Link href="/locations/jacksonville-beach" className="block text-gray-700 hover:text-primary-blue transition-colors duration-200">
                    Jacksonville Beach
                  </Link>
                  <Link href="/locations/ponte-vedra" className="block text-gray-700 hover:text-primary-blue transition-colors duration-200">
                    Ponte Vedra
                  </Link>
                  <Link href="/locations/atlantic-beach" className="block text-gray-700 hover:text-primary-blue transition-colors duration-200">
                    Atlantic Beach
                  </Link>
                  <Link href="/locations/neptune-beach" className="block text-gray-700 hover:text-primary-blue transition-colors duration-200">
                    Neptune Beach
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Central Jacksonville</h3>
                <div className="space-y-2 text-sm">
                  <Link href="/locations/downtown" className="block text-gray-700 hover:text-primary-blue transition-colors duration-200">
                    Downtown
                  </Link>
                  <Link href="/locations/riverside" className="block text-gray-700 hover:text-primary-blue transition-colors duration-200">
                    Riverside
                  </Link>
                  <Link href="/locations/san-marco" className="block text-gray-700 hover:text-primary-blue transition-colors duration-200">
                    San Marco
                  </Link>
                  <Link href="/locations/springfield" className="block text-gray-700 hover:text-primary-blue transition-colors duration-200">
                    Springfield
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Suburban Areas</h3>
                <div className="space-y-2 text-sm">
                  <Link href="/locations/southside" className="block text-gray-700 hover:text-primary-blue transition-colors duration-200">
                    Southside
                  </Link>
                  <Link href="/locations/arlington" className="block text-gray-700 hover:text-primary-blue transition-colors duration-200">
                    Arlington
                  </Link>
                  <Link href="/locations/mandarin" className="block text-gray-700 hover:text-primary-blue transition-colors duration-200">
                    Mandarin
                  </Link>
                  <Link href="/locations/fleming-island" className="block text-gray-700 hover:text-primary-blue transition-colors duration-200">
                    Fleming Island
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors duration-200"
              >
                <MapPin className="w-4 h-4" />
                View All Service Areas
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Choose Jacksonville House Cleaning Service?</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We&apos;re committed to delivering exceptional cleaning services that exceed your expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-700 text-sm">
                  Fully licensed, bonded, and insured for your peace of mind
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-accent-aqua/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-accent-aqua" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly</h3>
                <p className="text-gray-700 text-sm">
                  Safe, non-toxic cleaning products for your family and pets
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced Team</h3>
                <p className="text-gray-700 text-sm">
                  Trained professionals with years of cleaning experience
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-accent-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-accent-coral" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-700 text-sm">
                  100% satisfaction guarantee on all our services
                </p>
              </div>
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
              Contact us today for a free quote and to schedule your cleaning service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Your Free Quote
              </a>
              <a
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors duration-200"
              >
                View Detailed Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
