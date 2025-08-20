import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, Sun, Home, Sparkles } from 'lucide-react';

export default function SpringCleaningChecklist() {
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
              Complete Spring Cleaning Checklist for Jacksonville Homes
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Jacksonville House Cleaning</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 5, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
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
                Spring cleaning in Jacksonville is the perfect opportunity to refresh your home after the winter months. 
                With our humid subtropical climate, it&apos;s especially important to tackle areas that may have accumulated 
                moisture and dust. This comprehensive checklist will help you get your home ready for the warmer months ahead.
              </p>

              <h2 className="text-3xl font-bold text-charcoal mb-6">Pre-Spring Cleaning Preparation</h2>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <Sun className="w-6 h-6 text-primary-blue" />
                  Before You Begin
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                    <span>Open windows to let in fresh air and natural light</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                    <span>Gather all necessary cleaning supplies and equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                    <span>Create a cleaning schedule to tackle one room at a time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                    <span>Consider hiring professional help for deep cleaning tasks</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6">Room-by-Room Spring Cleaning Checklist</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                    <Home className="w-6 h-6 text-primary-blue" />
                    Living Room & Common Areas
                  </h3>
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
                        <span>Clean electronics and remote controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Declutter and organize books and magazines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Wipe down baseboards and door frames</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean air vents and replace filters</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4">Kitchen Deep Clean</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean inside and outside of all appliances</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Degrease range hood and filters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean refrigerator coils and drip pan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Scrub countertops and backsplash</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean inside cabinets and drawers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Wash kitchen sink and garbage disposal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean microwave inside and out</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Organize pantry and discard expired items</span>
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
                        <span>Wash shower curtain and liner</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean bathroom exhaust fan</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Wipe down vanity and mirror</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Organize medicine cabinet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Clean bathroom rugs and towels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Check for mold and mildew</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6 mt-12">Jacksonville-Specific Considerations</h2>
              
              <div className="bg-yellow-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-charcoal mb-4">Climate Considerations:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Humidity Management</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Check for moisture damage</li>
                      <li>• Clean dehumidifiers</li>
                      <li>• Inspect for mold growth</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Pest Prevention</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Seal cracks and gaps</li>
                      <li>• Clean behind appliances</li>
                      <li>• Remove food debris</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6">Professional Spring Cleaning Services</h2>
              
              <p className="text-gray-700 mb-6">
                While DIY spring cleaning is great, some tasks require professional expertise. Our team at Jacksonville House Cleaning 
                offers comprehensive spring cleaning services that go beyond the basics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Sparkles className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                  <h4 className="font-semibold text-charcoal mb-2">Deep Cleaning</h4>
                  <p className="text-gray-600 text-sm">Professional equipment and techniques</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Home className="w-12 h-12 text-accent-green mx-auto mb-4" />
                  <h4 className="font-semibold text-charcoal mb-2">Customized Service</h4>
                  <p className="text-gray-600 text-sm">Tailored to your specific needs</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Sun className="w-12 h-12 text-accent-coral mx-auto mb-4" />
                  <h4 className="font-semibold text-charcoal mb-2">Eco-Friendly</h4>
                  <p className="text-gray-600 text-sm">Safe, non-toxic cleaning products</p>
                </div>
              </div>

              <div className="bg-accent-coral/10 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Ready for a Fresh Start?</h3>
                <p className="text-gray-700 mb-6">
                  Let our professional team help you achieve a truly clean and fresh home this spring. 
                  Contact us today for a free consultation and quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Spring Cleaning Quote
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





