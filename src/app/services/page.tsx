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
  PartyPopper
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
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
      color: 'blue'
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
      color: 'purple'
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
        'Clean windows and mirrors',
        'Remove any remaining odors'
      ],
      benefits: [
        'Meets real estate standards',
        'Ensures healthy living environment',
        'Removes previous occupant traces',
        'Professional presentation for buyers'
      ],
      pricing: 'Starting at $250 per visit',
      duration: '4-8 hours',
      frequency: 'One-time service',
      popular: false,
      color: 'green'
    },
    {
      id: 'office',
      title: 'Office Cleaning',
      icon: Building2,
      description: 'Professional cleaning services for commercial spaces and workplaces.',
      shortDescription: 'Commercial cleaning for professional business environments',
      features: [
        'Daily, weekly, or monthly schedules',
        'After-hours cleaning available',
        'High-traffic area focus',
        'Professional appearance maintenance',
        'Customized cleaning plans',
        'Sanitize workstations and common areas',
        'Clean break rooms and kitchens',
        'Maintain lobby and reception areas'
      ],
      benefits: [
        'Professional business appearance',
        'Improved employee productivity',
        'Reduced sick days',
        'Flexible scheduling options'
      ],
      pricing: 'Starting at $150 per visit',
      duration: '2-4 hours',
      frequency: 'Daily to monthly',
      popular: false,
      color: 'orange'
    },
    {
      id: 'air-duct',
      title: 'Air Duct & Vent Cleaning',
      icon: Fan,
      description: 'Professional air duct and vent cleaning to improve indoor air quality and system efficiency.',
      shortDescription: 'Improve air quality and HVAC efficiency with professional duct cleaning',
      features: [
        'Complete duct system inspection',
        'Remove dust, debris, and allergens',
        'Clean supply and return vents',
        'Sanitize duct surfaces',
        'Clean air handler components',
        'Remove mold and bacteria',
        'Improve airflow efficiency',
        'Reduce energy costs'
      ],
      benefits: [
        'Better indoor air quality',
        'Reduced allergy symptoms',
        'Improved HVAC efficiency',
        'Lower energy bills'
      ],
      pricing: 'Starting at $150 per system',
      duration: '2-4 hours',
      frequency: 'Every 3-5 years',
      popular: false,
      color: 'indigo'
    },
    {
      id: 'pressure-washing',
      title: 'Pressure Washing Services',
      icon: Droplets,
      description: 'Professional exterior cleaning for driveways, sidewalks, patios, and building exteriors.',
      shortDescription: 'Restore your property\'s curb appeal with professional pressure washing',
      features: [
        'Driveway and sidewalk cleaning',
        'Patio and deck restoration',
        'Building exterior cleaning',
        'Fence and gate cleaning',
        'Roof and gutter cleaning',
        'Remove oil stains and grime',
        'Safe pressure settings',
        'Eco-friendly cleaning solutions'
      ],
      benefits: [
        'Improved curb appeal',
        'Increased property value',
        'Prevents surface damage',
        'Professional appearance'
      ],
      pricing: 'Starting at $100 per area',
      duration: '1-3 hours',
      frequency: 'Seasonal or as needed',
      popular: false,
      color: 'emerald'
    },
    {
      id: 'gutter-cleaning',
      title: 'Gutter Cleaning',
      icon: Gauge,
      description: 'Professional gutter cleaning and maintenance to prevent water damage and maintain home integrity.',
      shortDescription: 'Protect your home from water damage with professional gutter cleaning',
      features: [
        'Remove leaves and debris',
        'Clean downspouts',
        'Inspect for damage',
        'Test water flow',
        'Remove blockages',
        'Clean gutter guards',
        'Safety equipment used',
        'Detailed inspection report'
      ],
      benefits: [
        'Prevents water damage',
        'Maintains home integrity',
        'Extends gutter life',
        'Protects foundation'
      ],
      pricing: 'Starting at $80 per home',
      duration: '1-2 hours',
      frequency: 'Twice yearly (spring/fall)',
      popular: false,
      color: 'amber'
    },
    {
      id: 'carpet',
      title: 'Carpet & Upholstery Cleaning',
      icon: Car,
      description: 'Specialized cleaning for fabrics, carpets, and upholstered furniture.',
      shortDescription: 'Professional fabric and carpet restoration services',
      features: [
        'Deep stain removal',
        'Odor elimination',
        'Fabric protection treatment',
        'Hot water extraction method',
        'Eco-friendly cleaning solutions',
        'Professional equipment and techniques',
        'Quick drying process',
        'Stain-resistant treatment options'
      ],
      benefits: [
        'Extends carpet and furniture life',
        'Improves indoor air quality',
        'Removes allergens and bacteria',
        'Restores original appearance'
      ],
      pricing: 'Starting at $80 per room',
      duration: '1-3 hours',
      frequency: 'As needed or seasonal',
      popular: false,
      color: 'teal'
    },
    {
      id: 'windows',
      title: 'Window Cleaning',
      icon: Wind,
      description: 'Professional window cleaning for crystal clear views and natural light.',
      shortDescription: 'Streak-free window cleaning for better views and light',
      features: [
        'Interior and exterior cleaning',
        'Screen cleaning included',
        'Streak-free results',
        'Safe for all window types',
        'Clean window sills and frames',
        'Remove hard water stains',
        'Professional tools and techniques',
        'Eco-friendly cleaning solutions'
      ],
      benefits: [
        'Improved natural light',
        'Better views and aesthetics',
        'Extends window life',
        'Professional appearance'
      ],
      pricing: 'Starting at $60 per window',
      duration: '1-2 hours',
      frequency: 'Seasonal or as needed',
      popular: false,
      color: 'cyan'
    },
    {
      id: 'post-construction',
      title: 'Post-Construction Cleaning',
      icon: Hammer,
      description: 'Comprehensive cleaning after construction or renovation projects.',
      shortDescription: 'Complete cleanup after construction and renovation work',
      features: [
        'Construction debris removal',
        'Fine dust elimination',
        'Detailed surface cleaning',
        'Final touch-up cleaning',
        'Clean all surfaces and fixtures',
        'Remove construction materials',
        'Sanitize all areas',
        'Move-in ready results'
      ],
      benefits: [
        'Safe living environment',
        'Removes construction dust',
        'Professional finish',
        'Ready for immediate occupancy'
      ],
      pricing: 'Starting at $600 per project',
      duration: '4-12 hours',
      frequency: 'One-time service',
      popular: false,
      color: 'rose'
    },
    {
      id: 'pet-friendly',
      title: 'Pet-Friendly Deep Cleaning',
      icon: PawPrint,
      description: 'Specialized cleaning service designed specifically for homes with pets.',
      shortDescription: 'Eliminate pet odors and allergens with safe, pet-friendly cleaning',
      features: [
        'Pet odor neutralization',
        'Allergen reduction',
        'Pet-safe cleaning products',
        'Deep carpet cleaning',
        'Air purification',
        'Furniture treatment',
        'HEPA filtration',
        'Enzyme treatments'
      ],
      benefits: [
        'Eliminates pet odors',
        'Reduces allergens',
        'Safe for pets',
        'Improves air quality'
      ],
      pricing: 'Starting at $180 per visit',
      duration: '2-6 hours',
      frequency: 'Every 3-6 months',
      popular: false,
      color: 'purple'
    },
    {
      id: 'senior-citizen',
      title: 'Senior Citizen Cleaning',
      icon: Heart,
      description: 'Gentle, accessible cleaning services designed specifically for seniors.',
      shortDescription: 'Compassionate cleaning with accessibility focus for senior households',
      features: [
        'Gentle cleaning products',
        'Accessibility assessment',
        'Companionship during cleaning',
        'Flexible scheduling',
        'Health-conscious cleaning',
        'Safety protocols',
        'Mobility-friendly methods',
        'Regular maintenance'
      ],
      benefits: [
        'Gentle on health conditions',
        'Accessibility focused',
        'Companionship included',
        'Flexible scheduling'
      ],
      pricing: 'Starting at $100 per visit',
      duration: '2-5 hours',
      frequency: 'Weekly to monthly',
      popular: false,
      color: 'pink'
    },
    {
      id: 'vacation-rental',
      title: 'Vacation Rental Turnover Cleaning',
      icon: Calendar,
      description: 'Professional turnover cleaning services for vacation rentals and short-term accommodations.',
      shortDescription: 'Hospitality-grade cleaning for vacation rental turnovers',
      features: [
        'Pre-event preparation',
        'Post-event cleanup',
        'Hospitality standards',
        'Quick turnaround',
        'Quality assurance',
        'Flexible scheduling',
        'Emergency services',
        'Detailed checklists'
      ],
      benefits: [
        'Meets hospitality standards',
        'Quick turnaround times',
        'Professional quality',
        'Flexible scheduling'
      ],
      pricing: 'Starting at $120 per turnover',
      duration: '1-5 hours',
      frequency: 'Per guest turnover',
      popular: false,
      color: 'blue'
    },
    {
      id: 'commercial-office',
      title: 'Commercial Office Cleaning',
      icon: Building2,
      description: 'Professional office cleaning services for commercial environments and workplaces.',
      shortDescription: 'Maintain professional appearance with commercial-grade cleaning',
      features: [
        'Daily to monthly schedules',
        'After-hours cleaning',
        'Commercial-grade equipment',
        'Minimal disruption',
        'Quality assurance',
        'Detailed reporting',
        'Flexible scheduling',
        'Specialized areas'
      ],
      benefits: [
        'Professional appearance',
        'Improved productivity',
        'Regulatory compliance',
        'Flexible scheduling'
      ],
      pricing: 'Starting at $200 per visit',
      duration: '2-8 hours',
      frequency: 'Daily to monthly',
      popular: false,
      color: 'slate'
    },
    {
      id: 'event-venue',
      title: 'Event Venue Cleaning',
      icon: PartyPopper,
      description: 'Professional venue cleaning services for events, weddings, and special occasions.',
      shortDescription: 'Ensure your venue always makes the perfect first impression',
      features: [
        'Pre-event preparation',
        'Post-event cleanup',
        'Emergency cleaning',
        'Venue maintenance',
        'Hospitality standards',
        'Quick turnaround',
        'Flexible scheduling',
        'Quality assurance'
      ],
      benefits: [
        'Perfect first impressions',
        'High standards maintained',
        'Flexible scheduling',
        'Professional quality'
      ],
      pricing: 'Starting at $300 per service',
      duration: '2-8 hours',
      frequency: 'Per event or scheduled',
      popular: false,
      color: 'violet'
    },
    {
      id: 'medical-facility',
      title: 'Medical Facility Cleaning',
      icon: Shield,
      description: 'Specialized cleaning services for healthcare facilities and medical environments.',
      shortDescription: 'Meet healthcare standards with medical-grade cleaning and compliance',
      features: [
        'Medical-grade disinfectants',
        'Regulatory compliance',
        'Infection control protocols',
        'Specialized areas',
        '24/7 emergency service',
        'Detailed documentation',
        'Safety protocols',
        'Quality assurance'
      ],
      benefits: [
        'Regulatory compliance',
        'Patient safety',
        'Infection control',
        'Professional standards'
      ],
      pricing: 'Starting at $400 per service',
      duration: '2-12 hours',
      frequency: 'Daily to monthly',
      popular: false,
      color: 'red'
    }
  ];

  const quickActions = [
    {
      title: 'Get Free Quote',
      description: 'Get a personalized quote for your cleaning needs',
      icon: Calculator,
      href: '/contact',
      color: 'coral'
    },
    {
      title: 'Book Service',
      description: 'Schedule your cleaning service online',
      icon: Calendar,
      href: '/contact',
      color: 'blue'
    },
    {
      title: 'Service Areas',
      description: 'Check if we serve your neighborhood',
      icon: MapPin,
      href: '/information',
      color: 'green'
    },
    {
      title: 'Call Us',
      description: 'Speak with our cleaning experts',
      icon: Phone,
      href: 'tel:+19045551234',
      color: 'aqua'
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
              Family-Owned Jacksonville Business Since 2015
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              <span className="block">Professional Cleaning</span>
              <span className="block text-cyan-400">Services</span>
              <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-white/90 mt-3">
                for Jacksonville Homes & Businesses
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed">
              We&apos;re your neighbors in Jacksonville, providing reliable, eco-friendly cleaning services 
              that keep our community's homes and offices spotless. No corporate chains, just local 
              professionals who care about your space like it's our own.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:9044563851"
                className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call (904) 456-3851
              </a>
              <a
                href="/contact"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Local Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Users className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">500+ Local Families</h3>
                <p className="text-white/80 text-xs leading-relaxed">Trust us with their homes</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Shield className="w-6 h-6 text-primary-blue" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">Licensed & Insured</h3>
                <p className="text-white/80 text-xs leading-relaxed">Florida business license</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-accent-coral/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Star className="w-6 h-6 text-accent-coral" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">5-Star Local Reviews</h3>
                <p className="text-white/80 text-xs leading-relaxed">Jacksonville neighbors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Jacksonville Cleaning Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From regular maintenance to specialized deep cleaning, we offer comprehensive solutions 
              tailored to Jacksonville&apos;s unique climate and your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-${service.color}/20 group cursor-pointer`}
              >
                {service.popular && (
                  <div className="bg-accent-coral text-white text-sm font-semibold py-2 px-4 rounded-t-2xl text-center">
                    ⭐ Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-${service.color}/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <service.icon className={`w-8 h-8 text-${service.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.shortDescription}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="text-sm font-medium text-gray-900">{service.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Frequency:</span>
                      <span className="text-sm font-medium text-gray-900">{service.frequency}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Starting Price:</span>
                      <span className="text-sm font-medium text-accent-coral">{service.pricing}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                    <Link
                      href={`/${service.id === 'recurring' ? 'recurring-cleaning' : 
                              service.id === 'deep-cleaning' ? 'extreme-deep-cleaning' :
                              service.id === 'move-in-out' ? 'move-in-move-out' :
                              service.id === 'office' ? 'office-cleaning' :
                              service.id === 'carpet' ? 'carpet-cleaning' :
                              service.id === 'windows' ? 'window-cleaning' :
                              service.id === 'post-construction' ? 'post-construction-cleaning' :
                              service.id === 'air-duct' ? 'air-duct-cleaning' :
                              service.id === 'pressure-washing' ? 'pressure-washing' :
                              service.id === 'gutter-cleaning' ? 'gutter-cleaning' :
                              service.id === 'pet-friendly' ? 'pet-friendly-cleaning' :
                              service.id === 'senior-citizen' ? 'senior-citizen-cleaning' :
                              service.id === 'vacation-rental' ? 'vacation-rental-cleaning' :
                              service.id === 'commercial-office' ? 'commercial-office-cleaning' :
                              service.id === 'event-venue' ? 'event-venue-cleaning' :
                              service.id === 'medical-facility' ? 'medical-facility-cleaning' : 'contact'}`}
                      className={`w-full bg-${service.color} text-white py-3 px-4 rounded-lg font-semibold hover:bg-${service.color}/90 transition-colors duration-200 flex items-center justify-center space-x-2 group-hover:scale-105`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                    <a
                      href={`/contact?service=${service.id}`}
                      className={`w-full border border-${service.color} text-${service.color} py-2 px-4 rounded-lg font-medium hover:bg-${service.color} hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2`}
                    >
                      <span>Get Quote</span>
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Comparison</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Compare our services to find the perfect match for your cleaning needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-blue text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Service</th>
                    <th className="px-6 py-4 text-center font-semibold">Duration</th>
                    <th className="px-6 py-4 text-center font-semibold">Frequency</th>
                    <th className="px-6 py-4 text-center font-semibold">Starting Price</th>
                    <th className="px-6 py-4 text-center font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={service.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 bg-${service.color}/20 rounded-full flex items-center justify-center`}>
                            <service.icon className={`w-4 h-4 text-${service.color}`} />
                          </div>
                          <Link
                            href={`/${service.id === 'recurring' ? 'recurring-cleaning' : 
                                    service.id === 'deep-cleaning' ? 'extreme-deep-cleaning' :
                                    service.id === 'move-in-out' ? 'move-in-move-out' :
                                    service.id === 'office' ? 'office-cleaning' :
                                    service.id === 'carpet' ? 'carpet-cleaning' :
                                    service.id === 'windows' ? 'window-cleaning' :
                                    service.id === 'post-construction' ? 'post-construction-cleaning' :
                                    service.id === 'air-duct' ? 'air-duct-cleaning' :
                                    service.id === 'pressure-washing' ? 'pressure-washing' :
                                    service.id === 'gutter-cleaning' ? 'gutter-cleaning' :
                                    service.id === 'pet-friendly' ? 'pet-friendly-cleaning' :
                                    service.id === 'senior-citizen' ? 'senior-citizen-cleaning' :
                                    service.id === 'vacation-rental' ? 'vacation-rental-cleaning' :
                                    service.id === 'commercial-office' ? 'commercial-office-cleaning' :
                                    service.id === 'event-venue' ? 'event-venue-cleaning' :
                                    service.id === 'medical-facility' ? 'medical-facility-cleaning' : 'contact'}`}
                            className="font-medium text-gray-900 hover:text-primary-blue transition-colors duration-200"
                          >
                            {service.title}
                          </Link>
                          {service.popular && (
                            <span className="bg-accent-coral text-white text-xs px-2 py-1 rounded-full">Popular</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">{service.duration}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{service.frequency}</td>
                      <td className="px-6 py-4 text-center font-medium text-accent-coral">{service.pricing}</td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        {service.id === 'recurring' && 'Regular maintenance'}
                        {service.id === 'deep-cleaning' && 'Seasonal refresh'}
                        {service.id === 'move-in-out' && 'Real estate'}
                        {service.id === 'office' && 'Commercial spaces'}
                        {service.id === 'carpet' && 'Fabric restoration'}
                        {service.id === 'windows' && 'Better views'}
                        {service.id === 'post-construction' && 'After renovation'}
                        {service.id === 'air-duct' && 'HVAC systems'}
                        {service.id === 'pressure-washing' && 'Exterior surfaces'}
                        {service.id === 'gutter-cleaning' && 'Gutters and downspouts'}
                        {service.id === 'pet-friendly' && 'Pet households'}
                        {service.id === 'senior-citizen' && 'Senior homes'}
                        {service.id === 'vacation-rental' && 'Vacation rentals'}
                        {service.id === 'commercial-office' && 'Office buildings'}
                        {service.id === 'event-venue' && 'Event spaces'}
                        {service.id === 'medical-facility' && 'Healthcare facilities'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Jacksonville House Cleaning Service?</h2>
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
  );
}
