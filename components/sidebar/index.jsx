"use client";

import { createClient } from "@/utils/supabase/client";
import "./sidebar.css";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { commentSave } from "./action";

export default function Sidebar({ dataId, toggleSidebar }) {
  const [comment, setComment] = useState([]);
  const [state, action] = useFormState(commentSave, {
    message: null,
    error: null,
  });

  useEffect(() => {
    async function getComments() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("comments")
        .select()
        .eq("post_id", dataId);

      if (data) {
        console.log("Yorumlar:", data);
        setComment(data);
      } else {
        console.error("error", error);
      }
    }
    getComments();
  }, [dataId]);

  const formRef = useRef(null);

  useEffect(() => {
    if (state?.message) {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <div className="sidenav">
      <div className="sidenavHeader">
        <h2>Responses({comment.length})</h2>
        <button onClick={toggleSidebar} className="exitBtn">
          X
        </button>
      </div>
      <form className="formResponses" ref={formRef} action={action}>
        <label className="content">
          <textarea
            className=""
            name="content"
            type="text"
            placeholder="what are your thoughts???"
          />
          <input type="hidden" name="postId" value={dataId} />
          {state?.errors?.content && <small>{state.errors.content}</small>}
        </label>
        <div className="btns">
          {/* <button className="cancelBtn">Cancel</button> */}
          <button type="submit">Respond</button>
        </div>
      </form>
      <div className="also">
        <input name="check" type="checkbox" />
        <label htmlFor="check">Also Publis to my profile</label>
      </div>

      <div className="commentsContainer">
        <div className="comments">
          {comment?.map((x) => (
            <div key={x.id}>
              <div className="commentUser">
                <div className="profilePic"></div>
                <div className="item">
                  <div className="userName">sema bekdemir</div>
                  <div className="date">4 months ago</div>
                </div>
              </div>
              <div className="comment">
                <p> {x.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
