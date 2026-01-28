'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Sparkles } from 'lucide-react';
import { services, getLocationBySlug } from '@/lib/locationServiceData';

export default function LocationServiceLinks() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] !== 'locations' || segments.length !== 2) {
    return null;
  }

  const locationSlug = segments[1];
  const location = getLocationBySlug(locationSlug);

  if (!location) {
    return null;
  }

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            {location.name} Service Options
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Services in {location.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore every service we offer in {location.name}. Each page includes local details, service
            highlights, and a quick way to request a quote.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/locations/${location.slug}/${service.slug}`}
              className="group flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 hover:border-blue-200 hover:bg-blue-50 transition-all"
            >
              <span className="font-semibold">{service.name}</span>
              <Sparkles className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
