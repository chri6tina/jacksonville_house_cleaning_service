import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ChevronLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Query Supabase for the specific blog post by slug
  const { data: post, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', resolvedParams.slug)
    .single();

  if (error || !post) {
    console.error('Failed to load blog post from Supabase:', error);
    notFound();
  }

  // Rough reading time estimate
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 225));

  // JSON-LD Schema for Googlebot (Article / BlogPosting)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG?.url || 'https://jacksonvillehousecleaningservice.com'}/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": `${SITE_CONFIG?.url || 'https://jacksonvillehousecleaningservice.com'}/blog_default_thumbnail.png`,  
    "author": {
      "@type": "Organization",
      "name": post.author
    },  
    "publisher": {
      "@type": "Organization",
      "name": "Jacksonville House Cleaning Service",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG?.url || 'https://jacksonvillehousecleaningservice.com'}/JHCSlogo.png`
      }
    },
    "datePublished": post.date,
    "dateModified": post.date
  };

  return (
    <article className="min-h-screen bg-gray-50 pb-24">
      {/* Invisible SEO Schema Payload */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Header (Hero) */}
      <header className="relative bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-gray-100">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog" className="inline-flex items-center justify-center text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors mb-10 group bg-gray-50 px-4 py-2 rounded-full border border-gray-200 hover:border-blue-200 hover:bg-blue-50">
            <ChevronLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-1" />
            Back to Journal
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-8">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-medium">
            <div className="flex items-center">
              <img src="/JHCSlogo.png" alt="Author" className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow-sm" />
              <span className="text-gray-900 font-bold">{post.author}</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {readingTime} min read
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-16">
        <div className="aspect-[21/9] w-full bg-gray-200 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white">
          <img 
            src="/blog_default_thumbnail.png" 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Article Body */}
        <main className="w-full">
          <div className="prose prose-lg md:prose-xl prose-blue text-gray-700 mx-auto max-w-none 
                          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900 
                          prose-h2:text-3xl prose-h2:mt-12 prose-h2:border-b prose-h2:pb-4 prose-h2:border-gray-100
                          prose-p:leading-relaxed prose-p:mb-8
                          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                          prose-li:my-2 prose-ul:mb-8
                          prose-strong:text-gray-900">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          {/* Inline Social Share Footer */}
          <div className="mt-16 flex items-center justify-between border-t border-gray-200 pt-8">
            <h4 className="text-gray-900 font-bold uppercase tracking-wider text-sm flex items-center">
              <Share2 className="w-4 h-4 mr-2 text-blue-600" />
              Share this article
            </h4>
            <div className="flex items-center space-x-3">
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-cyan-50 hover:text-cyan-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-100 hover:text-blue-800 transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Article Footer & Author Bio */}
          <footer className="mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
              <img src="/JHCSlogo.png" alt="Jacksonville Cleaning" className="w-20 h-20 rounded-full border border-gray-100 p-1 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Written by {post.author}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We are professional cleaning experts serving the Greater Jacksonville area. Our mission is to provide spotless homes and expert advice to keep your living space healthy, clean, and beautiful.
                </p>
                <Link href="/contact" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                  Need a deep clean? Get a free quote <ChevronLeft className="w-4 h-4 ml-1 rotate-180" />
                </Link>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </article>
  );
}
