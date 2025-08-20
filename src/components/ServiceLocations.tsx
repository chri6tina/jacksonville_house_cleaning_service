'use client';

import React from 'react';
import { MapPin, Star, Clock, Shield } from 'lucide-react';

const ServiceLocations: React.FC = () => {
  const jacksonvilleAreas = {
    northside: [
      'Northside',
      'Oceanway',
      'Dinsmore',
      'Norwood',
      'Springfield',
      'Durkeeville',
      'New Town',
      'Moncrief',
      'Grand Park',
      'Riverview',
      'Mixontown',
      'Brentwood',
      'Eastside',
      'Arlington',
      'Fort Caroline',
      'Garden City',
      'Hogan',
      'Lake Forest',
      'Lake Lucina',
      'Lakeshore',
      'Longbranch',
      'Merrill Road',
      'North Shore',
      'Pecan Park',
      'Pine Forest',
      'Southside Estates',
      'Southside Manor',
      'Southside Terrace',
      'Southwood',
      'St. Nicholas',
      'Sunbeam',
      'Turtle Creek',
      'University Park',
      'Venetia',
      'Whitehouse',
      'Windy Hill'
    ],
    southside: [
      'Southside',
      'Baymeadows',
      'Deerwood',
      'Mandarin',
      'San Marco',
      'San Jose',
      'Avondale',
      'Riverside',
      'Murray Hill',
      'Ortega',
      'Fairfax',
      'Lakewood',
      'Lake Shore',
      'Lake Lucina',
      'Longbranch',
      'Merrill Road',
      'North Shore',
      'Pecan Park',
      'Pine Forest',
      'Southside Estates',
      'Southside Manor',
      'Southside Terrace',
      'Southwood',
      'St. Nicholas',
      'Sunbeam',
      'Turtle Creek',
      'University Park',
      'Venetia',
      'Whitehouse',
      'Windy Hill'
    ],
    beaches: [
      'Atlantic Beach',
      'Neptune Beach',
      'Jacksonville Beach',
      'Ponte Vedra Beach',
      'Mayport',
      'Huguenot Park',
      'Little Talbot Island',
      'Big Talbot Island',
      'Fort George Island',
      'Amelia Island',
      'Fernandina Beach',
      'Yulee',
      'Callahan',
      'Hilliard',
      'Macclenny',
      'Glen St. Mary',
      'Baldwin',
      'Middleburg',
      'Orange Park',
      'Fleming Island',
      'Green Cove Springs',
      'Palatka',
      'St. Augustine',
      'Palm Coast',
      'Flagler Beach'
    ],
    westside: [
      'Westside',
      'West Jacksonville',
      'Westside Estates',
      'Westside Manor',
      'Westside Terrace',
      'Westwood',
      'Westside Gardens',
      'Westside Heights',
      'Westside Park',
      'Westside Plaza',
      'Westside Square',
      'Westside Village',
      'Westside Woods',
      'Westside Acres',
      'Westside Farms',
      'Westside Meadows',
      'Westside Ranches',
      'Westside Springs',
      'Westside Valley',
      'Westside View',
      'Westside Vista',
      'Westside Way',
      'Westside Walk',
      'Westside Drive',
      'Westside Lane',
      'Westside Road',
      'Westside Street',
      'Westside Avenue',
      'Westside Boulevard',
      'Westside Circle',
      'Westside Court',
      'Westside Place',
      'Westside Terrace',
      'Westside Way'
    ]
  };

  const popularAreas = [
    'Mandarin',
    'San Marco',
    'Riverside',
    'Avondale',
    'Atlantic Beach',
    'Neptune Beach',
    'Jacksonville Beach',
    'Ponte Vedra Beach',
    'Arlington',
    'Southside',
    'Baymeadows',
    'Deerwood'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Serving All of Jacksonville & Surrounding Areas
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            From the beaches to the suburbs, we provide professional cleaning services throughout 
            Northeast Florida. No area is too far for our experienced cleaning team.
          </p>
        </div>

        {/* Popular Areas Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">
            Popular Service Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center"
              >
                <MapPin className="w-6 h-6 text-primary-blue mx-auto mb-2" />
                <span className="font-semibold text-charcoal">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Comprehensive Coverage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Northside & Arlington */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal">Northside & Arlington</h3>
            </div>
            <p className="text-charcoal/70 mb-6">
              Comprehensive cleaning services covering North Jacksonville, Arlington, and surrounding communities. 
              From historic neighborhoods to modern developments.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {jacksonvilleAreas.northside.slice(0, 12).map((area, index) => (
                <div key={index} className="flex items-center text-sm text-charcoal/80">
                  <div className="w-2 h-2 bg-accent-aqua rounded-full mr-2"></div>
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Southside & Mandarin */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent-aqua/10 rounded-xl flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-accent-aqua" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal">Southside & Mandarin</h3>
            </div>
            <p className="text-charcoal/70 mb-6">
              Premium cleaning services for South Jacksonville, Mandarin, and the Baymeadows corridor. 
              Serving upscale homes and professional offices.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {jacksonvilleAreas.southside.slice(0, 12).map((area, index) => (
                <div key={index} className="flex items-center text-sm text-charcoal/80">
                  <div className="w-2 h-2 bg-accent-aqua rounded-full mr-2"></div>
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Beaches & Coastal */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent-coral/10 rounded-xl flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-accent-coral" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal">Beaches & Coastal Areas</h3>
            </div>
            <p className="text-charcoal/70 mb-6">
              Specialized cleaning for beachfront properties, vacation rentals, and coastal homes. 
              From Ponte Vedra to Amelia Island.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {jacksonvilleAreas.beaches.slice(0, 12).map((area, index) => (
                <div key={index} className="flex items-center text-sm text-charcoal/80">
                  <div className="w-2 h-2 bg-accent-aqua rounded-full mr-2"></div>
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Westside & Suburbs */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-accent-green" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal">Westside & Suburbs</h3>
            </div>
            <p className="text-charcoal/70 mb-6">
              Reliable cleaning services for West Jacksonville and suburban communities. 
              Including Orange Park, Fleming Island, and surrounding areas.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {jacksonvilleAreas.westside.slice(0, 12).map((area, index) => (
                <div key={index} className="flex items-center text-sm text-charcoal/80">
                  <div className="w-2 h-2 bg-accent-aqua rounded-full mr-2"></div>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Coverage Info */}
        <div className="mt-16 bg-primary-blue rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            We Cover 50+ Jacksonville Neighborhoods
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our cleaning teams are strategically located throughout Northeast Florida to provide 
            fast, reliable service to homes and businesses in your area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-accent-aqua mb-2" />
              <span className="font-semibold">Licensed & Insured</span>
              <span className="text-sm text-white/80">All Areas</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent-aqua mb-2" />
              <span className="font-semibold">Same Day Service</span>
              <span className="text-sm text-white/80">Available in Most Areas</span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 text-accent-aqua mb-2" />
              <span className="font-semibold">Local Teams</span>
              <span className="text-sm text-white/80">Familiar with Your Area</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLocations;





