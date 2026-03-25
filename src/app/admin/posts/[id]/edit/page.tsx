"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase, BlogPost } from "@/lib/supabase";
import PostForm from "@/components/Admin/PostForm";

export default function EditPostPage() {
  const params = useParams();
  const id = params.id as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (!error && data) setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="py-20 text-center text-body-color">Loading post...</div>
    );
  }

  if (!post) {
    return (
      <div className="py-20 text-center text-body-color">Post not found.</div>
    );
  }

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-lumi-navy dark:text-lumi-offwhite">
        Edit Post
      </h1>
      <PostForm post={post} />
    </div>
  );
}
