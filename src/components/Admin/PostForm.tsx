"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase, supabaseAdmin, BlogPost } from "@/lib/supabase";
import TipTapEditor from "./Editor";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export default function PostForm({ post }: { post?: BlogPost }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [content, setContent] = useState(post?.content || "");
  const [coverImage, setCoverImage] = useState(post?.cover_image || "");
  const [tagsInput, setTagsInput] = useState(post?.tags?.join(", ") || "");
  const [published, setPublished] = useState(post?.published || false);
  const [autoSlug, setAutoSlug] = useState(!post);

  useEffect(() => {
    if (autoSlug) {
      setSlug(slugify(title));
    }
  }, [title, autoSlug]);

  const handleCoverUpload = async (file: File) => {
    const fileExt = file.name.split(".").pop();
    const fileName = `covers/${Date.now()}.${fileExt}`;
    const { data, error } = await supabaseAdmin.storage
      .from("blog-images")
      .upload(fileName, file);

    if (error) {
      alert("Failed to upload cover: " + error.message);
      return;
    }

    const { data: urlData } = supabaseAdmin.storage
      .from("blog-images")
      .getPublicUrl(data.path);

    setCoverImage(urlData.publicUrl);
  };

  const [saveError, setSaveError] = useState("");

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveError("");

    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    // Strip base64 images from content to prevent oversized payloads
    const cleanContent = content.replace(
      /src="data:image\/[^"]+"/g,
      'src=""',
    );

    const payload = {
      title,
      slug,
      excerpt,
      content: cleanContent,
      cover_image: coverImage || null,
      tags,
      published,
    };

    try {
      if (post) {
        // Delete then re-insert to avoid update issues
        const { error: delError } = await supabaseAdmin
          .from("posts")
          .delete()
          .eq("id", post.id);

        if (delError) {
          setSaving(false);
          setSaveError("Delete failed: " + delError.message);
          return;
        }

        const { error: insError } = await supabaseAdmin
          .from("posts")
          .insert({ ...payload, id: post.id, created_at: post.created_at });

        if (insError) {
          setSaving(false);
          setSaveError("Re-insert failed: " + insError.message);
          return;
        }
      } else {
        const { error } = await supabaseAdmin
          .from("posts")
          .insert(payload);

        if (error) {
          setSaving(false);
          setSaveError(error.message);
          return;
        }
      }
    } catch (err: unknown) {
      setSaving(false);
      setSaveError(err instanceof Error ? err.message : String(err));
      return;
    }

    setSaving(false);
    router.push("/admin");
    router.refresh();
  };

  const inputClass =
    "w-full rounded-lg border border-stroke-stroke bg-white px-4 py-3 text-base text-lumi-navy outline-hidden focus:border-primary dark:border-lumi-mutednav dark:bg-lumi-navy dark:text-lumi-offwhite dark:focus:border-primary";

  const labelClass =
    "mb-2 block text-sm font-semibold text-lumi-navy dark:text-lumi-offwhite";

  return (
    <form onSubmit={handleSave} className="space-y-6">
      {saveError && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-5 py-4">
          <p className="text-sm font-medium text-red-500">
            Failed to save: {saveError}
          </p>
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className={labelClass}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog post title"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            Slug
            {autoSlug && (
              <button
                type="button"
                onClick={() => setAutoSlug(false)}
                className="ml-2 text-xs font-normal text-primary"
              >
                (auto — click to edit manually)
              </button>
            )}
          </label>
          <input
            type="text"
            value={slug}
            onChange={(e) => {
              setAutoSlug(false);
              setSlug(e.target.value);
            }}
            placeholder="url-friendly-slug"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Excerpt</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Short description for blog listing cards"
          rows={2}
          className={inputClass + " resize-none"}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className={labelClass}>Tags (comma-separated)</label>
          <input
            type="text"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder="engineering, ai, company"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Cover Image</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="URL or upload"
              className={inputClass}
            />
            <label className="flex shrink-0 cursor-pointer items-center rounded-lg bg-primary px-4 py-3 text-sm font-medium text-lumi-offwhite transition hover:bg-primary/90">
              Upload
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleCoverUpload(file);
                }}
              />
            </label>
          </div>
          {coverImage && (
            <img
              src={coverImage}
              alt="Cover preview"
              className="mt-3 h-32 w-full rounded-lg object-cover"
            />
          )}
        </div>
      </div>

      <div>
        <label className={labelClass}>Content</label>
        <TipTapEditor content={content} onChange={setContent} />
      </div>

      <div className="flex items-center justify-between rounded-xl border border-stroke-stroke bg-white p-6 dark:border-lumi-mutednav dark:bg-dark">
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="h-5 w-5 rounded border-stroke-stroke text-primary accent-primary"
          />
          <span className="text-sm font-semibold text-lumi-navy dark:text-lumi-offwhite">
            Published
          </span>
        </label>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => router.push("/admin")}
            className="rounded-lg border border-stroke-stroke px-6 py-2.5 text-sm font-medium text-body-color transition hover:border-primary hover:text-primary dark:border-lumi-mutednav"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-lumi-offwhite transition hover:bg-primary/90 disabled:opacity-50"
          >
            {saving ? "Saving..." : post ? "Update Post" : "Create Post"}
          </button>
        </div>
      </div>
    </form>
  );
}
