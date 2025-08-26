import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ServiceLocations from "@/components/ServiceLocations";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jacksonville House Cleaning Service",
            "description": "Professional house cleaning services in Jacksonville, FL. Serving Southside, Arlington, Mandarin, Riverside, San Marco, Downtown, Jacksonville Beach, Ponte Vedra, and Fleming Island with reliable, eco-friendly cleaning solutions.",
            "url": "https://www.jacksonvillehousecleaningservice.com",
            "telephone": "+19044563851",
            "email": "info@jacksonvillehousecleaningservice.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jacksonville",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "postalCode": "32202",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3322",
              "longitude": "-81.6557"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Southside Jacksonville"
              },
              {
                "@type": "City",
                "name": "Arlington Jacksonville"
              },
              {
                "@type": "City",
                "name": "Mandarin Jacksonville"
              },
              {
                "@type": "City",
                "name": "Riverside Jacksonville"
              },
              {
                "@type": "City",
                "name": "San Marco Jacksonville"
              },
              {
                "@type": "City",
                "name": "Downtown Jacksonville"
              },
              {
                "@type": "City",
                "name": "Jacksonville Beach"
              },
              {
                "@type": "City",
                "name": "Ponte Vedra"
              },
              {
                "@type": "City",
                "name": "Fleming Island"
              }
            ],
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Jacksonville Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Recurring Cleaning",
                    "description": "Regular house cleaning services for Jacksonville homes"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Deep Cleaning",
                    "description": "Comprehensive deep cleaning services for Jacksonville residences"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Move-In/Move-Out Cleaning",
                    "description": "Professional cleaning for Jacksonville real estate transactions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Post-Construction Cleaning",
                    "description": "Complete cleanup after Jacksonville renovation projects"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "500"
            },
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Credit Card", "Check"],
            "currenciesAccepted": "USD",
            "openingHours": [
              "Mo-Fr 08:00-18:00",
              "Sa 08:00-16:00"
            ],
            "sameAs": [
              "https://www.facebook.com/jacksonvillehousecleaningservice",
              "https://www.google.com/maps?cid=123456789"
            ],
            "image": [
              "https://www.jacksonvillehousecleaningservice.com/jhcs_hero2.png"
            ],
            "logo": "https://www.jacksonvillehousecleaningservice.com/logo.png"
          })
        }}
      />

      <Hero />
      <ServicesSection />
      <ServiceLocations />
      <WhyChooseUs />
      <TestimonialsPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
