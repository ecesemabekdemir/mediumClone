"use server";

import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import ShowComments from "../showComment";

export default async function PostDetailPage({ params }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq("id", params.id)
    .single();

  if (!data) return notFound();

  return <ShowComments data={data} />;
}
