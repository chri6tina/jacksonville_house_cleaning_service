import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight,
  Lightbulb,
  Leaf,
  Home,
  Truck
} from 'lucide-react';
import ArticleSchema from '@/components/ArticleSchema';

export default function BlogPage() {
  const blogPosts = [
    {
      title: "How to Choose the Right Cleaning Service for Your Home",
      description: "Essential factors to consider when selecting a professional cleaning service",
      href: "/blog/how-to-choose-the-right-cleaning-service",
      readTime: "5 min read",
      date: "January 15, 2024",
      category: "Cleaning Guides",
      icon: Lightbulb
    },
    {
      title: "The Benefits of Eco-Friendly Cleaning Products",
      description: "Why making the switch to green cleaning is better for your family and the environment",
      href: "/blog/eco-friendly-cleaning-products",
      readTime: "4 min read",
      date: "January 10, 2024",
      category: "Eco-Friendly",
      icon: Leaf
    },
    {
      title: "Complete Spring Cleaning Checklist for Jacksonville Homes",
      description: "Comprehensive spring cleaning guide tailored to our local climate",
      href: "/blog/spring-cleaning-checklist",
      readTime: "7 min read",
      date: "January 5, 2024",
      category: "Seasonal Tips",
      icon: Home
    },
    {
      title: "Essential Move-In Cleaning Checklist for New Homeowners",
      description: "Complete guide to preparing your new home for move-in",
      href: "/blog/move-in-cleaning-essentials",
      readTime: "6 min read",
      date: "December 28, 2023",
      category: "Move-In/Out",
      icon: Truck
    },
    {
      title: "Daily Habits to Maintain a Clean Home Between Professional Cleanings",
      description: "Simple routines to keep your home looking great between visits",
      href: "/blog/maintaining-clean-home",
      readTime: "4 min read",
      date: "December 20, 2023",
      category: "Maintenance",
      icon: Lightbulb
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length, active: true },
    { name: "Cleaning Guides", count: 2, active: false },
    { name: "Eco-Friendly", count: 1, active: false },
    { name: "Seasonal Tips", count: 1, active: false },
    { name: "Move-In/Out", count: 1, active: false },
    { name: "Maintenance", count: 1, active: false }
  ];

  return (
    <>
      {/* Article Schema for Blog Listing Page */}
      <ArticleSchema
        title="Cleaning Tips & Expert Advice - Jacksonville House Cleaning Service"
        description="Discover professional cleaning insights, seasonal tips, and expert advice to keep your Jacksonville home clean, healthy, and beautiful year-round."
        author="Jacksonville House Cleaning Service"
        publishDate="2024-01-15"
        articleBody="Our blog features comprehensive cleaning guides, eco-friendly tips, seasonal cleaning checklists, and expert advice for maintaining a clean and healthy home in Jacksonville. From choosing the right cleaning service to daily maintenance habits, we provide valuable insights for homeowners."
        keywords={['cleaning tips', 'Jacksonville cleaning', 'house cleaning advice', 'cleaning guides', 'eco-friendly cleaning', 'spring cleaning', 'move-in cleaning']}
        category="Cleaning Tips & Advice"
        readingTime="10 min read"
      />
      
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
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/information" className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Information
              </Link>
              <span className="text-blue-100">|</span>
              <span className="text-blue-100">Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cleaning Tips & Expert Advice
            </h1>
            <p className="text-xl text-white/95 max-w-3xl">
              Discover professional cleaning insights, seasonal tips, and expert advice to keep your
              Jacksonville home clean, healthy, and beautiful year-round.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-primary-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <post.icon className="w-5 h-5 text-primary-blue" />
                    <span className="text-sm text-gray-500">{post.category}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={post.href}
                    className="inline-flex items-center gap-2 text-primary-blue font-medium hover:text-primary-blue/80 transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need Professional Cleaning Services?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              While our blog provides great tips for maintenance, professional cleaning services 
              ensure your home gets the deep cleaning it deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Quote
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
    </>
  );
}
