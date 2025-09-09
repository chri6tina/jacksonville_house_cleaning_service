import { Metadata } from 'next';
import Link from 'next/link';
import { Home, Shield, Star, Clock, CheckCircle, ArrowRight, MapPin, Users, Leaf, Heart, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Family Home Cleaning Services in Jacksonville | Kid & Pet Safe Cleaning',
  description: 'Professional family home cleaning services in Jacksonville. Safe, eco-friendly cleaning for families with children and pets. Flexible scheduling and reliable service.',
  keywords: 'family home cleaning Jacksonville, kid safe cleaning, pet safe cleaning, eco friendly cleaning, family cleaning services, safe cleaning products',
  openGraph: {
    title: 'Family Home Cleaning Services in Jacksonville | Kid & Pet Safe Cleaning',
    description: 'Professional family home cleaning services in Jacksonville. Safe, eco-friendly cleaning for families with children and pets. Flexible scheduling and reliable service.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/family-home-cleaning',
  },
};

const features = [
  {
    icon: Heart,
    title: 'Family Safe',
    description: 'Non-toxic, child and pet-safe cleaning products'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Environmentally responsible cleaning solutions'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Available evenings and weekends to fit your family schedule'
  },
  {
    icon: Shield,
    title: 'Trusted & Insured',
    description: 'Background-checked cleaners, fully insured and bonded'
  }
];

const services = [
  'Child-safe surface cleaning',
  'Pet hair removal and sanitization',
  'Eco-friendly product usage',
  'Playroom and bedroom cleaning',
  'Kitchen deep cleaning',
  'Bathroom sanitization',
  'Living area organization',
  'Floor vacuuming and mopping',
  'Window and mirror cleaning',
  'Laundry room cleaning',
  'Garage organization',
  'Outdoor play area cleaning'
];

const familyBenefits = [
  'Reduces allergens and asthma triggers',
  'Eliminates harmful bacteria and germs',
  'Creates a healthier living environment',
  'Saves time for family activities',
  'Reduces stress and mental load',
  'Maintains home value and appearance'
];

export default function FamilyHomeCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-600 via-pink-700 to-pink-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Family Home Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100">
              Safe, eco-friendly cleaning for Jacksonville families with children and pets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Family Cleaning Services?
            </h2>
            <p className="text-xl text-gray-600">
              We understand the unique needs of busy families
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Family-Focused Cleaning Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our specialized cleaning services are designed with families in mind. We use only safe, non-toxic products and pay special attention to areas where children and pets spend time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits for Your Family</h3>
              <div className="space-y-4">
                {familyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Heart className="h-5 w-5 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Family-Friendly Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Affordable cleaning services that fit your family budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Family Home</h3>
              <div className="text-3xl font-bold text-pink-600 mb-4">$120-180</div>
              <p className="text-gray-600 mb-6">Perfect for apartments and small homes</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-pink-500 mr-2" />
                  <span className="text-sm text-gray-600">2-3 hours cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-pink-500 mr-2" />
                  <span className="text-sm text-gray-600">Eco-friendly products</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-pink-500 mr-2" />
                  <span className="text-sm text-gray-600">Weekly service available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-pink-600">
              <div className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Family Home</h3>
              <div className="text-3xl font-bold text-pink-600 mb-4">$200-300</div>
              <p className="text-gray-600 mb-6">Ideal for most family homes</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-pink-500 mr-2" />
                  <span className="text-sm text-gray-600">3-4 hours cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-pink-500 mr-2" />
                  <span className="text-sm text-gray-600">Child-safe products</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-pink-500 mr-2" />
                  <span className="text-sm text-gray-600">Pet hair removal</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Large Family Home</h3>
              <div className="text-3xl font-bold text-pink-600 mb-4">$350-500</div>
              <p className="text-gray-600 mb-6">Perfect for large families</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-pink-500 mr-2" />
                  <span className="text-sm text-gray-600">4-5 hours cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-pink-500 mr-2" />
                  <span className="text-sm text-gray-600">Team cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-pink-500 mr-2" />
                  <span className="text-sm text-gray-600">Playroom organization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Give Your Family the Gift of Time
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Spend more time with your family while we keep your home clean and healthy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/pricing-calculator" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              Calculate Price
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
