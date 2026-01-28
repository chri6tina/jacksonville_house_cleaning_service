import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import LocationServicePage from '@/components/LocationServicePage';
import { locations, services, getLocationBySlug, getServiceBySlug } from '@/lib/locationServiceData';
import { generateMetadata as buildMetadata, generateLocationServiceMetadata } from '@/lib/metadata';

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.flatMap((location) =>
    services.map((service) => ({
      location: location.slug,
      service: service.slug,
    }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { location: string; service: string };
}): Metadata {
  const location = getLocationBySlug(params.location);
  const service = getServiceBySlug(params.service);

  if (!location || !service) {
    return buildMetadata(generateLocationServiceMetadata());
  }

  return buildMetadata(generateLocationServiceMetadata(location.slug, service.slug));
}

export default function LocationServiceRoute({
  params,
}: {
  params: { location: string; service: string };
}) {
  const location = getLocationBySlug(params.location);
  const service = getServiceBySlug(params.service);

  if (!location || !service) {
    notFound();
  }

  return <LocationServicePage location={location} service={service} />;
}
