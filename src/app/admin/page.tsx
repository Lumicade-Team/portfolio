"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase, supabaseAdmin, BlogPost } from "@/lib/supabase";

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

    const { error } = await supabaseAdmin.from("posts").delete().eq("id", id);
    if (error) {
      alert("Failed to delete: " + error.message);
      return;
    }
    fetchPosts();
  };

  const togglePublished = async (id: string, published: boolean) => {
    const { error } = await supabaseAdmin
      .from("posts")
      .update({ published: !published })
      .eq("id", id);

    if (error) {
      alert("Failed to update: " + error.message);
      return;
    }
    fetchPosts();
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-lumi-navy dark:text-lumi-offwhite">
            Blog Posts
          </h1>
          <p className="mt-1 text-sm text-body-color">
            Manage your blog content
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-lumi-offwhite transition hover:bg-primary/90"
        >
          New Post
        </Link>
      </div>

      {loading ? (
        <div className="py-20 text-center text-body-color">Loading posts...</div>
      ) : posts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-stroke-stroke py-20 text-center dark:border-lumi-mutednav">
          <p className="mb-4 text-body-color">No blog posts yet.</p>
          <Link
            href="/admin/posts/new"
            className="text-sm font-medium text-primary hover:text-primary/80"
          >
            Create your first post
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-stroke-stroke dark:border-lumi-mutednav">
          <table className="w-full">
            <thead>
              <tr className="border-b border-stroke-stroke bg-lumi-lightblue dark:border-lumi-mutednav dark:bg-lumi-navy">
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-body-color">
                  Title
                </th>
                <th className="hidden px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-body-color md:table-cell">
                  Tags
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-body-color">
                  Status
                </th>
                <th className="hidden px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-body-color sm:table-cell">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-body-color">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stroke-stroke dark:divide-lumi-mutednav">
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="bg-white transition hover:bg-lumi-offwhite dark:bg-dark dark:hover:bg-lumi-navy/50"
                >
                  <td className="px-6 py-4">
                    <Link
                      href={`/admin/posts/${post.id}/edit`}
                      className="font-medium text-lumi-navy hover:text-primary dark:text-lumi-offwhite"
                    >
                      {post.title}
                    </Link>
                    <p className="mt-0.5 text-xs text-body-color">
                      /{post.slug}
                    </p>
                  </td>
                  <td className="hidden px-6 py-4 md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {post.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-medium text-teal"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => togglePublished(post.id, post.published)}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        post.published
                          ? "bg-teal/10 text-teal"
                          : "bg-yellow/10 text-yellow"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="hidden px-6 py-4 text-sm text-body-color sm:table-cell">
                    {new Date(post.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="rounded-md px-3 py-1 text-xs font-medium text-primary hover:bg-primary/10"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id, post.title)}
                        className="rounded-md px-3 py-1 text-xs font-medium text-red-500 hover:bg-red-500/10"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
