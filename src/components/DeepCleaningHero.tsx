'use client';

import React from 'react';
import UniversalServiceHero from './UniversalServiceHero';
import { Sparkles, Shield, Star, CheckCircle } from 'lucide-react';

export default function DeepCleaningHero() {
  const deepCleaningFeatures = [
    { title: 'Trained Professionals', subtitle: 'Detailed & experienced', Icon: Shield },
    { title: 'Eco-Friendly Products', subtitle: 'Safe for your family', Icon: Star },
    { title: '100% Guaranteed', subtitle: 'Satisfaction assured', Icon: CheckCircle },
  ];

  return (
    <UniversalServiceHero 
      title="Jacksonville's #1 Deep Cleaning Service"
      subtitle="Transform your space with our comprehensive deep cleaning services. We go beyond regular cleaning to provide thorough sanitization and restoration."
      Icon={Sparkles}
      features={deepCleaningFeatures}
      primaryColor="blue"
      formServiceType="deep"
    />
  );
}
