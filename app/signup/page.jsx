import { signUp } from "@/actions/auth";
import "./signup.css";

export default function SignupPage() {
  return (
    <div className="signupCont">
      <div className="signup">
        <h1>Kayıt Ol</h1>
        <form action={signUp}>
          <label htmlFor="firstName">
            <input type="text" name="firstName" placeholder="Adınız" />
          </label>
          <label htmlFor="lastName">
            <input type="text" name="lastName" placeholder="Soyadınız" />
          </label>
          <label htmlFor="bday">
            <input
              type="date"
              name="date"
              placeholder="doğum tarihinizi giriniz"
            />
          </label>
          <label htmlFor="email">
            <input type="email" name="email" placeholder="E-posta Adresiniz" />
          </label>
          <label htmlFor="password">
            <input type="password" name="password" placeholder="********" />
          </label>
          <button>Kayıt Ol</button>
        </form>
      </div>
    </div>
  );
}
