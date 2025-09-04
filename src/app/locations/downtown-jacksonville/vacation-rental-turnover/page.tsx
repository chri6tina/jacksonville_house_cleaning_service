import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, ShoppingBag, CheckCircle, PartyPopper as PartyPopperIcon } from 'lucide-react';
import Link from 'next/link';

export default function DowntownJacksonvilleVacationRentalTurnoverPage() {
  const turnoverFeatures = [
    'Complete property deep cleaning',
    'Linen and bedding refresh',
    'Kitchen deep sanitization',
    'Bathroom deep cleaning',
    'Floor and surface treatment',
    'Downtown-specific protocols',
    'Quality inspection and touch-ups',
    'Guest-ready verification'
  ];

  const downtownBenefits = [
    'Downtown turnover expertise',
    'High-rise property knowledge',
    'Building access coordination',
    'Flexible scheduling options',
    'Local rental market understanding',
    'Downtown access coordination',
    'Emergency response capability',
    'Corporate standards compliance'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Downtown Property Assessment',
      description: 'Evaluate your Downtown Jacksonville vacation rental\'s unique turnover cleaning needs',
      icon: Building2
    },
    {
      step: 2,
      title: 'Downtown-Specific Planning',
      description: 'Develop urban turnover cleaning protocols for Downtown Jacksonville vacation rentals',
      icon: Shield
    },
    {
      step: 3,
      title: 'Professional Turnover Cleaning',
      description: 'Execute comprehensive turnover cleaning with Downtown Jacksonville expertise',
      icon: PartyPopperIcon
    },
    {
      step: 4,
      title: 'Downtown Quality Verification',
      description: 'Ensure all Downtown Jacksonville vacation rental standards are met',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <PartyPopperIcon className="w-16 h-16 text-cyan-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Vacation Rental Turnover Cleaning in Downtown Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto">
            Professional vacation rental turnover cleaning services designed specifically for Downtown Jacksonville properties. 
            From high-rise condos to luxury apartments, we ensure your Downtown rental is spotless for every guest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=vacation-rental-turnover&location=downtown-jacksonville"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Downtown Jacksonville</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Downtown Jacksonville Vacation Rental Turnover
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Downtown Jacksonville&apos;s urban environment requires vacation rental turnover cleaning services 
                  that understand the unique challenges of high-rise properties and urban maintenance. From 
                  guest coordination to building access, we provide comprehensive turnover solutions.
                </p>
                <p>
                  Our Downtown Jacksonville vacation rental turnover cleaning services are designed to handle the 
                  specific challenges of urban rental maintenance - building access coordination, flexible scheduling, 
                  and the high standards expected in Downtown vacation properties.
                </p>
                <p>
                  Whether you need same-day turnover, weekly maintenance, or seasonal deep cleaning, our 
                  local team ensures your Downtown Jacksonville vacation rental maintains its luxury standards.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h3>
              <div className="space-y-4">
                {turnoverFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downtown-Specific Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Vacation Rental Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local knowledge that makes a difference in Downtown Jacksonville&apos;s unique vacation rental environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downtownBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Downtown Jacksonville Turnover Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to vacation rental turnover in Downtown Jacksonville&apos;s unique urban environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-cyan-600" />
                </div>
                <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downtown Turnover Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Turnover Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized turnover cleaning solutions for Downtown Jacksonville&apos;s unique vacation rental properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="w-12 h-12 text-cyan-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">High-Rise Turnover Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s high-rise vacation rentals require specialized turnover approaches. 
                We handle building access, elevator coordination, and urban property maintenance.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Building access coordination</li>
                <li>• Elevator scheduling</li>
                <li>• Urban property maintenance</li>
                <li>• Building management liaison</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="w-12 h-12 text-cyan-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Flexible Downtown Scheduling</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s busy environment requires flexible turnover cleaning scheduling. 
                We work around guest check-ins and Downtown building requirements.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Guest arrival coordination</li>
                <li>• Building requirement compliance</li>
                <li>• Emergency response availability</li>
                <li>• Same-day turnover capability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Downtown Jacksonville Turnover Cleaning?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Get a free quote for your Downtown Jacksonville vacation rental turnover cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=vacation-rental-turnover&location=downtown-jacksonville"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>Get Your Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View Downtown Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}









