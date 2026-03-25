import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import PortableTextBody from "@/components/Blog/PortableText";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const { getAllSlugs } = await import("@/lib/blog");
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
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

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* ── Article header ── */}
      <section className="relative isolate overflow-hidden bg-lumi-navy pt-[150px] pb-20 md:pb-28">
        {/* Background layers */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[100px]" />
          <div className="absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full bg-teal/[0.04] blur-[80px]" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="postGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#F4F7FF" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#postGrid)" />
          </svg>
          {/* Vertical accent lines */}
          <div className="absolute top-0 left-[15%] h-full w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
          <div className="absolute top-0 right-[20%] h-full w-px bg-gradient-to-b from-transparent via-teal/10 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-[820px]">
            {/* Back nav */}
            <Link
              href="/blog"
              className="group mb-10 inline-flex items-center gap-2.5 text-sm font-medium text-body-color-dark/70 transition hover:text-teal"
            >
              <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              Back to Journal
            </Link>

            {/* Tags + metadata row */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-teal/25 bg-teal/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-teal"
                >
                  {tag}
                </span>
              ))}
              <span className="text-body-color-dark/30">|</span>
              <span className="text-sm text-body-color-dark/60">{post.date}</span>
              <span className="text-body-color-dark/20">&middot;</span>
              <span className="text-sm text-body-color-dark/60">{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="mb-8 text-3xl font-extrabold leading-[1.15] tracking-tight text-lumi-offwhite sm:text-4xl md:text-[48px]">
              {post.title}
            </h1>

            {/* Excerpt as lead paragraph */}
            {post.excerpt && (
              <p className="max-w-[640px] text-xl leading-relaxed text-body-color-dark/80 font-light">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>

        {/* Bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      {/* ── Cover image ── */}
      {post.coverImage && (
        <div className="relative -mt-8 mb-4 md:-mt-12">
          <div className="container">
            <div className="mx-auto max-w-[820px]">
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(51,82,218,0.12)]">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Article body ── */}
      <section className={`relative pb-16 ${post.coverImage ? "pt-10" : "pt-16"} md:pb-24`}>
        {/* Side accent for desktop */}
        <div className="pointer-events-none absolute top-0 left-0 hidden h-full w-full lg:block">
          <div className="mx-auto max-w-[820px]">
            <div className="absolute top-0 -left-8 h-full w-px bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
          </div>
        </div>

        <div className="container">
          <div className="mx-auto max-w-[820px]">
            {/* Reading progress context */}
            <article>
              <PortableTextBody body={post.body} />
            </article>

            {/* ── Article footer ── */}
            <div className="mt-20 border-t border-stroke-stroke pt-10 dark:border-lumi-mutednav/50">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                {/* Tags */}
                <div>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-body-color/60 dark:text-body-color-dark/60">
                    Tagged in
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-stroke-stroke bg-lumi-offwhite px-3 py-1.5 text-xs font-semibold text-lumi-navy dark:border-lumi-mutednav dark:bg-lumi-navy dark:text-body-color-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-2 rounded-xl bg-lumi-navy px-6 py-3 text-sm font-semibold text-lumi-offwhite transition-all hover:bg-primary dark:bg-primary/10 dark:hover:bg-primary"
                >
                  More Articles
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related posts ── */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-stroke-stroke bg-lumi-offwhite py-16 dark:border-lumi-mutednav/30 dark:bg-bg-color-dark md:py-20">
          <div className="container">
            <div className="mx-auto max-w-[820px]">
              <div className="mb-10 flex items-center gap-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-lumi-navy dark:text-lumi-offwhite">
                  Continue Reading
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-stroke-stroke to-transparent dark:from-lumi-mutednav" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((related, i) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex flex-col rounded-xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-feature-2 dark:bg-dark"
                  >
                    <div className={`mb-4 h-1 w-10 rounded-full ${i % 2 === 0 ? "bg-primary" : "bg-teal"}`} />
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {related.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold uppercase tracking-wider text-body-color/50 dark:text-body-color-dark/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-3 text-lg font-bold leading-snug text-lumi-navy transition-colors group-hover:text-primary dark:text-lumi-offwhite">
                      {related.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-body-color dark:text-body-color-dark line-clamp-2">
                      {related.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-body-color/60 dark:text-body-color-dark/60">
                      <span>{related.date}</span>
                      <span>&middot;</span>
                      <span>{related.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
