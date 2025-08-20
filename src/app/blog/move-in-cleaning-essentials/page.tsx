import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, Home, Truck, Sparkles } from 'lucide-react';

export default function MoveInCleaningEssentials() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Essential Move-In Cleaning Checklist for New Homeowners
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Jacksonville House Cleaning</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 28, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Moving into a new home is an exciting milestone, but before you unpack your boxes, it&apos;s crucial to ensure 
                your new space is thoroughly cleaned. Whether you're moving into a newly built home or a previously occupied 
                property, a comprehensive move-in cleaning will give you peace of mind and a fresh start.
              </p>

              <h2 className="text-3xl font-bold text-charcoal mb-6">Why Move-In Cleaning is Essential</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Health & Safety</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Remove allergens and dust</li>
                    <li>• Eliminate potential health hazards</li>
                    <li>• Ensure safe environment for family</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Fresh Start</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Begin with a clean slate</li>
                    <li>• Remove previous occupants&apos; traces</li>
                    <li>• Create your own clean environment</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6">Pre-Move-In Cleaning Checklist</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                    <Home className="w-6 h-6 text-primary-blue" />
                    Kitchen Deep Clean
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean inside and outside of all appliances</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Scrub countertops and backsplash</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean inside cabinets and drawers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Wash kitchen sink and garbage disposal</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean refrigerator coils and drip pan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Degrease range hood and filters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean microwave inside and out</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Wipe down baseboards and trim</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4">Bathroom Sanitization</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Scrub shower, tub, and tile grout</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean toilet inside and out</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Wipe down vanity and mirror</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean bathroom exhaust fan</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Wash shower curtain and liner</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Organize medicine cabinet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Check for mold and mildew</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean bathroom rugs and towels</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4">Living Areas & Bedrooms</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Dust and wipe down all surfaces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Vacuum and shampoo carpets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean windows and window treatments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Dust ceiling fans and light fixtures</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean inside closets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Wipe down baseboards and door frames</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean air vents and replace filters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Sanitize light switches and doorknobs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6 mt-12">Special Considerations for Jacksonville Homes</h2>
              
              <div className="bg-yellow-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-charcoal mb-4">Local Climate Factors:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Humidity Management</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Check for moisture damage</li>
                      <li>• Clean dehumidifiers</li>
                      <li>• Inspect for mold growth</li>
                      <li>• Clean air conditioning units</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Pest Prevention</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Seal cracks and gaps</li>
                      <li>• Clean behind appliances</li>
                      <li>• Remove food debris</li>
                      <li>• Check for pest entry points</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6">Professional Move-In Cleaning Services</h2>
              
              <p className="text-gray-700 mb-6">
                While you can tackle some cleaning tasks yourself, professional move-in cleaning ensures every detail 
                is addressed. Our team at Jacksonville House Cleaning specializes in comprehensive move-in cleaning 
                that goes beyond the basics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Truck className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                  <h4 className="font-semibold text-charcoal mb-2">Comprehensive Service</h4>
                  <p className="text-gray-600 text-sm">Every room, every surface, every detail</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Sparkles className="w-12 h-12 text-accent-green mx-auto mb-4" />
                  <h4 className="font-semibold text-charcoal mb-2">Professional Equipment</h4>
                  <p className="text-gray-600 text-sm">Industrial-grade cleaning tools</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Home className="w-12 h-12 text-accent-coral mx-auto mb-4" />
                  <h4 className="font-semibold text-charcoal mb-2">Eco-Friendly Products</h4>
                  <p className="text-gray-600 text-sm">Safe for your family and pets</p>
                </div>
              </div>

              <div className="bg-accent-coral/10 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Ready to Start Fresh?</h3>
                <p className="text-gray-700 mb-6">
                  Let our professional team ensure your new home is spotless and ready for your family. 
                  Contact us today for a free move-in cleaning consultation and quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Move-In Cleaning Quote
                  </Link>
                  <a 
                    href="tel:9044563851"
                    className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Call (904) 456-3851
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}





