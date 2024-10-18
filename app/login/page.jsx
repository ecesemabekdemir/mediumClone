"use client";
import Link from "next/link";
import { login } from "./action";
import "./login.css";
import LoginSvg from "@/components/svgs/Loginsvg";
import { useFormState } from "react-dom";

export default function LoginPage() {
  const [state, action] = useFormState(login, { errors: null });

  return (
    <div className="login-form">
      <h1>Join Medium.</h1>
      <div className="img">
        <LoginSvg classes={state?.errors?.message && { error: "error" }} />
      </div>
      <form action={action}>
        <input type="email" name="email" placeholder="mail adresi gir" />
        {state?.errors?.message && <p>{state?.errors?.message}</p>}
        <input type="password" name="password" placeholder="********" />
        <button>Login</button>
        <div className="signup">
          <h3>
            Already have an account? <Link href={"/signup"}>Signup</Link>
          </h3>
        </div>
      </form>
    </div>
  );
}

// validationlar için zod kullanabilirsin.
