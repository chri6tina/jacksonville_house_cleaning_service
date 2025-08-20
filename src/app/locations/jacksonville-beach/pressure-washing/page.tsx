import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, ShoppingBag, CheckCircle, Waves } from 'lucide-react';
import Link from 'next/link';

export default function JacksonvilleBeachPressureWashingPage() {
  const pressureWashingFeatures = [
    'Driveway and sidewalk cleaning',
    'Building exterior washing',
    'Deck and patio cleaning',
    'Parking area maintenance',
    'Salt residue removal',
    'Sand and debris cleanup',
    'Mold and mildew treatment',
    'Surface protection application'
  ];

  const beachBenefits = [
    'Coastal environment expertise',
    'Salt air damage prevention',
    'Sand management solutions',
    'Weather-resistant techniques',
    'Local building code knowledge',
    'Beach community experience',
    'Seasonal maintenance planning',
    'Emergency storm cleanup'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Coastal Assessment',
      description: 'Evaluate salt damage, sand accumulation, and coastal weathering',
      icon: Waves
    },
    {
      step: 2,
      title: 'Surface Preparation',
      description: 'Remove loose debris and prepare surfaces for deep cleaning',
      icon: Sparkles
    },
    {
      step: 3,
      title: 'Pressure Washing',
      description: 'Apply appropriate pressure and cleaning solutions for coastal conditions',
      icon: Truck
    },
    {
      step: 4,
      title: 'Protection Treatment',
      description: 'Apply protective coatings to prevent future salt and sand damage',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Truck className="w-16 h-16 text-cyan-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pressure Washing in Jacksonville Beach
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto">
            Professional pressure washing services designed specifically for Jacksonville Beach properties. 
            From salt-damaged driveways to sandy patios, we restore your property's beauty in the coastal environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=pressure-washing&location=jacksonville-beach"
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
                Coastal Pressure Washing for Jacksonville Beach
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Jacksonville Beach's coastal environment presents unique challenges for property maintenance. 
                  Salt air, sand, and coastal weather require specialized pressure washing techniques and solutions.
                </p>
                <p>
                  Our Jacksonville Beach pressure washing services are designed to handle the harsh coastal 
                  conditions while protecting your property from further damage. We understand the importance 
                  of maintaining curb appeal in this beautiful beach community.
                </p>
                <p>
                  From residential driveways to commercial properties, we provide comprehensive pressure 
                  washing solutions that stand up to Jacksonville Beach's coastal environment.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="space-y-4">
                {pressureWashingFeatures.map((feature, index) => (
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
              Jacksonville Beach Pressure Washing Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Coastal knowledge that makes a difference in Jacksonville Beach's unique environment
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
              Our Jacksonville Beach Pressure Washing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to restoring beauty in Jacksonville Beach's coastal environment
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

      {/* Coastal Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Jacksonville Beach Coastal Cleaning Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for Jacksonville Beach's unique coastal challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Waves className="w-12 h-12 text-cyan-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Salt Air Damage</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Jacksonville Beach's salt air can cause significant damage to surfaces over time. 
                We use specialized techniques to remove salt buildup and prevent future corrosion.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Salt residue removal</li>
                <li>• Corrosion prevention</li>
                <li>• Protective coating application</li>
                <li>• Regular maintenance planning</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Sparkles className="w-12 h-12 text-cyan-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Sand Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Sand from the beach can accumulate on driveways, patios, and walkways. 
                Our pressure washing effectively removes embedded sand and prevents surface damage.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Embedded sand removal</li>
                <li>• Surface restoration</li>
                <li>• Sand barrier solutions</li>
                <li>• Ongoing maintenance tips</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Jacksonville Beach Pressure Washing?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Get a free quote for your Jacksonville Beach property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=pressure-washing&location=jacksonville-beach"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>Get Your Free Quote</span>
            </Link>
            <Link
              href="/locations/jacksonville-beach"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View Beach Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




