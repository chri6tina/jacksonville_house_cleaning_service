'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Shield, Leaf, Star, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative py-8 sm:py-12 lg:py-16 overflow-hidden"
      style={{
        backgroundImage: 'url(/hero1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for maximum text readability */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white/50 shadow-lg">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            <span className="hidden xs:inline">Trusted by 500+ Jacksonville Families</span>
            <span className="xs:hidden">500+ Jacksonville Families</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-white">
            <span className="block">Professional</span>
            <span className="block text-cyan-400">Cleaning Services</span>
            <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white/90 mt-2 sm:mt-3">
              in Jacksonville, FL
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/95 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Experience the difference with our eco-friendly, thorough cleaning services. 
            We transform homes and businesses with attention to detail and guaranteed satisfaction.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 px-4">
            <Link 
              href="/contact" 
              className="bg-accent-coral hover:bg-accent-coral/90 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              Book Your Cleaning
            </Link>
            <Link 
              href="/services" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
            >
              View Our Services
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mt-8 sm:mt-10 px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
            </div>
            <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">Eco-Friendly</h3>
            <p className="text-white/80 text-xs leading-relaxed">Safe, non-toxic cleaning products</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue" />
            </div>
            <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">Licensed & Insured</h3>
            <p className="text-white/80 text-xs leading-relaxed">Fully licensed and insured</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-coral/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent-coral" />
            </div>
            <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">100% Satisfaction</h3>
            <p className="text-white/80 text-xs leading-relaxed">Guaranteed satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
