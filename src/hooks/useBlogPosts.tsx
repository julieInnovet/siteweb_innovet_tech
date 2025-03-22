import { useEffect, useState } from "react";
import { BlogPost, BlogPostCreate } from "../types/BlogPost";
import supabase from "../utils/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

interface UseBlogPosts {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
  create: (post: BlogPostCreate) => Promise<PostgrestSingleResponse<null>>;
  remove: (post: BlogPost) => Promise<PostgrestSingleResponse<null>>;
}

export default function useBlogPosts(): UseBlogPosts {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    const { data, error } = await supabase.from("blog_posts").select("*");
    setPosts(data || []);
    setError(error?.message || null);
    setLoading(false);
  }

  const create = async (post: BlogPostCreate) => {
    return supabase.from("blog_posts").insert(post);
  };

  const remove = async (post: BlogPost) => {
    return supabase.from("blog_posts").delete().eq("id", post.id);
  };

  return { posts, loading, error, create, remove };
}
