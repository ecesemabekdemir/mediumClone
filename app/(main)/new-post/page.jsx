import { SavePost } from "./action";

export default function NewPost() {
  return (
    <div>
      <form action={SavePost}>
        <input type="text" name="title" placeholder="yazı başlığı" />
        <br />
        <textarea name="content" placeholder="yazı içeriği" />
        <br />
        <button> yazıyı paylas</button>
      </form>
    </div>
  );
}
