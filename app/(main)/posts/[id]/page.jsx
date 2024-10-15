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
  console.log(data);

  return (
    <div>
      <div className="post">
        <h1>{data.title}</h1>
        <h2>{data.content}</h2>
      </div>
      <div className="comments"></div>
    </div>
  );
}
