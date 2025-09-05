import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond, Trees, Camera, BookOpen, Coffee, Mountain, Waves, School, Church, Store, Utensils, Building, Briefcase, Globe, Train, Bus, ShoppingBag, Heart, PawPrint, Umbrella, Sun, Anchor, Fish, Sailboat, HardHat, Wrench, Hammer, Truck, Trash2, Recycle, Wind } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import DeepCleaningHero from '@/components/DeepCleaningHero';
import DeepCleaningCalculator from '@/components/DeepCleaningCalculator';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Jacksonville Deep Cleaning Services #1 | Professional House Deep Cleaning FL',
  description: 'Jacksonville\'s #1 deep cleaning service. Comprehensive deep cleaning for homes, offices, and commercial spaces. Eco-friendly products, experienced team, satisfaction guaranteed. Call (904) 456-3851 for instant quotes.',
  keywords: 'Jacksonville deep cleaning, professional deep cleaning Jacksonville, house deep cleaning Jacksonville, commercial deep cleaning Florida, deep cleaning services Jacksonville FL',
  openGraph: {
    title: 'Jacksonville Deep Cleaning Services #1 | Professional House Deep Cleaning FL',
    description: 'Jacksonville\'s #1 deep cleaning service. Comprehensive deep cleaning for homes, offices, and commercial spaces. Eco-friendly products, experienced team, satisfaction guaranteed.',
    url: 'https://www.jacksonvillehousecleaningservice.com/deep-cleaning',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jacksonville House Cleaning Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacksonville Deep Cleaning Services #1 | Professional House Deep Cleaning FL',
    description: 'Jacksonville\'s #1 deep cleaning service. Comprehensive deep cleaning for homes, offices, and commercial spaces.',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/deep-cleaning',
  },
};

export default function DeepCleaningPage() {
  const deepCleaningServices = [
    {
      id: 'complete-deep-cleaning',
      title: 'Complete Deep Cleaning Package',
      description: 'Our most popular service - comprehensive deep cleaning of your entire home or office',
      icon: Sparkles,
      features: ['All rooms included', 'Kitchen deep cleaning', 'Bathroom sanitization', 'Living areas cleaning', 'Bedroom deep cleaning', 'Office workspace cleaning'],
      price: 'From $200'
    },
    {
      id: 'kitchen-deep-cleaning',
      title: 'Kitchen Deep Cleaning',
      description: 'Complete kitchen sanitization including inside appliances, cabinets, and hard-to-reach areas',
      icon: Utensils,
      features: ['Inside refrigerator cleaning', 'Oven and stovetop deep cleaning', 'Cabinet interior cleaning', 'Microwave sanitization', 'Dishwasher cleaning', 'Countertop deep cleaning'],
      price: 'From $150'
    },
    {
      id: 'bathroom-deep-cleaning',
      title: 'Bathroom Deep Cleaning',
      description: 'Thorough bathroom sanitization and deep cleaning for all surfaces',
      icon: Droplets,
      features: ['Tile and grout cleaning', 'Shower sanitization', 'Toilet deep cleaning', 'Mirror cleaning', 'Cabinet cleaning', 'Floor sanitization'],
      price: 'From $120'
    },
    {
      id: 'living-areas-deep-cleaning',
      title: 'Living Areas Deep Cleaning',
      description: 'Comprehensive cleaning of all living spaces and common areas',
      icon: Home,
      features: ['Furniture deep cleaning', 'Baseboard cleaning', 'Window cleaning', 'Light fixture cleaning', 'Ceiling fan cleaning', 'Floor polishing'],
      price: 'From $180'
    },
    {
      id: 'bedroom-deep-cleaning',
      title: 'Bedroom Deep Cleaning',
      description: 'Thorough bedroom cleaning including all furniture and storage areas',
      icon: Heart,
      features: ['Under bed cleaning', 'Dresser cleaning', 'Closet organization', 'Mattress cleaning', 'Window treatment cleaning', 'Floor deep cleaning'],
      price: 'From $100'
    },
    {
      id: 'office-deep-cleaning',
      title: 'Office & Workspace Deep Cleaning',
      description: 'Professional deep cleaning for home offices and workspaces',
      icon: Briefcase,
      features: ['Desk cleaning', 'File cabinet cleaning', 'Electronic equipment cleaning', 'Bookshelf cleaning', 'Cable organization', 'Floor deep cleaning'],
      price: 'From $130'
    },
    {
      id: 'laundry-utility-cleaning',
      title: 'Laundry & Utility Areas',
      description: 'Deep cleaning of laundry rooms and utility spaces',
      icon: Wind,
      features: ['Washer cleaning', 'Dryer cleaning', 'Utility sink cleaning', 'Storage organization', 'Vent cleaning', 'Appliance maintenance'],
      price: 'From $80'
    },
    {
      id: 'move-in-move-out-deep',
      title: 'Move-In/Move-Out Deep Cleaning',
      description: 'Comprehensive deep cleaning for moving situations',
      icon: Truck,
      features: ['Complete home cleaning', 'Cabinet interior cleaning', 'Appliance deep cleaning', 'Floor restoration', 'Window cleaning', 'Final inspection'],
      price: 'From $300'
    },
    {
      id: 'post-construction-deep',
      title: 'Post-Construction Deep Cleaning',
      description: 'Specialized deep cleaning after construction or renovation',
      icon: HardHat,
      features: ['Construction dust removal', 'Paint splatter cleanup', 'Debris cleanup', 'Surface restoration', 'Air quality improvement', 'Final detailing'],
      price: 'From $400'
    },
    {
      id: 'eco-friendly-deep',
      title: 'Eco-Friendly Deep Cleaning',
      description: 'Green deep cleaning using environmentally safe products',
      icon: Leaf,
      features: ['Green Seal products', 'Low-VOC cleaners', 'Sustainable practices', 'Safe for pets', 'Hypoallergenic', 'Environmental compliance'],
      price: 'From $220'
    },
    {
      id: 'emergency-deep-cleaning',
      title: 'Emergency Deep Cleaning',
      description: 'Same-day or urgent deep cleaning services',
      icon: Clock,
      features: ['Same-day service', 'Rush job handling', 'Weekend availability', 'Holiday service', 'Emergency response', 'Quick turnaround'],
      price: 'From $250'
    },
    {
      id: 'recurring-deep-cleaning',
      title: 'Recurring Deep Cleaning',
      description: 'Regular deep cleaning service on a schedule',
      icon: Calendar,
      features: ['Scheduled service', 'Consistent quality', 'Priority booking', 'Discounted rates', 'Flexible scheduling', 'Long-term relationship'],
      price: 'From $180/month'
    }
  ];

  const whyChooseUs = [
    {
      icon: Sparkles,
      title: 'Jacksonville\'s #1 Deep Cleaning Service',
      description: 'We\'re the only local provider that combines comprehensive deep cleaning with eco-friendly practices and transparent pricing.'
    },
    {
      icon: Shield,
      title: 'Licensed, Bonded & Insured',
      description: 'Full compliance with safety regulations. Background-checked crews with comprehensive insurance coverage.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly & Safe',
      description: 'Green Seal certified products, low-VOC cleaners, and sustainable practices for healthy environments.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'We work around your schedule with flexible appointment times, including evenings and weekends.'
    },
    {
      icon: CheckCircle,
      title: '100% Satisfaction Guarantee',
      description: 'We\'re not done until you\'re completely satisfied. Re-clean if needed at no additional cost.'
    },
    {
      icon: Zap,
      title: 'Professional Equipment',
      description: 'Commercial-grade equipment and professional techniques for superior deep cleaning results.'
    }
  ];

  const deepCleaningProcess = [
    {
      phase: 'Phase 1: Assessment & Preparation',
      description: 'Thorough evaluation and preparation for deep cleaning',
      tasks: ['Space assessment', 'Protect valuable items', 'Gather specialized equipment', 'Plan cleaning approach', 'Set up work areas'],
      icon: Target
    },
    {
      phase: 'Phase 2: Deep Cleaning Execution',
      description: 'Comprehensive deep cleaning using professional techniques',
      tasks: ['Remove all dust and debris', 'Deep clean all surfaces', 'Sanitize high-touch areas', 'Clean inside appliances', 'Restore surfaces'],
      icon: Sparkles
    },
    {
      phase: 'Phase 3: Quality Inspection & Final Touch',
      description: 'Final inspection and touch-up to ensure perfection',
      tasks: ['Quality inspection', 'Spot cleaning', 'Final polishing', 'Client walkthrough', 'Satisfaction guarantee'],
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'Martinez Family',
      rating: 5,
      comment: 'Jacksonville House Cleaning Service transformed our home with their deep cleaning service. The attention to detail was incredible - they cleaned places I didn\'t even think about. Our home has never looked better!'
    },
    {
      name: 'Robert Chen',
      company: 'Chen Property Management',
      rating: 5,
      comment: 'We use these guys for all our rental property deep cleaning between tenants. They\'re reliable, thorough, and our tenants always comment on how clean the properties are. Highly recommend!'
    },
    {
      name: 'Sarah Thompson',
      company: 'Thompson Law Office',
      rating: 5,
      comment: 'As a busy professional, I need a cleaning service I can trust. Their deep cleaning service is exceptional - they understand the importance of a clean, professional environment.'
    }
  ];

  const serviceAreas = [
    { name: 'Jacksonville', url: '/locations' },
    { name: 'Jacksonville Beach', url: '/locations/jacksonville-beach' },
    { name: 'Neptune Beach', url: '/locations/neptune-beach' },
    { name: 'Atlantic Beach', url: '/locations/atlantic-beach' },
    { name: 'Ponte Vedra Beach', url: '/locations/ponte-vedra-beach' },
    { name: 'St. Augustine', url: '/locations/st-augustine' },
    { name: 'Orange Park', url: '/locations/orange-park' },
    { name: 'Fleming Island', url: '/locations/fleming-island' },
    { name: 'Green Cove Springs', url: '/locations/green-cove-springs' },
    { name: 'Riverside & Avondale', url: '/locations/riverside-avondale' },
    { name: 'San Marco', url: '/locations/san-marco' },
    { name: 'Mandarin', url: '/locations/mandarin' },
    { name: 'Southside', url: '/locations/southside' },
    { name: 'Arlington', url: '/locations/arlington' },
    { name: 'Downtown Jacksonville', url: '/locations/downtown-jacksonville' }
  ];

  return (
    <>
      {/* Structured Data for Deep Cleaning Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Jacksonville Deep Cleaning Services",
            "description": "Professional deep cleaning services in Jacksonville, FL. Comprehensive deep cleaning for homes, offices, and commercial spaces with eco-friendly products.",
            "provider": {
              "@type": "Organization",
              "name": "Jacksonville House Cleaning Service",
              "telephone": "+19044563851",
              "email": "info@jacksonvillehousecleaningservice.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jacksonville",
                "addressRegion": "FL",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "serviceType": "Deep Cleaning",
            "category": "Cleaning Service",
            "offers": {
              "@type": "Offer",
              "price": "From $80",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Jacksonville Deep Cleaning Options",
              "itemListElement": deepCleaningServices.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                },
                "price": service.price,
                "priceCurrency": "USD"
              }))
            }
          })
        }}
      />

      {/* Service Schema for Each Deep Cleaning Option */}
      {deepCleaningServices.map((service, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": `${service.title} - Jacksonville`,
              "description": service.description,
              "provider": {
                "@type": "Organization",
                "name": "Jacksonville House Cleaning Service",
                "telephone": "+19044563851",
                "email": "info@jacksonvillehousecleaningservice.com"
              },
              "areaServed": {
                "@type": "City",
                "name": "Jacksonville"
              },
              "serviceType": "Deep Cleaning",
              "category": "Cleaning Service",
              "offers": {
                "@type": "Offer",
                "price": service.price,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": `${service.title} Features`,
                "itemListElement": service.features.map((feature, featureIndex) => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": feature,
                    "description": `Included in ${service.title} service`
                  }
                }))
              }
            })
          }}
        />
      ))}

      {/* Review Schema for Testimonials */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            "itemReviewed": {
              "@type": "Service",
              "name": "Jacksonville Deep Cleaning Services"
            },
            "ratingValue": "5.0",
            "reviewCount": testimonials.length,
            "bestRating": "5",
            "worstRating": "1"
          })
        }}
      />

      {/* Hero Section */}
      <DeepCleaningHero />

      {/* Deep Cleaning Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <DeepCleaningCalculator />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We're Jacksonville's #1 Deep Cleaning Service
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're the only local provider that offers comprehensive deep cleaning with eco-friendly practices, 
              transparent pricing, and guaranteed satisfaction. No need to compromise on quality or safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-accent-aqua/10 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three-Phase Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-accent-aqua/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Three-Phase Deep Cleaning Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Systematic approach that ensures nothing is missed. From assessment to final inspection, 
              we follow a proven process that delivers exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deepCleaningProcess.map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <div className="w-20 h-20 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <phase.icon className="w-10 h-10 text-primary-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{phase.phase}</h3>
                <p className="text-gray-700 mb-6 text-center">{phase.description}</p>
                <ul className="space-y-3">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Deep Cleaning Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From kitchen deep cleaning to complete home transformation, we offer comprehensive deep cleaning 
              that makes your space spotless and healthy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deepCleaningServices.map((service) => (
              <div key={service.id} className="bg-gradient-to-br from-blue-50 to-accent-aqua/10 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-800">
                      <CheckCircle className="w-4 h-4 text-accent-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <p className="text-lg font-bold text-primary-blue mb-4">{service.price}</p>
                  <a
                    href={`/contact?service=${service.id}&type=deep-cleaning`}
                    className="inline-block w-full bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-accent-aqua/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Dominate the Jacksonville Deep Cleaning Market
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              While competitors offer basic cleaning, we provide comprehensive deep cleaning that 
              transforms your space and improves your quality of life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Competition Gap We Fill</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Other Companies</h4>
                    <p className="text-gray-700 text-sm">Only offer surface cleaning, missing deep dirt and hidden areas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Jacksonville House Cleaning Service</h4>
                    <p className="text-gray-700 text-sm">Complete deep cleaning solution: surface + hidden areas + sanitization</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Harsh Chemicals</h4>
                    <p className="text-gray-700 text-sm">Most competitors use harsh chemicals that can harm your family and pets</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Eco-Friendly Products</h4>
                    <p className="text-gray-700 text-sm">Safe, effective cleaning products that protect your family and environment</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Unique Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary-blue" />
                  <span className="text-gray-800">Comprehensive deep cleaning</span>
                </div>
                <div className="flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-primary-blue" />
                  <span className="text-gray-800">Eco-friendly products</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary-blue" />
                  <span className="text-gray-800">Licensed & insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary-blue" />
                  <span className="text-gray-800">Flexible scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-blue" />
                  <span className="text-gray-800">100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary-blue" />
                  <span className="text-gray-800">Professional equipment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving All of Northeast Florida
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From Jacksonville to St. Augustine, we're your trusted partner for deep cleaning 
              across the entire region.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceAreas.map((area, index) => (
              <Link 
                key={index} 
                href={area.url}
                className="bg-gradient-to-br from-blue-50 to-accent-aqua/10 p-4 rounded-xl text-center hover:from-blue-100 hover:to-accent-aqua/20 transition-all duration-300 hover:shadow-md group"
              >
                <MapPin className="w-6 h-6 text-primary-blue mx-auto mb-2 group-hover:text-accent-aqua transition-colors duration-300" />
                <p className="text-sm font-medium text-gray-900 group-hover:text-primary-blue transition-colors duration-300">{area.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-accent-aqua/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our customers are saying about 
              our deep cleaning services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-800 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center">
                    <Home className="w-6 h-6 text-primary-blue" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FAQSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Jacksonville's #1 Deep Cleaning Service?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the families and businesses who trust us with their deep cleaning needs. 
            Get an instant quote today and see why we're the powerhouse choice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:9044563851"
              className="inline-flex items-center gap-2 bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (904) 456-3851
            </a>
            <a
              href="/contact?service=complete-deep-cleaning&type=deep-cleaning"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white/10 transition-colors"
            >
              Get Instant Quote
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center text-white/80">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm">Deep Cleaning</p>
            </div>
            <div className="text-center text-white/80">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm">Eco-Friendly</p>
            </div>
            <div className="text-center text-white/80">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm">Licensed & Insured</p>
            </div>
            <div className="text-center text-white/80">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm">100% Guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
