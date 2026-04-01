import { NextResponse } from 'next/server';
import { logAgentExecution } from '@/lib/agents';
import { sendTelegramMessage } from '@/lib/telegram';
import { getServiceRoleClient } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const maxDuration = 60; 

export async function GET(req: Request) {
  const authHeader = req.headers.get('authorization');
  if (process.env.NODE_ENV !== 'development' && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const supabase = getServiceRoleClient();
    
    // Evaluate how many blogs currently exist in the SEO Matrix
    const { count: blogCount, error: countErr } = await supabase
      .from('blogs')
      .select('*', { count: 'exact', head: true });

    if (countErr) throw new Error(countErr.message);

    // Fetch the 3 most recently executed logs to determine health
    const { data: recentLogs } = await supabase
      .from('agent_logs')
      .select('agent_name, status')
      .limit(5)
      .order('executed_at', { ascending: false });

    // Consult OpenAI API for Webmaster Strategy
    // We construct a specific system prompt feeding the raw DB data directly to GPT-4o
    const promptContext = `
      You are the elite Webmaster AI Strategist for 'Jacksonville House Cleaning Service'.
      Currently, the site has ${blogCount} SEO articles successfully published in the database.
      Recent robotic agent health checks show: ${JSON.stringify(recentLogs)}.
      
      Generate a VERY short (3-4 sentences), highly actionable "Weekly Webmaster Report" for the CEO. 
      Recommend exactly ONE new SEO blog topic they should configure the Autowriter to write next, 
      and confirm the current health of the automated bots. 
      
      CRITICAL RULE: Format this gracefully using exclusively HTML tags supported by Telegram (b, i, u, s, code, a href). 
      DO NOT hallucinate HTML structural tags like <br>, <p>, <h1>, <div>, or markdown asterisks (*).
    `;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: promptContext }],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI Strategic Generation Failed: ${await response.text()}`);
    }

    const { choices } = await response.json();
    const strategyMessage = choices[0].message.content;

    // Send the compiled insight to the CEO on Telegram
    await sendTelegramMessage(`📊 <b>Weekly Strategist Report</b>\n\n${strategyMessage}\n\n<i>Agent Strategy Run Complete.</i>`);
    
    await logAgentExecution('Strategist', 'SUCCESS', `Successfully compiled and texted weekly SEO strategy. Site holds ${blogCount} articles.`);
    
    return NextResponse.json({ success: true, report: strategyMessage });

  } catch (err: any) {
    await logAgentExecution('Strategist', 'FAILED', `Failed to generate strategy report: ${err.message}`);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
