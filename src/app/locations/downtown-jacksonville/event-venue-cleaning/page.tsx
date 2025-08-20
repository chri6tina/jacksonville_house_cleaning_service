import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, ShoppingBag, CheckCircle, PartyPopper as PartyPopperIcon } from 'lucide-react';
import Link from 'next/link';

export default function DowntownJacksonvilleEventVenueCleaningPage() {
  const eventVenueFeatures = [
    'Pre and post-event cleaning',
    'Large venue maintenance',
    'Catering area cleanup',
    'Restroom sanitization',
    'Floor and surface treatment',
    'Trash removal and disposal',
    'Emergency response cleaning',
    'Quality inspection and touch-ups'
  ];

  const downtownBenefits = [
    'Downtown event venue expertise',
    'High-rise venue knowledge',
    'Building access coordination',
    'After-hours availability',
    'Local venue regulations',
    'Downtown area familiarity',
    'Emergency response capability',
    'Corporate standards compliance'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Downtown Venue Assessment',
      description: 'Evaluate your Downtown Jacksonville event venue\'s unique cleaning needs',
      icon: Building2
    },
    {
      step: 2,
      title: 'Event-Specific Planning',
      description: 'Develop Downtown-specific event venue cleaning protocols',
      icon: PartyPopperIcon
    },
    {
      step: 3,
      title: 'Professional Venue Cleaning',
      description: 'Execute comprehensive event venue cleaning with Downtown Jacksonville expertise',
      icon: Sparkles
    },
    {
      step: 4,
      title: 'Downtown Quality Verification',
      description: 'Ensure all Downtown Jacksonville event venue standards are met',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-violet-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <PartyPopperIcon className="w-16 h-16 text-violet-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Event Venue Cleaning in Downtown Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-violet-100 mb-8 max-w-4xl mx-auto">
            Professional event venue cleaning services designed specifically for Downtown Jacksonville properties. 
            From high-rise venues to urban event spaces, we ensure your Downtown venue is spotless for every event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=event-venue-cleaning&location=downtown-jacksonville"
              className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-violet-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors duration-200 flex items-center justify-center space-x-2"
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
                Downtown Jacksonville Event Venue Cleaning
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Downtown Jacksonville's urban environment requires event venue cleaning services that understand 
                  the unique challenges of high-rise venues and urban event management. From pre-event preparation 
                  to post-event cleanup, we provide comprehensive venue solutions.
                </p>
                <p>
                  Our Downtown Jacksonville event venue cleaning services are designed to handle the specific 
                  challenges of urban venue maintenance - building access coordination, flexible scheduling, and 
                  the high standards expected in Downtown event spaces.
                </p>
                <p>
                  Whether you need pre-event preparation, post-event cleanup, or ongoing venue maintenance, 
                  our local team ensures your Downtown Jacksonville event venue maintains its professional standards.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="space-y-4">
                {eventVenueFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0" />
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
              Downtown Jacksonville Event Venue Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local knowledge that makes a difference in Downtown Jacksonville's unique event venue environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downtownBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-violet-600" />
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
              Our Downtown Jacksonville Event Venue Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to event venue cleaning in Downtown Jacksonville's unique environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-violet-600" />
                </div>
                <div className="bg-violet-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downtown Event Venue Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Event Venue Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized event venue cleaning solutions for Downtown Jacksonville's unique urban venues
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="w-12 h-12 text-violet-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">High-Rise Event Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville's high-rise event venues require specialized cleaning approaches. 
                We handle building access, elevator coordination, and urban venue maintenance.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Building access coordination</li>
                <li>• Elevator scheduling</li>
                <li>• Urban venue maintenance</li>
                <li>• Building management liaison</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="w-12 h-12 text-violet-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Flexible Event Scheduling</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Downtown Jacksonville's busy event environment requires flexible venue cleaning scheduling. 
                We work around event schedules and Downtown building requirements.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Event schedule coordination</li>
                <li>• Building requirement compliance</li>
                <li>• Emergency response availability</li>
                <li>• Same-day event cleaning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Downtown Jacksonville Event Venue Cleaning?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Get a free quote for your Downtown Jacksonville event venue cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=event-venue-cleaning&location=downtown-jacksonville"
              className="bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-violet-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>Get Your Free Quote</span>
            </Link>
            <Link
              href="/locations/downtown-jacksonville"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-violet-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View Downtown Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




