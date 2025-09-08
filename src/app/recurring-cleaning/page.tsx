import React from 'react';
import { Calendar, Clock, Shield, Check, Star, Phone, Users, Zap, Sparkles, Award, TrendingUp } from 'lucide-react';
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
      {/* Structured Data for Recurring Cleaning Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Jacksonville Recurring Cleaning Services",
            "description": "Professional recurring house cleaning services in Jacksonville, FL. Weekly, bi-weekly, or monthly cleaning schedules with flexible options and consistent quality.",
            "provider": {
              "@type": "Organization",
              "name": "Jacksonville House Cleaning Service",
              "telephone": "+19044563851",
              "email": "info@jacksonvillehousecleaningservice.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jacksonville",
                "addressRegion": "FL",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "serviceType": "Recurring House Cleaning",
            "category": "Cleaning Service",
            "offers": {
              "@type": "Offer",
              "price": "Starting at $120 per visit",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Jacksonville Recurring Cleaning Options",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service,
                  "description": "Included in recurring cleaning service"
                }
              }))
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq, index) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

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
                    <span className="text-white font-medium drop-shadow-md">Quality guaranteed</span>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:9044563851"
                    className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    Call (904) 456-3851
                  </a>
                  <a 
                    href="/contact"
                    className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-primary-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <Calendar className="w-5 h-5" />
                    Get Free Quote
                  </a>
                </div>
              </div>
              
              {/* Right Column - Pricing Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starting at</h3>
                  <div className="text-4xl font-bold text-primary-blue mb-2">$120</div>
                  <p className="text-gray-600">per visit</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent-green" />
                    <span className="text-gray-700">Weekly, bi-weekly, or monthly</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent-green" />
                    <span className="text-gray-700">Customized cleaning plans</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent-green" />
                    <span className="text-gray-700">Same trusted team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent-green" />
                    <span className="text-gray-700">Priority scheduling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent-green" />
                    <span className="text-gray-700">Discounted rates</span>
                  </div>
                </div>
                
                <a 
                  href="/contact"
                  className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Service
                </a>
              </div>
            </div>
          </div>
        </section>

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
      </div>
    </>
  );
}





