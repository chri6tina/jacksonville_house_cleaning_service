import { MapPin, Star, Phone, Clock, Users, Shield, Car, Sparkles, Check, ArrowRight, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function DowntownJacksonvilleCarpetCleaningPage() {
  const downtownCarpetFeatures = [
    'High-traffic area treatment for office buildings',
    'Historic building carpet restoration',
    'Commercial carpet maintenance programs',
    'Emergency stain removal for businesses',
    'Deep cleaning for high-rise properties',
    'Odor elimination for urban environments',
    'Stain protection for busy areas',
    'Professional equipment for large spaces'
  ];

  const downtownBenefits = [
    'Extends carpet life in high-traffic areas',
    'Improves indoor air quality in urban environments',
    'Maintains professional appearance for businesses',
    'Reduces allergens in densely populated areas',
    'Protects investment in commercial properties',
    'Creates healthier work environments'
  ];

  const downtownProcess = [
    {
      step: 1,
      title: 'Area Assessment',
      description: 'Evaluate Downtown Jacksonville property needs and traffic patterns'
    },
    {
      step: 2,
      title: 'Pre-Treatment',
      description: 'Apply specialized solutions for urban environment challenges'
    },
    {
      step: 3,
      title: 'Deep Cleaning',
      description: 'Professional hot water extraction for Downtown properties'
    },
    {
      step: 4,
      title: 'Stain Treatment',
      description: 'Target specific stains common in urban environments'
    },
    {
      step: 5,
      title: 'Protection Application',
      description: 'Apply stain protection for long-lasting results'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Car className="w-16 h-16 text-emerald-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Carpet Cleaning in Downtown Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-4xl mx-auto">
            Professional carpet cleaning services specifically designed for Downtown Jacksonville properties. 
            From high-rise offices to historic buildings, we restore carpets to their original beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=carpet-cleaning&location=downtown-jacksonville"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>View Downtown Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Downtown Jacksonville Carpet Cleaning Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Downtown Jacksonville Carpet Cleaning
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Downtown Jacksonville presents unique carpet cleaning challenges with its mix of 
                  high-rise office buildings, historic properties, and high-traffic commercial areas.
                </p>
                <p>
                  Our specialized Downtown Jacksonville carpet cleaning service understands the 
                  specific needs of urban environments, from dealing with heavy foot traffic to 
                  addressing the unique challenges of historic buildings.
                </p>
                <p>
                  We use advanced equipment and techniques specifically suited for Downtown 
                  Jacksonville properties, ensuring your carpets look their best while maintaining 
                  the professional appearance your business demands.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Downtown Jacksonville</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Property Types</h3>
                    <p className="text-gray-600">Offices, historic buildings, high-rises</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Availability</h3>
                    <p className="text-gray-600">After-hours & weekend service</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Expertise</h3>
                    <p className="text-gray-600">Downtown Jacksonville specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downtown-Specific Features */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Carpet Cleaning Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized carpet cleaning solutions designed for Downtown Jacksonville&apos;s unique environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Check className="w-6 h-6 text-emerald-600 mr-3" />
                Downtown-Specific Services
              </h3>
              <ul className="space-y-3">
                {downtownCarpetFeatures.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Check className="w-6 h-6 text-teal-600 mr-3" />
                Additional Features
              </h3>
              <ul className="space-y-3">
                {downtownCarpetFeatures.slice(4).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Downtown Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefits of Downtown Jacksonville Carpet Cleaning
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why Downtown Jacksonville businesses and property owners choose our carpet cleaning services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downtownBenefits.map((benefit, index) => (
              <div key={index} className="bg-emerald-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downtown Process */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Downtown Jacksonville Carpet Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional carpet cleaning methodology specifically adapted for Downtown Jacksonville properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {downtownProcess.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downtown Jacksonville Specific Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Carpet Cleaning Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of Downtown Jacksonville properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">High-Rise Challenges</h3>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville&apos;s high-rise buildings present unique carpet cleaning challenges. 
                We have the equipment and expertise to handle multi-floor properties efficiently.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Elevator and lobby carpet cleaning</li>
                <li>• Office floor maintenance</li>
                <li>• Common area restoration</li>
                <li>• After-hours service availability</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Historic Building Care</h3>
              <p className="text-gray-600 mb-4">
                Many Downtown Jacksonville buildings have historic significance. Our carpet cleaning 
                methods preserve these properties while restoring their beauty.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Gentle cleaning methods</li>
                <li>• Historic fabric preservation</li>
                <li>• Specialized equipment</li>
                <li>• Expert consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Downtown Jacksonville Carpet Cleaning?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Get a free quote for your Downtown Jacksonville property
          </p>
          <Link
            href="/contact?service=carpet-cleaning&location=downtown-jacksonville"
            className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-6 h-6" />
            <span>Get Your Free Quote</span>
          </Link>
        </div>
      </section>
    </div>
  );
}




