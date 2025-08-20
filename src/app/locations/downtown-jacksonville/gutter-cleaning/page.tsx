import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, ShoppingBag, CheckCircle, Wind as WindIcon } from 'lucide-react';
import Link from 'next/link';

export default function DowntownJacksonvilleGutterCleaningPage() {
  const gutterFeatures = [
    'Complete gutter system cleaning',
    'Downspout clearing and testing',
    'Debris removal and disposal',
    'Gutter inspection and repair',
    'Roof edge cleaning',
    'Water flow testing',
    'Safety compliance protocols',
    'Quality assurance checks'
  ];

  const downtownBenefits = [
    'Downtown gutter expertise',
    'High-rise access capability',
    'Building safety compliance',
    'After-hours availability',
    'Local building knowledge',
    'Traffic pattern understanding',
    'Emergency response capability',
    'Corporate standards compliance'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Downtown Gutter Assessment',
      description: 'Evaluate your Downtown Jacksonville property\'s gutter system and access requirements',
      icon: Building2
    },
    {
      step: 2,
      title: 'Safety Planning',
      description: 'Develop Downtown-specific gutter cleaning protocols with safety compliance',
      icon: Shield
    },
    {
      step: 3,
      title: 'Professional Gutter Cleaning',
      description: 'Execute comprehensive gutter cleaning with Downtown Jacksonville expertise',
      icon: WindIcon
    },
    {
      step: 4,
      title: 'Downtown Quality Verification',
      description: 'Ensure all Downtown Jacksonville gutter cleaning standards are met',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <WindIcon className="w-16 h-16 text-amber-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Gutter Cleaning in Downtown Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-4xl mx-auto">
            Professional gutter cleaning services designed specifically for Downtown Jacksonville properties. 
            From high-rise buildings to luxury condos, we provide comprehensive gutter maintenance that protects Downtown's investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=gutter-cleaning&location=downtown-jacksonville"
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200 flex items-center justify-center space-x-2"
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
                Downtown Jacksonville Gutter Cleaning
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Downtown Jacksonville's urban environment requires gutter cleaning services that understand 
                  the unique challenges of high-rise buildings and urban maintenance. From roof access to 
                  safety compliance, we provide comprehensive gutter solutions.
                </p>
                <p>
                  Our Downtown Jacksonville gutter cleaning services are designed to handle the specific 
                  challenges of urban gutter maintenance - high-rise access, safety protocols, and the 
                  high standards expected in Downtown properties.
                </p>
                <p>
                  Whether you need seasonal gutter cleaning, emergency clearing, or regular maintenance, 
                  our local team ensures your Downtown Jacksonville property's drainage system functions perfectly.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="space-y-4">
                {gutterFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
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
              Downtown Jacksonville Gutter Cleaning Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local knowledge that makes a difference in Downtown Jacksonville's unique gutter cleaning environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downtownBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-amber-600" />
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
              Our Downtown Jacksonville Gutter Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to gutter cleaning in Downtown Jacksonville's unique environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-amber-600" />
                </div>
                <div className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downtown Gutter Cleaning Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Gutter Cleaning Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized gutter cleaning solutions for Downtown Jacksonville's unique building types
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="w-12 h-12 text-amber-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">High-Rise Gutter Maintenance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville's high-rise buildings require specialized gutter cleaning approaches. 
                We handle roof access, safety equipment, and multi-story gutter systems.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• High-altitude safety protocols</li>
                <li>• Roof access coordination</li>
                <li>• Multi-story gutter systems</li>
                <li>• Building safety compliance</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-12 h-12 text-amber-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Downtown Safety Standards</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville's urban environment requires the highest safety standards for gutter cleaning. 
                We maintain strict safety protocols and building compliance.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• OSHA compliance standards</li>
                <li>• Building safety protocols</li>
                <li>• Emergency response plans</li>
                <li>• Insurance and liability coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Downtown Jacksonville Gutter Cleaning?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get a free quote for your Downtown Jacksonville gutter cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=gutter-cleaning&location=downtown-jacksonville"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>Get Your Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View Downtown Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




