"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(prevState, formData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  let errors = {};
  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    errors.message = "kullanıcı adı veya sifre yanlıs";
    return { errors };
  }

  revalidatePath("/", "layout"); // server taraflı state yapıyor gibi.
  redirect("/"); // kullanıcı basarılı login olursa anasayfaya yönlendiriyor.
}

export async function signup(formData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  revalidatePath("/", "layout");
  redirect("/");
}
