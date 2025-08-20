import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, ShoppingBag, CheckCircle, Move } from 'lucide-react';
import Link from 'next/link';

export default function DowntownJacksonvilleMoveInMoveOutPage() {
  const moveCleaningFeatures = [
    'Complete property deep cleaning',
    'Appliance cleaning and sanitization',
    'Cabinet and drawer cleaning',
    'Floor and carpet deep cleaning',
    'Window and blind cleaning',
    'Bathroom deep sanitization',
    'Kitchen deep cleaning',
    'Final inspection and touch-ups'
  ];

  const downtownBenefits = [
    'Downtown moving expertise',
    'High-rise access coordination',
    'Security clearance management',
    'Flexible scheduling options',
    'Local building knowledge',
    'Traffic pattern understanding',
    'Emergency response capability',
    'Corporate standards compliance'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Downtown Assessment',
      description: 'Evaluate your Downtown Jacksonville property\'s move-in/move-out cleaning needs',
      icon: Building2
    },
    {
      step: 2,
      title: 'Moving Schedule Coordination',
      description: 'Coordinate with Downtown building management and moving companies',
      icon: Clock
    },
    {
      step: 3,
      title: 'Professional Move Cleaning',
      description: 'Execute comprehensive move-in/move-out cleaning with Downtown expertise',
      icon: Sparkles
    },
    {
      step: 4,
      title: 'Final Inspection',
      description: 'Ensure Downtown Jacksonville move cleaning standards are met',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-amber-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Move className="w-16 h-16 text-orange-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Move-In/Move-Out Cleaning in Downtown Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto">
            Professional move-in/move-out cleaning services designed specifically for Downtown Jacksonville properties. 
            From luxury condos to corporate offices, we ensure your Downtown property is spotless for the next tenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=move-in-move-out&location=downtown-jacksonville"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2"
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
                Downtown Jacksonville Move-In/Move-Out Cleaning
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Downtown Jacksonville's dynamic real estate market requires move-in/move-out cleaning services 
                  that understand the unique challenges of urban properties. From high-rise condos to historic 
                  townhomes, we provide comprehensive moving cleaning solutions.
                </p>
                <p>
                  Our Downtown Jacksonville move-in/move-out cleaning services are designed to handle the 
                  specific challenges of urban moving - building access coordination, security protocols, 
                  and the high standards expected in Downtown properties.
                </p>
                <p>
                  Whether you're moving into or out of a Downtown Jacksonville property, our local team 
                  ensures your property meets the highest cleaning standards for the next tenant or owner.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="space-y-4">
                {moveCleaningFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
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
              Downtown Jacksonville Move Cleaning Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local knowledge that makes a difference in Downtown Jacksonville's unique moving environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downtownBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
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
              Our Downtown Jacksonville Move Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to move-in/move-out cleaning in Downtown Jacksonville's unique environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-orange-600" />
                </div>
                <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downtown Move Cleaning Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Move Cleaning Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized move cleaning solutions for Downtown Jacksonville's unique property types
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="w-12 h-12 text-orange-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">High-Rise Move Coordination</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville's high-rise buildings require specialized move cleaning coordination. 
                We handle elevator access, security protocols, and building management coordination for seamless move cleaning.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Building access coordination</li>
                <li>• Security clearance management</li>
                <li>• Elevator scheduling</li>
                <li>• Building management liaison</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="w-12 h-12 text-orange-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Flexible Downtown Scheduling</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville's busy environment requires flexible move cleaning scheduling. 
                We work around your moving timeline and Downtown building requirements.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• After-hours availability</li>
                <li>• Weekend scheduling</li>
                <li>• Emergency move cleaning</li>
                <li>• Building requirement compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Downtown Jacksonville Move Cleaning?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get a free quote for your Downtown Jacksonville move-in/move-out cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=move-in-move-out&location=downtown-jacksonville"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>Get Your Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View Downtown Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




