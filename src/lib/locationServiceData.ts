import locationServiceData from '@/data/locationServiceData.json';

export interface LocationData {
  slug: string;
  name: string;
}

export interface ServiceData {
  slug: string;
  name: string;
}

export const locations = locationServiceData.locations as LocationData[];
export const services = locationServiceData.services as ServiceData[];

export const getLocationBySlug = (slug: string): LocationData | undefined =>
  locations.find((location) => location.slug === slug);

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  services.find((service) => service.slug === slug);

export const getLocationServicePairs = () =>
  locations.flatMap((location) =>
    services.map((service) => ({
      location,
      service,
    }))
  );
