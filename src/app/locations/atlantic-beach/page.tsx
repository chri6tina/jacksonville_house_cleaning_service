import Link from 'next/link';
import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Waves, Umbrella, Anchor } from 'lucide-react';

export default function AtlanticBeachPage() {
  const atlanticBeachServices = [
    {
      id: 'standard-cleaning',
      title: 'Standard Cleaning',
      description: 'Regular maintenance cleaning designed for Atlantic Beach homes and coastal challenges',
      icon: Home,
      features: ['Salt air damage prevention', 'Beach sand removal', 'Humidity control', 'Regular maintenance', 'Coastal property care']
    },
    {
      id: 'deep-cleaning',
      title: 'Deep Cleaning',
      description: 'Comprehensive cleaning service for thorough Atlantic Beach home refreshment',
      icon: Sparkles,
      features: ['Salt residue removal', 'Beach sand deep cleaning', 'Humidity damage repair', 'Coastal surface restoration', 'Beach home preservation']
    },
    {
      id: 'move-in-move-out',
      title: 'Move In/Out Cleaning',
      description: 'Complete cleaning service for smooth transitions in Atlantic Beach',
      icon: Car,
      features: ['Pre-move coastal cleaning', 'Post-move restoration', 'Beach property preparation', 'Salt damage assessment', 'Final coastal inspection']
    },
    {
      id: 'recurring-cleaning',
      title: 'Recurring Cleaning',
      description: 'Consistent cleaning schedule to maintain your Atlantic Beach home',
      icon: Calendar,
      features: ['Weekly, bi-weekly, or monthly options', 'Seasonal coastal adjustments', 'Beach weather considerations', 'Flexible scheduling', 'Priority booking']
    },
    {
      id: 'vacation-rental-cleaning',
      title: 'Vacation Rental Turnover',
      description: 'Professional cleaning for Atlantic Beach vacation rental properties',
      icon: Building2,
      features: ['Quick beach property turnaround', 'Guest-ready coastal standards', 'Beach equipment cleaning', 'Outdoor area maintenance', 'Coastal charm preservation']
    },
    {
      id: 'post-construction-cleaning',
      title: 'Post-Construction Cleaning',
      description: 'Comprehensive cleanup after construction or renovation projects',
      icon: Target,
      features: ['Construction debris removal', 'Beach sand cleanup', 'Salt air particle removal', 'Coastal surface restoration', 'Quality inspection']
    },
    {
      id: 'carpet-cleaning',
      title: 'Carpet Cleaning',
      description: 'Professional carpet cleaning with coastal environment considerations',
      icon: Droplets,
      features: ['Salt air damage prevention', 'Beach sand removal', 'Humidity control', 'Coastal carpet protection', 'Fast drying technology']
    },
    {
      id: 'window-cleaning',
      title: 'Window Cleaning',
      description: 'Crystal clear windows for your Atlantic Beach home',
      icon: Building2,
      features: ['Salt spray removal', 'Beach view optimization', 'Coastal window protection', 'Streak-free results', 'Safety equipment used']
    },
    {
      id: 'pressure-washing',
      title: 'Pressure Washing',
      description: 'Exterior surface cleaning for Atlantic Beach coastal properties',
      icon: Zap,
      features: ['Salt residue removal', 'Beach sand cleanup', 'Coastal surface restoration', 'Safe pressure settings', 'Eco-friendly solutions']
    },
    {
      id: 'gutter-cleaning',
      title: 'Gutter Cleaning',
      description: 'Maintain proper drainage with Atlantic Beach coastal considerations',
      icon: Droplets,
      features: ['Beach debris removal', 'Salt air corrosion prevention', 'Coastal drainage maintenance', 'Preventive maintenance', 'Safety protocols']
    },
    {
      id: 'air-duct-cleaning',
      title: 'Air Duct Cleaning',
      description: 'Improve indoor air quality with coastal environment focus',
      icon: Gauge,
      features: ['Salt air particle removal', 'Beach sand cleanup', 'Coastal air quality improvement', 'Humidity control', 'Energy efficiency improvement']
    },
    {
      id: 'apartment-cleaning',
      title: 'Apartment Cleaning',
      description: 'Specialized cleaning for Atlantic Beach apartment residents',
      icon: Building2,
      features: ['Compact coastal space optimization', 'Beach environment cleaning', 'Flexible scheduling', 'Move-in/out services', 'Regular maintenance']
    },
    {
      id: 'commercial-office-cleaning',
      title: 'Commercial Office Cleaning',
      description: 'Professional cleaning for Atlantic Beach businesses and offices',
      icon: Building2,
      features: ['Daily coastal maintenance', 'Salt air protection protocols', 'Beach business support', 'Restroom maintenance', 'Flexible scheduling']
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
      description: 'Pre and post-event cleaning for Atlantic Beach venues',
      icon: Users,
      features: ['Beach venue preparation', 'Post-event coastal cleanup', 'Outdoor area maintenance', 'Quick turnaround', 'Coastal venue expertise']
    },
    {
      id: 'senior-citizen-cleaning',
      title: 'Senior Citizen Cleaning',
      description: 'Compassionate cleaning services for seniors in Atlantic Beach',
      icon: Users,
      features: ['Gentle coastal cleaning methods', 'Beach accessibility considerations', 'Regular maintenance', 'Companionship during service', 'Flexible scheduling']
    },
    {
      id: 'pet-friendly-cleaning',
      title: 'Pet-Friendly Cleaning',
      description: 'Safe cleaning solutions for homes with pets in Atlantic Beach',
      icon: Leaf,
      features: ['Pet-safe coastal cleaning products', 'Beach pet odor elimination', 'Sand and salt removal', 'Stain treatment', 'Non-toxic solutions']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-20">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Professional Cleaning Services in Atlantic Beach
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 mb-8 max-w-4xl mx-auto">
            Trusted cleaning solutions for homes and businesses in Atlantic Beach, Jacksonville. 
            Serving ZIP code 32233 with coastal expertise and local knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact?location=atlantic-beach"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
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

      {/* Atlantic Beach Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Atlantic Beach: A Historic Coastal Community with Unique Cleaning Challenges
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Atlantic Beach, located along the Atlantic coast just east of Jacksonville, is a charming 
                  beach community known for its historic homes, local businesses, and vibrant coastal culture. 
                  With a population of over 13,000 residents, Atlantic Beach offers a unique blend of 
                  beachfront living and small-town charm.
                </p>
                <p>
                  The area&apos;s coastal environment creates unique cleaning challenges that require specialized 
                  expertise. From salt air damage and beach sand infiltration to humidity control and 
                  coastal property preservation, Atlantic Beach properties need cleaning services that 
                  understand the coastal environment.
                </p>
                <p>
                  Our local team has deep roots in Atlantic Beach, with strong partnerships with local 
                  businesses, restaurants, and community organizations. We understand the area&apos;s historic 
                  significance and coastal character, providing cleaning services that preserve Atlantic 
                  Beach's unique charm while maintaining modern cleanliness standards.
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
                    <h3 className="font-semibold text-gray-900">ZIP Code</h3>
                    <p className="text-gray-600">32233</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Population</h3>
                    <p className="text-gray-600">13,000+ residents</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Property Types</h3>
                    <p className="text-gray-600">Historic beach homes, local businesses, restaurants</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Waves className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Coastal Features</h3>
                    <p className="text-gray-600">Atlantic Ocean, salt air, beach environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us for Atlantic Beach Cleaning?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Coastal expertise that understands Atlantic Beach&apos;s unique cleaning challenges and community needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coastal Environment Expertise</h3>
              <p className="text-gray-600">
                We understand Atlantic Beach&apos;s coastal challenges, from salt air damage and beach sand 
                infiltration to humidity control and coastal property preservation.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Umbrella className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Historic Property Care</h3>
              <p className="text-gray-600">
                With Atlantic Beach&apos;s historic homes and buildings, we provide cleaning methods that 
                preserve architectural integrity while maintaining modern cleanliness standards.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Business Partnership</h3>
              <p className="text-gray-600">
                We&apos;re proud partners with Atlantic Beach restaurants, shops, and community organizations, 
                demonstrating our commitment to the area's growth and prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Challenges & Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Atlantic Beach-Specific Cleaning Challenges & Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding and addressing the unique cleaning needs of Atlantic Beach coastal properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Salt Air & Coastal Environment</h3>
              <p className="text-blue-800 mb-4">
                Atlantic Beach&apos;s coastal location means constant exposure to salt air, humidity, and 
                beach sand, creating unique cleaning challenges that require specialized expertise.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Salt air damage prevention and repair</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Beach sand removal and prevention</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Humidity control and moisture management</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Historic Property Preservation</h3>
              <p className="text-green-800 mb-4">
                With Atlantic Beach&apos;s historic homes and buildings, we provide cleaning methods that 
                preserve architectural integrity while maintaining modern cleanliness standards.
              </p>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Historic surface preservation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Gentle cleaning methods</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Architectural detail protection</span>
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
              Comprehensive Cleaning Services in Atlantic Beach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional cleaning solutions designed specifically for Atlantic Beach coastal properties and community needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {atlanticBeachServices.map((service, index) => {
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
                        href={`/contact?service=${service.id}&location=atlantic-beach`}
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to Experience Professional Cleaning in Atlantic Beach?
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied Atlantic Beach residents and businesses who trust us with their cleaning needs. 
            Get your free quote today and discover why we&apos;re the preferred cleaning service in Atlantic Beach!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?location=atlantic-beach"
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

