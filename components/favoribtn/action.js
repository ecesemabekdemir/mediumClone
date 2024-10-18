"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function AddFavori(prevState, formData) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const postId = formData.get("postId");

  const { data: favorites } = await supabase
    .from("favorites")
    .select()
    .eq("post_id", postId)
    .eq("user_id", user.id);

  if (favorites && favorites.length > 0) {
    await supabase
      .from("favorites")
      .delete()
      .eq("post_id", postId)
      .eq("user_id", user.id);
  } else {
    await supabase
      .from("favorites")
      .insert({ user_id: user.id, post_id: postId });
    console.log("favoriye eklendi");
  }

  revalidatePath("/", "layout");
}
