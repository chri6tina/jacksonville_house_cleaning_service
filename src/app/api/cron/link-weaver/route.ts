import { NextResponse } from 'next/server';
import { logAgentExecution } from '@/lib/agents';
import { getServiceRoleClient } from '@/lib/supabase';
import { sendTelegramMessage } from '@/lib/telegram';
import { DEFAULT_INTERNAL_LINKS, injectInternalLinks, unauthorizedIfInvalidCron } from '@/lib/seo-autonomy';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const unauthorized = unauthorizedIfInvalidCron(req);
  if (unauthorized) return unauthorized;

  try {
    const supabase = getServiceRoleClient();

    // 1. Fetch all recent blogs to find unoptimized internal targets
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('id, title, content, slug')
      .order('date', { ascending: false })
      .limit(25);

    if (error || !blogs || blogs.length === 0) {
      throw new Error(`Failed to fetch blogs for linking: ${error?.message}`);
    }

    let changesMade = 0;

    for (const blog of blogs) {
      const { content: updatedContent, changes } = injectInternalLinks(blog.content || '');
      changesMade += changes;

      if (changes > 0) {
        // Push the dynamically SEO optimized content back to Supabase autonomously!
        await supabase
          .from('blogs')
          .update({ content: updatedContent })
          .eq('id', blog.id);
      }
    }

    const resultMsg = `Link-Weaver scanned ${blogs.length} articles against ${DEFAULT_INTERNAL_LINKS.length} rules and autonomously injected ${changesMade} targeted internal SEO links.`;
    await logAgentExecution('Link_Weaver', 'SUCCESS', resultMsg);
    
    // Only bother the CEO if we did massive optimization
    if (changesMade > 2) {
      await sendTelegramMessage(`🕸️ <b>Link-Weaver Optimization</b>\n\n${resultMsg}`);
    }

    return NextResponse.json({ success: true, message: resultMsg });

  } catch (err: any) {
    await logAgentExecution('Link_Weaver', 'FAILED', `Catastrophic parsing failure: ${err.message}`);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
