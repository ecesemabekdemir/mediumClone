"use client";

import { useEffect, useRef } from "react";
import { commentSave } from "./action";

export default function Comments({ id }) {
  const [state, action] = useFormState(commentSave, {
    mesagge: null,
    error: null,
  });

  const formRef = useRef(null);

  useEffect(() => {
    if (state?.mesagge) {
      formRef.current.reset();
      consolelog(state.mesagge);
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
