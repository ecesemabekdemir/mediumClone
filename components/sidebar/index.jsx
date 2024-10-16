"use client";

import { createClient } from "@/utils/supabase/client";
import "./sidebar.css";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { commentSave } from "./action";

export default function Sidebar({ dataId, id }) {
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
        .eq("id", dataId)
        .single();
      setComment(data);
    }
    getComments();
  }, []);

  const formRef = useRef(null);

  useEffect(() => {
    if (state?.mesagge) {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <div className="sidenav">
      <h2>Responses(0)</h2>
      <form ref={formRef} action={action}>
        <label className="content">
          <textarea
            className=""
            name="content"
            type="text"
            placeholder="what are your thoughts???"
          />
          {state?.errors?.content && <small>{state.errors.content}</small>}
          <input type="hidden" value={id} name="commentId" />
        </label>
        <button className="cancelBtn">Cancel</button>
        <button type="submit">Respond</button>
      </form>

      <div className="comments">
        {comment?.map((x) => (
          <p>{x.comment}</p>
        ))}
      </div>
    </div>
  );
}
