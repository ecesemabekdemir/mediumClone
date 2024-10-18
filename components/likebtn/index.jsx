"use client";

import Clamp from "../svgs/clamps";
import { AddLiked } from "./action";
import { useFormState } from "react-dom";

export default function LikeBtn({ post_id }) {
  const [state, action] = useFormState(AddLiked, {
    message: null,
    error: null,
  });

  return (
    <div className="likeBtn">
      <form action={action}>
        <button>
          <Clamp />
        </button>
        <input type="hidden" value={post_id} name="postId" />
      </form>
    </div>
  );
}
