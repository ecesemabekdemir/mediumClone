"use client";

import FavoriBtn from "@/components/favoribtn";
import LikeBtn from "@/components/likebtn";
import Sidebar from "@/components/sidebar";
import CommentsIcon from "@/components/svgs/commenticon";
import { useState } from "react";

export default function PostDetail({ data, post_id }) {
  const [open, setOpen] = useState(false);

  function toggleSidebar() {
    setOpen(!open);
  }

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
        <div className="buttons">
          <div className="likes">
            <LikeBtn post_id={post_id} />
          </div>
          <div className="commentBtn">
            <button onClick={toggleSidebar}>
              <CommentsIcon />
            </button>
          </div>
          <div className="favoriBtn">
            <FavoriBtn post_id={post_id} />
          </div>
        </div>

        <h2>{data.content}</h2>
      </div>

      {open && <Sidebar dataId={data.id} toggleSidebar={toggleSidebar} />}
    </div>
  );
}
