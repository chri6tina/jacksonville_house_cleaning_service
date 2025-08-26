'use client';

import React from 'react';

export interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  authorUrl?: string;
  publishDate: string;
  modifiedDate?: string;
  imageUrl?: string;
  articleBody: string;
  keywords?: string[];
  category?: string;
  wordCount?: number;
  readingTime?: string;
  publisherName?: string;
  publisherLogo?: string;
  publisherUrl?: string;
}

export default function ArticleSchema({
  title,
  description,
  author,
  authorUrl,
  publishDate,
  modifiedDate,
  imageUrl,
  articleBody,
  keywords = [],
  category = 'Cleaning Tips',
  wordCount,
  readingTime,
  publisherName = 'Jacksonville House Cleaning Service',
  publisherLogo = 'https://jacksonvillehousecleaning.com/JHCSlogo.png',
  publisherUrl = 'https://jacksonvillehousecleaning.com'
}: ArticleSchemaProps) {
  // Generate Article schema markup
  const generateArticleSchema = () => {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': title,
      'description': description,
      'image': imageUrl ? imageUrl : publisherLogo,
      'author': {
        '@type': 'Person',
        'name': author,
        'url': authorUrl || publisherUrl
      },
      'publisher': {
        '@type': 'Organization',
        'name': publisherName,
        'logo': {
          '@type': 'ImageObject',
          'url': publisherLogo
        },
        'url': publisherUrl
      },
      'datePublished': publishDate,
      'dateModified': modifiedDate || publishDate,
      'articleBody': articleBody,
      'articleSection': category,
      'keywords': keywords.join(', '),
      'wordCount': wordCount || articleBody.split(' ').length,
      'timeRequired': readingTime ? `PT${readingTime.replace(/\s*min.*/, 'M')}` : undefined,
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': typeof window !== 'undefined' ? window.location.href : ''
      }
    };

    return articleSchema;
  };

  // Generate Organization schema for the publisher
  const generateOrganizationSchema = () => {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': publisherName,
      'url': publisherUrl,
      'logo': publisherLogo,
      'sameAs': [
        'https://facebook.com/jacksonvillehousecleaningservice',
        'https://instagram.com/jacksonvillehousecleaningservice',
        'https://twitter.com/jacksonvillehousecleaningservice'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+19044563851',
        'contactType': 'customer service',
        'areaServed': 'Jacksonville, FL',
        'availableLanguage': 'English'
      }
    };

    return organizationSchema;
  };

  return (
    <>
      {/* Article Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema())
        }}
      />
      
      {/* Organization Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema())
        }}
      />
    </>
  );
}
