import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond, Trees, Camera, BookOpen, Coffee, Mountain, Waves, School, Church, Store, Utensils, Building, Briefcase, Globe, Train, Bus, ShoppingBag, Heart, PawPrint, Umbrella, Sun, Anchor, Fish, Sailboat, HardHat, Wrench, Hammer, Truck, Trash2, Recycle } from 'lucide-react';
import { Metadata } from 'next';
import PostConstructionCalculator from '@/components/PostConstructionCalculator';
import PostConstructionHero from '@/components/PostConstructionHero';

export const metadata: Metadata = {
  title: 'Jacksonville Post-Construction Cleanup #1 | Construction Site Cleaning & Debris Removal FL',
  description: 'Jacksonville\'s #1 post-construction cleanup service. Full-service construction site cleaning, debris removal, and final detailing. Licensed, insured, eco-friendly. Call (904) 456-3851 for instant quotes.',
  keywords: 'Jacksonville post-construction cleaning, construction site cleanup Jacksonville, renovation cleaning Jacksonville, debris removal Jacksonville, commercial post-construction cleaning Florida, construction cleanup Jacksonville FL',
  openGraph: {
    title: 'Jacksonville Post-Construction Cleanup #1 | Construction Site Cleaning & Debris Removal FL',
    description: 'Jacksonville\'s #1 post-construction cleanup service. Full-service construction site cleaning, debris removal, and final detailing. Licensed, insured, eco-friendly.',
    url: 'https://www.jacksonvillehousecleaningservice.com/post-construction-cleaning',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jacksonville House Cleaning Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacksonville Post-Construction Cleanup #1 | Construction Site Cleaning & Debris Removal FL',
    description: 'Jacksonville\'s #1 post-construction cleanup service. Full-service construction site cleaning, debris removal, and final detailing.',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/post-construction-cleaning',
  },
};

export default function PostConstructionCleaningPage() {
  const postConstructionServices = [
    {
      id: 'full-service-cleanup',
      title: 'Complete Post-Construction Cleanup',
      description: 'Our most popular service - includes all three phases: rough cleanup, final cleaning, and touch-up service',
      icon: HardHat,
      features: ['All three phases included', 'Construction debris removal', 'Complete dust elimination', 'Surface restoration', 'Move-in ready results', 'Final inspection & guarantee'],
      price: 'From $0.85/sq ft'
    },
    {
      id: 'commercial-construction',
      title: 'Commercial Construction Cleanup',
      description: 'Large-scale post-construction cleaning for warehouses, offices, retail spaces, and industrial facilities',
      icon: Building2,
      features: ['Commercial-grade cleaning', 'OSHA compliance standards', 'Industrial equipment cleaning', 'Extended hours available', 'Project management coordination', 'Quality assurance'],
      price: 'From $0.85/sq ft'
    },
    {
      id: 'residential-renovation',
      title: 'Residential Renovation Cleanup',
      description: 'Complete cleanup after home renovations, kitchen remodels, bathroom updates, and whole-house projects',
      icon: Home,
      features: ['Renovation debris removal', 'Kitchen & bathroom deep cleaning', 'Floor restoration', 'Interior painting prep', 'Air quality improvement', 'Move-in ready guarantee'],
      price: 'From $400 per project'
    },
    {
      id: 'new-construction-cleanup',
      title: 'New Construction Cleanup',
      description: 'Comprehensive cleaning for newly built homes and commercial properties',
      icon: Building2,
      features: ['Construction debris removal', 'Final detailing', 'Window cleaning', 'Floor finishing', 'HVAC system cleaning', 'Quality inspection'],
      price: 'From $0.75/sq ft'
    },
    {
      id: 'debris-removal-hauling',
      title: 'Debris Removal & Hauling',
      description: 'Professional construction debris removal and disposal services',
      icon: Truck,
      features: ['Lumber and drywall removal', 'Fixture and material hauling', 'Proper disposal compliance', 'Recycling when possible', 'Same-day service'],
      price: 'From $250'
    },
    {
      id: 'hvac-duct-cleaning',
      title: 'HVAC & Duct Cleaning',
      description: 'Post-construction HVAC system cleaning and air quality improvement',
      icon: Zap,
      features: ['Duct system cleaning', 'Air quality testing', 'Filter replacement', 'System sanitization', 'Energy efficiency'],
      price: 'From $350'
    },
    {
      id: 'floor-restoration',
      title: 'Floor Restoration & Sealing',
      description: 'Professional floor cleaning, polishing, and sealing services',
      icon: Target,
      features: ['Hardwood floor restoration', 'Tile and grout cleaning', 'Carpet deep cleaning', 'Floor sealing', 'Wax application'],
      price: 'From $1.25/sq ft'
    },
    {
      id: 'pressure-washing',
      title: 'Exterior Pressure Washing',
      description: 'Exterior construction cleanup and pressure washing services',
      icon: Droplets,
      features: ['Building exterior cleaning', 'Driveway and walkway cleaning', 'Deck and patio restoration', 'Graffiti removal', 'Surface preparation'],
      price: 'From $300'
    },
    {
      id: 'hazardous-material-removal',
      title: 'Hazardous Material Removal',
      description: 'Safe removal of construction hazards and safety compliance',
      icon: Shield,
      features: ['Nail and screw removal', 'Broken glass cleanup', 'Chemical spill cleanup', 'OSHA compliance', 'Safety documentation'],
      price: 'From $500'
    },
    {
      id: 'eco-friendly-cleaning',
      title: 'Eco-Friendly Construction Cleanup',
      description: 'Green cleaning products and sustainable construction waste management',
      icon: Leaf,
      features: ['Green Seal certified products', 'Low-VOC cleaners', 'Construction waste recycling', 'Sustainable practices', 'Environmental compliance'],
      price: 'From $0.75/sq ft'
    },
    {
      id: 'emergency-cleanup',
      title: 'Emergency Construction Cleanup',
      description: '24/7 emergency post-construction cleanup services',
      icon: Clock,
      features: ['Same-day response', 'Emergency debris removal', 'Rush job handling', 'Weekend availability', 'Holiday service'],
      price: 'From $400'
    },
    {
      id: 'window-cleaning',
      title: 'Window Cleaning (Add-On)',
      description: 'Washing interior and exterior windows; removing labels and paint splatter',
      icon: Droplets,
      features: ['Interior window cleaning', 'Exterior window cleaning', 'Label removal', 'Paint splatter removal', 'Frame cleaning'],
      price: 'From $200'
    },
    {
      id: 'carpet-cleaning',
      title: 'Carpet Cleaning (Add-On)',
      description: 'Professional cleaning of carpets as part of final cleanup',
      icon: Sparkles,
      features: ['Deep carpet cleaning', 'Stain removal', 'Odor elimination', 'Carpet protection', 'Quick drying'],
      price: 'From $180'
    },
    {
      id: 'final-inspection',
      title: 'Final Inspection & Quality Assurance',
      description: 'Comprehensive quality control and client satisfaction guarantee',
      icon: CheckCircle,
      features: ['Detailed inspection checklist', 'Before/after photos', 'Client walkthrough', 'Satisfaction guarantee', 'Re-clean if needed'],
      price: 'Included'
    }
  ];

  const whyChooseUs = [
    {
      icon: HardHat,
      title: 'Jacksonville\'s #1 Post-Construction Cleanup',
      description: 'We\'re the only local provider that combines debris removal with detailed cleaning - solving your problem in one call.'
    },
    {
      icon: Shield,
      title: 'Licensed, Bonded & Insured',
      description: 'Full compliance with OSHA and EPA regulations. Background-checked crews with comprehensive insurance coverage.'
    },
    {
      icon: Truck,
      title: 'Full-Service Solution',
      description: 'From heavy debris hauling to fine detailing - we handle everything. No need to hire multiple vendors.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly & Sustainable',
      description: 'Green Seal certified products, construction waste recycling, and low-VOC cleaners for healthy environments.'
    },
    {
      icon: Clock,
      title: 'Transparent Pricing & Instant Quotes',
      description: 'Clear package pricing with online booking. No hidden fees or surprise charges.'
    },
    {
      icon: CheckCircle,
      title: '100% Satisfaction Guarantee',
      description: 'We\'re not done until you\'re completely satisfied. Re-clean if needed at no additional cost.'
    }
  ];

  const constructionPhases = [
    {
      phase: 'Phase 1: Rough Cleanup',
      description: 'Heavy debris removal and surface preparation',
      tasks: ['Remove construction debris', 'Clear large materials', 'Sweep and vacuum floors', 'Clean windows and frames', 'Remove protective coverings'],
      icon: HardHat
    },
    {
      phase: 'Phase 2: Final Cleaning',
      description: 'Detailed cleaning and surface restoration',
      tasks: ['Dust all surfaces', 'Clean fixtures and hardware', 'Polish floors and surfaces', 'Sanitize bathrooms and kitchens', 'Clean HVAC vents'],
      icon: Target
    },
    {
      phase: 'Phase 3: Touch-Up & Inspection',
      description: 'Final detailing and quality assurance',
      tasks: ['Spot clean high-traffic areas', 'Re-polish floors', 'Final inspection', 'Client walkthrough', 'Quality assurance sign-off'],
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      name: 'Mike Rodriguez',
      company: 'Rodriguez Construction Co.',
      rating: 5,
      comment: 'Jacksonville House Cleaning Service has been our go-to for post-construction cleanup for over 3 years. Their attention to detail and reliability is unmatched. They make our projects look professional and move-in ready.'
    },
    {
      name: 'Sarah Chen',
      company: 'Chen Property Management',
      rating: 5,
      comment: 'We manage over 50 rental properties and trust these guys with all our post-renovation cleaning. Fast, thorough, and always professional. Our tenants love how clean their new spaces are.'
    },
    {
      name: 'David Thompson',
      company: 'Thompson Builders',
      rating: 5,
      comment: 'As a custom home builder, I need a cleanup service that understands the importance of perfection. This team delivers every time. They\'re part of our trusted contractor network.'
    }
  ];

  const serviceAreas = [
    'Jacksonville',
    'Jacksonville Beach',
    'Neptune Beach',
    'Atlantic Beach',
    'Ponte Vedra Beach',
    'St. Augustine',
    'Orange Park',
    'Fleming Island',
    'Green Cove Springs',
    'Riverside & Avondale',
    'San Marco',
    'Mandarin',
    'Southside',
    'Arlington',
    'Downtown Jacksonville'
  ];

  return (
    <>
      {/* Structured Data for Post-Construction Cleaning Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Jacksonville Post-Construction Cleaning Services",
            "description": "Professional post-construction cleanup services in Jacksonville, FL. Complete construction site cleaning, debris removal, and final detailing for residential and commercial projects.",
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
            "serviceType": "Post-Construction Cleaning",
            "category": "Cleaning Service",
            "offers": {
              "@type": "Offer",
              "price": "From $250",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Jacksonville Post-Construction Cleaning Options",
              "itemListElement": postConstructionServices.map(service => ({
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

      {/* Service Schema for Each Post-Construction Option */}
      {postConstructionServices.map((service, index) => (
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
              "serviceType": "Post-Construction Cleaning",
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
              "name": "Jacksonville Post-Construction Cleaning Services"
            },
            "ratingValue": "5.0",
            "reviewCount": testimonials.length,
            "bestRating": "5",
            "worstRating": "1"
          })
        }}
      />

      {/* Hero Section */}
      <PostConstructionHero />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We're Jacksonville's #1 Post-Construction Cleanup Service
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're the only local provider that offers the complete solution: debris removal + detailed cleaning + 
              eco-friendly practices + transparent pricing. No need to hire multiple vendors.
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
              Our Proven Three-Phase Construction Cleanup Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Systematic approach that ensures nothing is missed. From heavy debris removal to final detailing, 
              we follow a proven process that delivers results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {constructionPhases.map((phase, index) => (
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
              Complete Post-Construction Cleaning Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From heavy debris removal to fine detailing, we offer comprehensive post-construction cleanup 
              that makes your space move-in ready.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postConstructionServices.map((service) => (
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
                    href={`/contact?service=${service.id}&type=post-construction`}
                    className="inline-block w-full bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pricing Accuracy Note */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-accent-aqua/20 rounded-2xl border border-blue-200">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pricing Accuracy & Market Research</h3>
              <p className="text-gray-700 text-sm leading-relaxed max-w-4xl mx-auto">
                <strong>Our pricing is based on comprehensive market research from industry leaders including Fixr.com and Angi.com.</strong> 
                We've analyzed Jacksonville market conditions and competitive rates to ensure our pricing reflects the true value of professional 
                post-construction cleanup services. Our rates are competitive with regional averages while maintaining the premium quality and 
                comprehensive service that sets us apart. Pricing varies based on project size, complexity, and specific services required. 
                Contact us for personalized quotes tailored to your specific project needs.
              </p>
            </div>
          </div>
          
                     {/* Three-Phase Process Note */}
           <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-accent-green/20 rounded-2xl border border-green-200">
             <div className="text-center">
               <h3 className="text-xl font-bold text-gray-900 mb-3">Our Three-Phase Process (Included in Complete Service)</h3>
               <p className="text-gray-700 text-sm leading-relaxed max-w-4xl mx-auto">
                 <strong>Every complete post-construction cleanup includes our proven three-phase process:</strong> 
                 <strong>Phase 1:</strong> Rough cleanup removes large debris and prepares surfaces. 
                 <strong>Phase 2:</strong> Final cleaning eliminates dust, fingerprints, and stickers. 
                 <strong>Phase 3:</strong> Touch-up service addresses settled dust and ensures perfection. 
                 This systematic approach guarantees move-in ready results. Individual phases are available for specialized needs, 
                 but most customers choose our complete service for the best value and results.
               </p>
             </div>
           </div>
         </div>
       </section>

       {/* Calculator Section */}
       <section className="py-20 bg-gradient-to-br from-blue-50 to-accent-aqua/10">
         <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
               Get Your Instant Project Estimate
             </h2>
             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
               Our comprehensive calculator considers all factors including project type, size, debris level, 
               special requirements, and timeline to give you an accurate estimate in seconds.
             </p>
           </div>
           
           <div className="max-w-6xl mx-auto">
             <PostConstructionCalculator />
           </div>
         </div>
       </section>

      {/* Competitive Advantage Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-accent-aqua/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Dominate the Jacksonville Post-Construction Market
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              While competitors offer piecemeal services, we provide the complete solution that construction 
              professionals and property owners actually need.
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
                    <p className="text-gray-700 text-sm">Only offer cleaning OR debris removal, forcing you to hire multiple vendors</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Jacksonville House Cleaning Service</h4>
                    <p className="text-gray-700 text-sm">Complete solution: debris removal + cleaning + hauling in one call</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hidden Pricing</h4>
                    <p className="text-gray-700 text-sm">Most competitors require quotes and consultations, delaying your project</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h4>
                    <p className="text-gray-700 text-sm">Clear package pricing with instant online quotes and booking</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Unique Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <HardHat className="w-6 h-6 text-primary-blue" />
                  <span className="text-gray-800">Single-source solution</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-primary-blue" />
                  <span className="text-gray-800">Debris removal + cleaning</span>
                </div>
                <div className="flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-primary-blue" />
                  <span className="text-gray-800">Eco-friendly practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary-blue" />
                  <span className="text-gray-800">OSHA/EPA compliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary-blue" />
                  <span className="text-gray-800">Same-day service</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-blue" />
                  <span className="text-gray-800">100% satisfaction guarantee</span>
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
              From Jacksonville to St. Augustine, we're your trusted partner for post-construction cleanup 
              across the entire region.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-accent-aqua/10 p-4 rounded-xl text-center">
                <MapPin className="w-6 h-6 text-primary-blue mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-accent-aqua/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Construction Professionals Say
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what builders, contractors, and property managers 
              are saying about our post-construction cleanup services.
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
                    <Building2 className="w-6 h-6 text-primary-blue" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Jacksonville's #1 Post-Construction Cleanup?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the construction professionals who trust us with their post-construction cleanup needs. 
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
              href="/contact?service=full-service-cleanup&type=post-construction"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white/10 transition-colors"
            >
              Get Instant Quote
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center text-white/80">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm">Full-Service Solution</p>
            </div>
            <div className="text-center text-white/80">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm">Debris Removal</p>
            </div>
            <div className="text-center text-white/80">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm">Eco-Friendly</p>
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





