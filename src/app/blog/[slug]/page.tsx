import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Lumicade Solutions`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <section className="pt-[150px] pb-[120px]">
      <div className="container">
        <div className="mx-auto max-w-[800px]">
          <Link
            href="/blog"
            className="mb-8 inline-block text-sm font-medium text-primary hover:text-primary/80"
          >
            &larr; Back to Blog
          </Link>

          <div className="mb-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-teal px-3 py-1 text-xs font-semibold text-lumi-offwhite"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mb-4 text-3xl font-bold text-lumi-navy dark:text-lumi-offwhite sm:text-4xl md:text-[45px] md:leading-tight">
            {post.title}
          </h1>

          <div className="mb-10 flex items-center gap-4 text-sm text-body-color">
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-body-color"></span>
            <span>{post.readTime}</span>
          </div>

          {post.coverImage && (
            <div className="mb-10 overflow-hidden rounded-xl">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full object-cover"
              />
            </div>
          )}

          <article
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-lumi-navy dark:prose-headings:text-lumi-offwhite prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </section>
  );
}
