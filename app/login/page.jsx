import { login, signup } from "./action";
import "./login.css";

export default function LoginPage() {
  return (
    <div className="login-form">
      <h1>Join Medium.</h1>
      <form action="">
        <input type="email" name="email" placeholder="mail adresi gir" />
        <input type="password" name="password" placeholder="********" />
        <button formAction={login}>Login</button>
        <div className="signup">
          <h3>Already have an account?</h3>
          <button className="btn" formAction={signup}>
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

// validationlar için zod kullanabilirsin.
