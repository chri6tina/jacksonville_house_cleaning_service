import React from 'react';
import { Calendar, Clock, Shield, Check, Star, Phone, Users, Zap, Sparkles, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';

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
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero1.png"
            alt="Professional cleaning service"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 via-primary-blue/85 to-accent-aqua/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white text-primary-blue px-4 py-2 rounded-full text-sm font-medium mb-6 border-2 border-white shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span>Most Popular Service</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                Jacksonville Recurring Cleaning
                <span className="block text-white mt-2 drop-shadow-lg">Services</span>
              </h1>
              
              <p className="text-xl text-white mb-8 max-w-2xl leading-relaxed drop-shadow-md">
                Maintain a consistently clean Jacksonville home with our reliable recurring cleaning services. 
                Choose weekly, bi-weekly, or monthly schedules that fit your lifestyle and budget.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center border border-white/20">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium drop-shadow-md">Save up to 20%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center border border-white/20">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium drop-shadow-md">Flexible scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center border border-white/20">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium drop-shadow-md">Same trusted team</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center border border-white/20">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium drop-shadow-md">Consistent quality</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:9044563851"
                  className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 border-2 border-accent-coral"
                >
                  <Phone className="w-5 h-5" />
                  Call for Quote
                </a>
                <a 
                  href="/contact-us"
                  className="bg-white text-primary-blue hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 border-2 border-white"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Service
                </a>
              </div>
            </div>
            
            {/* Right Column - Pricing Card */}
            <div className="hidden lg:block">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-primary-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Recurring Service Pricing</h3>
                  <p className="text-gray-600">Save more with regular service</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-blue/5 to-accent-aqua/5 rounded-lg">
                    <span className="text-gray-900 font-medium">Weekly Cleaning</span>
                    <span className="text-primary-blue font-bold text-lg">15% Off</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-blue/5 to-accent-aqua/5 rounded-lg">
                    <span className="text-gray-900 font-medium">Bi-Weekly Cleaning</span>
                    <span className="text-primary-blue font-bold text-lg">10% Off</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-blue/5 to-accent-aqua/5 rounded-lg">
                    <span className="text-gray-900 font-medium">Monthly Cleaning</span>
                    <span className="text-primary-blue font-bold text-lg">5% Off</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-blue/5 to-accent-aqua/5 rounded-lg">
                    <span className="text-gray-900 font-medium">Quarterly Deep Clean</span>
                    <span className="text-primary-blue font-bold text-lg">20% Off</span>
                  </div>
                </div>
                
                <div className="p-4 bg-accent-aqua/10 rounded-xl border border-accent-aqua/20">
                  <p className="text-gray-700 text-sm text-center">
                    <strong>Special Offer:</strong> New recurring clients get an additional 10% off their first month!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jacksonville Service Areas */}
      <section className="py-16 bg-gradient-to-br from-primary-blue/5 to-accent-aqua/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Serving All of Jacksonville & Surrounding Areas
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our Jacksonville cleaning team provides recurring cleaning services throughout the entire Jacksonville metropolitan area
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Jacksonville Beach</h3>
              <p className="text-gray-600 text-sm">Coastal cleaning excellence</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Mandarin</h3>
              <p className="text-gray-600 text-sm">Family-friendly cleaning</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Riverside</h3>
              <p className="text-gray-600 text-sm">Historic district care</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Southside</h3>
              <p className="text-gray-600 text-sm">Modern home specialists</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Arlington</h3>
              <p className="text-gray-600 text-sm">Suburban cleaning experts</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Ponte Vedra</h3>
              <p className="text-gray-600 text-sm">Luxury home cleaning</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Fleming Island</h3>
              <p className="text-gray-600 text-sm">Island community service</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">And More!</h3>
              <p className="text-gray-600 text-sm">Covering all Jacksonville areas</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-700 mb-4">
              <strong>Don't see your area?</strong> We likely serve it! Contact us to confirm coverage.
            </p>
            <a 
              href="tel:9044563851"
              className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:text-primary-blue/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call (904) 456-3851 to check your area
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Pricing Section */}
      <section className="py-12 bg-gradient-to-br from-primary-blue/5 to-accent-aqua/5 lg:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary-blue/10">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Recurring Service Pricing</h3>
              <p className="text-gray-600">Save more with regular service</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-blue/5 to-accent-aqua/5 rounded-lg">
                <span className="text-gray-900 font-medium">Weekly Cleaning</span>
                <span className="text-primary-blue font-bold text-lg">15% Off</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-blue/5 to-accent-aqua/5 rounded-lg">
                <span className="text-gray-900 font-medium">Bi-Weekly Cleaning</span>
                <span className="text-primary-blue font-bold text-lg">10% Off</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-blue/5 to-accent-aqua/5 rounded-lg">
                <span className="text-gray-900 font-medium">Monthly Cleaning</span>
                <span className="text-primary-blue font-bold text-lg">5% Off</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-blue/5 to-accent-aqua/5 rounded-lg">
                <span className="text-gray-900 font-medium">Quarterly Deep Clean</span>
                <span className="text-primary-blue font-bold text-lg">20% Off</span>
              </div>
            </div>
            
            <div className="p-4 bg-accent-aqua/10 rounded-xl border border-accent-aqua/20">
              <p className="text-gray-700 text-sm text-center">
                <strong>Special Offer:</strong> New recurring clients get an additional 10% off their first month!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Jacksonville Recurring Cleaning
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Our Jacksonville recurring cleaning service provides consistent, reliable cleaning to maintain your 
                home&apos;s cleanliness week after week. With flexible scheduling and discounted rates, 
                you can enjoy a clean Jacksonville home without the hassle of finding and scheduling cleaners.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-gray-900 font-medium">Flexible scheduling options</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-gray-900 font-medium">Licensed, bonded & insured</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-gray-900 font-medium">Discounted rates for regular service</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-blue/5 to-accent-aqua/5 rounded-2xl p-8 border border-primary-blue/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Recurring Service?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-primary-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Consistent Quality</h4>
                    <p className="text-gray-600 text-sm">Same team, same standards, every visit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent-aqua/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-accent-aqua" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Time Savings</h4>
                    <p className="text-gray-600 text-sm">No more searching for cleaners</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-accent-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost Effective</h4>
                    <p className="text-gray-600 text-sm">Save up to 20% with regular service</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-accent-coral" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Trusted Relationship</h4>
                    <p className="text-gray-600 text-sm">Build rapport with your cleaning team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What&apos;s Included in Jacksonville Recurring Cleaning
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our Jacksonville recurring cleaning service provides consistent, reliable cleaning with added benefits 
              for regular clients throughout the Jacksonville area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Benefits</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cleaning Includes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Standard Cleaning</h4>
                    <p className="text-gray-700">Complete dusting, vacuuming, mopping, and sanitizing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Kitchen & Bathroom</h4>
                    <p className="text-gray-700">Thorough cleaning of all surfaces and fixtures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Bedrooms & Living Areas</h4>
                    <p className="text-gray-700">Complete cleaning of all living spaces</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-accent-coral/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-accent-coral font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quality Assurance</h4>
                    <p className="text-gray-700">Consistent quality and attention to detail</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Jacksonville Recurring Cleaning Service?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We provide reliable, consistent cleaning services throughout Jacksonville that fit your lifestyle and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduling Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Jacksonville Flexible Scheduling Options
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the cleaning frequency that works best for your Jacksonville lifestyle and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Weekly Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Perfect for busy families and households that need consistent cleanliness.
              </p>
              <div className="text-primary-blue font-bold text-lg">15% Discount</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center border-2 border-primary-blue">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bi-Weekly Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Most popular option for maintaining a clean home without breaking the bank.
              </p>
              <div className="text-primary-blue font-bold text-lg">10% Discount</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-aqua/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Monthly Cleaning</h3>
              <p className="text-gray-700 mb-4">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Jacksonville Recurring Cleaning Service?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact us today for a free Jacksonville cleaning quote and to set up your recurring cleaning schedule.
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
      
      {/* Comprehensive FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Jacksonville Recurring Cleaning FAQ
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get answers to common questions about our Jacksonville recurring cleaning services
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary-blue" />
                How often can I schedule recurring cleaning?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We offer flexible scheduling options including weekly, bi-weekly, monthly, and quarterly cleaning. 
                You can choose the frequency that best fits your lifestyle and budget. Most clients prefer bi-weekly 
                cleaning as it provides the perfect balance of cleanliness and affordability.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary-blue" />
                What if I need to reschedule or cancel a cleaning?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We understand that life happens! You can reschedule or cancel your cleaning appointment up to 24 hours 
                before the scheduled time at no charge. We'll work with you to find an alternative time that fits 
                your schedule. For recurring clients, we offer priority rescheduling.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary-blue" />
                How much can I save with recurring service?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Recurring clients enjoy significant savings: Weekly cleaning gets 15% off, bi-weekly gets 10% off, 
                monthly gets 5% off, and quarterly deep cleaning gets 20% off. New recurring clients receive an 
                additional 10% off their first month. These discounts make regular cleaning more affordable than 
                one-time services.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-primary-blue" />
                Will I have the same cleaning team each time?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes! We assign the same trusted cleaning team to your recurring service whenever possible. This 
                ensures consistency in quality, builds trust, and allows the team to learn your preferences and 
                home layout. If your regular team is unavailable, we'll send equally qualified professionals.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Check className="w-6 h-6 text-primary-blue" />
                What's included in each recurring cleaning visit?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Each visit includes complete dusting, vacuuming, mopping, and sanitizing of all living spaces. 
                We thoroughly clean kitchens and bathrooms, including surfaces, fixtures, and appliances. 
                Bedrooms and living areas receive comprehensive cleaning. We also provide quality assurance 
                checks to ensure consistent results every time.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary-blue" />
                How long does each cleaning session take?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cleaning time depends on your home's size and condition. A typical 2,000 sq ft home takes about 
                2-3 hours for standard recurring cleaning. We'll provide an estimated time during your initial 
                consultation. Our team works efficiently while maintaining high quality standards.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary-blue" />
                Can I customize my cleaning plan?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely! We create customized cleaning plans based on your specific needs and preferences. 
                You can add or remove services, adjust cleaning frequency, and specify areas that need extra 
                attention. We'll work with you to create the perfect cleaning schedule that fits your lifestyle.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary-blue" />
                What if I'm not satisfied with the cleaning?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied 
                with any cleaning service, we'll return to fix it at no additional cost. Your satisfaction is 
                our priority, and we're committed to making it right every time.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9044563851"
                className="bg-primary-blue hover:bg-primary-blue/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
              <a 
                href="/contact-us"
                className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <a
          href="tel:9044563851"
          className="bg-accent-coral hover:bg-accent-coral/90 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Call for quote"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}





