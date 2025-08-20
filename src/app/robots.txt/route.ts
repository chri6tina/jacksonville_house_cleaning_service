import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.jacksonvillehousecleaningservice.com/sitemap.xml

# Prevent duplicate content from query parameters
Disallow: /*?*
Allow: /contact
Allow: /services
Allow: /pricing
Allow: /about
Allow: /testimonials
Allow: /locations
Allow: /information
Allow: /blog

# Allow specific query parameters for contact form
Allow: /contact?service=*
Allow: /contact?location=*
Allow: /contact?type=*`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
