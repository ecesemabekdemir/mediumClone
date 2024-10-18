"use server";

import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import PostList from "../postList";

export default async function PostDetailPage({ params }) {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq("id", params.id)
    .single();

  const { data: postsLike } = await supabase
    .from("postsLike")
    .select()
    .eq("post_id", data.id)
    .eq("user_id", user.id)
    .single();

  if (!data) return notFound();

  return <PostList  post_id={data.id} data={data} posts={data.id} />;
}
