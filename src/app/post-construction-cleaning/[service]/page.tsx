import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostConstructionServices } from '@/lib/contentful';
import { Phone, MapPin, Star, Clock, Shield, CheckCircle, HardHat, Truck, Target, Building2, Home, Zap, Droplets, Leaf, Calendar } from 'lucide-react';

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: serviceId } = await params;
  const services = await getPostConstructionServices();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested post-construction cleaning service could not be found.',
    };
  }

  return {
    title: `${service.title} - Jacksonville Post-Construction Cleanup | ${service.price}`,
    description: service.description,
    keywords: `Jacksonville ${service.title.toLowerCase()}, post-construction cleaning, construction cleanup Jacksonville, ${service.category} cleaning`,
    openGraph: {
      title: `${service.title} - Jacksonville Post-Construction Cleanup`,
      description: service.description,
      url: `https://www.jacksonvillehousecleaningservice.com/post-construction-cleaning/${serviceId}`,
      type: 'website',
    },
          alternates: {
        canonical: `https://www.jacksonvillehousecleaningservice.com/post-construction-cleaning/${serviceId}`,
      },
  };
}

export async function generateStaticParams() {
  const services = await getPostConstructionServices();
  
  return services.map((service) => ({
    service: service.id,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: serviceId } = await params;
  const services = await getPostConstructionServices();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    notFound();
  }

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      HardHat,
      Truck,
      Target,
      Building2,
      Home,
      Zap,
      Droplets,
      Leaf,
      Calendar,
      Shield,
      CheckCircle,
    };
    return iconMap[iconName] || HardHat;
  };

  const IconComponent = getIconComponent(service.icon);

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-blue/10 to-accent-aqua/10 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-accent-aqua/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary-blue mb-6">
              <IconComponent className="w-4 h-4" />
              <span>{service.category.charAt(0).toUpperCase() + service.category.slice(1)} Service</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
              {service.title}
            </h1>
            
            <p className="text-xl text-charcoal/80 mb-8 max-w-3xl mx-auto">
              {service.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:9044563851"
                className="inline-flex items-center gap-2 bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (904) 456-3851
              </a>
              <a
                href={`/contact?service=${service.id}&type=post-construction`}
                className="inline-flex items-center gap-2 bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold border-2 border-primary-blue hover:bg-primary-blue/10 transition-colors"
              >
                Get Quote
              </a>
            </div>

            {/* Service Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-primary-blue" />
                </div>
                <p className="text-sm font-medium text-charcoal">Estimated Time</p>
                <p className="text-lg font-bold text-primary-blue">{service.estimatedTime}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-aqua/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-accent-aqua" />
                </div>
                <p className="text-sm font-medium text-charcoal">Starting Price</p>
                <p className="text-lg font-bold text-accent-aqua">{service.price}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-accent-green" />
                </div>
                <p className="text-sm font-medium text-charcoal">Category</p>
                <p className="text-lg font-bold text-accent-green">{service.category.charAt(0).toUpperCase() + service.category.slice(1)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              What's Included in {service.title}
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our comprehensive {service.title.toLowerCase()} service covers everything you need for a spotless, move-in ready space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-accent-aqua/10 p-6 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary-blue" />
                </div>
                <p className="text-charcoal/80 text-center font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      {service.includes.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-accent-aqua/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Complete Service Coverage
              </h2>
              <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
                Our {service.title.toLowerCase()} includes all the essential elements for professional post-construction cleanup.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {service.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {service.addOns.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-charcoal mb-6">Available Add-Ons</h3>
                  <ul className="space-y-4">
                    {service.addOns.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary-blue text-sm font-bold">+</span>
                        </div>
                        <span className="text-charcoal/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Professional {service.title}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get started with our {service.title.toLowerCase()} service today. 
            Professional, reliable, and guaranteed to exceed your expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:9044563851"
              className="inline-flex items-center gap-2 bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (904) 456-3851
            </a>
            <a
              href={`/contact?service=${service.id}&type=post-construction`}
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white/10 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
          
          <div className="mt-8 text-white/80">
            <p className="text-lg">Starting at <span className="font-bold text-white">{service.price}</span></p>
            <p className="text-sm">Estimated time: {service.estimatedTime}</p>
          </div>
        </div>
      </section>
    </>
  );
}
