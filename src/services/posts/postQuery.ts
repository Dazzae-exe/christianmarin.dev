import supabase from "@/lib/supabase/supabase";
import type { Post } from "@/lib/types/post";

const getPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

const getPost = async (id: string): Promise<Post | null> => {
  const { data, error } = await supabase.from("posts").select("*").eq("id", id).single();

  if (error) {
    throw new Error(error.message);
  }

  return data || null;
}

export { getPosts, getPost };