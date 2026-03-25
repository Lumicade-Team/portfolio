import { client, urlFor } from "@/sanity/client";
import { postsQuery, postBySlugQuery, postSlugsQuery } from "@/sanity/queries";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  coverImage: string | null;
  body: any[];
};

function estimateReadTime(body: any[]): string {
  if (!body) return "1 min read";
  const text = body
    .filter((b: any) => b._type === "block")
    .map((b: any) => b.children?.map((c: any) => c.text).join("") || "")
    .join(" ");
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function mapPost(post: any): BlogPost {
  return {
    slug: post.slug,
    title: post.title,
    date: post.publishedAt
      ? new Date(post.publishedAt).toISOString().split("T")[0]
      : "",
    excerpt: post.excerpt || "",
    tags: post.tags || [],
    readTime: estimateReadTime(post.body),
    coverImage: post.coverImage ? urlFor(post.coverImage).width(1200).url() : null,
    body: post.body || [],
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(postsQuery);
    return (posts || []).map(mapPost);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch(postBySlugQuery, { slug });
    if (!post) return null;
    return mapPost(post);
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    return (await client.fetch(postSlugsQuery)) || [];
  } catch {
    return [];
  }
}
