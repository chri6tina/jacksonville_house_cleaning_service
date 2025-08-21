import { createClient } from 'contentful';

// Fallback data for when Contentful is not configured
const fallbackServices = [
  {
    id: 'full-service-cleanup',
    title: 'Full-Service Construction Cleanup',
    description: 'Complete post-construction cleaning from debris removal to final detailing',
    features: ['Heavy debris removal', 'Construction dust elimination', 'Surface restoration', 'Final inspection', 'Move-in ready results'],
            price: 'From $0.85/sq ft',
    icon: 'HardHat',
    category: 'specialized' as const,
    estimatedTime: '2-8 hours depending on size',
    includes: ['Debris removal and disposal', 'Surface cleaning and restoration', 'Final quality inspection', 'Before/after photos', 'Satisfaction guarantee'],
    addOns: ['HVAC duct cleaning', 'Floor sealing and waxing', 'Pressure washing', 'Emergency same-day service']
  }
];

const fallbackPhases = [
  {
    phase: 'Phase 1',
    title: 'Rough Cleanup',
    description: 'Heavy debris removal and surface preparation for detailed cleaning.',
    tasks: ['Remove construction debris', 'Clear large materials', 'Sweep and vacuum floors', 'Clean windows and frames', 'Remove protective coverings'],
    estimatedDuration: '1-3 hours',
    tools: ['Heavy-duty vacuums', 'Debris removal equipment', 'Safety gear', 'Cleaning supplies'],
    safetyNotes: ['Wear appropriate PPE', 'Check for hazardous materials', 'Ensure proper ventilation', 'Follow OSHA guidelines']
  }
];

const fallbackTestimonials = [
  {
    id: '1',
    name: 'Mike R.',
    company: 'Riverside Construction Co.',
    location: 'Jacksonville, FL',
    rating: 5,
    comment: 'Best post-construction cleanup in Jacksonville! They handled everything from debris removal to final detailing. Our clients are always impressed.',
    projectType: 'post-construction',
    date: '2024-01-15',
    verified: true
  }
];

// Initialize Contentful clients only if environment variables are available
let contentfulClient: any = null;
let contentfulPreviewClient: any = null;

if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
}

if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
  contentfulPreviewClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: 'preview.contentful.com',
  });
}

// Content Types for Post-Construction Cleanup
export interface PostConstructionService {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
  category: 'residential' | 'commercial' | 'specialized';
  estimatedTime: string;
  includes: string[];
  addOns: string[];
}

export interface ConstructionPhase {
  phase: string;
  title: string;
  description: string;
  tasks: string[];
  estimatedDuration: string;
  tools: string[];
  safetyNotes: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  location: string;
  rating: number;
  comment: string;
  projectType: string;
  date: string;
  verified: boolean;
}

export interface ServiceArea {
  id: string;
  name: string;
  county: string;
  zipCodes: string[];
  specializations: string[];
  pricing: {
    baseRate: number;
    perSqFt: number;
    minimum: number;
  };
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

// Fetch Functions with fallbacks
export async function getPostConstructionServices(): Promise<PostConstructionService[]> {
  if (!contentfulClient) {
    return fallbackServices;
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'postConstructionService',
      order: ['sys.createdAt'],
    });

    return response.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title,
      description: item.fields.description,
      features: item.fields.features || [],
      price: item.fields.price,
      icon: item.fields.icon,
      category: item.fields.category,
      estimatedTime: item.fields.estimatedTime,
      includes: item.fields.includes || [],
      addOns: item.fields.addOns || [],
    }));
  } catch (error) {
    console.error('Error fetching post-construction services:', error);
    return fallbackServices;
  }
}

export async function getConstructionPhases(): Promise<ConstructionPhase[]> {
  if (!contentfulClient) {
    return fallbackPhases;
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'constructionPhase',
      order: ['fields.phaseNumber'],
    });

    return response.items.map((item: any) => ({
      phase: item.fields.phase,
      title: item.fields.title,
      description: item.fields.description,
      tasks: item.fields.tasks || [],
      estimatedDuration: item.fields.estimatedDuration,
      tools: item.fields.tools || [],
      safetyNotes: item.fields.safetyNotes || [],
    }));
  } catch (error) {
    console.error('Error fetching construction phases:', error);
    return fallbackPhases;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!contentfulClient) {
    return fallbackTestimonials;
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'testimonial',
      'fields.projectType': 'post-construction',
      order: ['-sys.createdAt'],
      limit: 10,
    });

    return response.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      company: item.fields.company,
      location: item.fields.location,
      rating: item.fields.rating,
      comment: item.fields.comment,
      projectType: item.fields.projectType,
      date: item.fields.date,
      verified: item.fields.verified || false,
    }));
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return fallbackTestimonials;
  }
}

export async function getServiceAreas(): Promise<ServiceArea[]> {
  if (!contentfulClient) {
    return [];
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'serviceArea',
      order: ['fields.name'],
    });

    return response.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      county: item.fields.county,
      zipCodes: item.fields.zipCodes || [],
      specializations: item.fields.specializations || [],
      pricing: {
        baseRate: item.fields.baseRate,
        perSqFt: item.fields.perSqFt,
        minimum: item.fields.minimum,
      },
    }));
  } catch (error) {
    console.error('Error fetching service areas:', error);
    return [];
  }
}

export async function getFAQs(): Promise<FAQ[]> {
  if (!contentfulClient) {
    return [];
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'faq',
      'fields.category': 'post-construction',
      order: ['fields.order'],
    });

    return response.items.map((item: any) => ({
      id: item.sys.id,
      question: item.fields.question,
      answer: item.fields.answer,
      category: item.fields.category,
      tags: item.fields.tags || [],
    }));
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

// Pricing Calculator Functions
export async function getPricingData() {
  if (!contentfulClient) {
    return null;
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'pricingData',
      'fields.serviceType': 'post-construction',
    });

    if (response.items.length > 0) {
      const pricing = response.items[0].fields;
      return {
        baseRates: pricing.baseRates || {},
        multipliers: pricing.multipliers || {},
        addOns: pricing.addOns || {},
        discounts: pricing.discounts || {},
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching pricing data:', error);
    return null;
  }
}

// Search and Filter Functions
export async function searchServices(query: string, filters?: any) {
  if (!contentfulClient) {
    return fallbackServices.filter(service => 
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  try {
    const searchParams: any = {
      content_type: 'postConstructionService',
      query: query,
    };

    if (filters?.category) {
      searchParams['fields.category'] = filters.category;
    }

    if (filters?.priceRange) {
      searchParams['fields.price'] = filters.priceRange;
    }

    const response = await contentfulClient.getEntries(searchParams);
    return response.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title,
      description: item.fields.description,
      price: item.fields.price,
      category: item.fields.category,
    }));
  } catch (error) {
    console.error('Error searching services:', error);
    return fallbackServices;
  }
}
