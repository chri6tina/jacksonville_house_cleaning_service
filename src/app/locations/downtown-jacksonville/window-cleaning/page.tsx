import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, ShoppingBag, CheckCircle, Eye } from 'lucide-react';
import Link from 'next/link';

export default function DowntownJacksonvilleWindowCleaningPage() {
  const windowCleaningFeatures = [
    'Interior and exterior cleaning',
    'High-rise window access',
    'Historic building care',
    'Safety compliance',
    'Streak-free results',
    'Hard-to-reach windows',
    'Frame and sill cleaning',
    'Final inspection and touch-ups'
  ];

  const downtownBenefits = [
    'Downtown high-rise expertise',
    'Historic building knowledge',
    'Safety protocol compliance',
    'After-hours availability',
    'Local building access',
    'Traffic pattern understanding',
    'Emergency response capability',
    'Corporate standards compliance'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Downtown Window Assessment',
      description: 'Evaluate your Downtown Jacksonville property\'s unique window cleaning needs and access challenges',
      icon: Building2
    },
    {
      step: 2,
      title: 'Safety and Access Planning',
      description: 'Coordinate Downtown building access and safety protocols for window cleaning',
      icon: Shield
    },
    {
      step: 3,
      title: 'Professional Window Cleaning',
      description: 'Execute comprehensive window cleaning with Downtown high-rise expertise',
      icon: Sparkles
    },
    {
      step: 4,
      title: 'Quality Verification',
      description: 'Ensure all Downtown Jacksonville window cleaning standards are met',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Wind className="w-16 h-16 text-sky-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Window Cleaning in Downtown Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 max-w-4xl mx-auto">
            Professional window cleaning services designed specifically for Downtown Jacksonville properties. 
            From high-rise office buildings to historic townhomes, we provide crystal-clear views throughout Downtown.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=window-cleaning&location=downtown-jacksonville"
              className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors duration-200 flex items-center justify-center space-x-2"
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
                Downtown Jacksonville Window Cleaning
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Downtown Jacksonville's diverse building types require window cleaning services that understand 
                  the unique challenges of urban environments. From modern high-rises to historic buildings, 
                  we provide comprehensive window cleaning solutions.
                </p>
                <p>
                  Our Downtown Jacksonville window cleaning services are designed to handle the specific 
                  challenges of urban window maintenance - high-rise access, safety protocols, and the 
                  high standards expected in Downtown properties.
                </p>
                <p>
                  Whether you need regular window maintenance, post-construction cleaning, or special event 
                  preparation, our local team ensures your Downtown Jacksonville windows are spotless.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="space-y-4">
                {windowCleaningFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0" />
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
              Downtown Jacksonville Window Cleaning Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local knowledge that makes a difference in Downtown Jacksonville's unique window cleaning environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downtownBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-sky-600" />
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
              Our Downtown Jacksonville Window Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to window cleaning in Downtown Jacksonville's unique environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-sky-600" />
                </div>
                <div className="bg-sky-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downtown Window Cleaning Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Window Cleaning Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized window cleaning solutions for Downtown Jacksonville's unique building types
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="w-12 h-12 text-sky-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">High-Rise Window Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville's high-rise buildings require specialized window cleaning approaches. 
                We handle high-altitude access, safety protocols, and building management coordination.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• High-altitude access equipment</li>
                <li>• Safety protocol compliance</li>
                <li>• Building management coordination</li>
                <li>• Multi-floor window cleaning</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Home className="w-12 h-12 text-sky-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Historic Building Care</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville's historic properties require careful window cleaning approaches. 
                We use gentle yet effective methods to preserve architectural integrity.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Historic material preservation</li>
                <li>• Gentle cleaning techniques</li>
                <li>• Architectural detail care</li>
                <li>• Heritage compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Downtown Jacksonville Window Cleaning?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Get a free quote for your Downtown Jacksonville window cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=window-cleaning&location=downtown-jacksonville"
              className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>Get Your Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-sky-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View Downtown Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
