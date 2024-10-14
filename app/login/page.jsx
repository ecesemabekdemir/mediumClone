import { login, signup } from "./action";

export default function LoginPage() {
  return (
    <div className="login-form">
      <form action="">
        <input type="email" name="email" placeholder="mail adresi gir" />
        <input type="password" name="password" placeholder="********" />
        <button formAction={login}>Login</button>
        <button formAction={signup}>Signup</button>
      </form>
    </div>
  );
}

// validationlar için zod kullanabilirsin.
