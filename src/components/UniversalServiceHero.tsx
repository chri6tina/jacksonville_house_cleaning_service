import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Award, Shield, Star, CheckCircle } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

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
  formServiceType?: string; // e.g. "move-in-cleaning" to pass to the contact form parameter
}

const colorThemes = {
  blue: {
    gradient: 'from-blue-600 to-cyan-600',
    iconBg: 'bg-cyan-200/20',
    iconColor: 'text-cyan-200',
    buttonHover: 'hover:text-cyan-600',
    trustBg: 'bg-white/10'
  },
  purple: {
    gradient: 'from-primary-blue to-blue-600',
    iconBg: 'bg-blue-200/20',
    iconColor: 'text-blue-200',
    buttonHover: 'hover:text-primary-blue',
    trustBg: 'bg-white/10'
  },
  teal: {
    gradient: 'from-primary-blue to-blue-600',
    iconBg: 'bg-blue-200/20',
    iconColor: 'text-blue-200',
    buttonHover: 'hover:text-primary-blue',
    trustBg: 'bg-white/10'
  },
  emerald: {
    gradient: 'from-green-600 to-emerald-500',
    iconBg: 'bg-green-200/20',
    iconColor: 'text-green-200',
    buttonHover: 'hover:text-green-600',
    trustBg: 'bg-white/10'
  }
};

export default function UniversalServiceHero({
  title,
  subtitle,
  Icon,
  features,
  primaryColor = 'blue',
  formServiceType = 'general-cleaning'
}: UniversalServiceHeroProps) {
  
  const theme = colorThemes[primaryColor];

  // Default premium trust badges if none are explicitly provided by the specific service page
  const defaultFeatures = [
    { title: 'Licensed & Insured', subtitle: 'Florida Business since 2015', Icon: Shield },
    { title: 'Same-Day Service', subtitle: 'Rapid Jacksonville Dispatch', Icon: Award },
    { title: '5-Star Experts', subtitle: 'Trusted by 5,000+ Locals', Icon: Star },
  ];

  const activeFeatures = features || defaultFeatures;

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden flex items-center justify-center min-h-[75vh]">
      {/* Background Image (Matching Home Page) */}
      <div className="absolute inset-0">
        <Image
          src="/jhcs_hero2.png"
          alt={`${title} Background`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark overlay matching the Home Page strictly */}
      <div className="absolute inset-0 bg-black/60 sm:bg-black/65"></div>
      
      {/* Decorative Blur Orbs for visual depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl opacity-30 mix-blend-overlay pointer-events-none"></div>

      {/* Main Glassmorphism Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Dynamic Floating Icon */}
        <div className={`w-20 h-20 ${theme.iconBg} rounded-3xl flex items-center justify-center mb-8 shadow-2xl backdrop-blur-md border border-white/20 transform transition-transform hover:scale-110 duration-500`}>
          <Icon className={`w-10 h-10 ${theme.iconColor}`} />
        </div>
        
        {/* Title & Subtitle */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 text-white tracking-tight drop-shadow-md">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-medium drop-shadow leading-relaxed">
          {subtitle}
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center w-full max-w-2xl mb-16">
          <a
            href="tel:9044563851"
            className="group relative overflow-hidden bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] flex items-center justify-center gap-3 transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 w-full h-full bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Phone className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Call (904) 456-3851</span>
          </a>
          
          <Link
            href={`/contact?service=${formServiceType}`}
            className="group backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:border-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1"
          >
            <span className={`relative z-10 ${theme.buttonHover} transition-colors`}>Get an Instant Quote</span>
            <ArrowRight className={`w-5 h-5 relative z-10 ${theme.buttonHover} transition-colors group-hover:translate-x-1`} />
          </Link>
        </div>

        {/* Global Premium Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
          {activeFeatures.map((feature, idx) => (
            <div key={idx} className={`${theme.trustBg} backdrop-blur-lg rounded-2xl p-5 border border-white/20 shadow-xl flex flex-col items-center transform transition-all duration-300 hover:-translate-y-1 hover:bg-white/20`}>
              <div className={`w-12 h-12 ${theme.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                <feature.Icon className={`w-6 h-6 ${theme.iconColor}`} />
              </div>
              <h3 className="font-bold text-white text-lg mb-1">{feature.title}</h3>
              <p className="text-white/80 text-sm font-medium text-center">{feature.subtitle}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
