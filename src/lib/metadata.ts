import { Metadata } from 'next';

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
    images?: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
  twitter?: {
    title?: string;
    description?: string;
    images?: string[];
  };
}

export const SITE_CONFIG = {
  name: 'Jacksonville House Cleaning Service',
  url: 'https://jacksonvillehousecleaningservice.com',
  logo: '/JHCSlogo.png',
  phone: '+19044563851',
  email: 'info@jacksonvillehousecleaningservice.com',
  address: 'Jacksonville, FL',
  description: 'Professional residential and commercial cleaning services in Jacksonville, FL',
  social: {
    facebook: 'https://facebook.com/jacksonvillehousecleaningservice',
    instagram: 'https://instagram.com/jacksonvillehousecleaningservice',
    twitter: 'https://twitter.com/jacksonvillehousecleaningservice',
  }
};

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  openGraph,
  twitter
}: PageMetadata): Metadata {
  const fullTitle = title.includes(SITE_CONFIG.name) 
    ? title 
    : `${title} - ${SITE_CONFIG.name}`;
  
  const fullDescription = description.length > 160 
    ? description.substring(0, 157) + '...' 
    : description;

  const defaultKeywords = [
    'Jacksonville cleaning service',
    'house cleaning',
    'office cleaning',
    'deep cleaning',
    'move-in move-out cleaning',
    'eco-friendly cleaning',
    'post-construction cleaning',
    'recurring cleaning',
    'professional cleaning',
    'Florida cleaning service'
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords.join(', '),
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: openGraph?.title || fullTitle,
      description: openGraph?.description || fullDescription,
      type: (openGraph?.type as 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other') || 'website',
      locale: 'en_US',
      siteName: SITE_CONFIG.name,
      url: canonical || SITE_CONFIG.url,
      images: openGraph?.images || [
        {
          url: SITE_CONFIG.logo,
          width: 400,
          height: 400,
          alt: `${SITE_CONFIG.name} Logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: twitter?.title || fullTitle,
      description: twitter?.description || fullDescription,
      images: twitter?.images || [SITE_CONFIG.logo],
      creator: '@jacksonvillehousecleaningservice',
      site: '@jacksonvillehousecleaningservice',
    },
    alternates: {
      canonical: canonical || SITE_CONFIG.url,
    },
  };
}

// Location-specific metadata generators
export function generateLocationMetadata(location: string, theme: string): PageMetadata {
  const locationData = {
    southside: {
      title: 'Southside Jacksonville House Cleaning Service',
      description: `Professional house cleaning services in Southside Jacksonville. Family-friendly cleaning with eco-friendly products. Serving ZIP codes 32216, 32256. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['Southside Jacksonville cleaning', 'Southside house cleaning', 'Jacksonville 32216', 'Jacksonville 32256', 'family cleaning service'],
      canonical: `${SITE_CONFIG.url}/locations/southside`
    },
    arlington: {
      title: 'Arlington Jacksonville House Cleaning Service',
      description: `Professional house cleaning services in Arlington Jacksonville. Historic community cleaning with experienced staff. Serving ZIP codes 32211, 32225. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['Arlington Jacksonville cleaning', 'Arlington house cleaning', 'Jacksonville 32211', 'Jacksonville 32225', 'historic community cleaning'],
      canonical: `${SITE_CONFIG.url}/locations/arlington`
    },
    mandarin: {
      title: 'Mandarin Jacksonville House Cleaning Service',
      description: `Professional house cleaning services in Mandarin Jacksonville. Upscale community cleaning with premium service. Serving ZIP codes 32223, 32257. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['Mandarin Jacksonville cleaning', 'Mandarin house cleaning', 'Jacksonville 32223', 'Jacksonville 32257', 'upscale cleaning service'],
      canonical: `${SITE_CONFIG.url}/locations/mandarin`
    },
    riverside: {
      title: 'Riverside Jacksonville House Cleaning Service',
      description: `Professional house cleaning services in Riverside Jacksonville. Historic district cleaning with attention to detail. Serving ZIP codes 32205, 32206. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['Riverside Jacksonville cleaning', 'Riverside house cleaning', 'Jacksonville 32205', 'Jacksonville 32206', 'historic district cleaning'],
      canonical: `${SITE_CONFIG.url}/locations/riverside`
    },
    'san-marco': {
      title: 'San Marco Jacksonville House Cleaning Service',
      description: `Professional house cleaning services in San Marco Jacksonville. Upscale community cleaning with luxury service. Serving ZIP code 32207. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['San Marco Jacksonville cleaning', 'San Marco house cleaning', 'Jacksonville 32207', 'upscale cleaning service'],
      canonical: `${SITE_CONFIG.url}/locations/san-marco`
    },
    downtown: {
      title: 'Downtown Jacksonville House Cleaning Service',
      description: `Professional house cleaning services in Downtown Jacksonville. Business district cleaning with flexible scheduling. Serving ZIP codes 32202, 32204. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['Downtown Jacksonville cleaning', 'Downtown house cleaning', 'Jacksonville 32202', 'Jacksonville 32204', 'business district cleaning'],
      canonical: `${SITE_CONFIG.url}/locations/downtown`
    },
    'jacksonville-beach': {
      title: 'Jacksonville Beach House Cleaning Service',
      description: `Professional house cleaning services in Jacksonville Beach. Coastal community cleaning with beach-friendly products. Serving ZIP code 32250. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['Jacksonville Beach cleaning', 'Jacksonville Beach house cleaning', 'Jacksonville 32250', 'coastal cleaning service'],
      canonical: `${SITE_CONFIG.url}/locations/jacksonville-beach`
    },
    'ponte-vedra': {
      title: 'Ponte Vedra House Cleaning Service',
      description: `Professional house cleaning services in Ponte Vedra. Luxury beachside cleaning with premium service. Serving ZIP code 32082. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['Ponte Vedra cleaning', 'Ponte Vedra house cleaning', '32082', 'luxury beachside cleaning'],
      canonical: `${SITE_CONFIG.url}/locations/ponte-vedra`
    },
    'fleming-island': {
      title: 'Fleming Island House Cleaning Service',
      description: `Professional house cleaning services in Fleming Island. Family suburban cleaning with reliable service. Serving ZIP code 32003. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['Fleming Island cleaning', 'Fleming Island house cleaning', '32003', 'family suburban cleaning'],
      canonical: `${SITE_CONFIG.url}/locations/fleming-island`
    },
    'avondale': {
      title: 'Avondale Jacksonville House Cleaning Service',
      description: `Professional house cleaning services in Avondale Jacksonville. Historic district cleaning with attention to architectural details. Serving ZIP code 32205. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['Avondale Jacksonville cleaning', 'Avondale house cleaning', 'Jacksonville 32205', 'historic district cleaning', 'historic home cleaning'],
      canonical: `${SITE_CONFIG.url}/locations/avondale`
    },
    'ortega': {
      title: 'Ortega Jacksonville House Cleaning Service',
      description: `Professional house cleaning services in Ortega Jacksonville. Waterfront luxury cleaning with premium service and attention to detail. Serving ZIP code 32210. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['Ortega Jacksonville cleaning', 'Ortega house cleaning', 'Jacksonville 32210', 'waterfront luxury cleaning', 'luxury home cleaning'],
      canonical: `${SITE_CONFIG.url}/locations/ortega`
    },
    'murray-hill': {
      title: 'Murray Hill Jacksonville House Cleaning Service',
      description: `Professional house cleaning services in Murray Hill Jacksonville. Arts district cleaning with attention to creative spaces and artistic homes. Serving ZIP code 32205. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['Murray Hill Jacksonville cleaning', 'Murray Hill house cleaning', 'Jacksonville 32205', 'arts district cleaning', 'creative space cleaning'],
      canonical: `${SITE_CONFIG.url}/locations/murray-hill`
    },
    'springfield': {
      title: 'Springfield Jacksonville House Cleaning Service',
      description: `Professional house cleaning services in Springfield Jacksonville. Historic revitalization cleaning with attention to preservation and restoration. Serving ZIP code 32206. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['Springfield Jacksonville cleaning', 'Springfield house cleaning', 'Jacksonville 32206', 'historic revitalization cleaning', 'historic home cleaning'],
      canonical: `${SITE_CONFIG.url}/locations/springfield`
    },
    'san-jose': {
      title: 'San Jose Jacksonville House Cleaning Service',
      description: `Professional house cleaning services in San Jose Jacksonville. Established community cleaning with reliable service and family-friendly approach. Serving ZIP code 32217. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['San Jose Jacksonville cleaning', 'San Jose house cleaning', 'Jacksonville 32217', 'established community cleaning', 'family-friendly cleaning'],
      canonical: `${SITE_CONFIG.url}/locations/san-jose`
    }
  };

  return locationData[location as keyof typeof locationData] || {
    title: `${location.charAt(0).toUpperCase() + location.slice(1)} House Cleaning Service`,
    description: `Professional house cleaning services in ${location}, Jacksonville. Call ${SITE_CONFIG.phone} for your free quote!`,
    keywords: [`${location} cleaning`, `${location} house cleaning`, 'Jacksonville cleaning service'],
    canonical: `${SITE_CONFIG.url}/locations/${location}`
  };
}

// Service-specific metadata generators
export function generateServiceMetadata(service: string): PageMetadata {
  const serviceData = {
    'recurring-cleaning': {
      title: 'Recurring House Cleaning Services Jacksonville',
      description: 'Professional recurring house cleaning services in Jacksonville. Weekly, bi-weekly, or monthly cleaning to maintain your home. Eco-friendly products and flexible scheduling.',
      keywords: ['recurring cleaning Jacksonville', 'weekly cleaning', 'bi-weekly cleaning', 'monthly cleaning', 'maintenance cleaning'],
      canonical: `${SITE_CONFIG.url}/recurring-cleaning`
    },
    'extreme-deep-cleaning': {
      title: 'Deep Cleaning Services Jacksonville - Extreme Deep Cleaning',
      description: 'Professional deep cleaning services in Jacksonville. Comprehensive cleaning for seasonal refresh and deep sanitization. Call for your deep cleaning quote today!',
      keywords: ['deep cleaning Jacksonville', 'extreme deep cleaning', 'seasonal cleaning', 'deep sanitization', 'comprehensive cleaning'],
      canonical: `${SITE_CONFIG.url}/extreme-deep-cleaning`
    },
    'move-in-move-out': {
      title: 'Move-In Move-Out Cleaning Services Jacksonville',
      description: 'Professional move-in and move-out cleaning services in Jacksonville. Specialized cleaning for real estate transactions and relocations. Get your move cleaning quote!',
      keywords: ['move-in cleaning Jacksonville', 'move-out cleaning', 'real estate cleaning', 'relocation cleaning', 'property cleaning'],
      canonical: `${SITE_CONFIG.url}/move-in-move-out`
    },
    'post-construction-cleaning': {
      title: 'Post-Construction Cleaning Services Jacksonville',
      description: 'Professional post-construction cleaning services in Jacksonville. Complete cleanup after renovation projects. Construction dust removal and surface restoration.',
      keywords: ['post-construction cleaning Jacksonville', 'construction cleanup', 'renovation cleaning', 'construction dust removal', 'post-renovation cleaning'],
      canonical: `${SITE_CONFIG.url}/post-construction-cleaning`
    }
  };

  return serviceData[service as keyof typeof serviceData] || {
    title: `${service.charAt(0).toUpperCase() + service.slice(1)} Services Jacksonville`,
    description: `Professional ${service} services in Jacksonville. Call ${SITE_CONFIG.phone} for your free quote!`,
    keywords: [`${service} Jacksonville`, `${service} services`, 'Jacksonville cleaning service'],
    canonical: `${SITE_CONFIG.url}/${service}`
  };
}

export function generateLocationServiceMetadata(location?: string, service?: string): PageMetadata {
  if (!location || !service) {
    return {
      title: 'Local Cleaning Services',
      description: `Professional cleaning services in Jacksonville. Call ${SITE_CONFIG.phone} for your free quote!`,
      keywords: ['Jacksonville cleaning service', 'local cleaning', 'house cleaning'],
      canonical: `${SITE_CONFIG.url}/locations`
    };
  }

  const locationName = location
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
  const serviceName = service
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return {
    title: `${serviceName} in ${locationName}`,
    description: `Professional ${serviceName.toLowerCase()} in ${locationName}, Jacksonville. Local teams, reliable scheduling, and spotless results. Call ${SITE_CONFIG.phone} for a free quote.`,
    keywords: [
      `${serviceName} ${locationName}`,
      `${locationName} cleaning service`,
      `${serviceName} Jacksonville`,
      'Jacksonville cleaning service'
    ],
    canonical: `${SITE_CONFIG.url}/locations/${location}/${service}`
  };
}
