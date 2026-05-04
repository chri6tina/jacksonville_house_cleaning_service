import { NextResponse } from 'next/server';
import { logAgentExecution } from '@/lib/agents';
import { SITE_CONFIG } from '@/lib/metadata';
import { unauthorizedIfInvalidCron } from '@/lib/seo-autonomy';

export const dynamic = 'force-dynamic';
// Max execution time for hobbies is 10s, pros is much longer. This pinging shouldn't take long.
export const maxDuration = 60; 

const CRITICAL_ROUTES = [
  '/',
  '/services',
  '/deep-cleaning',
  '/move-in-move-out',
  '/blog',
  '/contact',
  '/sitemap.xml',
  '/robots.txt'
];

export async function GET(req: Request) {
  const unauthorized = unauthorizedIfInvalidCron(req);
  if (unauthorized) return unauthorized;

  const baseUrl = SITE_CONFIG?.url || 'https://jacksonvillehousecleaningservice.com';
  const failedRoutes: string[] = [];
  
  try {
    // 1. Ping every critical route to detect SEO drops or server 404s
    for (const route of CRITICAL_ROUTES) {
      try {
        const res = await fetch(`${baseUrl}${route}`, { method: 'HEAD', cache: 'no-store' });
        if (!res.ok) {
          failedRoutes.push(`${route} [HTTP ${res.status}]`);
        }
      } catch (err) {
        failedRoutes.push(`${route} [Host Unreachable]`);
      }
    }

    // 2. Report Findings back to the Overseer Database
    if (failedRoutes.length > 0) {
      const errorMsg = `Detected ${failedRoutes.length} critical routing failures:\n${failedRoutes.join('\n')}`;
      await logAgentExecution('QA_Sentinel', 'FAILED', errorMsg);
      return NextResponse.json({ success: false, message: errorMsg }, { status: 500 });
    }

    // Completely successful run!
    await logAgentExecution('QA_Sentinel', 'SUCCESS', `All ${CRITICAL_ROUTES.length} critical routing paths returned 200 OK.`);
    
    return NextResponse.json({ 
      success: true, 
      message: 'QA Sentinel executed flawlessly. Zero dead links detected.' 
    });

  } catch (err: any) {
    await logAgentExecution('QA_Sentinel', 'FAILED', `Catastrophic fetch failure: ${err.message}`);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
