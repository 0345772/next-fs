"use client";
import React, { useState } from "react";
import cl from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className={cl.container}>
      <h1 className={cl.title}>Create an Account</h1>
      <h2 className={cl.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={cl.form}>
        <input
          type="text"
          placeholder="Username"
          required
          className={cl.input}
        />
        <input type="text" placeholder="Email" required className={cl.input} />
        <input
          type="password"
          placeholder="Password"
          required
          className={cl.input}
        />
        <button className={cl.button}>Register</button>
        {error && "Something went wrong!"}
      </form>
      <span className={cl.or}>- OR -</span>
      <Link className={cl.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
