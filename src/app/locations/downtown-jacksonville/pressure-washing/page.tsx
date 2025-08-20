import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, ShoppingBag, CheckCircle, Droplets } from 'lucide-react';
import Link from 'next/link';

export default function DowntownJacksonvillePressureWashingPage() {
  const pressureWashingFeatures = [
    'Building exterior cleaning',
    'Sidewalk and walkway cleaning',
    'Parking garage cleaning',
    'Concrete surface restoration',
    'Graffiti removal',
    'Gum and debris removal',
    'Eco-friendly cleaning solutions',
    'Quality inspection and touch-ups'
  ];

  const downtownBenefits = [
    'Downtown pressure washing expertise',
    'High-rise building access',
    'Urban environment knowledge',
    'After-hours availability',
    'Local building regulations',
    'Traffic pattern understanding',
    'Emergency response capability',
    'Corporate standards compliance'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Downtown Assessment',
      description: 'Evaluate your Downtown Jacksonville property\'s pressure washing needs and access requirements',
      icon: Building2
    },
    {
      step: 2,
      title: 'Urban Planning',
      description: 'Develop Downtown-specific pressure washing protocols for urban environments',
      icon: Shield
    },
    {
      step: 3,
      title: 'Professional Pressure Washing',
      description: 'Execute comprehensive pressure washing with Downtown Jacksonville expertise',
      icon: Droplets
    },
    {
      step: 4,
      title: 'Downtown Quality Verification',
      description: 'Ensure all Downtown Jacksonville pressure washing standards are met',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Droplets className="w-16 h-16 text-emerald-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pressure Washing in Downtown Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-4xl mx-auto">
            Professional pressure washing services designed specifically for Downtown Jacksonville properties. 
            From high-rise buildings to urban walkways, we provide comprehensive exterior cleaning that maintains Downtown&apos;s professional appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=pressure-washing&location=downtown-jacksonville"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200 flex items-center justify-center space-x-2"
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
                Downtown Jacksonville Pressure Washing
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Downtown Jacksonville&apos;s urban environment requires pressure washing services that understand 
                  the unique challenges of high-rise buildings and urban maintenance. From building exteriors 
                  to public walkways, we provide comprehensive cleaning solutions.
                </p>
                <p>
                  Our Downtown Jacksonville pressure washing services are designed to handle the specific 
                  challenges of urban cleaning - high-rise access, public safety, and the high standards 
                  expected in Downtown properties.
                </p>
                <p>
                  Whether you need building exterior cleaning, sidewalk restoration, or emergency graffiti 
                  removal, our local team ensures your Downtown Jacksonville property maintains its professional appearance.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h3>
              <div className="space-y-4">
                {pressureWashingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
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
              Downtown Jacksonville Pressure Washing Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local knowledge that makes a difference in Downtown Jacksonville&apos;s unique pressure washing environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downtownBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-emerald-600" />
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
              Our Downtown Jacksonville Pressure Washing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to pressure washing in Downtown Jacksonville&apos;s unique environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-emerald-600" />
                </div>
                <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downtown Pressure Washing Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Pressure Washing Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized pressure washing solutions for Downtown Jacksonville&apos;s unique urban environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="w-12 h-12 text-emerald-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">High-Rise Exterior Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s high-rise buildings require specialized pressure washing approaches. 
                We handle building access, safety equipment, and urban environment considerations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• High-altitude safety protocols</li>
                <li>• Building access coordination</li>
                <li>• Urban environment protection</li>
                <li>• Public safety compliance</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-12 h-12 text-emerald-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Urban Environment Care</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s urban environment requires careful pressure washing approaches. 
                We protect public spaces and maintain urban cleanliness standards.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Public space protection</li>
                <li>• Urban cleanliness standards</li>
                <li>• Environmental compliance</li>
                <li>• Community impact minimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Downtown Jacksonville Pressure Washing?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Get a free quote for your Downtown Jacksonville pressure washing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=pressure-washing&location=downtown-jacksonville"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>Get Your Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View Downtown Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




