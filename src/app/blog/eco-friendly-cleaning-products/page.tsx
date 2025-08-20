import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, Leaf, Shield, Heart, Globe } from 'lucide-react';

export default function EcoFriendlyCleaningProducts() {
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
              The Benefits of Eco-Friendly Cleaning Products
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Jacksonville House Cleaning</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 10, 2024</span>
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
                Making the switch to eco-friendly cleaning products is one of the best decisions you can make for your family, 
                pets, and the environment. Traditional cleaning products often contain harsh chemicals that can be harmful 
                to your health and the planet. Let's explore why eco-friendly alternatives are the better choice.
              </p>

              <h2 className="text-3xl font-bold text-charcoal mb-6">Health Benefits for Your Family</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-primary-blue" />
                    Safer for Children and Pets
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Children and pets are particularly vulnerable to the harmful effects of traditional cleaning chemicals. 
                    Eco-friendly products use natural ingredients that are much safer for your loved ones.
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>No toxic fumes or harmful residues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Safe if accidentally ingested in small amounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Gentle on sensitive skin and respiratory systems</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary-blue" />
                    Reduced Allergic Reactions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Many people experience allergic reactions to the harsh chemicals in traditional cleaning products. 
                    Eco-friendly alternatives are formulated to be hypoallergenic and gentle.
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>No artificial fragrances or dyes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Natural ingredients that are less likely to cause irritation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Better indoor air quality</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6 mt-12">Environmental Impact</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                    <Globe className="w-6 h-6 text-primary-blue" />
                    Water and Air Quality
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When you use eco-friendly cleaning products, you're helping to protect our waterways and air quality. 
                    Traditional cleaning chemicals can contaminate water supplies and contribute to air pollution.
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Biodegradable ingredients that break down naturally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>No phosphates or other water pollutants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Reduced carbon footprint in production and disposal</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                    <Leaf className="w-6 h-6 text-primary-blue" />
                    Sustainable Packaging
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Eco-friendly cleaning products often come in sustainable packaging that's better for the environment.
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Recyclable or biodegradable containers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Concentrated formulas that require less packaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span>Refillable options to reduce waste</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6 mt-12">Cost-Effectiveness</h2>
              
              <div className="bg-green-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-charcoal mb-4">Long-term Savings:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">✓ Concentrated Formulas</h4>
                    <p className="text-gray-600 text-sm">More cleaning power per ounce</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">✓ Multi-Purpose Products</h4>
                    <p className="text-gray-600 text-sm">Fewer products to buy</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">✓ Better for Surfaces</h4>
                    <p className="text-gray-600 text-sm">Less damage means longer-lasting items</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">✓ Health Benefits</h4>
                    <p className="text-gray-600 text-sm">Potential savings on medical costs</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-charcoal mb-6">Our Eco-Friendly Commitment</h2>
              
              <p className="text-gray-700 mb-6">
                At Jacksonville House Cleaning, we're committed to using only eco-friendly cleaning products. 
                We believe that professional cleaning should be effective, safe, and environmentally responsible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Leaf className="w-12 h-12 text-accent-green mx-auto mb-4" />
                  <h4 className="font-semibold text-charcoal mb-2">Natural Ingredients</h4>
                  <p className="text-gray-600 text-sm">Plant-based, biodegradable cleaning solutions</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Shield className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                  <h4 className="font-semibold text-charcoal mb-2">Certified Safe</h4>
                  <p className="text-gray-600 text-sm">Third-party certified eco-friendly products</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Heart className="w-12 h-12 text-accent-coral mx-auto mb-4" />
                  <h4 className="font-semibold text-charcoal mb-2">Family Safe</h4>
                  <p className="text-gray-600 text-sm">Safe for children, pets, and sensitive individuals</p>
                </div>
              </div>

              <div className="bg-accent-green/10 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Experience Eco-Friendly Cleaning</h3>
                <p className="text-gray-700 mb-6">
                  Ready to make the switch to eco-friendly cleaning? Contact us today to learn more about our 
                  green cleaning services and how we can help protect your family and the environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-accent-green hover:bg-accent-green/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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





