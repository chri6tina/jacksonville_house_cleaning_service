import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.error("Missing supabase credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey);

async function checkLogs() {
  const { data, error } = await supabase
    .from('agent_logs')
    .select('*')
    .order('executed_at', { ascending: false })
    .limit(20);

  if (error) {
    console.error("Supabase Error:", error);
    process.exit(1);
  }

  console.log("LAST 20 LOGS:");
  data.forEach(log => {
      console.log(`[${log.executed_at}] [${log.agent_name}] [${log.status}] ${log.message}`);
  });
}

checkLogs();
