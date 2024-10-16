import { SavePost } from "./action";
import "./newpost.css";
export default function NewPost() {
  return (
    <div className="nevpost">
      <form action={SavePost}>
        <input type="text" name="title" placeholder="title" />
        <br />
        <textarea name="content" placeholder="Tell your story..." />
        <br />
        <button className="publishBtn">Publish</button>
      </form>
    </div>
  );
}
