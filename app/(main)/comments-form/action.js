import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/dist/server/api-utils";

export async function commentSave(prevState, formData) {
  const formObj = Object.fromEntries(formData); // formdatadan aldığım verileri obj cevir
  const content = formData.get("content");
  const commentId = Number(formObj.commentId); //  number olmamlı karşşılaştırma yapabilmem için

  const errors = {
    content: !formObj.content && "yazı alanı boş olamaz",
  };
  // error yazı alanının boş kalmaması için

  for (const key in errors) {
    if (Object.prototype.hasOwnProperty.apply.call(errors, key)) {
      const element = errors[key];
      if (element) return { errors };
    }
  }

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // kullanıcı girişi yoksa login sayfasına yönlendir

  const { data, error } = await supabase
    .from("comments")
    .insert([
      {
        content,
        user_id: user.id,
        post_id: commentId,
      },
    ]) // id karsılastırmaları yap
    .select()
    .single();
}
