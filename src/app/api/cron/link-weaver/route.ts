import { NextResponse } from 'next/server';
import { logAgentExecution } from '@/lib/agents';
import { getServiceRoleClient } from '@/lib/supabase';
import { sendTelegramMessage } from '@/lib/telegram';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const authHeader = req.headers.get('authorization');
  if (process.env.NODE_ENV !== 'development' && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const supabase = getServiceRoleClient();

    // 1. Fetch all recent blogs to find unoptimized internal targets
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('id, title, content, slug')
      .order('date', { ascending: false })
      .limit(5);

    if (error || !blogs || blogs.length === 0) {
      throw new Error(`Failed to fetch blogs for linking: ${error?.message}`);
    }

    // 2. Automated SEO Anchor Dictionary
    const linkDictionary = [
      { trigger: /house cleaning/i, href: '/services/house-cleaning' },
      { trigger: /deep clean/i, href: '/services/deep-cleaning' },
      { trigger: /move in/i, href: '/services/move-in-move-out' },
      { trigger: /move out/i, href: '/services/move-in-move-out' },
      { trigger: /maid service/i, href: '/services/house-cleaning' }
    ];

    let changesMade = 0;

    for (const blog of blogs) {
      let updatedContent = blog.content;
      let isModified = false;

      // Scan content against our SEO dictionary
      for (const rule of linkDictionary) {
        // Only inject link if the text exists and isn't ALREADY inside a markdown/HTML link!
        const match = updatedContent.match(rule.trigger);
        const existingLinkFilter = new RegExp(`href=["']?${rule.href}["']?|\\[.*?\\]\\(.*?${rule.href}.*?\\)`, 'i');

        if (match && !existingLinkFilter.test(updatedContent)) {
          // Replace exactly the first instance of the keyword with an internal contextual markdown link
          updatedContent = updatedContent.replace(match[0], `[${match[0]}](${rule.href})`);
          isModified = true;
          changesMade++;
        }
      }

      if (isModified) {
        // Push the dynamically SEO optimized content back to Supabase autonomously!
        await supabase
          .from('blogs')
          .update({ content: updatedContent })
          .eq('id', blog.id);
      }
    }

    const resultMsg = `Link-Weaver scanned ${blogs.length} articles and autonomously injected ${changesMade} targeted internal SEO links.`;
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
