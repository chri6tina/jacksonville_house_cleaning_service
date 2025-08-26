const { createClient } = require('contentful-management');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT_ID = process.env.CONTENTFUL_ENVIRONMENT || 'master';

async function setupContentful() {
  try {
    console.log('🚀 Setting up Contentful for Jacksonville Post-Construction Cleanup...');
    
    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);
    
    console.log(`✅ Connected to space: ${space.name} (${SPACE_ID})`);
    console.log(`✅ Using environment: ${ENVIRONMENT_ID}`);

    // Create content types
    await createContentTypes(environment);
    
    // Create sample content
    await createSampleContent(environment);
    
    console.log('🎉 Contentful setup complete!');
    
  } catch (error) {
    console.error('❌ Error setting up Contentful:', error);
  }
}

async function createContentTypes(environment) {
  console.log('\n📝 Creating content types...');
  
  try {
    // Post Construction Service Content Type
    const postConstructionService = await environment.createContentType({
      name: 'Post Construction Service',
      id: 'postConstructionService',
      description: 'Individual post-construction cleaning services',
      fields: [
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
          required: true,
          validations: [{ unique: true }],
        },
        {
          id: 'description',
          name: 'Description',
          type: 'Text',
          required: true,
        },
        {
          id: 'features',
          name: 'Features',
          type: 'Array',
          items: { type: 'Symbol' },
        },
        {
          id: 'price',
          name: 'Price',
          type: 'Symbol',
          required: true,
        },
        {
          id: 'icon',
          name: 'Icon',
          type: 'Symbol',
          required: true,
        },
        {
          id: 'category',
          name: 'Category',
          type: 'Symbol',
          required: true,
          validations: [
            {
              in: ['residential', 'commercial', 'specialized'],
            },
          ],
        },
        {
          id: 'estimatedTime',
          name: 'Estimated Time',
          type: 'Symbol',
          required: true,
        },
        {
          id: 'includes',
          name: 'What\'s Included',
          type: 'Array',
          items: { type: 'Symbol' },
        },
        {
          id: 'addOns',
          name: 'Available Add-Ons',
          type: 'Array',
          items: { type: 'Symbol' },
        },
      ],
    });
    
    await postConstructionService.publish();
    console.log('✅ Created Post Construction Service content type');

    // Construction Phase Content Type
    const constructionPhase = await environment.createContentType({
      name: 'Construction Phase',
      id: 'constructionPhase',
      description: 'Three-phase construction cleanup process',
      fields: [
        {
          id: 'phase',
          name: 'Phase',
          type: 'Symbol',
          required: true,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
          required: true,
        },
        {
          id: 'description',
          name: 'Description',
          type: 'Text',
          required: true,
        },
        {
          id: 'tasks',
          name: 'Tasks',
          type: 'Array',
          items: { type: 'Symbol' },
        },
        {
          id: 'estimatedDuration',
          name: 'Estimated Duration',
          type: 'Symbol',
          required: true,
        },
        {
          id: 'tools',
          name: 'Tools Required',
          type: 'Array',
          items: { type: 'Symbol' },
        },
        {
          id: 'safetyNotes',
          name: 'Safety Notes',
          type: 'Array',
          items: { type: 'Symbol' },
        },
        {
          id: 'phaseNumber',
          name: 'Phase Number',
          type: 'Integer',
          required: true,
          validations: [{ range: { min: 1, max: 3 } }],
        },
      ],
    });
    
    await constructionPhase.publish();
    console.log('✅ Created Construction Phase content type');

    // Testimonial Content Type
    const testimonial = await environment.createContentType({
      name: 'Testimonial',
      id: 'testimonial',
      description: 'Customer testimonials and reviews',
      fields: [
        {
          id: 'name',
          name: 'Name',
          type: 'Symbol',
          required: true,
        },
        {
          id: 'company',
          name: 'Company',
          type: 'Symbol',
        },
        {
          id: 'location',
          name: 'Location',
          type: 'Symbol',
          required: true,
        },
        {
          id: 'rating',
          name: 'Rating',
          type: 'Integer',
          required: true,
          validations: [{ range: { min: 1, max: 5 } }],
        },
        {
          id: 'comment',
          name: 'Comment',
          type: 'Text',
          required: true,
        },
        {
          id: 'projectType',
          name: 'Project Type',
          type: 'Symbol',
          required: true,
          validations: [
            {
              in: ['post-construction', 'residential', 'commercial'],
            },
          ],
        },
        {
          id: 'date',
          name: 'Date',
          type: 'Date',
          required: true,
        },
        {
          id: 'verified',
          name: 'Verified',
          type: 'Boolean',
          defaultValue: false,
        },
      ],
    });
    
    await testimonial.publish();
    console.log('✅ Created Testimonial content type');

  } catch (error) {
    console.error('❌ Error creating content types:', error);
  }
}

async function createSampleContent(environment) {
  console.log('\n📊 Creating sample content...');
  
  try {
    // Sample Post Construction Service
    const sampleService = await environment.createEntry('postConstructionService', {
      fields: {
        title: {
          'en-US': 'Full-Service Construction Cleanup',
        },
        description: {
          'en-US': 'Complete post-construction cleaning from debris removal to final detailing. Our comprehensive service ensures your space is move-in ready.',
        },
        features: {
          'en-US': [
            'Heavy debris removal',
            'Construction dust elimination',
            'Surface restoration',
            'Final inspection',
            'Move-in ready results',
          ],
        },
        price: {
          'en-US': 'From $0.35/sq ft',
        },
        icon: {
          'en-US': 'HardHat',
        },
        category: {
          'en-US': 'specialized',
        },
        estimatedTime: {
          'en-US': '2-8 hours depending on size',
        },
        includes: {
          'en-US': [
            'Debris removal and disposal',
            'Surface cleaning and restoration',
            'Final quality inspection',
            'Before/after photos',
            'Satisfaction guarantee',
          ],
        },
        addOns: {
          'en-US': [
            'HVAC duct cleaning',
            'Floor sealing and waxing',
            'Pressure washing',
            'Emergency same-day service',
          ],
        },
      },
    });
    
    await sampleService.publish();
    console.log('✅ Created sample post-construction service');

    // Sample Construction Phase
    const samplePhase = await environment.createEntry('constructionPhase', {
      fields: {
        phase: {
          'en-US': 'Phase 1',
        },
        title: {
          'en-US': 'Rough Cleanup',
        },
        description: {
          'en-US': 'Heavy debris removal and surface preparation for detailed cleaning.',
        },
        tasks: {
          'en-US': [
            'Remove construction debris',
            'Clear large materials',
            'Sweep and vacuum floors',
            'Clean windows and frames',
            'Remove protective coverings',
          ],
        },
        estimatedDuration: {
          'en-US': '1-3 hours',
        },
        tools: {
          'en-US': [
            'Heavy-duty vacuums',
            'Debris removal equipment',
            'Safety gear',
            'Cleaning supplies',
          ],
        },
        safetyNotes: {
          'en-US': [
            'Wear appropriate PPE',
            'Check for hazardous materials',
            'Ensure proper ventilation',
            'Follow OSHA guidelines',
          ],
        },
        phaseNumber: {
          'en-US': 1,
        },
      },
    });
    
    await samplePhase.publish();
    console.log('✅ Created sample construction phase');

    // Sample Testimonial
    const sampleTestimonial = await environment.createEntry('testimonial', {
      fields: {
        name: {
          'en-US': 'Mike R.',
        },
        company: {
          'en-US': 'Riverside Construction Co.',
        },
        location: {
          'en-US': 'Jacksonville, FL',
        },
        rating: {
          'en-US': 5,
        },
        comment: {
          'en-US': 'Best post-construction cleanup in Jacksonville! They handled everything from debris removal to final detailing. Our clients are always impressed.',
        },
        projectType: {
          'en-US': 'post-construction',
        },
        date: {
          'en-US': '2024-01-15',
        },
        verified: {
          'en-US': true,
        },
      },
    });
    
    await sampleTestimonial.publish();
    console.log('✅ Created sample testimonial');

  } catch (error) {
    console.error('❌ Error creating sample content:', error);
  }
}

// Run the setup
setupContentful();


