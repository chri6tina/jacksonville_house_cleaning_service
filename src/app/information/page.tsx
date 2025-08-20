import Link from 'next/link';
import { 
  BookOpen, 
  FileText, 
  Lightbulb, 
  Home, 
  Truck, 
  Building2, 
  Sparkles, 
  Calendar,
  Clock,
  User,
  ArrowRight
} from 'lucide-react';

export default function InformationPage() {
  const categories = [
    {
      title: "Cleaning Guides & Tips",
      description: "Expert advice on maintaining a clean home and choosing cleaning services",
      icon: Lightbulb,
      color: "text-accent-green",
      bgColor: "bg-accent-green/10",
      articles: [
        {
          title: "How to Choose the Right Cleaning Service for Your Home",
          description: "Essential factors to consider when selecting a professional cleaning service",
          href: "/blog/how-to-choose-the-right-cleaning-service",
          readTime: "5 min read",
          date: "January 15, 2024"
        },
        {
          title: "Daily Habits to Maintain a Clean Home Between Professional Cleanings",
          description: "Simple routines to keep your home looking great between visits",
          href: "/blog/maintaining-clean-home",
          readTime: "4 min read",
          date: "December 20, 2023"
        },
        {
          title: "Complete Spring Cleaning Checklist for Jacksonville Homes",
          description: "Comprehensive spring cleaning guide tailored to our local climate",
          href: "/blog/spring-cleaning-checklist",
          readTime: "7 min read",
          date: "January 5, 2024"
        }
      ]
    },
    {
      title: "Eco-Friendly Cleaning",
      description: "Learn about sustainable cleaning practices and products",
      icon: Sparkles,
      color: "text-accent-green",
      bgColor: "bg-accent-green/10",
      articles: [
        {
          title: "The Benefits of Eco-Friendly Cleaning Products",
          description: "Why making the switch to green cleaning is better for your family and the environment",
          href: "/blog/eco-friendly-cleaning-products",
          readTime: "4 min read",
          date: "January 10, 2024"
        }
      ]
    },
    {
      title: "Move-In & Move-Out Services",
      description: "Everything you need to know about transition cleaning services",
      icon: Truck,
      color: "text-primary-blue",
      bgColor: "bg-primary-blue/10",
      articles: [
        {
          title: "Essential Move-In Cleaning Checklist for New Homeowners",
          description: "Complete guide to preparing your new home for move-in",
          href: "/blog/move-in-cleaning-essentials",
          readTime: "6 min read",
          date: "December 28, 2023"
        }
      ]
    },
    {
      title: "Service Information",
      description: "Detailed information about our various cleaning services",
      icon: Home,
      color: "text-accent-coral",
      bgColor: "bg-accent-coral/10",
      articles: [
        {
          title: "Move-In/Move-Out Cleaning Services",
          description: "Comprehensive cleaning services for property transitions",
          href: "/move-in-move-out",
          readTime: "3 min read",
          date: "January 20, 2024"
        },
        {
          title: "Apartment Cleaning Services",
          description: "Specialized cleaning for apartments of all sizes",
          href: "/apartment-cleaning",
          readTime: "3 min read",
          date: "January 18, 2024"
        },
        {
          title: "Post-Construction Cleaning Services",
          description: "Professional cleanup after construction or renovation projects",
          href: "/post-construction-cleaning",
          readTime: "3 min read",
          date: "January 16, 2024"
        },
        {
          title: "Extreme Deep Cleaning Services",
          description: "Intensive cleaning for neglected or heavily soiled homes",
          href: "/extreme-deep-cleaning",
          readTime: "3 min read",
          date: "January 14, 2024"
        },
        {
          title: "Standard House Cleaning Services",
          description: "Regular maintenance cleaning for ongoing home care",
          href: "/standard-cleaning",
          readTime: "3 min read",
          date: "January 12, 2024"
        },
        {
          title: "Recurring Cleaning Services",
          description: "Scheduled cleaning programs for consistent home maintenance",
          href: "/recurring-cleaning",
          readTime: "3 min read",
          date: "January 10, 2024"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Local Business Style */}
      <div 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: 'url(/hero1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Local Business Badge */}
            <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/50 shadow-lg">
              <BookOpen className="w-4 h-4 text-primary-blue" />
              Jacksonville Cleaning Resources
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Information & Resources
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto">
              Discover expert cleaning tips, service guides, and helpful resources to keep your Jacksonville home
              clean, healthy, and beautiful. From daily maintenance tips to comprehensive service information.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find the information you need organized by topic and service type
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`${category.bgColor} p-8 border-b border-gray-100`}>
                  <div className="flex items-center gap-4">
                    <div className={`${category.color} ${category.bgColor.replace('/10', '/20')} p-3 rounded-xl`}>
                      <category.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-charcoal">{category.title}</h3>
                      <p className="text-gray-600 mt-2">{category.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.articles.map((article, articleIndex) => (
                      <Link 
                        key={articleIndex} 
                        href={article.href}
                        className="group block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            {article.date && (
                              <>
                                <Calendar className="w-4 h-4" />
                                <span>{article.date}</span>
                              </>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-charcoal mb-3 group-hover:text-primary-blue transition-colors">
                          {article.title}
                        </h4>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {article.description}
                        </p>
                        
                        <div className="flex items-center gap-2 text-primary-blue font-medium text-sm group-hover:gap-3 transition-all">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-charcoal mb-8">
              Quick Access to Key Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                href="/services"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <FileText className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                <h3 className="font-semibold text-charcoal mb-2">All Services</h3>
                <p className="text-gray-600 text-sm">Complete service overview</p>
              </Link>
              
              <Link 
                href="/pricing"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <BookOpen className="w-12 h-12 text-accent-green mx-auto mb-4" />
                <h3 className="font-semibold text-charcoal mb-2">Pricing</h3>
                <p className="text-gray-600 text-sm">Transparent pricing information</p>
              </Link>
              
              <Link 
                href="/about"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <User className="w-12 h-12 text-accent-coral mx-auto mb-4" />
                <h3 className="font-semibold text-charcoal mb-2">About Us</h3>
                <p className="text-gray-600 text-sm">Company story and values</p>
              </Link>
              
              <Link 
                href="/contact"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <Building2 className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                <h3 className="font-semibold text-charcoal mb-2">Contact</h3>
                <p className="text-gray-600 text-sm">Get in touch with us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-charcoal mb-6">
              Need More Specific Information?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Can't find what you're looking for? Our team is here to help with any questions 
              about our services or cleaning in general.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Ask a Question
              </Link>
              <a 
                href="tel:9044563851"
                className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call (904) 456-3851
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





