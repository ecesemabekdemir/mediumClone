"use server";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import "./header.css";
import NotificationsSvg from "../svgs/notifications";
import Dropdown from "./dropdown";

export default async function MainHeader() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  return (
    <header>
      <div className="left-header">
        <div className="logo">
          <Link href={"/"}>Medium</Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right-header">
        <div className="write">
          <Link href={"/new-post"}>Write</Link>
        </div>
        <div className="notifications">
          <NotificationsSvg />
        </div>
        <div className="profile">
          <Dropdown user={user} />
        </div>
      </div>
    </header>
  );
}
