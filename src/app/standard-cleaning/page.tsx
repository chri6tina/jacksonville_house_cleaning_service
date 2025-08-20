import React from 'react';
import { Home, Clock, Shield, Check, Star, Phone, Calendar, Users } from 'lucide-react';

export default function StandardCleaningPage() {
  const services = [
    'Complete dusting of all surfaces and furniture',
    'Vacuum and mop all floors',
    'Kitchen cleaning (appliances, countertops, cabinets)',
    'Bathroom cleaning and sanitization',
    'Window and mirror cleaning',
    'Baseboard and trim cleaning',
    'Light fixture and ceiling fan cleaning',
    'Closet and storage area cleaning',
    'Final inspection and quality check'
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Complete peace of mind with full coverage'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Early morning, evening, and weekend appointments'
    },
    {
      icon: Check,
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction or we\'ll make it right'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Background-checked, trained professionals'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Standard House Cleaning Services
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Professional standard house cleaning services in Jacksonville. Keep your home consistently 
              clean and comfortable with our reliable, thorough cleaning service.
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
                Professional Standard House Cleaning
              </h2>
              <p className="text-xl text-charcoal/70 mb-8 leading-relaxed">
                Our standard house cleaning service provides thorough, consistent cleaning to maintain 
                your home&apos;s cleanliness and comfort. Perfect for regular maintenance and keeping your 
                living space fresh and inviting.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Home className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-charcoal font-medium">All home sizes welcome</span>
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
                  <span className="text-primary-blue font-bold">From $80</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">2 Bedroom</span>
                  <span className="text-primary-blue font-bold">From $120</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">3 Bedroom</span>
                  <span className="text-primary-blue font-bold">From $160</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">4+ Bedroom</span>
                  <span className="text-primary-blue font-bold">From $200</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary-blue/10 rounded-xl">
                <p className="text-charcoal text-sm">
                  <strong>Note:</strong> Pricing varies based on home size, condition, and specific services needed. 
                  Contact us for a personalized quote.
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
              What&apos;s Included in Standard House Cleaning
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our comprehensive standard cleaning service covers all the essential areas of your home 
              to maintain a clean, healthy living environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Standard Cleaning</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal/70">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Additional Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Deep Cleaning</h4>
                    <p className="text-charcoal/70">More thorough cleaning for neglected areas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Carpet Cleaning</h4>
                    <p className="text-charcoal/70">Professional carpet and upholstery cleaning</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Window Cleaning</h4>
                    <p className="text-charcoal/70">Interior and exterior window cleaning</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Recurring Service</h4>
                    <p className="text-charcoal/70">Weekly, bi-weekly, or monthly cleaning</p>
                  </div>
                </li>
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
              Why Choose Our Standard House Cleaning Service?
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We provide reliable, consistent standard cleaning services that keep your home 
              looking its best week after week.
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
              Perfect For Regular Home Maintenance
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Standard house cleaning is ideal for maintaining a clean, comfortable home environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Busy Families</h3>
              <p className="text-charcoal/70">
                Keep your home clean and organized despite busy schedules and family activities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-aqua/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Working Professionals</h3>
              <p className="text-charcoal/70">
                Maintain a clean home without sacrificing your valuable time and energy.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-accent-coral" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Seniors</h3>
              <p className="text-charcoal/70">
                Get help maintaining your home when physical limitations make cleaning difficult.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Pet Owners</h3>
              <p className="text-charcoal/70">
                Keep your home clean despite pet hair, dander, and other pet-related messes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Rental Properties</h3>
              <p className="text-charcoal/70">
                Maintain clean rental properties to attract and retain quality tenants.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-aqua/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Regular Maintenance</h3>
              <p className="text-charcoal/70">
                Establish a consistent cleaning routine to maintain your home&apos;s value and appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
            Ready to Enjoy a Clean Home?
          </h2>
          <p className="text-xl text-charcoal/70 mb-8 max-w-3xl mx-auto">
            Contact us today for a free quote and to schedule your professional standard house cleaning service.
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





