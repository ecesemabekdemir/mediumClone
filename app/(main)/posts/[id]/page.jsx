"use server";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import ShowComment from "../showComment";

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
        <p>Member-only story</p>
        <h1>{data.title}</h1>
        <div className="userInfo">
          <div className="profileImg"></div>
          <div className="profileName">
            Sema Bekdemir <button className="followBtn">· Follow</button>
          </div>
          <div className="info">
            <p>
              Published in <span>JavaScript in Plain English</span> · 4 min read
              · May 14, 2024
            </p>
          </div>
        </div>
        <div className="comments">
          <ShowComment />
        </div>
        <h2>{data.content}</h2>
      </div>
    </div>
  );
}
