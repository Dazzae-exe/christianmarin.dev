import supabase from "../supabase";
import type { Post } from "@/lib/types/post";

const getPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
  return data || [];
};

export { getPosts };