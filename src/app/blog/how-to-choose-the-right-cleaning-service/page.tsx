import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, Shield, Star, Leaf } from 'lucide-react';

export default function HowToChooseCleaningService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
                                    <div className="flex items-center gap-4 mb-6">
                          <Link href="/information" className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Information
                          </Link>
                          <span className="text-blue-100">|</span>
                          <Link href="/blog" className="text-blue-100 hover:text-white transition-colors">
                            Blog
                          </Link>
                        </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to Choose the Right Cleaning Service for Your Home
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Jacksonville House Cleaning</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
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
                Finding the perfect cleaning service can be overwhelming, especially in a city like Jacksonville with so many options. 
                Whether you&apos;re looking for regular maintenance or a one-time deep clean, choosing the right cleaning company is crucial 
                for your home's cleanliness and your peace of mind.
              </p>

              <h2 className="text-3xl font-bold text-charcoal mb-6">What to Look for in a Cleaning Service</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary-blue" />
                    Licensing and Insurance
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Always verify that your cleaning service is properly licensed and insured. This protects you from liability 
                    and ensures the company operates legally. A licensed company demonstrates professionalism and commitment to 
                    industry standards.
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Verify state licensing requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Confirm liability insurance coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Check worker&apos;s compensation insurance</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6 text-primary-blue" />
                    Reputation and Reviews
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Customer reviews and testimonials provide valuable insights into a company&apos;s reliability and quality of service. 
                    Look for consistent positive feedback and how the company handles any negative reviews.
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Read Google, Yelp, and Facebook reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Ask for references from recent clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Check Better Business Bureau ratings</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                    <Leaf className="w-6 h-6 text-primary-blue" />
                    Cleaning Products and Methods
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The cleaning products and methods used can significantly impact your home&apos;s environment and your family's health. 
                    Eco-friendly options are often safer and more sustainable.
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Inquire about eco-friendly cleaning products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Ask about their cleaning techniques and equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Ensure they&apos;re safe for pets and children</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6 mt-12">Questions to Ask Potential Cleaning Services</h2>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-charcoal mb-4">Essential Questions:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue font-bold">•</span>
                    <span>What services are included in your standard cleaning?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue font-bold">•</span>
                    <span>Do you provide your own cleaning supplies and equipment?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue font-bold">•</span>
                    <span>What is your cancellation and rescheduling policy?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue font-bold">•</span>
                    <span>How do you handle damages or issues during cleaning?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue font-bold">•</span>
                    <span>Do you offer satisfaction guarantees?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue font-bold">•</span>
                    <span>What is your pricing structure and payment terms?</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6">Why Choose Jacksonville House Cleaning</h2>
              
              <p className="text-gray-700 mb-6">
                At Jacksonville House Cleaning, we understand the importance of choosing the right cleaning service. 
                That&apos;s why we've built our reputation on transparency, reliability, and exceptional service quality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-charcoal mb-2">✓ Licensed & Insured</h4>
                  <p className="text-gray-600 text-sm">Full coverage for your peace of mind</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-charcoal mb-2">✓ Eco-Friendly Products</h4>
                  <p className="text-gray-600 text-sm">Safe for your family and pets</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-charcoal mb-2">✓ Satisfaction Guaranteed</h4>
                  <p className="text-gray-600 text-sm">100% satisfaction or we&apos;ll make it right</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-charcoal mb-2">✓ Local Jacksonville Service</h4>
                  <p className="text-gray-600 text-sm">Serving all of Jacksonville since 2010</p>
                </div>
              </div>

              <div className="bg-accent-coral/10 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Ready to Get Started?</h3>
                <p className="text-gray-700 mb-6">
                  Contact us today for a free consultation and quote. Let us show you why we&apos;re Jacksonville's 
                  trusted choice for professional cleaning services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Free Quote
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
