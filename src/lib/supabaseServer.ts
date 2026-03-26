import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) throw new Error("Missing environment variable: NEXT_PUBLIC_SUPABASE_URL");
if (!supabaseServiceRoleKey) throw new Error("Missing environment variable: SUPABASE_SERVICE_ROLE_KEY");

/**
 * Server-only Supabase client using the service-role key.
 * Must only be used in server-side code (API routes, server components, etc.).
 * Never expose this client to the browser — the service-role key bypasses all RLS.
 */
export const supabaseServer = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
