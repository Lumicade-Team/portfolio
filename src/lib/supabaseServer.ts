import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let supabaseServer: SupabaseClient | null = null;

export function getSupabaseServer() {
  if (supabaseServer) return supabaseServer;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabaseKey = supabaseServiceRoleKey || supabaseAnonKey;

  if (!supabaseUrl) throw new Error("Missing environment variable: NEXT_PUBLIC_SUPABASE_URL");
  if (!supabaseKey) {
    throw new Error(
      "Missing environment variable: SUPABASE_SERVICE_ROLE_KEY / SUPABASE_SECRET_KEY / NEXT_PUBLIC_SUPABASE_ANON_KEY",
    );
  }

  supabaseServer = createClient(supabaseUrl, supabaseKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  return supabaseServer;
}
