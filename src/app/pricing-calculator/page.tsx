'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, Home, Building2, MapPin, Phone, Clock, Shield, Star, Users, CheckCircle, DollarSign, Sparkles } from 'lucide-react';

export default function PricingCalculatorPage() {
  const [propertyType, setPropertyType] = useState('residential');
  const [propertySize, setPropertySize] = useState('1000-1500');
  const [cleaningType, setCleaningType] = useState('regular');
  const [bedrooms, setBedrooms] = useState('3');
  const [bathrooms, setBathrooms] = useState('2');
  const [frequency, setFrequency] = useState('one-time');

  const propertySizes = [
    { value: '500-1000', label: '500-1,000 sq ft', basePrice: 120 },
    { value: '1000-1500', label: '1,000-1,500 sq ft', basePrice: 150 },
    { value: '1500-2000', label: '1,500-2,000 sq ft', basePrice: 180 },
    { value: '2000-2500', label: '2,000-2,500 sq ft', basePrice: 220 },
    { value: '2500-3000', label: '2,500-3,000 sq ft', basePrice: 260 },
    { value: '3000+', label: '3,000+ sq ft', basePrice: 300 }
  ];

  const cleaningTypes = [
    { value: 'regular', label: 'Regular Cleaning', multiplier: 1.0 },
    { value: 'deep', label: 'Deep Cleaning', multiplier: 1.5 },
    { value: 'move-in-out', label: 'Move-In/Out', multiplier: 1.8 },
    { value: 'post-construction', label: 'Post-Construction', multiplier: 2.0 }
  ];

  const frequencyDiscounts = [
    { value: 'one-time', label: 'One Time', discount: 0 },
    { value: 'weekly', label: 'Weekly', discount: 0.15 },
    { value: 'bi-weekly', label: 'Bi-Weekly', discount: 0.10 },
    { value: 'monthly', label: 'Monthly', discount: 0.05 }
  ];

  const additionalServices = [
    { name: 'Carpet Cleaning', price: 50, selected: false },
    { name: 'Window Cleaning', price: 40, selected: false },
    { name: 'Oven Cleaning', price: 35, selected: false },
    { name: 'Refrigerator Cleaning', price: 30, selected: false },
    { name: 'Cabinet Cleaning', price: 45, selected: false },
    { name: 'Baseboard Cleaning', price: 25, selected: false }
  ];

  const [selectedServices, setSelectedServices] = useState(additionalServices);

  const toggleService = (index: number) => {
    const newServices = [...selectedServices];
    newServices[index].selected = !newServices[index].selected;
    setSelectedServices(newServices);
  };

  const calculatePrice = () => {
    const baseSize = propertySizes.find(size => size.value === propertySize);
    const cleaningMultiplier = cleaningTypes.find(type => type.value === cleaningType);
    const frequencyDiscount = frequencyDiscounts.find(freq => freq.value === frequency);
    
    if (!baseSize || !cleaningMultiplier || !frequencyDiscount) return 0;

    let basePrice = baseSize.basePrice * cleaningMultiplier.multiplier;
    
    // Add bedroom/bathroom adjustments for residential
    if (propertyType === 'residential') {
      basePrice += (parseInt(bedrooms) - 2) * 15;
      basePrice += (parseInt(bathrooms) - 1) * 20;
    }

    // Add selected additional services
    const additionalCost = selectedServices
      .filter(service => service.selected)
      .reduce((total, service) => total + service.price, 0);

    basePrice += additionalCost;

    // Apply frequency discount
    const finalPrice = basePrice * (1 - frequencyDiscount.discount);

    return Math.round(finalPrice);
  };

  const estimatedPrice = calculatePrice();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-8 sm:py-12 lg:py-16 overflow-hidden"
        style={{
          backgroundImage: 'url(/hero1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/75"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Local Business Badge */}
            <div className="inline-flex items-center gap-2 bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white shadow-lg">
              <Calculator className="w-3 h-3 sm:w-4 sm:h-4 text-primary-blue" />
              Jacksonville Pricing Calculator - Get Instant Quotes
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-white drop-shadow-lg">
              <span className="block">Cleaning Service</span>
              <span className="block text-cyan-300 sm:text-cyan-400">Pricing Calculator</span>
              <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mt-2 sm:mt-3 drop-shadow-md">
                Get Instant Quotes for Jacksonville Cleaning Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 drop-shadow-md">
              Use our interactive calculator to get instant pricing for your cleaning needs. 
              Transparent pricing with no hidden fees - just honest Jacksonville rates.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mt-8 sm:mt-10 px-4">
              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-green/30 sm:bg-accent-green/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">No Hidden Fees</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">Transparent pricing</p>
              </div>

              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-blue/30 sm:bg-primary-blue/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">Licensed & Insured</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">Jacksonville trusted</p>
              </div>

              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-coral/30 sm:bg-accent-coral/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-accent-coral" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">Instant Quotes</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">No waiting required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              Jacksonville Cleaning Service Calculator
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              Get an instant estimate for your cleaning service. Adjust the options below to see 
              how different factors affect your Jacksonville cleaning price.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-6">Service Details</h3>

              {/* Property Type */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-3">Property Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPropertyType('residential')}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      propertyType === 'residential'
                        ? 'border-primary-blue bg-primary-blue/10 text-primary-blue'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Home className="w-5 h-5 mx-auto mb-2" />
                    <span className="text-sm font-medium">Residential</span>
                  </button>
                  <button
                    onClick={() => setPropertyType('commercial')}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      propertyType === 'commercial'
                        ? 'border-primary-blue bg-primary-blue/10 text-primary-blue'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Building2 className="w-5 h-5 mx-auto mb-2" />
                    <span className="text-sm font-medium">Commercial</span>
                  </button>
                </div>
              </div>

              {/* Property Size */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-3">Property Size</label>
                <select
                  value={propertySize}
                  onChange={(e) => setPropertySize(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  {propertySizes.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cleaning Type */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-3">Cleaning Type</label>
                <select
                  value={cleaningType}
                  onChange={(e) => setCleaningType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  {cleaningTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Residential Specific Options */}
              {propertyType === 'residential' && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Bedrooms</label>
                    <select
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    >
                      {['1', '2', '3', '4', '5', '6+'].map((bedroom) => (
                        <option key={bedroom} value={bedroom}>
                          {bedroom}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Bathrooms</label>
                    <select
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    >
                      {['1', '1.5', '2', '2.5', '3', '4+'].map((bathroom) => (
                        <option key={bathroom} value={bathroom}>
                          {bathroom}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Frequency */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-3">Service Frequency</label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  {frequencyDiscounts.map((freq) => (
                    <option key={freq.value} value={freq.value}>
                      {freq.label} {freq.discount > 0 ? `(${freq.discount * 100}% off)` : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Additional Services */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-3">Additional Services</label>
                <div className="space-y-2">
                  {selectedServices.map((service, index) => (
                    <label key={index} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={service.selected}
                        onChange={() => toggleService(index)}
                        className="w-4 h-4 text-primary-blue border-gray-300 rounded focus:ring-primary-blue"
                      />
                      <span className="text-sm text-charcoal/80">{service.name}</span>
                      <span className="text-sm font-medium text-primary-blue">+${service.price}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">Your Estimated Price</h3>
                <div className="text-4xl sm:text-5xl font-bold text-primary-blue mb-2">
                  ${estimatedPrice}
                </div>
                <p className="text-charcoal/70">One-time cleaning service</p>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-charcoal">Price Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Base cleaning</span>
                    <span>${Math.round(propertySizes.find(s => s.value === propertySize)?.basePrice || 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{cleaningTypes.find(t => t.value === cleaningType)?.label}</span>
                    <span>+${Math.round((propertySizes.find(s => s.value === propertySize)?.basePrice || 0) * (cleaningTypes.find(t => t.value === cleaningType)?.multiplier || 1) - (propertySizes.find(s => s.value === propertySize)?.basePrice || 0))}</span>
                  </div>
                  {propertyType === 'residential' && (
                    <>
                      <div className="flex justify-between">
                        <span>Bedrooms ({bedrooms})</span>
                        <span>+${(parseInt(bedrooms) - 2) * 15}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bathrooms ({bathrooms})</span>
                        <span>+${(parseInt(bathrooms) - 1) * 20}</span>
                      </div>
                    </>
                  )}
                  {selectedServices.filter(s => s.selected).map((service, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{service.name}</span>
                      <span>+${service.price}</span>
                    </div>
                  ))}
                  {(() => {
                    const frequencyDiscount = frequencyDiscounts.find(f => f.value === frequency);
                    return frequencyDiscount && frequencyDiscount.discount > 0 ? (
                      <div className="flex justify-between text-accent-green">
                        <span>{frequencyDiscount.label} discount</span>
                        <span>-${Math.round(estimatedPrice * frequencyDiscount.discount)}</span>
                      </div>
                    ) : null;
                  })()}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="w-full bg-accent-coral hover:bg-accent-coral/90 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Book This Service
                </Link>
                <a
                  href="tel:9044563851"
                  className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Call for Custom Quote
                </a>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-charcoal/60 mt-4 text-center">
                * This is an estimate. Final price may vary based on specific requirements and property condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Our Calculator */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              Why Use Our Jacksonville Pricing Calculator?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              Get instant, transparent pricing without the hassle of waiting for quotes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Clock,
                title: 'Instant Quotes',
                description: 'Get pricing in seconds, not hours or days'
              },
              {
                icon: DollarSign,
                title: 'No Hidden Fees',
                description: 'See exactly what you\'ll pay upfront'
              },
              {
                icon: Shield,
                title: 'Accurate Estimates',
                description: 'Based on real Jacksonville market rates'
              },
              {
                icon: Users,
                title: 'Local Pricing',
                description: 'Jacksonville-specific rates and services'
              },
              {
                icon: CheckCircle,
                title: 'Easy Comparison',
                description: 'Compare different service options easily'
              },
              {
                icon: Sparkles,
                title: 'Professional Service',
                description: 'Same quality service, transparent pricing'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="w-16 h-16 bg-primary-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-sm text-charcoal/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your Jacksonville Cleaning Quote?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Use our calculator above or call us directly for a custom quote. 
            We\'re here to help you get the perfect cleaning service for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <Calculator className="w-5 h-5" />
              Get Custom Quote
            </Link>
            <a
              href="tel:9044563851"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call (904) 456-3851
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
