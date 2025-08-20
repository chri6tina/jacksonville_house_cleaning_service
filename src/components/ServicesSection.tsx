'use client';

import React from 'react';
import ServiceCard from './ServiceCard';
import { 
  Home, 
  Building2, 
  Sparkles, 
  Car, 
  Wind, 
  Scissors, 
  Droplets, 
  Shield 
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Regular house cleaning, deep cleaning, and move-in/move-out services for homes and apartments.",
      icon: Home,
      href: "/services",
      isPopular: false
    },
    {
      title: "Commercial Cleaning",
      description: "Office cleaning, retail spaces, medical facilities, and industrial cleaning services.",
      icon: Building2,
      href: "/office-cleaning",
      isPopular: false
    },
    {
      title: "Deep Cleaning",
      description: "Thorough cleaning of all surfaces, appliances, and hard-to-reach areas for a spotless home.",
      icon: Sparkles,
      href: "/extreme-deep-cleaning",
      isPopular: true
    },
    {
      title: "Carpet Cleaning",
      description: "Professional carpet and upholstery cleaning using eco-friendly products and advanced equipment.",
      icon: Car,
      href: "/carpet-cleaning",
      isPopular: false
    },
    {
      title: "Window Cleaning",
      description: "Interior and exterior window cleaning for crystal clear views and natural light.",
      icon: Wind,
      href: "/window-cleaning",
      isPopular: false
    },
    {
      title: "Move-In/Move-Out",
      description: "Comprehensive cleaning services for moving transitions, ensuring your space is spotless.",
      icon: Scissors,
      href: "/move-in-move-out",
      isPopular: false
    },
    {
      title: "Kitchen Deep Clean",
      description: "Thorough kitchen cleaning including appliances, cabinets, countertops, and floors.",
      icon: Droplets,
      href: "/extreme-deep-cleaning",
      isPopular: false
    },
    {
      title: "Bathroom Sanitization",
      description: "Complete bathroom cleaning and sanitization for a hygienic and fresh environment.",
      icon: Shield,
      href: "/extreme-deep-cleaning",
      isPopular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Our Cleaning Services
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            From regular maintenance to deep cleaning projects, we offer comprehensive cleaning solutions 
            tailored to your specific needs and schedule.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              isPopular={service.isPopular}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/services" 
            className="inline-flex items-center text-primary-blue hover:text-primary-blue/80 font-semibold text-lg transition-colors duration-300"
          >
            View All Services
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
