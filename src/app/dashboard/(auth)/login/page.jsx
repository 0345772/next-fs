"use client";

import { signIn, useSession } from "next-auth/react";
import cl from "./page.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status == "loading") {
    return <p>Loading</p>;
  }
  if (session.status == "authenticated") {
    router?.push("dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };

  return (
    <div className={cl.container}>
      <form onSubmit={handleSubmit} className={cl.form}>
        <input type="email" placeholder="Email" required className={cl.input} />
        <input
          type="password"
          placeholder="Password"
          required
          className={cl.input}
        />
        <button className={cl.button}>Login</button>
      </form>

      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
