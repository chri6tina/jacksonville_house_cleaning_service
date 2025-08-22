'use client';

import React from 'react';
import { Phone, Mail, Clock, Sparkles, Shield, Star } from 'lucide-react';
import Link from 'next/link';

const CTASection: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Complete peace of mind with full coverage'
    },
    {
      icon: Star,
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction or your money back'
    },
    {
      icon: Clock,
      title: 'Same Day Available',
      description: 'Emergency cleaning when you need it most'
    }
  ];

  return (
    <section className="py-20 bg-blue-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Don&apos;t let cleaning stress you out. Our professional team is here to help you maintain a clean, healthy home.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                                 <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center mr-4">
                 <benefit.icon className="w-6 h-6 text-primary-blue" />
               </div>
               <div>
                 <div className="font-semibold text-lg">{benefit.title}</div>
                 <div className="text-gray-700">{benefit.description}</div>
               </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Get Free Quote
              </Link>
                             <a 
                 href="tel:9044563851"
                 className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
               >
                 <Phone className="w-5 h-5" />
                 Call Now
               </a>
            </div>
          </div>

                     {/* Right Side - Contact Info */}
           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-lg">
             <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
               Contact Information
             </h3>
            
            <div className="space-y-6">
              {/* Phone */}
                             <div className="flex items-center">
                 <div className="w-12 h-12 bg-accent-coral rounded-xl flex items-center justify-center mr-4">
                   <Phone className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <div className="font-semibold text-lg text-gray-900">Call Us Today</div>
                   <a 
                     href="tel:9044563851"
                     className="text-2xl font-bold text-gray-900 hover:text-accent-coral transition-colors duration-300"
                   >
                     (904) 456-3851
                   </a>
                 </div>
               </div>

              {/* Email */}
                             <div className="flex items-center">
                 <div className="w-12 h-12 bg-accent-aqua rounded-xl flex items-center justify-center mr-4">
                   <Mail className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <div className="font-semibold text-lg text-gray-900">Email Us</div>
                   <a 
                     href="mailto:info@jaxcleaning.com"
                     className="text-lg text-gray-900 hover:text-accent-aqua transition-colors duration-300"
                   >
                     info@jaxcleaning.com
                   </a>
                 </div>
               </div>

              {/* Hours */}
                             <div className="flex items-center">
                 <div className="w-12 h-12 bg-accent-green rounded-xl flex items-center justify-center mr-4">
                   <Clock className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <div className="font-semibold text-lg text-gray-900">Business Hours</div>
                   <div className="text-lg text-gray-900">
                     Mon-Fri: 8AM-6PM<br />
                     Sat: 9AM-4PM<br />
                     Sun: By Appointment
                   </div>
                 </div>
               </div>
            </div>

            {/* Service Areas Note */}
                         <div className="mt-8 p-4 bg-primary-blue/10 rounded-xl text-center">
               <div className="font-semibold mb-2 text-gray-900">Serving All of Jacksonville</div>
               <div className="text-gray-700 text-sm">
                 From the beaches to the suburbs, we cover 50+ neighborhoods throughout Northeast Florida
               </div>
             </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-2 text-primary-blue">500+</div>
              <div className="text-gray-700">Happy Families Served</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-2 text-primary-blue">13+</div>
              <div className="text-gray-700">Years of Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-2 text-primary-blue">100%</div>
              <div className="text-gray-700">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
