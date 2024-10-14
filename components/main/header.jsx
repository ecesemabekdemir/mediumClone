import { signOut } from "@/app/login/action";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import "./header.css";
import HeaderProfile from "./headerProfile";

export default async function MainHeader() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  return (
    <header>
      <div className="logo">
        <h1>Medium</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="write">
        <Link href={"/new-post"}>Write</Link>
      </div>
      <div className="profile">
        <HeaderProfile />
      </div>
    </header>
  );
}
