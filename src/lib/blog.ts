import { supabase, BlogPost as SupabaseBlogPost } from "./supabase";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  content: string;
  coverImage: string | null;
};

function estimateReadTime(text: string): string {
  const words = text.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function mapSupabasePost(post: SupabaseBlogPost): BlogPost {
  return {
    slug: post.slug,
    title: post.title,
    date: new Date(post.created_at).toISOString().split("T")[0],
    excerpt: post.excerpt,
    tags: post.tags || [],
    readTime: estimateReadTime(post.content),
    content: post.content,
    coverImage: post.cover_image,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (error || !data) return [];
    return data.map(mapSupabasePost);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (error || !data) return null;
    return mapSupabasePost(data);
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("slug")
      .eq("published", true);

    if (error || !data) return [];
    return data.map((p) => p.slug);
  } catch {
    return [];
  }
}
