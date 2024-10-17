"use client";

import { createClient } from "@/utils/supabase/client";
import "./sidebar.css";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { commentSave } from "./action";

export default function Sidebar({ dataId }) {
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
      <h2>Responses({comment.length})</h2>
      <form ref={formRef} action={action}>
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
        <button className="cancelBtn">Cancel</button>
        <button type="submit">Respond</button>
      </form>
      <div className="comments">
        {comment?.map((x) => (
          <p key={x.id}>
            {x.content} {x.firstName}
          </p>
        ))}
      </div>
    </div>
  );
}
