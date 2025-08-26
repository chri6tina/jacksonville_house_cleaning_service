'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  // Generate schema markup for breadcrumbs
  const generateBreadcrumbSchema = () => {
    const breadcrumbList = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.label,
        'item': item.href ? `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jacksonvillehousecleaning.com'}${item.href}` : undefined
      }))
    };

    return breadcrumbList;
  };

  return (
    <>
      {/* Schema markup for breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema())
        }}
      />
      
      {/* Visual breadcrumb navigation */}
      <nav className={`flex items-center space-x-2 text-sm text-gray-600 ${className}`} aria-label="Breadcrumb">
        <Link 
          href="/" 
          className="flex items-center hover:text-primary-blue transition-colors"
        >
          <Home className="w-4 h-4 mr-1" />
          <span className="hidden sm:inline">Home</span>
        </Link>
        
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            {item.current || !item.href ? (
              <span className={`font-medium ${item.current ? 'text-primary-blue' : 'text-gray-900'}`}>
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href} 
                className="hover:text-primary-blue transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
