import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Lumicade Solutions",
  description:
    "Engineering insights, product updates, and lessons from building software across domains.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-lumi-navy pt-[160px] pb-28">
        {/* Geometric mesh background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/[0.07] blur-[120px]" />
          <div className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-teal/[0.06] blur-[100px]" />
          {/* Grid pattern overlay */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F4F7FF" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {/* Diagonal accent line */}
          <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          <div className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-teal/10 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-[720px]">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-teal" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                Engineering Journal
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] text-lumi-offwhite sm:text-5xl md:text-[56px]">
              Insights from the
              <span className="relative ml-3 inline-block">
                <span className="relative z-10">build floor</span>
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-primary/30 md:bottom-2 md:h-4" />
              </span>
            </h1>

            <p className="max-w-[540px] text-lg leading-relaxed text-body-color-dark/80">
              Deep-dives into engineering decisions, product launches, and the craft behind shipping software that scales.
            </p>

            {/* Stats bar */}
            {posts.length > 0 && (
              <div className="mt-10 flex items-center gap-8 border-t border-lumi-mutednav/50 pt-6">
                <div>
                  <p className="text-2xl font-bold text-lumi-offwhite">{posts.length}</p>
                  <p className="text-xs uppercase tracking-wider text-body-color-dark/60">Articles</p>
                </div>
                <div className="h-8 w-px bg-lumi-mutednav/50" />
                <div>
                  <p className="text-2xl font-bold text-lumi-offwhite">
                    {[...new Set(posts.flatMap((p) => p.tags))].length}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-body-color-dark/60">Topics</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom edge accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>

      {/* ── Posts ── */}
      <section className="relative py-20 md:py-28">
        {/* Subtle background texture */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3352DA_0.5px,transparent_0.5px)] opacity-[0.015] [background-size:24px_24px] dark:opacity-[0.03]" />

        <div className="container relative">
          {posts.length === 0 ? (
            /* ── Empty state ── */
            <div className="mx-auto max-w-[480px] py-16 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/5">
                <svg className="h-8 w-8 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </div>
              <h2 className="mb-2 text-xl font-bold text-lumi-navy dark:text-lumi-offwhite">
                First post incoming
              </h2>
              <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                We&apos;re crafting something worth reading. Subscribe to get notified when we publish.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {posts.map((post, i) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-feature-2 dark:bg-dark"
                        style={{ animationDelay: `${i * 80}ms` }}
                      >
                        {/* Top accent bar */}
                        <div className={`h-1 w-full ${i % 2 === 0 ? "bg-gradient-to-r from-primary to-primary/40" : "bg-gradient-to-r from-teal to-teal/40"}`} />

                        {post.coverImage ? (
                          <div className="relative aspect-[16/10] w-full overflow-hidden">
                            <img
                              src={post.coverImage}
                              alt={post.title}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                          </div>
                        ) : (
                          <div className={`flex aspect-[16/10] w-full items-center justify-center ${i % 2 === 0 ? "bg-gradient-to-br from-primary/[0.03] to-primary/[0.08]" : "bg-gradient-to-br from-teal/[0.03] to-teal/[0.08]"}`}>
                            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${i % 2 === 0 ? "bg-primary/10" : "bg-teal/10"}`}>
                              <svg className={`h-5 w-5 ${i % 2 === 0 ? "text-primary/40" : "text-teal/40"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                              </svg>
                            </div>
                          </div>
                        )}

                        <div className="flex flex-1 flex-col p-6">
                          <div className="mb-3 flex flex-wrap gap-1.5">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-md bg-lumi-offwhite px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-lumi-mutednav dark:bg-lumi-navy dark:text-body-color-dark"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <h3 className="mb-3 text-lg font-bold leading-snug text-lumi-navy transition-colors group-hover:text-primary dark:text-lumi-offwhite">
                            {post.title}
                          </h3>

                          <p className="mb-5 flex-1 text-sm leading-relaxed text-body-color dark:text-body-color-dark line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between text-xs text-body-color dark:text-body-color-dark/70">
                            <span>{post.date}</span>
                            <div className="flex items-center gap-1.5">
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
