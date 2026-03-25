import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Breadcrumb from "@/components/Common/Breadcrumb";
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
      <Breadcrumb
        pageName="Blog"
        description="Engineering insights, product updates, and lessons from building software across domains."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          {posts.length === 0 ? (
            <div className="py-20 text-center text-body-color">
              <p>No posts published yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-xl border border-lumi-lightblue bg-white shadow-card transition-all duration-300 hover:border-primary hover:shadow-feature-2 dark:border-lumi-mutednav dark:bg-dark dark:hover:border-primary"
                >
                  {post.coverImage && (
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-teal px-3 py-1 text-xs font-semibold text-lumi-offwhite"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-lumi-navy group-hover:text-primary dark:text-lumi-offwhite">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-base leading-relaxed text-body-color">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-body-color">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
