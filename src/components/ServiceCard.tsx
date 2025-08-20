'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  features?: string[];
  isPopular?: boolean;
}

const ServiceCard = ({ title, description, icon: Icon, href, features, isPopular = false }: ServiceCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${isPopular ? 'border-accent-coral' : 'border-transparent'} relative overflow-hidden`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-accent-coral text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        {/* Icon */}
        <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-primary-blue" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-charcoal mb-3">{title}</h3>

        {/* Description */}
        <p className="text-charcoal/70 mb-4 leading-relaxed">{description}</p>

        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="mb-6 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-charcoal/80">
                <div className="w-2 h-2 bg-accent-aqua rounded-full mr-3"></div>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Learn More Button */}
        <Link
          href={href}
          className="inline-flex items-center text-primary-blue hover:text-primary-blue/80 font-semibold transition-colors duration-200 group"
        >
          Learn More
          <svg 
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

