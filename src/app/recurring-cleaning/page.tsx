import React from 'react';
import { Calendar, Clock, Shield, Check, Star, Phone, Users, Zap } from 'lucide-react';

export default function RecurringCleaningPage() {
  const services = [
    'Weekly, bi-weekly, or monthly cleaning schedules',
    'Customized cleaning plans based on your needs',
    'Flexible scheduling options',
    'Consistent quality and attention to detail',
    'Same trusted cleaning team',
    'Priority scheduling for recurring clients',
    'Discounted rates for regular service',
    'Easy rescheduling and cancellation'
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
      description: 'Choose the frequency that works for you'
    },
    {
      icon: Check,
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction or we\'ll make it right'
    },
    {
      icon: Users,
      title: 'Same Team',
      description: 'Consistent, familiar cleaning professionals'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Recurring Cleaning Services
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Maintain a consistently clean home with our reliable recurring cleaning services. 
              Choose weekly, bi-weekly, or monthly schedules that fit your lifestyle and budget.
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
                Professional Recurring Cleaning
              </h2>
              <p className="text-xl text-charcoal/70 mb-8 leading-relaxed">
                Our recurring cleaning service provides consistent, reliable cleaning to maintain your 
                home's cleanliness week after week. With flexible scheduling and discounted rates, 
                you can enjoy a clean home without the hassle of finding and scheduling cleaners.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-charcoal font-medium">Flexible scheduling options</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-charcoal font-medium">Licensed, bonded & insured</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-charcoal font-medium">Discounted rates for regular service</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Recurring Service Pricing</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Weekly Cleaning</span>
                  <span className="text-primary-blue font-bold">15% Off</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Bi-Weekly Cleaning</span>
                  <span className="text-primary-blue font-bold">10% Off</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Monthly Cleaning</span>
                  <span className="text-primary-blue font-bold">5% Off</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Quarterly Deep Clean</span>
                  <span className="text-primary-blue font-bold">20% Off</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary-blue/10 rounded-xl">
                <p className="text-charcoal text-sm">
                  <strong>Note:</strong> Discounts apply to standard cleaning rates. Contact us for 
                  a personalized quote based on your home size and cleaning needs.
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
              What's Included in Recurring Cleaning
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our recurring cleaning service provides consistent, reliable cleaning with added benefits 
              for regular clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Service Benefits</h3>
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
              <h3 className="text-2xl font-bold text-charcoal mb-6">Cleaning Includes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Standard Cleaning</h4>
                    <p className="text-charcoal/70">Complete dusting, vacuuming, mopping, and sanitizing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Kitchen & Bathroom</h4>
                    <p className="text-charcoal/70">Thorough cleaning of all surfaces and fixtures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Bedrooms & Living Areas</h4>
                    <p className="text-charcoal/70">Complete cleaning of all living spaces</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Quality Assurance</h4>
                    <p className="text-charcoal/70">Consistent quality and attention to detail</p>
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
              Why Choose Our Recurring Cleaning Service?
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We provide reliable, consistent cleaning services that fit your lifestyle and budget.
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

      {/* Scheduling Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Flexible Scheduling Options
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Choose the cleaning frequency that works best for your lifestyle and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Weekly Cleaning</h3>
              <p className="text-charcoal/70 mb-4">
                Perfect for busy families and households that need consistent cleanliness.
              </p>
              <div className="text-primary-blue font-bold text-lg">15% Discount</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center border-2 border-primary-blue">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Bi-Weekly Cleaning</h3>
              <p className="text-charcoal/70 mb-4">
                Most popular option for maintaining a clean home without breaking the bank.
              </p>
              <div className="text-primary-blue font-bold text-lg">10% Discount</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-aqua/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Monthly Cleaning</h3>
              <p className="text-charcoal/70 mb-4">
                Great for maintaining basic cleanliness with occasional deep cleaning.
              </p>
              <div className="text-primary-blue font-bold text-lg">5% Discount</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
            Ready to Start Your Recurring Cleaning Service?
          </h2>
          <p className="text-xl text-charcoal/70 mb-8 max-w-3xl mx-auto">
            Contact us today for a free quote and to set up your recurring cleaning schedule.
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





