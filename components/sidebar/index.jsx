"use server";
import { createClient } from "@/utils/supabase/server";
import "./sidebar.css";

export default async function Sidebar() {
  const supabase = createClient();
  const {
    data: { data },
    error,
  } = await supabase.from("comments").select();
  return (
    <>
      <div className="sidenav">
        <h2>Responses</h2>
        <form action="">
          <input
            name="comment"
            type="text"
            placeholder="what are your thoughts???"
          />
          <button>Respond</button>
        </form>
      </div>
    </>
  );
}
