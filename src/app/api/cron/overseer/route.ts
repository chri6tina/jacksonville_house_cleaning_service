import { NextResponse } from 'next/server';
import { sendTelegramMessage } from '@/lib/telegram';
import { getServiceRoleClient } from '@/lib/supabase';
import { unauthorizedIfInvalidCron } from '@/lib/seo-autonomy';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const unauthorized = unauthorizedIfInvalidCron(req);
  if (unauthorized) return unauthorized;

  try {
    const supabase = getServiceRoleClient();
    
    // Check records from the last 72 hours
    const yesterday = new Date();
    yesterday.setHours(yesterday.getHours() - 72); 

    const { data: logs, error } = await supabase
      .from('agent_logs')
      .select('agent_name, status, executed_at')
      .gte('executed_at', yesterday.toISOString())
      .order('executed_at', { ascending: false });

    if (error) {
      throw new Error(`Overseer failed to read agent logs matrix: ${error.message}`);
    }

    // Identify Any completely flatlined bots (72h pulse required)
    const requiredDailyAgents = ['QA_Sentinel'];
    const requiredRecentAgents = [
      { name: 'AI_Blog_Writer', hours: 96 },
      { name: 'Strategist', hours: 192 },
      { name: 'Link_Weaver', hours: 216 },
    ];
    const activeAgents = new Set(logs?.map(log => log.agent_name) || []);
    
    // Some agents run weekly/twice weekly, so each gets its own pulse window.
    const awolAgents = requiredDailyAgents.filter(agent => !activeAgents.has(agent));
    for (const agent of requiredRecentAgents) {
      const cutoff = new Date(Date.now() - agent.hours * 60 * 60 * 1000).toISOString();
      const hasPulse = logs?.some(log => log.agent_name === agent.name && log.executed_at >= cutoff);
      if (!hasPulse) awolAgents.push(agent.name);
    }
    const failedAgents = logs?.filter(log => log.status === 'FAILED') || [];

    // The Master Alarm condition
    if (awolAgents.length > 0 || failedAgents.length > 0) {
      
      const missingText = awolAgents.length > 0 ? `\n\n🚨 <b>AWOL AGENTS (No Pulse in 72h):</b>\n- ${awolAgents.join('\n- ')}` : '';
      const failureText = failedAgents.length > 0 ? `\n\n❌ <b>CRASHED TASKS:</b>\n- ${failedAgents.map(f => `${f.agent_name} at ${f.executed_at}`).join('\n- ')}` : '';

      const alarmMessage = `👁️ <b>OVERSEER SYSTEM ALARM</b> \n<i>The Robotic Workforce requires intervention!</i>${missingText}${failureText}\n\nCheck Vercel Server Logs immediately.`;

      await sendTelegramMessage(alarmMessage);
      
      return NextResponse.json({ success: true, alarmed: true, text: 'Alarm raised.' });
    }

    // The system is purring smoothly. Log a silent success.
    await supabase.from('agent_logs').insert([
        { agent_name: 'Master_Overseer', status: 'SUCCESS', message: 'All agents accounted for and successfully executing.', executed_at: new Date().toISOString() }
    ]);

    return NextResponse.json({ success: true, alarmed: false, message: 'All systems nominal.' });

  } catch (err: any) {
    // Ultimate fallback if the Overseer itself crashes
    await sendTelegramMessage(`💀 <b>FATAL: MASTER OVERSEER CRASHED</b>\n\nError: ${err.message}`);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
