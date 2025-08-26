import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, ShoppingBag, CheckCircle, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function DowntownJacksonvillePostConstructionPage() {
  const postConstructionFeatures = [
    'Construction debris removal',
    'Dust and particle cleanup',
    'Surface restoration and cleaning',
    'HVAC system cleaning',
    'Window and glass cleaning',
    'Floor and surface treatment',
    'Final inspection and touch-ups',
    'Safety compliance verification'
  ];

  const downtownBenefits = [
    'Downtown construction expertise',
    'High-rise construction access',
    'Security clearance management',
    'Building code compliance',
    'Local construction knowledge',
    'Traffic pattern understanding',
    'Emergency response capability',
    'Corporate standards compliance'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Construction Site Assessment',
      description: 'Evaluate your Downtown Jacksonville construction site\'s post-construction cleaning needs',
      icon: Building2
    },
    {
      step: 2,
      title: 'Safety and Access Planning',
      description: 'Coordinate Downtown building access and safety protocols for post-construction cleaning',
      icon: Shield
    },
    {
      step: 3,
      title: 'Professional Post-Construction Cleaning',
      description: 'Execute comprehensive post-construction cleaning with Downtown expertise',
      icon: Sparkles
    },
    {
      step: 4,
      title: 'Final Inspection',
      description: 'Ensure Downtown Jacksonville post-construction cleaning standards are met',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-rose-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Wrench className="w-16 h-16 text-red-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Post-Construction Cleaning in Downtown Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
            Professional post-construction cleaning services designed specifically for Downtown Jacksonville properties. 
            From high-rise renovations to historic building restorations, we ensure your Downtown construction project is spotless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=post-construction&location=downtown-jacksonville"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200 flex items-center justify-center space-x-2"
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
                Downtown Jacksonville Post-Construction Cleaning
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Downtown Jacksonville&apos;s construction boom requires post-construction cleaning services 
                  that understand the unique challenges of urban development. From high-rise renovations 
                  to historic building restorations, we provide comprehensive post-construction cleaning solutions.
                </p>
                <p>
                  Our Downtown Jacksonville post-construction cleaning services are designed to handle the 
                  specific challenges of urban construction - building access coordination, safety protocols, 
                  and the high standards expected in Downtown properties.
                </p>
                <p>
                  Whether you&apos;re renovating a Downtown Jacksonville office, condo, or retail space, our 
                  local team ensures your construction project meets the highest cleanliness standards.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h3>
              <div className="space-y-4">
                {postConstructionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
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
              Downtown Jacksonville Post-Construction Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local knowledge that makes a difference in Downtown Jacksonville&apos;s unique construction environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downtownBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-red-600" />
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
              Our Downtown Jacksonville Post-Construction Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to post-construction cleaning in Downtown Jacksonville&apos;s unique environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-red-600" />
                </div>
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downtown Post-Construction Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Post-Construction Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized post-construction cleaning solutions for Downtown Jacksonville&apos;s unique development needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="w-12 h-12 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">High-Rise Construction Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s high-rise construction projects require specialized post-construction cleaning. 
                We handle elevator access, safety protocols, and building management coordination for seamless cleaning.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• High-rise access coordination</li>
                <li>• Safety protocol compliance</li>
                <li>• Building management liaison</li>
                <li>• Construction debris removal</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-12 h-12 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Downtown Safety Compliance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s construction projects require strict safety compliance. 
                Our post-construction cleaning ensures all Downtown building codes and safety standards are met.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Building code compliance</li>
                <li>• Safety standard verification</li>
                <li>• Construction permit compliance</li>
                <li>• Final inspection preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Downtown Jacksonville Post-Construction Cleaning?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get a free quote for your Downtown Jacksonville post-construction cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=post-construction&location=downtown-jacksonville"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>Get Your Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View Downtown Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}





