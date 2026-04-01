import { Shield, Leaf, Users, Award, MapPin, Clock, Star, CheckCircle, TrendingUp, Heart, Building2, Sparkles, Truck, Car, Wind, Hammer, Fan, Droplets, Gauge, PawPrint, PartyPopper, Home } from 'lucide-react';
import Link from 'next/link';
import UniversalServiceHero from '@/components/UniversalServiceHero';


export default function AboutPage() {
  return (
    <>
      <UniversalServiceHero 
        title="Meet Your Jacksonville Neighbors The Team Behind Your Clean Home"
        subtitle="We&apos;re not just another cleaning company - we're your neighbors in Jacksonville. Our family-owned business has been serving this community for years, building trust one clean home at a time."
        Icon={Sparkles}
        primaryColor="blue"
        formServiceType="about"
      />

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
      </>
  );
}
