import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Shield, Star, Award, CheckCircle } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import QuickQuoteForm from './QuickQuoteForm';

interface HeroFeature {
  title: string;
  subtitle: string;
  Icon: LucideIcon;
}

interface UniversalServiceHeroProps {
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  features?: HeroFeature[];
  primaryColor?: 'blue' | 'purple' | 'teal' | 'emerald';
  formServiceType?: string;
}

const colorThemes = {
  blue: { bg: 'bg-primary-blue', text: 'text-primary-blue', iconBg: 'bg-blue-100', iconColor: 'text-primary-blue', border: 'border-blue-200' },
  purple: { bg: 'bg-purple-600', text: 'text-purple-700', iconBg: 'bg-purple-100', iconColor: 'text-purple-700', border: 'border-purple-200' },
  teal: { bg: 'bg-teal-600', text: 'text-teal-700', iconBg: 'bg-teal-100', iconColor: 'text-teal-700', border: 'border-teal-200' },
  emerald: { bg: 'bg-emerald-600', text: 'text-emerald-700', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-700', border: 'border-emerald-200' }
};

export default function UniversalServiceHero({
  title,
  subtitle,
  Icon,
  features,
  primaryColor = 'blue',
  formServiceType = 'other'
}: UniversalServiceHeroProps) {
  
  const theme = colorThemes[primaryColor] || colorThemes.blue;

  // Default premium trust badges if none provided
  const defaultFeatures = [
    { title: 'Licensed & Insured', subtitle: 'Protection & peace of mind', Icon: Shield },
    { title: '5-Star Reviews', subtitle: 'Consistently perfect ratings', Icon: Star },
    { title: '100% Guaranteed', subtitle: 'Satisfaction on every clean', Icon: Award },
  ];

  const activeFeatures = features || defaultFeatures;

  return (
    <>
      {/* Main Hero Container */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-gray-900 border-b-4 border-primary-blue">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/jhcs_hero2.png"
            alt={`${title} Cleaning Service in Jacksonville`}
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        
        {/* Simple dark overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-black/65"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-8 sm:mt-12 lg:mt-0">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
            
            {/* Left Column: Text & Value Prop */}
            <div className="text-left w-full lg:max-w-2xl">
              
              {/* Dynamic Service Icon Badge */}
              <div 
                className={`inline-flex items-center gap-2 bg-white ${theme.text} px-4 py-2 rounded-lg text-sm font-bold mb-6 shadow-md animate-fade-in-up`}
                style={{ animationDelay: '100ms' }}
              >
                <Icon className={`w-5 h-5 ${theme.text}`} />
                Jacksonville's Top-Rated Cleaning Professional
              </div>
              
              {/* Main Headline */}
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white animate-fade-in-up drop-shadow-lg"
                style={{ animationDelay: '200ms' }}
              >
                {title}
              </h1>
              
              {/* Subtitle with standard formatting */}
              <div 
                className="text-lg sm:text-xl text-gray-100 mb-10 max-w-2xl leading-relaxed font-medium animate-fade-in-up space-y-3"
                style={{ animationDelay: '300ms' }}
              >
                <p className="mb-6 drop-shadow-md">
                  {subtitle}
                </p>
                <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-base font-semibold">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent-green" /> Supplies Included</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent-green" /> Background-Checked</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent-green" /> No Hidden Fees</li>
                </ul>
              </div>
              
              {/* Fallback Call Action (secondary to the form) */}
              <div 
                className="animate-fade-in-up"
                style={{ animationDelay: '400ms' }}
              >
                <Link 
                  href="tel:+19044563851" 
                  className={`inline-flex items-center gap-3 ${theme.bg} hover:brightness-110 text-white transition-all duration-200 font-bold text-xl px-8 py-4 rounded-lg shadow-lg`}
                >
                  <Phone className="w-6 h-6" />
                  Call (904) 456-3851
                </Link>
              </div>
            </div>

            {/* Right Column: Grounded Solid White Lead Form (Pre-filled via initialService) */}
            <div 
              className="w-full lg:w-[460px] shrink-0 animate-fade-in-up"
              style={{ animationDelay: '500ms' }}
            >
              <QuickQuoteForm initialService={formServiceType} />
            </div>
            
          </div>
        </div>
      </section>

      {/* Trust & Authority Bar - Dynamic mapping or fallback to defaults */}
      <section className="bg-gray-50 border-b border-gray-200 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            
            {activeFeatures.map((feature, idx) => {
              const FeatureIcon = feature.Icon;
              return (
                <div key={idx} className={`flex flex-col items-center justify-center text-center px-4 ${idx > 0 ? 'pt-6 sm:pt-0' : ''}`}>
                  <div className={`w-12 h-12 ${theme.iconBg} rounded-full flex items-center justify-center mb-3 border ${theme.border}`}>
                    <FeatureIcon className={`w-6 h-6 ${theme.iconColor}`} />
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-sm sm:text-base">{feature.title}</h3>
                  <p className="text-gray-600 text-xs mt-1 font-medium">{feature.subtitle}</p>
                </div>
              );
            })}
            
          </div>
        </div>
      </section>
    </>
  );
}
