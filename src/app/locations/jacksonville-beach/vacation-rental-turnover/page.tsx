import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, ShoppingBag, CheckCircle, Waves } from 'lucide-react';
import Link from 'next/link';

export default function JacksonvilleBeachVacationRentalTurnoverPage() {
  const turnoverFeatures = [
    'Complete property deep cleaning',
    'Beach sand and salt removal',
    'Linen and bedding refresh',
    'Kitchen deep sanitization',
    'Bathroom deep cleaning',
    'Floor and surface treatment',
    'Beach-specific protocols',
    'Quality inspection and touch-ups'
  ];

  const beachBenefits = [
    'Jacksonville Beach expertise',
    'Coastal environment knowledge',
    'Salt air damage prevention',
    'Sand management protocols',
    'Local rental market understanding',
    'Beach access coordination',
    'Emergency response capability',
    'Tourism industry standards'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Beach Property Assessment',
      description: 'Evaluate your Jacksonville Beach vacation rental\'s unique turnover cleaning needs',
      icon: Beach
    },
    {
      step: 2,
      title: 'Beach-Specific Planning',
      description: 'Develop coastal cleaning protocols for Jacksonville Beach vacation rentals',
      icon: Shield
    },
    {
      step: 3,
      title: 'Professional Turnover Cleaning',
      description: 'Execute comprehensive turnover cleaning with Jacksonville Beach expertise',
      icon: Sparkles
    },
    {
      step: 4,
      title: 'Beach Quality Verification',
      description: 'Ensure all Jacksonville Beach vacation rental standards are met',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Waves className="w-16 h-16 text-cyan-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Vacation Rental Turnover Cleaning in Jacksonville Beach
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto">
            Professional vacation rental turnover cleaning services designed specifically for Jacksonville Beach properties. 
            From beachfront condos to coastal homes, we ensure your Jacksonville Beach rental is spotless for every guest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=vacation-rental-turnover&location=jacksonville-beach"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/locations/jacksonville-beach"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Jacksonville Beach</span>
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
                Jacksonville Beach Vacation Rental Turnover
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Jacksonville Beach&apos;s coastal environment requires vacation rental turnover cleaning services 
                  that understand the unique challenges of beach properties. From salt air damage to sand 
                  management, we provide comprehensive turnover solutions.
                </p>
                <p>
                  Our Jacksonville Beach vacation rental turnover cleaning services are designed to handle the 
                  specific challenges of coastal maintenance - salt air corrosion, sand infiltration, and the 
                  high standards expected in beachfront properties.
                </p>
                <p>
                  Whether you need same-day turnover, weekly maintenance, or seasonal deep cleaning, our 
                  local team ensures your Jacksonville Beach vacation rental maintains its coastal charm.
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

      {/* Beach-Specific Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Jacksonville Beach Vacation Rental Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local knowledge that makes a difference in Jacksonville Beach&apos;s unique coastal environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beachBenefits.map((benefit, index) => (
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
              Our Jacksonville Beach Turnover Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to vacation rental turnover in Jacksonville Beach&apos;s unique coastal environment
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

      {/* Jacksonville Beach Turnover Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Jacksonville Beach Turnover Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized turnover cleaning solutions for Jacksonville Beach&apos;s unique coastal properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Waves className="w-12 h-12 text-cyan-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Coastal Environment Care</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Jacksonville Beach&apos;s coastal environment requires specialized turnover cleaning approaches. 
                We handle salt air damage, sand infiltration, and coastal maintenance protocols.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Salt air corrosion prevention</li>
                <li>• Sand removal protocols</li>
                <li>• Coastal material care</li>
                <li>• Beach-specific cleaning</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="w-12 h-12 text-cyan-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Beach Turnover Scheduling</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Jacksonville Beach&apos;s tourism industry requires flexible turnover cleaning scheduling. 
                We work around guest check-ins and coastal weather conditions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Same-day turnover capability</li>
                <li>• Weather-dependent scheduling</li>
                <li>• Guest arrival coordination</li>
                <li>• Emergency response availability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Jacksonville Beach Turnover Cleaning?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Get a free quote for your Jacksonville Beach vacation rental turnover cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=vacation-rental-turnover&location=jacksonville-beach"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>Get Your Free Quote</span>
            </Link>
            <Link
              href="/locations/jacksonville-beach"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View Jacksonville Beach Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




