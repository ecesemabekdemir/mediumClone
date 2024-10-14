import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export default async function PostDetailPage({ params }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq("id", params.id)
    .single();

  if (!data) return notFound();

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}
