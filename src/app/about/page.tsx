import { Shield, Leaf, Users, Award, MapPin, Clock, Star, CheckCircle, TrendingUp, Heart, Building2, Sparkles, Truck, Car, Wind, Hammer, Fan, Droplets, Gauge, PawPrint, PartyPopper, Home } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Structured Data for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Jacksonville House Cleaning Service",
            "description": "Learn about Jacksonville House Cleaning Service, a family-owned business serving Jacksonville since 2015. Meet our team and discover our commitment to quality cleaning services.",
            "url": "https://www.jacksonvillehousecleaningservice.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Jacksonville House Cleaning Service",
              "alternateName": "JHCS",
              "description": "Jacksonville's trusted house cleaning service since 2015. Family-owned business providing professional, eco-friendly cleaning services to Jacksonville families.",
              "url": "https://www.jacksonvillehousecleaningservice.com",
              "telephone": "+19044563851",
              "email": "info@jaxcleaning.com",
              "foundingDate": "2015",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jacksonville",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "City",
                "name": "Jacksonville"
              },
              "serviceArea": {
                "@type": "City",
                "name": "Jacksonville"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Jacksonville House Cleaning Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Recurring House Cleaning",
                      "description": "Weekly, bi-weekly, or monthly cleaning services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Deep Cleaning",
                      "description": "Comprehensive deep cleaning services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Move-In/Move-Out Cleaning",
                      "description": "Professional move-in and move-out cleaning"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Post-Construction Cleaning",
                      "description": "Construction site cleanup and restoration"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              },
              "award": [
                "Licensed by State of Florida",
                "Jacksonville Business License",
                "500+ Happy Families Served"
              ],
              "brand": "Jacksonville House Cleaning Service",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+19044563851",
                "contactType": "customer service",
                "availableLanguage": "English",
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              },
              "employee": [
                {
                  "@type": "Person",
                  "name": "Sarah Johnson",
                  "jobTitle": "Founder & CEO",
                  "description": "15+ years experience in professional cleaning services"
                },
                {
                  "@type": "Person",
                  "name": "Maria Garcia",
                  "jobTitle": "Customer Relations",
                  "description": "4+ years experience, ensures exceptional customer service"
                },
                {
                  "@type": "Person",
                  "name": "James Wilson",
                  "jobTitle": "Operations Manager",
                  "description": "10+ years experience, oversees all operations"
                }
              ]
            }
          })
        }}
      />

      {/* Person Schema for Team Members */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sarah Johnson",
            "jobTitle": "Founder & CEO",
            "worksFor": {
              "@type": "Organization",
              "name": "Jacksonville House Cleaning Service"
            },
            "description": "15+ years experience in professional cleaning services",
            "knowsAbout": ["House Cleaning", "Business Management", "Customer Service"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL"
            }
          })
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section - Local Business Style */}
        <section 
          className="relative py-20 lg:py-24 overflow-hidden"
          style={{
            backgroundImage: 'url(/hero1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Local Business Badge */}
              <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/50 shadow-lg">
                <MapPin className="w-4 h-4 text-primary-blue" />
                Jacksonville Family Business Since 2015
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                <span className="block">Meet Your</span>
                <span className="block text-cyan-400">Jacksonville Neighbors</span>
                <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-white/90 mt-3">
                  The Team Behind Your Clean Home
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed">
                We&apos;re not just another cleaning company - we're your neighbors in Jacksonville. 
                Our family-owned business has been serving this community for years, building 
                trust one clean home at a time.
              </p>

              {/* Local Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <Users className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">Local Team</h3>
                  <p className="text-white/80 text-xs leading-relaxed">Jacksonville residents</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <Shield className="w-6 h-6 text-primary-blue" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">Licensed & Insured</h3>
                  <p className="text-white/80 text-xs leading-relaxed">Florida business</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-accent-coral/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <Star className="w-6 h-6 text-accent-coral" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">Community Trusted</h3>
                  <p className="text-white/80 text-xs leading-relaxed">500+ happy families</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Jacksonville Story
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Founded in 2015, Jacksonville House Cleaning Service began with a simple mission: 
                  to provide our neighbors with the same level of care and attention we&apos;d want for our own homes.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  What started as a small family operation has grown into one of Jacksonville&apos;s most trusted 
                  cleaning services, but we've never lost sight of what makes us special - our commitment to 
                  treating every home like it's our own.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We&apos;re proud to call Jacksonville home and even prouder to serve this amazing community 
                  with reliable, eco-friendly cleaning services that families can depend on.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-blue/20 to-accent-aqua/20 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Family Values</h3>
                    <p className="text-gray-700 mb-4">
                      We treat every home like it's our own, with the same care and attention to detail.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-blue">500+</div>
                        <div className="text-gray-600">Happy Families</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent-aqua">8+</div>
                        <div className="text-gray-600">Years Serving</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Jacksonville Values
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                These core values guide everything we do, from how we clean your home to how we treat our team and community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Care & Compassion</h3>
                <p className="text-gray-700 text-sm">
                  We care about your home and family as if they were our own
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Trust & Reliability</h3>
                <p className="text-gray-700 text-sm">
                  Building trust through consistent, reliable service delivery
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-accent-aqua/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-accent-aqua" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly</h3>
                <p className="text-gray-700 text-sm">
                  Protecting your family and our environment with safe products
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-accent-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent-coral" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-700 text-sm">
                  Striving for excellence in every cleaning task we perform
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Jacksonville Team
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our team of cleaning professionals is made up of Jacksonville locals who understand 
                what makes our community special and are committed to serving it with excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-24 h-24 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-primary-blue font-semibold mb-2">Founder & CEO</p>
                <p className="text-gray-700 text-sm">
                  15+ years experience in professional cleaning services
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-24 h-24 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Maria Garcia</h3>
                <p className="text-accent-aqua font-semibold mb-2">Customer Relations</p>
                <p className="text-gray-700 text-sm">
                  4+ years experience, ensures exceptional customer service and satisfaction
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-24 h-24 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">James Wilson</h3>
                <p className="text-accent-coral font-semibold mb-2">Operations Manager</p>
                <p className="text-gray-700 text-sm">
                  10+ years experience, oversees all operations and ensures quality standards
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Insurance */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Licensed, Bonded & Insured</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Your peace of mind is our priority. We maintain all necessary licenses, 
                insurance, and certifications to protect you and your property.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fully Licensed</h3>
                <p className="text-gray-700">
                  Licensed by the State of Florida, registered with the City of Jacksonville, and certified for specialized services
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-accent-aqua/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-accent-aqua" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bonded & Insured</h3>
                <p className="text-gray-700">
                  $2 million general liability insurance, $500,000 property damage coverage, and full bonding for your protection
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Background Checked</h3>
                <p className="text-gray-700">
                  All team members undergo thorough background checks, drug testing, and continuous training
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-blue">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied customers who trust us with their cleaning needs across Jacksonville.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200"
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/testimonials"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors duration-200"
              >
                Read Customer Reviews
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

