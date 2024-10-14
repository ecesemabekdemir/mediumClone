import { signOut } from "@/app/login/action";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import "./header.css";

export default async function HeaderProfile() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  return (
    <div>
      {user ? (
        <ul>
          <li>Hoşgeldin , {user.email}</li>
          <li>
            <form action={signOut}>
              <button>Çıkış Yap</button>
            </form>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link href={"/login"}>Giriş yap</Link>
          </li>
          <li>
            <Link href={"/signup"}>Kayıt ol</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
