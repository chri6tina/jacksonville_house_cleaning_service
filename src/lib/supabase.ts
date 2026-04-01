import { createClient } from '@supabase/supabase-js';

// The URL and Key must be defined to initialize the client.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// A standard public client (safe for frontend queries)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Returns a Supabase client configured with the Service Role Key.
 * DANGER: This client bypasses Row Level Security (RLS) entirely.
 * It strictly must ONLY be used on the server (e.g., inside API routes / Cron jobs).
 */
export function getServiceRoleClient() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY');
  }
  return createClient(supabaseUrl, serviceKey);
}
