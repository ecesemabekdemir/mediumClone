import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = createClient();
  let { data: posts } = await supabase.from("posts").select("*");

  return (
    <div className="postList">
      {posts
        ? posts.map((x, i) => (
            <Link href={`/posts/${x.id}`}>
              <div className="item" key={i}>
                <h1>{x.title}</h1>
                <p>{x.content}</p>
                <div className="commentList"></div>
              </div>
            </Link>
          ))
        : " "}
    </div>
  );
}
