import React from 'react';
import Link from 'next/link';
import { Truck, Clock, Shield, Check, Star, Phone, Calendar, ArrowLeft } from 'lucide-react';

export default function MoveInMoveOutPage() {
  const moveInServices = [
    'Complete dust removal from all surfaces',
    'Deep cleaning of all floors and carpets',
    'Kitchen appliance cleaning and sanitization',
    'Bathroom deep cleaning and disinfection',
    'Window and mirror cleaning',
    'Cabinet and drawer cleaning',
    'Light fixture and ceiling fan cleaning',
    'Baseboard and trim cleaning',
    'Air vent cleaning',
    'Final inspection and quality check'
  ];

  const moveOutServices = [
    'Pre-move out deep cleaning',
    'Carpet and upholstery cleaning',
    'Kitchen deep cleaning (appliances, cabinets, countertops)',
    'Bathroom sanitization and deep cleaning',
    'Window cleaning (interior and exterior)',
    'Wall cleaning and spot treatment',
    'Floor deep cleaning and polishing',
    'Closet and storage area cleaning',
    'Garage cleaning (if applicable)',
    'Final walk-through preparation'
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Complete peace of mind with full coverage for your property'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'We work around your moving timeline, not ours'
    },
    {
      icon: Check,
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction or we\'ll make it right'
    },
    {
      icon: Star,
      title: 'Experienced Team',
      description: 'Specialized in move-in/move-out cleaning for over 13 years'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/information" className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-blue/80 mb-6 transition-colors justify-center">
              <ArrowLeft className="w-4 h-4" />
              Back to Information
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Move-In/Move-Out Cleaning Services
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Professional cleaning services to ensure your new home is spotless or your old home 
              meets landlord requirements. Trusted by Jacksonville families for over 13 years.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9044563851"
                className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call for Quote
              </a>
              <a 
                href="/contact-us"
                className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Professional Move-In/Move-Out Cleaning
              </h2>
              <p className="text-xl text-charcoal/70 mb-8 leading-relaxed">
                Moving is stressful enough without worrying about cleaning. Our specialized move-in/move-out 
                cleaning services ensure your new home is spotless and move-in ready, or your old home 
                meets all landlord and real estate requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Truck className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-charcoal font-medium">Same-day service available</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-charcoal font-medium">Licensed, bonded & insured</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-charcoal font-medium">Satisfaction guaranteed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Service Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Move-In Cleaning</span>
                  <span className="text-primary-blue font-bold">From $150</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Move-Out Cleaning</span>
                  <span className="text-primary-blue font-bold">From $200</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Deep Carpet Cleaning</span>
                  <span className="text-primary-blue font-bold">From $80</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Window Cleaning</span>
                  <span className="text-primary-blue font-bold">From $60</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary-blue/10 rounded-xl">
                <p className="text-charcoal text-sm">
                  <strong>Note:</strong> Final pricing depends on property size, condition, and specific requirements. 
                  Contact us for a detailed quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Move-In Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Move-In Cleaning Services
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Start fresh in your new home with our comprehensive move-in cleaning service. 
              We ensure every corner is spotless and ready for your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-charcoal mb-6">What's Included</h3>
              <ul className="space-y-3">
                {moveInServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal/70">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Perfect For</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-primary-blue/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary-blue font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">New Homeowners</h4>
                    <p className="text-charcoal/70">Ensure your new home is spotless before moving in</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-primary-blue/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary-blue font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Renters</h4>
                    <p className="text-charcoal/70">Start fresh in your new rental property</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-primary-blue/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary-blue font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Real Estate</h4>
                    <p className="text-charcoal/70">Prepare properties for new tenants or buyers</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Move-Out Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Move-Out Cleaning Services
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Ensure you get your full security deposit back with our thorough move-out cleaning service. 
              We meet all landlord and property management requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-charcoal mb-6">What's Included</h3>
              <ul className="space-y-3">
                {moveOutServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal/70">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Security Deposit Protection</h4>
                    <p className="text-charcoal/70">Maximize your chances of getting full deposit back</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Landlord Satisfaction</h4>
                    <p className="text-charcoal/70">Meet all cleaning requirements and standards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Peace of Mind</h4>
                    <p className="text-charcoal/70">Professional cleaning you can trust</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Why Choose Our Move-In/Move-Out Service?
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We specialize in move-in/move-out cleaning and understand the unique requirements 
              of landlords, property managers, and real estate professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
            Ready to Schedule Your Move-In/Move-Out Cleaning?
          </h2>
          <p className="text-xl text-charcoal/70 mb-8 max-w-3xl mx-auto">
            Contact us today for a free quote and to schedule your professional move-in or move-out cleaning service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9044563851"
              className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (904) 456-3851
            </a>
            <a 
              href="/contact-us"
              className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
