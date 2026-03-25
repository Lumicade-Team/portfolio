import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import SectionTitle from "../Common/SectionTitle";

const Blog = async () => {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 3);

  if (latestPosts.length === 0) return null;

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Latest from Lumicade"
          paragraph="Engineering insights, product updates, and lessons from building software across domains."
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-lumi-lightblue bg-white shadow-card transition-all duration-300 hover:border-primary hover:shadow-feature-2 dark:border-lumi-mutednav dark:bg-dark dark:hover:border-primary"
            >
              {post.coverImage ? (
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-primary/5 to-teal/5">
                  <svg className="h-10 w-10 text-primary/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-semibold text-teal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 text-lg font-bold text-lumi-navy group-hover:text-primary dark:text-lumi-offwhite">
                  {post.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-body-color line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-stroke-stroke pt-4 text-xs text-body-color dark:border-lumi-mutednav">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {posts.length > 3 && (
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-lumi-offwhite transition hover:bg-primary/90"
            >
              View All Posts
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
