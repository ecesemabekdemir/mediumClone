"use client";

import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { commentSave } from "./action";

export default function CommentsForm({ id }) {
  const [state, action] = useFormState(commentSave, {
    message: null,
    error: null,
  });

  const formRef = useRef(null);

  useEffect(() => {
    if (state?.mesagge) {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <>
      <form ref={formRef} action={action}>
        <label>
          <input name="content" type="text" />
          {state?.errors?.content && <small>{state.errors.content}</small>}
          <input type="hidden" value={id} name="commentId" />
        </label>
      </form>
    </>
  );
}
