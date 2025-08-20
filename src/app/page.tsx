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
