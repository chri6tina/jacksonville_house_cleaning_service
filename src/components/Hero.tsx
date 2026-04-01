'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Star, Users, Award, Phone, CheckCircle } from 'lucide-react';
import QuickQuoteForm from './QuickQuoteForm';

const Hero: React.FC = () => {
  return (
    <>
      {/* Main Hero Container */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-gray-900 border-b-4 border-primary-blue">
        
        {/* Grounded Local Business Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/jhcs_hero2.png"
            alt="Jacksonville House Cleaning Service Professional Cleaners"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        
        {/* Simple, standard dark overlay for high contrast text readability */}
        <div className="absolute inset-0 z-0 bg-black/60"></div>
        
        {/* No glowing light flares here - pure local business focus */}

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
            
            {/* Left Column: Trustworthy Text & Value Prop */}
            <div className="text-left w-full lg:max-w-2xl pt-10">
              
              {/* Solid Trust Badge */}
              <div 
                className="inline-flex items-center gap-2 bg-white text-primary-blue px-4 py-2 rounded-lg text-sm font-bold mb-6 shadow-md animate-fade-in-up"
                style={{ animationDelay: '100ms' }}
              >
                <Award className="w-5 h-5 text-accent-coral" />
                Jacksonville's Top-Rated Cleaning Service Since 2015
              </div>
              
              {/* Main Headline - Bold, white, professional */}
              <h1 
                className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight text-white animate-fade-in-up drop-shadow-lg"
                style={{ animationDelay: '200ms' }}
              >
                <span className="block mb-2">Professional</span>
                <span className="block text-accent-aqua">House Cleaning</span>
                <span className="block text-3xl sm:text-4xl text-white mt-3 font-semibold">
                  in Jacksonville, FL
                </span>
              </h1>
              
              {/* Standard Subtitle with Checkmarks */}
              <div 
                className="text-lg sm:text-xl text-gray-100 mb-10 max-w-2xl leading-relaxed font-medium animate-fade-in-up space-y-3"
                style={{ animationDelay: '300ms' }}
              >
                <p className="mb-6 drop-shadow-md">
                  Reliable, thorough, and highly-trained cleaners dedicated to giving you back your free time. No corporate chains, just local professionals who care.
                </p>
                <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-base font-semibold">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent-green" /> Licensed & Insured</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent-green" /> Background-Checked</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent-green" /> Supplies Included</li>
                </ul>
              </div>
              
              {/* Phone Call Action */}
              <div 
                className="animate-fade-in-up"
                style={{ animationDelay: '400ms' }}
              >
                <Link 
                  href="tel:+19044563851" 
                  className="inline-flex items-center gap-3 bg-primary-blue hover:bg-blue-700 text-white transition-colors duration-200 font-bold text-xl px-8 py-4 rounded-lg shadow-lg"
                >
                  <Phone className="w-6 h-6" />
                  Call (904) 456-3851
                </Link>
              </div>
            </div>

            {/* Right Column: Grounded Solid White Lead Form */}
            <div 
              className="w-full lg:w-[460px] shrink-0 animate-fade-in-up"
              style={{ animationDelay: '500ms' }}
            >
              <QuickQuoteForm />
            </div>
            
          </div>
        </div>
      </section>

      {/* Trust & Authority Bar - Kept the decluttered layout but ensured colors feel local */}
      <section className="bg-gray-50 border-b border-gray-200 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-x divide-gray-200">
            
            <div className="flex flex-col items-center justify-center text-center px-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 border border-blue-200">
                <Users className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="font-extrabold text-gray-900 text-sm sm:text-base">500+ Local Families</h3>
              <p className="text-gray-600 text-xs mt-1 font-medium">Trust us with their homes</p>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center px-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3 border border-green-200">
                <Shield className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="font-extrabold text-gray-900 text-sm sm:text-base">Licensed & Insured</h3>
              <p className="text-gray-600 text-xs mt-1 font-medium">Protection & peace of mind</p>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center px-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-3 border border-rose-200">
                <Star className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="font-extrabold text-gray-900 text-sm sm:text-base">5-Star Local Reviews</h3>
              <p className="text-gray-600 text-xs mt-1 font-medium">Consistently perfect ratings</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center px-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-3 border border-cyan-200">
                <Award className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="font-extrabold text-gray-900 text-sm sm:text-base">100% Guaranteed</h3>
              <p className="text-gray-600 text-xs mt-1 font-medium">Satisfaction on every clean</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
