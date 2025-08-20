import React from 'react';
import { Sparkles, Clock, Shield, Check, Star, Phone, Calendar, Zap } from 'lucide-react';

export default function ExtremeDeepCleaningPage() {
  const services = [
    'Complete dust removal from all surfaces, including hard-to-reach areas',
    'Deep cleaning of all floors, carpets, and upholstery',
    'Kitchen deep cleaning (appliances, cabinets, countertops, backsplash)',
    'Bathroom deep cleaning and sanitization (shower, tub, toilet, sink)',
    'Window and mirror cleaning (interior and exterior)',
    'Baseboard, trim, and crown molding cleaning',
    'Light fixture and ceiling fan deep cleaning',
    'Air vent and duct cleaning',
    'Closet and storage area organization and cleaning',
    'Wall cleaning and spot treatment',
    'Cabinet and drawer interior cleaning',
    'Appliance deep cleaning and sanitization',
    'Final inspection and quality assurance'
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Complete protection for your home and belongings'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'We work around your schedule and timeline'
    },
    {
      icon: Check,
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction or we\'ll make it right'
    },
    {
      icon: Star,
      title: 'Experienced Team',
      description: 'Trained professionals with specialized equipment'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Extreme Deep Cleaning Services
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Transform your home with our comprehensive extreme deep cleaning service. We tackle every corner, 
              surface, and hard-to-reach area to restore your home to its pristine condition.
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
                Professional Extreme Deep Cleaning
              </h2>
              <p className="text-xl text-charcoal/70 mb-8 leading-relaxed">
                Our extreme deep cleaning service goes beyond regular cleaning to tackle years of built-up dirt, 
                grime, and neglect. Using professional equipment and eco-friendly products, we restore your home 
                to a level of cleanliness you never thought possible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Sparkles className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-charcoal font-medium">Professional equipment and techniques</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-charcoal font-medium">Licensed, bonded & insured</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-charcoal font-medium">Eco-friendly cleaning products</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Service Pricing</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Studio/1 Bedroom</span>
                  <span className="text-primary-blue font-bold">From $200</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">2 Bedroom</span>
                  <span className="text-primary-blue font-bold">From $300</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">3 Bedroom</span>
                  <span className="text-primary-blue font-bold">From $400</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">4+ Bedroom</span>
                  <span className="text-primary-blue font-bold">From $500</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary-blue/10 rounded-xl">
                <p className="text-charcoal text-sm">
                  <strong>Note:</strong> Pricing varies based on home size, condition, and level of cleaning needed. 
                  Contact us for a detailed assessment and quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              What&apos;s Included in Extreme Deep Cleaning
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our comprehensive extreme deep cleaning service covers every area of your home, 
              including those hard-to-reach places that regular cleaning misses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Primary Areas</h3>
              <ul className="space-y-3">
                {services.slice(0, 7).map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal/70">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Additional Services</h3>
              <ul className="space-y-3">
                {services.slice(7).map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal/70">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Why Choose Our Extreme Deep Cleaning Service?
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We specialize in extreme deep cleaning and have the expertise, equipment, and dedication 
              to transform even the most neglected spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
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

      {/* Perfect For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Perfect For These Situations
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Extreme deep cleaning is ideal for homes that need intensive cleaning due to various circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Neglected Homes</h3>
              <p className="text-charcoal/70">
                Homes that haven&apos;t been properly cleaned for months or years need our extreme deep cleaning service.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-aqua/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Move-In Preparation</h3>
              <p className="text-charcoal/70">
                Ensure your new home is spotless before moving in with our comprehensive deep cleaning.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent-coral" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Seasonal Deep Cleaning</h3>
              <p className="text-charcoal/70">
                Annual or seasonal deep cleaning to maintain your home&apos;s cleanliness and health.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Pet-Owned Homes</h3>
              <p className="text-charcoal/70">
                Remove pet hair, odors, and stains with our specialized deep cleaning techniques.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Allergy Relief</h3>
              <p className="text-charcoal/70">
                Remove allergens, dust, and pollutants for a healthier living environment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-aqua/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Special Occasions</h3>
              <p className="text-charcoal/70">
                Prepare your home for special events, parties, or important gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-charcoal/70 mb-8 max-w-3xl mx-auto">
            Contact us today for a free quote and to schedule your professional extreme deep cleaning service.
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





