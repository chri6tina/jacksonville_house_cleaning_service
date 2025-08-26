import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, ShoppingBag, CheckCircle, Heart as HeartIcon } from 'lucide-react';
import Link from 'next/link';

export default function DowntownJacksonvilleMedicalFacilityCleaningPage() {
  const medicalFeatures = [
    'Sterile environment maintenance',
    'Medical equipment cleaning',
    'Patient room sanitization',
    'Operating room preparation',
    'Infection control protocols',
    'Biohazard waste handling',
    'Emergency response cleaning',
    'Quality assurance compliance'
  ];

  const downtownBenefits = [
    'Downtown medical expertise',
    'High-rise facility knowledge',
    'Building access coordination',
    '24/7 availability',
    'Local medical regulations',
    'Downtown area familiarity',
    'Emergency response capability',
    'Healthcare standards compliance'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Downtown Medical Assessment',
      description: 'Evaluate your Downtown Jacksonville medical facility\'s unique cleaning needs',
      icon: Building2
    },
    {
      step: 2,
      title: 'Medical-Specific Planning',
      description: 'Develop Downtown-specific medical facility cleaning protocols',
      icon: HeartIcon
    },
    {
      step: 3,
      title: 'Professional Medical Cleaning',
      description: 'Execute comprehensive medical facility cleaning with Downtown Jacksonville expertise',
      icon: Shield
    },
    {
      step: 4,
      title: 'Downtown Quality Verification',
      description: 'Ensure all Downtown Jacksonville medical facility standards are met',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-rose-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <HeartIcon className="w-16 h-16 text-red-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Medical Facility Cleaning in Downtown Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
            Professional medical facility cleaning services designed specifically for Downtown Jacksonville properties. 
            From high-rise medical centers to urban clinics, we ensure your Downtown medical facility maintains the highest standards of cleanliness and safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=medical-facility-cleaning&location=downtown-jacksonville"
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
                Downtown Jacksonville Medical Facility Cleaning
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Downtown Jacksonville&apos;s urban environment requires medical facility cleaning services that understand 
                  the unique challenges of high-rise medical centers and urban healthcare. From sterile environments 
                  to infection control, we provide comprehensive medical cleaning solutions.
                </p>
                <p>
                  Our Downtown Jacksonville medical facility cleaning services are designed to handle the specific 
                  challenges of urban healthcare maintenance - building access coordination, 24/7 availability, and 
                  the highest standards expected in Downtown medical facilities.
                </p>
                <p>
                  Whether you need daily maintenance, emergency response cleaning, or specialized medical area 
                  cleaning, our local team ensures your Downtown Jacksonville medical facility maintains its 
                  healthcare standards.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h3>
              <div className="space-y-4">
                {medicalFeatures.map((feature, index) => (
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
              Downtown Jacksonville Medical Facility Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local knowledge that makes a difference in Downtown Jacksonville&apos;s unique medical facility environment
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
              Our Downtown Jacksonville Medical Facility Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to medical facility cleaning in Downtown Jacksonville&apos;s unique environment
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

      {/* Downtown Medical Facility Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Medical Facility Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized medical facility cleaning solutions for Downtown Jacksonville&apos;s unique urban healthcare environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="w-12 h-12 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">High-Rise Medical Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s high-rise medical facilities require specialized cleaning approaches. 
                We handle building access, elevator coordination, and urban healthcare maintenance.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Building access coordination</li>
                <li>• Elevator scheduling</li>
                <li>• Urban healthcare maintenance</li>
                <li>• Building management liaison</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-12 h-12 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Healthcare Standards Compliance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s medical environment requires the highest healthcare standards. 
                We maintain strict infection control and safety protocols.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Infection control protocols</li>
                <li>• Safety protocol compliance</li>
                <li>• Biohazard handling</li>
                <li>• Healthcare education services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Downtown Jacksonville Medical Facility Cleaning?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get a free quote for your Downtown Jacksonville medical facility cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=medical-facility-cleaning&location=downtown-jacksonville"
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





