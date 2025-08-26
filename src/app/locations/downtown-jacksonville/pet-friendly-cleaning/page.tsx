import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, ShoppingBag, CheckCircle, PawPrint as PawPrintIcon } from 'lucide-react';
import Link from 'next/link';

export default function DowntownJacksonvillePetFriendlyCleaningPage() {
  const petCleaningFeatures = [
    'Pet-safe cleaning products',
    'Odor elimination treatment',
    'Pet hair removal',
    'Stain treatment and removal',
    'Air purification',
    'Pet area deep cleaning',
    'Safe surface treatment',
    'Post-cleaning pet safety'
  ];

  const downtownBenefits = [
    'Downtown pet expertise',
    'High-rise pet knowledge',
    'Building access coordination',
    'Flexible scheduling options',
    'Local pet regulations',
    'Downtown area familiarity',
    'Emergency response capability',
    'Corporate standards compliance'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Downtown Pet Assessment',
      description: 'Evaluate your Downtown Jacksonville property\'s unique pet cleaning needs',
      icon: Building2
    },
    {
      step: 2,
      title: 'Pet-Safe Planning',
      description: 'Develop Downtown-specific pet-friendly cleaning protocols',
      icon: PawPrintIcon
    },
    {
      step: 3,
      title: 'Professional Pet Cleaning',
      description: 'Execute comprehensive pet-friendly cleaning with Downtown Jacksonville expertise',
      icon: Sparkles
    },
    {
      step: 4,
      title: 'Downtown Quality Verification',
      description: 'Ensure all Downtown Jacksonville pet cleaning standards are met',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <PawPrintIcon className="w-16 h-16 text-purple-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pet-Friendly Cleaning in Downtown Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
            Professional pet-friendly cleaning services designed specifically for Downtown Jacksonville properties. 
            From high-rise condos to luxury apartments, we ensure your Downtown property is clean and safe for all family members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=pet-friendly-cleaning&location=downtown-jacksonville"
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
                Downtown Jacksonville Pet-Friendly Cleaning
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Downtown Jacksonville&apos;s urban environment requires pet-friendly cleaning services that understand 
                  the unique challenges of high-rise living with pets. From odor elimination to safe cleaning 
                  products, we provide comprehensive pet-friendly solutions.
                </p>
                <p>
                  Our Downtown Jacksonville pet-friendly cleaning services are designed to handle the specific 
                  challenges of urban pet maintenance - building regulations, pet safety protocols, and the 
                  high standards expected in Downtown properties.
                </p>
                <p>
                  Whether you need regular pet cleaning, deep pet area cleaning, or seasonal pet maintenance, 
                  our local team ensures your Downtown Jacksonville property maintains its pet-friendly cleanliness.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h3>
              <div className="space-y-4">
                {petCleaningFeatures.map((feature, index) => (
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
              Downtown Jacksonville Pet Cleaning Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local knowledge that makes a difference in Downtown Jacksonville&apos;s unique pet-friendly environment
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
              Our Downtown Jacksonville Pet Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to pet-friendly cleaning in Downtown Jacksonville&apos;s unique environment
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

      {/* Downtown Pet Cleaning Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Pet Cleaning Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized pet-friendly cleaning solutions for Downtown Jacksonville&apos;s unique urban properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="w-12 h-12 text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">High-Rise Pet Care</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s high-rise properties require specialized pet-friendly cleaning approaches. 
                We handle building regulations, pet safety, and urban pet maintenance protocols.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Building regulation compliance</li>
                <li>• Pet safety protocols</li>
                <li>• Urban pet maintenance</li>
                <li>• Building management liaison</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-12 h-12 text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Pet-Safe Downtown Standards</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s urban environment requires the highest pet safety standards. 
                We use only pet-safe products and maintain strict safety protocols.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Pet-safe product certification</li>
                <li>• Safety protocol compliance</li>
                <li>• Post-cleaning safety verification</li>
                <li>• Urban pet education services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Downtown Jacksonville Pet-Friendly Cleaning?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get a free quote for your Downtown Jacksonville pet-friendly cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=pet-friendly-cleaning&location=downtown-jacksonville"
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






