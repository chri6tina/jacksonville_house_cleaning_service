import Link from 'next/link';
import UniversalServiceHero from '@/components/UniversalServiceHero';

import { Calendar, User, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { supabase } from '@/lib/supabase';

// Revalidate every hour, or force dynamic depending on preference.
// Since blogs are added automatically, forcing dynamic ensures instant cache-busting.
export const dynamic = 'force-dynamic';

export default async function BlogIndex() {
  // Query Supabase for all blogs, ordered by newest first
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('Failed to load blogs from Supabase:', error);
  }

  const posts = blogs || [];
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const standardPosts = posts.length > 1 ? posts.slice(1) : [];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <UniversalServiceHero 
        title="Elevate Your Living Space"
        subtitle="Master-class cleaning strategies, inside tips, and design ideas from Jacksonville's top-rated professionals."
        Icon={Sparkles}
        primaryColor="blue"
        formServiceType="blog"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        {posts.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-16 text-center border border-gray-100">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our blog is currently empty.</h2>
            <p className="text-gray-500 text-lg">Check back soon for our first expert article!</p>
          </div>
        ) : (
          <>
            {/* Featured Post Card */}
            {featuredPost && (
              <div className="mb-16 group">
                <Link href={`/blog/${featuredPost.slug}`} className="block">
                  <div className="bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2">
                    <div className="flex flex-col lg:flex-row">
                      {/* Gradient/Image Placeholder for Featured Post */}
                      <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-gradient-to-br from-blue-100 to-cyan-50 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent mix-blend-multiply"></div>
                        <img 
                          src="/blog_default_thumbnail.png" 
                          alt="Featured Blog Header" 
                          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="relative z-10 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/50 m-8 text-center">
                          <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <span className="uppercase tracking-widest text-sm font-bold text-blue-900">Featured Article</span>
                        </div>
                      </div>
                      
                      {/* Featured Content Area */}
                      <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-white relative">
                        <div className="flex items-center space-x-4 mb-6 text-sm font-medium text-gray-500">
                          <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> {new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          <span>•</span>
                          <span className="flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full"><User className="w-4 h-4 mr-1.5" /> {featuredPost.author}</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                        <div className="mt-auto">
                          <span className="inline-flex items-center font-bold text-blue-600 text-lg group-hover:gap-3 transition-all">
                            Read Full Article <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Standard Posts Grid */}
            {standardPosts.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  More Recent Articles
                  <div className="ml-4 h-px bg-gray-200 flex-grow"></div>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {standardPosts.map((post: any) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                      <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full overflow-hidden transform hover:-translate-y-1">
                        <div className="h-48 bg-gray-100 relative overflow-hidden">
                          <img 
                            src="/blog_default_thumbnail.png" 
                            alt={`${post.title} thumbnail`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-medium text-gray-500">
                            <span className="bg-gray-100 px-3 py-1 rounded-full">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            <span className="text-blue-600 line-clamp-1">{post.author}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow">
                            {post.excerpt}
                          </p>
                          <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-blue-600 font-semibold text-sm">
                            <span>Read Article</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
