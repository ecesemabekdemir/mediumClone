"use client";

import { useFormState } from "react-dom";
import { AddFavori } from "./action";
import FavoriIcon from "../svgs/favoricon";

export default function FavoriBtn({ post_id }) {
  const [state, action] = useFormState(AddFavori, {
    message: null,
    error: null,
  });

  return (
    <div className="FavoriBtn">
      <form action={action}>
        <button className="favoricon">
          <FavoriIcon />
        </button>
        <input type="hidden" value={post_id} name="postId" />
      </form>
    </div>
  );
}
