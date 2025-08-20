import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, ShoppingBag, CheckCircle, Zap } from 'lucide-react';
import Link from 'next/link';

export default function DowntownJacksonvilleStandardCleaningPage() {
  const standardFeatures = [
    'Comprehensive surface cleaning',
    'Kitchen and bathroom sanitization',
    'Floor and carpet maintenance',
    'Dust and debris removal',
    'Trash removal and disposal',
    'Surface disinfection',
    'Air quality improvement',
    'Quality inspection and touch-ups'
  ];

  const downtownBenefits = [
    'Downtown standard expertise',
    'High-rise maintenance knowledge',
    'Building access coordination',
    'After-hours availability',
    'Local building knowledge',
    'Traffic pattern understanding',
    'Emergency response capability',
    'Corporate standards compliance'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Downtown Assessment',
      description: 'Evaluate your Downtown Jacksonville property\'s standard cleaning needs and requirements',
      icon: Building2
    },
    {
      step: 2,
      title: 'Standard Cleaning Plan',
      description: 'Develop a Downtown-specific standard cleaning strategy for your property',
      icon: Zap
    },
    {
      step: 3,
      title: 'Professional Execution',
      description: 'Implement thorough standard cleaning with Downtown-specific expertise',
      icon: Sparkles
    },
    {
      step: 4,
      title: 'Quality Verification',
      description: 'Ensure all Downtown Jacksonville standard cleaning standards are met',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Zap className="w-16 h-16 text-blue-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Standard Cleaning in Downtown Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Professional standard cleaning services designed specifically for Downtown Jacksonville properties. 
            From high-rise offices to luxury condos, we provide comprehensive standard cleaning that meets Downtown&apos;s high standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=standard-cleaning&location=downtown-jacksonville"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2"
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
                Downtown Jacksonville Standard Cleaning
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Downtown Jacksonville&apos;s dynamic business environment requires standard cleaning services 
                  that understand the unique challenges of urban maintenance. From high-rise offices to 
                  luxury condos, we provide consistent cleaning solutions.
                </p>
                <p>
                  Our Downtown Jacksonville standard cleaning services are designed to handle the specific 
                  challenges of urban maintenance - building access coordination, flexible scheduling, and 
                  the high standards expected in Downtown properties.
                </p>
                <p>
                  Whether you need daily, weekly, or monthly cleaning, our local team ensures your 
                  Downtown Jacksonville property maintains its professional appearance consistently.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h3>
              <div className="space-y-4">
                {standardFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
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
              Downtown Jacksonville Standard Cleaning Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local knowledge that makes a difference in Downtown Jacksonville&apos;s unique standard cleaning environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downtownBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
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
              Our Downtown Jacksonville Standard Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to standard cleaning in Downtown Jacksonville&apos;s unique environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-blue-600" />
                </div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downtown Standard Cleaning Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Standard Cleaning Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized standard cleaning solutions for Downtown Jacksonville&apos;s unique property types
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="w-12 h-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">High-Rise Standard Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s high-rise buildings require specialized standard cleaning approaches. 
                We handle elevator access, multi-floor coordination, and security protocols for thorough cleaning.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Multi-floor cleaning coordination</li>
                <li>• Security clearance management</li>
                <li>• High-altitude cleaning</li>
                <li>• Building system integration</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="w-12 h-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Flexible Downtown Scheduling</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s busy environment requires flexible standard cleaning scheduling. 
                We work around your business hours and Downtown building requirements.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• After-hours availability</li>
                <li>• Weekend scheduling options</li>
                <li>• Emergency response capability</li>
                <li>• Building requirement compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Downtown Jacksonville Standard Cleaning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free quote for your Downtown Jacksonville standard cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=standard-cleaning&location=downtown-jacksonville"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>Get Your Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View Downtown Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




