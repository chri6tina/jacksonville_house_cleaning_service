'use client';

import React from 'react';

export interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  organizer: {
    name: string;
    url: string;
    phone?: string;
    email?: string;
  };
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
    validFrom: string;
    validThrough?: string;
    url?: string;
  };
  eventStatus?: 'EventScheduled' | 'EventCancelled' | 'EventPostponed' | 'EventRescheduled';
  eventAttendanceMode?: 'OfflineEventAttendanceMode' | 'OnlineEventAttendanceMode' | 'MixedEventAttendanceMode';
  category?: string;
  keywords?: string[];
  imageUrl?: string;
  url?: string;
}

export default function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  organizer,
  offers,
  eventStatus = 'EventScheduled',
  eventAttendanceMode = 'OfflineEventAttendanceMode',
  category = 'Special Offer',
  keywords = [],
  imageUrl,
  url
}: EventSchemaProps) {
  // Generate Event schema markup
  const generateEventSchema = () => {
    const eventSchema: any = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      'name': name,
      'description': description,
      'startDate': startDate,
      'eventStatus': eventStatus,
      'eventAttendanceMode': eventAttendanceMode,
      'organizer': {
        '@type': 'Organization',
        'name': organizer.name,
        'url': organizer.url
      },
      'category': category,
      'keywords': keywords.join(', ')
    };

    // Add optional fields if provided
    if (endDate) {
      eventSchema.endDate = endDate;
    }

    if (location) {
      eventSchema.location = {
        '@type': 'Place',
        'name': location.name,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': location.address,
          'addressLocality': location.city,
          'addressRegion': location.state,
          'postalCode': location.zipCode,
          'addressCountry': 'US'
        }
      };
    }

    if (offers) {
      eventSchema.offers = {
        '@type': 'Offer',
        'price': offers.price,
        'priceCurrency': offers.priceCurrency,
        'availability': offers.availability,
        'validFrom': offers.validFrom,
        'url': offers.url || url
      };

      if (offers.validThrough) {
        eventSchema.offers.validThrough = offers.validThrough;
      }
    }

    if (imageUrl) {
      eventSchema.image = imageUrl;
    }

    if (url) {
      eventSchema.url = url;
    }

    // Add organizer contact details if provided
    if (organizer.phone) {
      eventSchema.organizer.telephone = organizer.phone;
    }

    if (organizer.email) {
      eventSchema.organizer.email = organizer.email;
    }

    return eventSchema;
  };

  // Generate Organization schema for the organizer
  const generateOrganizationSchema = () => {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': organizer.name,
      'url': organizer.url,
      'logo': 'https://jacksonvillehousecleaningservice.com/JHCSlogo.png',
      'sameAs': [
        'https://facebook.com/jacksonvillehousecleaningservice',
        'https://instagram.com/jacksonvillehousecleaningservice',
        'https://twitter.com/jacksonvillehousecleaningservice'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': organizer.phone || '+19044563851',
        'contactType': 'customer service',
        'areaServed': 'Jacksonville, FL',
        'availableLanguage': 'English'
      }
    };

    return organizationSchema;
  };

  return (
    <>
      {/* Event Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateEventSchema())
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
