'use client';

import React from 'react';
import UniversalServiceHero from './UniversalServiceHero';
import { HardHat, Shield, Truck, CheckCircle } from 'lucide-react';

export default function PostConstructionHero() {
  const postConstructionFeatures = [
    { title: 'Licensed & Insured', subtitle: 'Full coverage protection', Icon: Shield },
    { title: 'Debris Hauling', subtitle: 'Full removal service', Icon: Truck },
    { title: '100% Guaranteed', subtitle: 'Move-in ready results', Icon: CheckCircle },
  ];

  return (
    <UniversalServiceHero 
      title="Jacksonville's #1 Post-Construction Cleanup"
      subtitle="Professional debris removal and detailed final cleaning for new builds, residential renovations, and commercial projects."
      Icon={HardHat}
      features={postConstructionFeatures}
      primaryColor="blue"
      formServiceType="post-construction"
    />
  );
}
