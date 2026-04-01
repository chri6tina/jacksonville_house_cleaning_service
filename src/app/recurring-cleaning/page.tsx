import React from 'react';
import { Calendar, Clock, Shield, Check, Star, Phone, Users, Zap, Sparkles, Award, TrendingUp } from 'lucide-react';
import UniversalServiceHero from '@/components/UniversalServiceHero';

import Image from 'next/image';
import RecurringCleaningCalculator from '@/components/RecurringCleaningCalculator';

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

  const faqs = [
    {
      question: "Do I get the same cleaning team each time?",
      answer: "Yes! We assign the same trusted cleaning team to your recurring service whenever possible. This ensures consistency in quality, builds trust, and allows the team to learn your preferences and home layout. If your regular team is unavailable, we'll send equally qualified professionals."
    },
    {
      question: "What's included in each recurring cleaning visit?",
      answer: "Each visit includes complete dusting, vacuuming, mopping, and sanitizing of all living spaces. We thoroughly clean kitchens and bathrooms, including surfaces, fixtures, and appliances. Bedrooms and living areas receive comprehensive cleaning. We also provide quality assurance checks to ensure consistent results every time."
    },
    {
      question: "How long does each cleaning session take?",
      answer: "Cleaning time depends on your home's size and condition. A typical 2,000 sq ft home takes about 2-3 hours for standard recurring cleaning. We'll provide an estimated time during your initial consultation. Our team works efficiently while maintaining high quality standards."
    },
    {
      question: "Can I customize my cleaning plan?",
      answer: "Absolutely! We create customized cleaning plans based on your specific needs and preferences. You can add or remove services, adjust cleaning frequency, and specify areas that need extra attention. We'll work with you to create the perfect cleaning schedule that fits your lifestyle."
    },
    {
      question: "What if I'm not satisfied with the cleaning?",
      answer: "We stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied with any cleaning service, we'll return to fix it at no additional cost. Your satisfaction is our priority, and we're committed to making it right every time."
    }
  ];

  return (
    <>
      <UniversalServiceHero 
        title="Jacksonville Recurring Cleaning Services"
        subtitle="Maintain a consistently clean Jacksonville home with our reliable recurring cleaning services. Choose weekly, bi-weekly, or monthly schedules that fit your lifestyle and budget."
        Icon={Sparkles}
        primaryColor="blue"
        formServiceType="recurring-cleaning"
      />

        {/* Quote Calculator Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RecurringCleaningCalculator />
          </div>
        </section>

        {/* Service Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Choose Recurring Cleaning?</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our recurring cleaning service is designed to keep your Jacksonville home consistently clean and comfortable, 
                while saving you time and money.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                  <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">What's Included in Recurring Cleaning</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Each recurring cleaning visit includes comprehensive cleaning of all living spaces, ensuring your home 
                stays consistently clean and comfortable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Get answers to common questions about our recurring cleaning services in Jacksonville.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Check className="w-6 h-6 text-primary-blue" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
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
                  href="/contact"
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
      </>
  );
}
