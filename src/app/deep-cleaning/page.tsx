import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import Breadcrumb from '@/components/Breadcrumb';
import { 
  Sparkles, 
  Clock, 
  Shield, 
  Users, 
  Leaf, 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  Home,
  Building2,
  Car,
  Wind,
  Droplets,
  Calendar,
  GraduationCap,
  Zap,
  Target,
  Award,
  Crown,
  Gem,
  Trophy,
  Diamond,
  Camera,
  BookOpen,
  Coffee,
  Mountain,
  Waves,
  School,
  Church,
  Store,
  Utensils,
  Building,
  Briefcase,
  Globe,
  Train,
  Bus,
  ShoppingBag,
  Heart,
  PawPrint,
  Umbrella,
  Sun,
  Anchor,
  Fish,
  Sailboat,
  Wrench,
  Hammer,
  Trash2,
  Recycle
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Deep Cleaning Services Jacksonville FL - Professional Deep House Cleaning',
  description: 'Professional deep cleaning services in Jacksonville, FL. Comprehensive deep cleaning for homes, offices, and commercial spaces. Eco-friendly products, experienced team, satisfaction guaranteed.',
  keywords: ['deep cleaning Jacksonville', 'professional deep cleaning', 'house deep cleaning', 'commercial deep cleaning', 'deep cleaning services', 'Jacksonville deep cleaning'],
  canonical: 'https://jacksonvillehousecleaningservice.com/deep-cleaning'
});

export default function DeepCleaningPage() {
  const deepCleaningServices = [
    {
      title: "Kitchen Deep Cleaning",
      icon: Utensils,
      description: "Complete kitchen sanitization including inside appliances, cabinets, and hard-to-reach areas",
      features: [
        "Inside refrigerator and freezer cleaning",
        "Oven and stovetop deep cleaning",
        "Cabinet interior and exterior cleaning",
        "Microwave sanitization",
        "Dishwasher cleaning and maintenance",
        "Countertop and backsplash deep cleaning",
        "Sink and garbage disposal cleaning",
        "Light fixture and vent cleaning"
      ]
    },
    {
      title: "Bathroom Deep Cleaning",
      icon: Droplets,
      description: "Thorough bathroom sanitization and deep cleaning for all surfaces",
      features: [
        "Tile and grout deep cleaning",
        "Shower and bathtub sanitization",
        "Toilet deep cleaning and sanitization",
        "Mirror and glass cleaning",
        "Cabinet and drawer cleaning",
        "Light fixture cleaning",
        "Vent and fan cleaning",
        "Floor deep cleaning and sanitization"
      ]
    },
    {
      title: "Living Areas Deep Cleaning",
      icon: Home,
      description: "Comprehensive cleaning of all living spaces and common areas",
      features: [
        "Furniture deep cleaning and conditioning",
        "Baseboard and trim cleaning",
        "Window sill and track cleaning",
        "Light switch and outlet cleaning",
        "Door frame and handle cleaning",
        "Ceiling fan cleaning",
        "Picture frame and decor cleaning",
        "Floor deep cleaning and polishing"
      ]
    },
    {
      title: "Bedroom Deep Cleaning",
      icon: Heart,
      description: "Thorough bedroom cleaning including all furniture and storage areas",
      features: [
        "Under bed cleaning",
        "Dresser and nightstand cleaning",
        "Closet organization and cleaning",
        "Mattress and bedding area cleaning",
        "Window treatment cleaning",
        "Light fixture cleaning",
        "Baseboard and trim cleaning",
        "Floor deep cleaning"
      ]
    },
    {
      title: "Office & Workspace Deep Cleaning",
      icon: Briefcase,
      description: "Professional deep cleaning for home offices and workspaces",
      features: [
        "Desk and computer area cleaning",
        "File cabinet cleaning",
        "Electronic equipment cleaning",
        "Bookshelf and storage cleaning",
        "Cable and wire organization",
        "Light fixture cleaning",
        "Window and blind cleaning",
        "Floor deep cleaning"
      ]
    },
    {
      title: "Laundry & Utility Areas",
      icon: Wind,
      description: "Deep cleaning of laundry rooms and utility spaces",
      features: [
        "Washer and dryer deep cleaning",
        "Utility sink cleaning",
        "Storage area organization",
        "Vent and duct cleaning",
        "Light fixture cleaning",
        "Floor and wall cleaning",
        "Shelf and cabinet cleaning",
        "Appliance maintenance"
      ]
    }
  ];

  const deepCleaningProcess = [
    {
      step: "1",
      title: "Assessment & Planning",
      description: "We evaluate your space and create a customized deep cleaning plan",
      icon: Target
    },
    {
      step: "2", 
      title: "Preparation & Protection",
      description: "We protect your belongings and prepare the area for deep cleaning",
      icon: Shield
    },
    {
      step: "3",
      title: "Deep Cleaning Execution",
      description: "Our team performs comprehensive deep cleaning using professional equipment",
      icon: Sparkles
    },
    {
      step: "4",
      title: "Quality Inspection",
      description: "We inspect every area to ensure the highest standards are met",
      icon: CheckCircle
    },
    {
      step: "5",
      title: "Final Walkthrough",
      description: "We walk through with you to ensure complete satisfaction",
      icon: Star
    }
  ];

  const whyChooseUs = [
    {
      icon: GraduationCap,
      title: "Trained Professionals",
      description: "Our team is extensively trained in deep cleaning techniques and safety protocols"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Products",
      description: "We use safe, environmentally friendly cleaning products that are effective and safe"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "We're fully licensed, bonded, and insured for your peace of mind"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "We work around your schedule with flexible appointment times"
    },
    {
      icon: Award,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction guarantee - we'll make it right if you're not happy"
    },
    {
      icon: Zap,
      title: "Professional Equipment",
      description: "We use commercial-grade equipment for superior cleaning results"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Deep Cleaning', href: '/deep-cleaning' }
              ]} 
            />
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional Deep Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Transform your space with our comprehensive deep cleaning services. We go beyond regular cleaning 
              to provide thorough sanitization and restoration of your home or office.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9044563851"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (904) 456-3851
              </a>
              <a
                href="/contact"
                className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-4 px-8 rounded-lg border-2 border-blue-600 transition-colors duration-200 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Cleaning Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Deep Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our deep cleaning services cover every area of your home or office with meticulous attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deepCleaningServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Cleaning Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Deep Cleaning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure every deep cleaning job is completed to the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {deepCleaningProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <div className="bg-blue-100 p-4 rounded-lg mb-4">
                  <step.icon className="w-8 h-8 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Jacksonville House Cleaning Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the highest quality deep cleaning services in Jacksonville.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for a Deep Clean?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free quote on our professional deep cleaning services. 
            We serve all of Jacksonville and surrounding areas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9044563851"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (904) 456-3851
            </a>
            <a
              href="/contact"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
