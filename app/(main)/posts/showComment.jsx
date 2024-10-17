"use client";

import Sidebar from "@/components/sidebar";
import Clamp from "@/components/svgs/clamps";
import CommentsIcon from "@/components/svgs/commenticon";
import { useState } from "react";

export default function ShowComments({ data }) {
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
            <button>
              <Clamp />
            </button>
          </div>
          <div className="commentBtn">
            <button onClick={toggleSidebar}>
              <CommentsIcon />
            </button>
          </div>
        </div>

        <h2>{data.content}</h2>
      </div>

      {open && <Sidebar dataId={data.id} toggleSidebar={toggleSidebar} />}
    </div>
  );
}
