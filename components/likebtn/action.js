"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function AddLiked(prevState, formData) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const postId = formData.get("postId"); // burada formdatadan inputun valuesn alıyorz

  const { data: postsLike } = await supabase
    .from("postsLike")
    .select()
    .eq("post_id", postId)
    .eq("user_id", user.id);

  console.log(user.id, "user id");

  if (postsLike && postsLike.length > 0) {
    await supabase
      .from("postsLike")
      .delete()
      .eq("post_id", postId)
      .eq("user_id", user.id);
  } else {
    await supabase
      .from("postsLike")
      .insert({ user_id: user.id, post_id: postId });
    console.log("Like eklendi");
  }

  revalidatePath("/", "layout");
  console.log(postId);
}
