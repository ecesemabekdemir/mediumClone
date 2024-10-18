"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function commentSave(prevState, formData) {
  const formObj = Object.fromEntries(formData); // formdatadan aldığım verileri obj cevir
  const content = formData.get("content");
  const postId = Number(formObj.postId); //  number olmamlı karşşılaştırma yapabilmem için
  console.log(content, postId);

  const errors = {
    content: !formObj.content && "yazı alanı boş olamaz",
  };
  // error yazı alanının boş kalmaması için

  // for (const key in errors) {
  //   if (Object.prototype.hasOwnProperty.apply.call(errors, key)) {
  //     const element = errors[key];
  //     if (element) return { errors };
  //   }
  // }  // furkan hocann derste yazdığı hata döndürme

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
        post_id: postId,
        full_name: `${user.user_metadata.firstName} ${user.user_metadata.lastName}`,
      },
    ]) // id karsılastırmaları yap
    .select();

  console.log(error);
}
