import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, ShoppingBag, CheckCircle, Zap } from 'lucide-react';
import Link from 'next/link';

export default function DowntownJacksonvilleDeepCleaningPage() {
  const deepCleaningFeatures = [
    'Comprehensive surface cleaning',
    'Deep sanitization and disinfection',
    'Hard-to-reach area cleaning',
    'All-surface treatment',
    'Odor elimination',
    'Stain removal and treatment',
    'Air quality improvement',
    'Protective coating application'
  ];

  const downtownBenefits = [
    'Urban environment expertise',
    'High-rise access capability',
    'Security clearance management',
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
      description: 'Evaluate your Downtown Jacksonville property\'s unique cleaning needs and challenges',
      icon: Building2
    },
    {
      step: 2,
      title: 'Deep Cleaning Plan',
      description: 'Develop a comprehensive cleaning strategy for your Downtown property',
      icon: Zap
    },
    {
      step: 3,
      title: 'Professional Execution',
      description: 'Implement thorough deep cleaning with Downtown-specific expertise',
      icon: Sparkles
    },
    {
      step: 4,
      title: 'Quality Verification',
      description: 'Ensure all Downtown Jacksonville deep cleaning standards are met',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-purple-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Deep Cleaning in Downtown Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
            Professional deep cleaning services designed specifically for Downtown Jacksonville properties. 
            From luxury condos to historic buildings, we provide comprehensive deep cleaning that meets Downtown&apos;s high standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=deep-cleaning&location=downtown-jacksonville"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 flex items-center justify-center space-x-2"
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
                Comprehensive Deep Cleaning for Downtown Jacksonville
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Downtown Jacksonville&apos;s diverse property types require deep cleaning services that understand 
                  the unique challenges of urban environments. From high-rise condos to historic townhomes, 
                  we provide thorough deep cleaning solutions.
                </p>
                <p>
                  Our Downtown Jacksonville deep cleaning services are designed to handle the specific 
                  challenges of urban living - traffic pollution, building maintenance, and the wear and tear 
                  of high-density environments.
                </p>
                <p>
                  Whether you need seasonal deep cleaning, post-renovation cleaning, or regular maintenance 
                  deep cleaning, our local team is equipped to handle all your Downtown Jacksonville deep cleaning needs.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h3>
              <div className="space-y-4">
                {deepCleaningFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
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
              Downtown Jacksonville Deep Cleaning Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local knowledge that makes a difference in Downtown Jacksonville&apos;s unique urban environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downtownBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
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
              Our Downtown Jacksonville Deep Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to deep cleaning in Downtown Jacksonville&apos;s unique environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-purple-600" />
                </div>
                <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downtown Deep Cleaning Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Deep Cleaning Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized deep cleaning solutions for Downtown Jacksonville&apos;s unique property types
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="w-12 h-12 text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">High-Rise Deep Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s high-rise buildings require specialized deep cleaning approaches. 
                We handle elevator access, multi-floor coordination, and security protocols for thorough deep cleaning.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Multi-floor deep cleaning coordination</li>
                <li>• Security clearance management</li>
                <li>• High-altitude deep cleaning</li>
                <li>• Building system integration</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Home className="w-12 h-12 text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Historic Property Care</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s historic properties require careful deep cleaning approaches. 
                We use gentle yet effective methods to preserve architectural integrity while achieving deep cleanliness.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Historic material preservation</li>
                <li>• Gentle deep cleaning techniques</li>
                <li>• Architectural detail cleaning</li>
                <li>• Heritage compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Downtown Jacksonville Deep Cleaning?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get a free quote for your Downtown Jacksonville deep cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=deep-cleaning&location=downtown-jacksonville"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>Get Your Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View Downtown Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}





