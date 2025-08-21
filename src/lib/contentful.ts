import { createClient } from 'contentful';

// Fallback data for when Contentful is not configured
const fallbackServices = [
  {
    id: 'full-service-cleanup',
    title: 'Complete Post-Construction Cleanup',
    description: 'Our most popular service - includes all three phases: rough cleanup, final cleaning, and touch-up service',
    features: ['All three phases included', 'Construction debris removal', 'Complete dust elimination', 'Surface restoration', 'Move-in ready results', 'Final inspection & guarantee'],
    price: 'From $0.85/sq ft',
    icon: 'HardHat',
    category: 'specialized' as const,
    estimatedTime: '6-16 hours',
    includes: ['All phases', 'Comprehensive cleaning', 'Final inspection'],
    addOns: ['Window cleaning', 'Carpet cleaning', 'HVAC duct cleaning']
  },
  {
    id: 'commercial-construction',
    title: 'Commercial Construction Cleanup',
    description: 'Large-scale post-construction cleaning for warehouses, offices, retail spaces, and industrial facilities',
    features: ['Commercial-grade cleaning', 'OSHA compliance standards', 'Industrial equipment cleaning', 'Extended hours available', 'Project management coordination', 'Quality assurance'],
    price: 'From $0.85/sq ft',
    icon: 'Building2',
    category: 'commercial' as const,
    estimatedTime: '8-24 hours',
    includes: ['Commercial cleaning', 'Compliance standards', 'Quality assurance'],
    addOns: ['Extended hours', 'Weekend service', 'Emergency response']
  },
  {
    id: 'residential-renovation',
    title: 'Residential Renovation Cleanup',
    description: 'Complete cleanup after home renovations, kitchen remodels, bathroom updates, and whole-house projects',
    features: ['Renovation debris removal', 'Kitchen & bathroom deep cleaning', 'Floor restoration', 'Interior painting prep', 'Air quality improvement', 'Move-in ready guarantee'],
    price: 'From $400 per project',
    icon: 'Home',
    category: 'residential' as const,
    estimatedTime: '4-12 hours',
    includes: ['Renovation cleanup', 'Surface restoration', 'Final preparation'],
    addOns: ['Deep cleaning', 'Odor removal', 'Air quality testing']
  },
  {
    id: 'new-construction-cleanup',
    title: 'New Construction Cleanup',
    description: 'Comprehensive cleaning for newly built homes and commercial properties',
    features: ['Construction debris removal', 'Final detailing', 'Window cleaning', 'Floor finishing', 'HVAC system cleaning', 'Quality inspection'],
    price: 'From $0.75/sq ft',
    icon: 'Building2',
    category: 'specialized' as const,
    estimatedTime: '6-16 hours',
    includes: ['New construction cleaning', 'Final detailing', 'Quality inspection'],
    addOns: ['Window cleaning', 'Carpet cleaning', 'HVAC duct cleaning']
  },
  {
    id: 'debris-removal-hauling',
    title: 'Debris Removal & Hauling',
    description: 'Professional construction debris removal and disposal services',
    features: ['Lumber and drywall removal', 'Fixture and material hauling', 'Proper disposal compliance', 'Recycling when possible', 'Same-day service'],
    price: 'From $250',
    icon: 'Truck',
    category: 'specialized' as const,
    estimatedTime: '2-6 hours',
    includes: ['Debris removal', 'Hauling', 'Disposal'],
    addOns: ['Recycling', 'Same-day service']
  },
  {
    id: 'commercial-construction',
    title: 'Commercial Construction Cleanup',
    description: 'Large-scale post-construction cleaning for commercial properties',
    features: ['Warehouse cleaning', 'Retail space preparation', 'Office building cleanup', 'Medical facility compliance', 'Industrial standards'],
    price: 'From $0.85/sq ft',
    icon: 'Building2',
    category: 'commercial' as const,
    estimatedTime: '8-24 hours',
    includes: ['Commercial cleaning', 'Compliance standards', 'Quality assurance'],
    addOns: ['Extended hours', 'Weekend service', 'Emergency response']
  },
  {
    id: 'residential-renovation',
    title: 'Residential Renovation Cleanup',
    description: 'Home renovation cleanup and restoration services',
    features: ['Kitchen renovation cleanup', 'Bathroom remodeling cleanup', 'Whole house renovation', 'Interior painting prep', 'Floor restoration'],
    price: 'From $400',
    icon: 'Home',
    category: 'residential' as const,
    estimatedTime: '4-12 hours',
    includes: ['Renovation cleanup', 'Surface restoration', 'Final preparation'],
    addOns: ['Deep cleaning', 'Odor removal', 'Air quality testing']
  },
  {
    id: 'hvac-duct-cleaning',
    title: 'HVAC & Duct Cleaning',
    description: 'Post-construction HVAC system cleaning and air quality improvement',
    features: ['Duct system cleaning', 'Air quality testing', 'Filter replacement', 'System sanitization', 'Energy efficiency'],
    price: 'From $350',
    icon: 'Zap',
    category: 'specialized' as const,
    estimatedTime: '2-4 hours',
    includes: ['Duct cleaning', 'Air quality testing', 'Filter replacement'],
    addOns: ['Extended warranty', 'Follow-up testing']
  },
  {
    id: 'floor-restoration',
    title: 'Floor Restoration & Sealing',
    description: 'Professional floor cleaning, polishing, and sealing services',
    features: ['Hardwood floor restoration', 'Tile and grout cleaning', 'Carpet deep cleaning', 'Floor sealing', 'Wax application'],
    price: 'From $1.25/sq ft',
    icon: 'Target',
    category: 'specialized' as const,
    estimatedTime: '3-8 hours',
    includes: ['Floor restoration', 'Sealing', 'Final polish'],
    addOns: ['Extended warranty', 'Maintenance plan']
  },
  {
    id: 'pressure-washing',
    title: 'Exterior Pressure Washing',
    description: 'Exterior construction cleanup and pressure washing services',
    features: ['Building exterior cleaning', 'Driveway and walkway cleaning', 'Deck and patio restoration', 'Graffiti removal', 'Surface preparation'],
    price: 'From $300',
    icon: 'Zap',
    category: 'specialized' as const,
    estimatedTime: '2-6 hours',
    includes: ['Exterior cleaning', 'Pressure washing', 'Surface preparation'],
    addOns: ['Graffiti removal', 'Extended warranty']
  },
  {
    id: 'hazardous-material-removal',
    title: 'Hazardous Material Removal',
    description: 'Safe removal of construction hazards and safety compliance',
    features: ['Nail and screw removal', 'Broken glass cleanup', 'Chemical spill cleanup', 'OSHA compliance', 'Safety documentation'],
    price: 'From $500',
    icon: 'Shield',
    category: 'specialized' as const,
    estimatedTime: '2-4 hours',
    includes: ['Hazard removal', 'Safety compliance', 'Documentation'],
    addOns: ['Extended warranty', 'Follow-up inspection']
  },
  {
    id: 'eco-friendly-cleaning',
    title: 'Eco-Friendly Construction Cleanup',
    description: 'Green cleaning products and sustainable construction waste management',
    features: ['Green Seal certified products', 'Low-VOC cleaners', 'Construction waste recycling', 'Sustainable practices', 'Environmental compliance'],
    price: 'From $0.75/sq ft',
    icon: 'Leaf',
    category: 'specialized' as const,
    estimatedTime: '4-12 hours',
    includes: ['Eco-friendly cleaning', 'Waste recycling', 'Environmental compliance'],
    addOns: ['Extended warranty', 'Sustainability report']
  },
  {
    id: 'emergency-cleanup',
    title: 'Emergency Construction Cleanup',
    description: '24/7 emergency post-construction cleanup services',
    features: ['Same-day response', 'Emergency debris removal', 'Rush job handling', 'Weekend availability', 'Holiday service'],
    price: 'From $400',
    icon: 'Clock',
    category: 'specialized' as const,
    estimatedTime: '2-8 hours',
    includes: ['Emergency response', 'Rush service', '24/7 availability'],
    addOns: ['Extended hours', 'Weekend service', 'Holiday service']
  },
  {
    id: 'window-cleaning',
    title: 'Window Cleaning (Add-On)',
    description: 'Washing interior and exterior windows; removing labels and paint splatter',
    features: ['Interior window cleaning', 'Exterior window cleaning', 'Label removal', 'Paint splatter removal', 'Frame cleaning'],
    price: 'From $200',
    icon: 'Droplets',
    category: 'specialized' as const,
    estimatedTime: '1-3 hours',
    includes: ['Window cleaning', 'Label removal', 'Frame cleaning'],
    addOns: ['Extended warranty', 'Maintenance plan']
  },
  {
    id: 'carpet-cleaning',
    title: 'Carpet Cleaning (Add-On)',
    description: 'Professional cleaning of carpets as part of final cleanup',
    features: ['Deep carpet cleaning', 'Stain removal', 'Odor elimination', 'Carpet protection', 'Quick drying'],
    price: 'From $180',
    icon: 'Sparkles',
    category: 'specialized' as const,
    estimatedTime: '2-4 hours',
    includes: ['Carpet cleaning', 'Stain removal', 'Protection'],
    addOns: ['Extended warranty', 'Maintenance plan']
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
