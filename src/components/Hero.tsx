'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Shield, Leaf, Star, CheckCircle, MapPin, Clock, Users, Award, Phone, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/jhcs_hero2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for maximum text readability */}
      <div className="absolute inset-0 bg-black/60 sm:bg-black/65"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Local Business Badge */}
          <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white shadow-lg">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary-blue" />
            <span className="hidden xs:inline">Family-Owned Jacksonville Business Since 2015</span>
            <span className="xs:hidden">Jacksonville Since 2015</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-lg">
            <span className="block">Professional</span>
            <span className="block text-cyan-300 sm:text-cyan-400">House Cleaning</span>
            <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mt-3 sm:mt-4 drop-shadow-md">
              in Jacksonville, FL
            </span>
          </h1>
          
          {/* Subtitle with local focus */}
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2 drop-shadow-md">
            We&apos;re your neighbors in Jacksonville, providing reliable, eco-friendly cleaning services 
            that keep our community&apos;s homes and offices spotless. No corporate chains, just local 
            professionals who care about your space like it&apos;s our own.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 px-4">
            <Link 
              href="/contact" 
              className="bg-accent-coral hover:bg-accent-coral/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              Get Free Quote
            </Link>
            <Link 
              href="tel:+19044563851" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Call (904) 456-3851
            </Link>
          </div>

          {/* Quick Action Bar */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 max-w-4xl mx-auto mb-8 sm:mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center justify-center gap-2 text-white text-sm sm:text-base">
                <Clock className="w-4 h-4 text-accent-green" />
                <span>Same Day Available</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white text-sm sm:text-base">
                <Shield className="w-4 h-4 text-primary-blue" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white text-sm sm:text-base">
                <Leaf className="w-4 h-4 text-accent-aqua" />
                <span>Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mt-8 sm:mt-12 px-4">
          <div className="bg-white/20 sm:bg-white/15 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/20 transition-all duration-300 text-center group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-green/30 sm:bg-accent-green/25 rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-200">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 text-accent-green" />
            </div>
            <h3 className="font-bold text-white text-sm sm:text-base mb-2 drop-shadow-sm">500+ Local Families</h3>
            <p className="text-white/80 text-xs leading-relaxed drop-shadow-sm">Trust us with their homes</p>
          </div>
          
          <div className="bg-white/20 sm:bg-white/15 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/20 transition-all duration-300 text-center group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-blue/30 sm:bg-primary-blue/25 rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-200">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-primary-blue" />
            </div>
            <h3 className="font-bold text-white text-sm sm:text-base mb-2 drop-shadow-sm">Licensed & Insured</h3>
            <p className="text-white/80 text-xs leading-relaxed drop-shadow-sm">Florida business license</p>
          </div>
          
          <div className="bg-white/20 sm:bg-white/15 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/20 transition-all duration-300 text-center group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-coral/30 sm:bg-accent-coral/25 rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-200">
              <Star className="w-6 h-6 sm:w-7 sm:h-7 text-accent-coral" />
            </div>
            <h3 className="font-bold text-white text-sm sm:text-base mb-2 drop-shadow-sm">5-Star Local Reviews</h3>
            <p className="text-white/80 text-xs leading-relaxed drop-shadow-sm">Jacksonville neighbors</p>
          </div>

          <div className="bg-white/20 sm:bg-white/15 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/20 transition-all duration-300 text-center group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-aqua/30 sm:bg-accent-aqua/25 rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-200">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 text-accent-aqua" />
            </div>
            <h3 className="font-bold text-white text-sm sm:text-base mb-2 drop-shadow-sm">Satisfaction Guaranteed</h3>
            <p className="text-white/80 text-xs leading-relaxed drop-shadow-sm">100% guarantee</p>
          </div>
        </div>

        {/* Service Areas Quick Access */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-white/90 text-sm sm:text-base mb-4">
            <strong>Proudly serving:</strong> Downtown Jacksonville, Riverside, San Marco, Mandarin, Southside, Arlington, Jacksonville Beach, Atlantic Beach, Neptune Beach, Ponte Vedra Beach
          </p>
          <Link 
            href="/locations" 
            className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm sm:text-base underline underline-offset-4 transition-colors duration-200"
          >
            <MapPin className="w-4 h-4" />
            View All Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
