import { getServiceRoleClient } from './supabase';
import { sendTelegramMessage } from './telegram';

type AgentStatus = 'SUCCESS' | 'WARNING' | 'FAILED';

export async function logAgentExecution(agentName: string, status: AgentStatus, message: string) {
  const supabase = getServiceRoleClient();
  
  try {
    const { error } = await supabase
      .from('agent_logs')
      .insert([
        { 
          agent_name: agentName, 
          status, 
          message,
          executed_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error(`[Overseer Framework] Failed to log ${agentName} execution:`, error);
      // Fallback emergency ping if the database itself is completely down
      await sendTelegramMessage(`🚨 <b>DATABASE DOWN!</b>\nThe <code>${agentName}</code> attempted to log a status of <b>${status}</b> but Supabase rejected the insert!`);
    }

    // Immediately push any explicitly FAILED agent tasks straight to Telegram
    if (status === 'FAILED') {
      await sendTelegramMessage(`❌ <b>CRITICAL AGENT FAILURE</b>\n\n🤖 <b>Bot:</b> <code>${agentName}</code>\n⚠️ <b>Error:</b> ${message}`);
    }

  } catch (err) {
    console.error(`[Overseer Framework] Catastrophic failure logging ${agentName}:`, err);
  }
}
