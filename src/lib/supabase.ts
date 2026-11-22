import { createClient } from '@supabase/supabase-js';
import { env } from './env';

/**
 * Singleton Supabase client instance.
 * Architectural boundary rule: Only lib/supabase.ts and features/*\/api may import this client.
 */
export const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
