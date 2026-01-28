import type { ReactNode } from 'react';
import LocationServiceLinks from '@/components/LocationServiceLinks';

export default function LocationsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <LocationServiceLinks />
    </>
  );
}
