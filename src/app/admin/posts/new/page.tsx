"use client";

import PostForm from "@/components/Admin/PostForm";

export default function NewPostPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-lumi-navy dark:text-lumi-offwhite">
        Create New Post
      </h1>
      <PostForm />
    </div>
  );
}
