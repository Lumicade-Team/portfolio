import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client that doesn't return row data on insert/update (avoids large payload issues)
export const supabaseAdmin = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    headers: { Prefer: "return=minimal" },
  },
});

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  tags: string[];
  published: boolean;
  created_at: string;
  updated_at: string;
};
