import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  let { data: posts } = await supabase.from("posts").select("*");

  console.log(posts);

  return <div className="postsContainer"></div>;
}
