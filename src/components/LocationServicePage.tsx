import Link from 'next/link';
import { MapPin, Phone, Sparkles, CheckCircle, Star, Shield, Clock } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import type { LocationData, ServiceData } from '@/lib/locationServiceData';

interface LocationServicePageProps {
  location: LocationData;
  service: ServiceData;
}

export default function LocationServicePage({ location, service }: LocationServicePageProps) {
  const serviceHighlights = [
    `Comprehensive ${service.name.toLowerCase()} checklist`,
    `Local team serving ${location.name} homes and businesses`,
    'Eco-friendly products and professional-grade equipment',
    'Flexible scheduling with quick response times',
    'Licensed, insured, and background-checked cleaners',
    'Transparent pricing with no hidden fees',
  ];

  const localBenefits = [
    `Knowledge of ${location.name} neighborhoods and property types`,
    'Reliable arrival windows with clear communication',
    'Respect for your home, office, and schedule',
    'Consistent quality standards on every visit',
  ];

  const processSteps = [
    {
      title: 'Local Assessment',
      description: `We review your ${location.name} property needs and tailor the ${service.name.toLowerCase()} scope.`,
      icon: MapPin,
    },
    {
      title: 'Service Plan',
      description: `We outline a detailed ${service.name.toLowerCase()} plan with timing and priorities.`,
      icon: Shield,
    },
    {
      title: 'Professional Cleaning',
      description: `Our team delivers thorough ${service.name.toLowerCase()} with careful attention to detail.`,
      icon: Sparkles,
    },
    {
      title: 'Final Check',
      description: 'We verify quality and review results before we leave.',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-14 h-14 text-cyan-100" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {service.name} in {location.name}
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto">
            Trusted local {service.name.toLowerCase()} for {location.name} homes and businesses. Get reliable
            service, flexible scheduling, and spotless results from a Jacksonville-based team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?service=${service.slug}&location=${location.slug}`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href={`/locations/${location.slug}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>{location.name} Services</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Service Areas', href: '/locations' },
              { label: location.name, href: `/locations/${location.slug}` },
              { label: service.name, href: `/locations/${location.slug}/${service.slug}`, current: true },
            ]}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional {service.name} for {location.name}
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our {location.name} team delivers dependable {service.name.toLowerCase()} designed for busy
                  households and businesses. We focus on detailed cleaning, consistent results, and
                  professional communication from start to finish.
                </p>
                <p>
                  Whether you need a one-time refresh or ongoing service, we tailor every visit to your
                  property and priorities. Expect thorough, careful work with safe products and a respectful crew.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h3>
              <div className="space-y-4">
                {serviceHighlights.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href={`/${service.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Learn about {service.name}
                  <Sparkles className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why {location.name} Clients Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local expertise, reliable scheduling, and consistent quality set our {service.name.toLowerCase()}
              apart in {location.name}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our {location.name} {service.name} Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Clear steps, dependable timing, and consistent results for every {service.name.toLowerCase()} visit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
              <Clock className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Morning, afternoon, and weekend appointments available across {location.name}.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
              <Shield className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Trusted Professionals</h3>
                <p className="text-gray-600">
                  Licensed, insured, and dedicated to delivering consistent results every time.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
              <MapPin className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Local Focus</h3>
                <p className="text-gray-600">
                  Jacksonville-based teams that understand {location.name} homes and businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for {location.name} {service.name}?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Request a free quote today and see why local clients choose us for dependable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?service=${service.slug}&location=${location.slug}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>Get Your Free Quote</span>
            </Link>
            <Link
              href={`/locations/${location.slug}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View {location.name} Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
