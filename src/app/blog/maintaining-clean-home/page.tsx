import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, Home, Clock as ClockIcon, Sparkles } from 'lucide-react';

export default function MaintainingCleanHome() {
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
              Daily Habits to Maintain a Clean Home Between Professional Cleanings
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Jacksonville House Cleaning</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 20, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>4 min read</span>
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
                While professional cleaning services provide deep, thorough cleaning, maintaining a clean home between visits 
                is essential for a healthy, comfortable living environment. Simple daily routines can make a significant 
                difference in keeping your Jacksonville home looking great and feeling fresh.
              </p>

              <h2 className="text-3xl font-bold text-charcoal mb-6">Morning Cleaning Routine (5-10 minutes)</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3 flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-primary-blue" />
                    Quick Morning Tasks
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Make your bed immediately after waking up</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Wipe down bathroom counters after use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Put away any items left out from the night before</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Empty dishwasher if it ran overnight</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6 mt-12">Kitchen Maintenance Habits</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">After Each Meal</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Rinse dishes immediately after use</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Wipe down countertops and stovetop</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Put away ingredients and condiments</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Load dishwasher or wash dishes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Sweep or vacuum kitchen floor</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Take out trash when full</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6 mt-12">Living Room & Common Areas</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Daily Maintenance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Fluff and straighten throw pillows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Fold and put away blankets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Put away books, magazines, and remotes</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Quick dust of visible surfaces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Vacuum high-traffic areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span>Straighten decorative items</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6 mt-12">Bathroom Quick Clean</h2>
              
              <div className="bg-green-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Daily Bathroom Tasks:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Wipe down sink and counter after use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Hang up towels properly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Quick toilet bowl swish if needed</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Put away toiletries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Empty bathroom trash when full</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Quick mirror wipe if needed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6">Weekly Maintenance Tasks</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">Weekly Deep Clean Tasks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-charcoal mb-2">Kitchen</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Clean refrigerator interior</li>
                        <li>• Wipe down appliance exteriors</li>
                        <li>• Mop kitchen floor</li>
                        <li>• Clean microwave</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-charcoal mb-2">Bathrooms</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Scrub shower/tub</li>
                        <li>• Clean toilet thoroughly</li>
                        <li>• Wash bath mats</li>
                        <li>• Replace towels</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-charcoal mb-2">Living Areas</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Vacuum all carpets</li>
                        <li>• Dust all surfaces</li>
                        <li>• Clean windows</li>
                        <li>• Change bedding</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6 mt-12">Jacksonville-Specific Considerations</h2>
              
              <div className="bg-yellow-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-charcoal mb-4">Local Climate Maintenance:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Humidity Management</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Run dehumidifiers regularly</li>
                      <li>• Check for moisture buildup</li>
                      <li>• Clean air conditioning filters</li>
                      <li>• Monitor for mold growth</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Pest Prevention</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Keep food sealed properly</li>
                      <li>• Clean up crumbs immediately</li>
                      <li>• Check for pest entry points</li>
                      <li>• Maintain clean garbage areas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6">Professional Cleaning Support</h2>
              
              <p className="text-gray-700 mb-6">
                While daily habits help maintain cleanliness, professional cleaning services provide the deep cleaning 
                that keeps your home truly healthy and beautiful. Our team at Jacksonville House Cleaning can work 
                with your maintenance routine to ensure optimal results.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Home className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                  <h4 className="font-semibold text-charcoal mb-2">Regular Maintenance</h4>
                  <p className="text-gray-600 text-sm">Weekly, bi-weekly, or monthly service</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Sparkles className="w-12 h-12 text-accent-green mx-auto mb-4" />
                  <h4 className="font-semibold text-charcoal mb-2">Deep Cleaning</h4>
                  <p className="text-gray-600 text-sm">Thorough cleaning beyond daily tasks</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <ClockIcon className="w-12 h-12 text-accent-coral mx-auto mb-4" />
                  <h4 className="font-semibold text-charcoal mb-2">Flexible Scheduling</h4>
                  <p className="text-gray-600 text-sm">Work around your lifestyle</p>
                </div>
              </div>

              <div className="bg-accent-green/10 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Need Professional Support?</h3>
                <p className="text-gray-700 mb-6">
                  Let our professional team complement your daily cleaning habits with thorough, 
                  deep cleaning services. Contact us today to learn more about our maintenance programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-accent-green hover:bg-accent-green/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Maintenance Quote
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






