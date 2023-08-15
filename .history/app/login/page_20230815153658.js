"use client";
import Image from "next/image";
import styles from "./login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const router = useRouter();

  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);
    router.push("/account");
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="Email"
          value={formData.email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />

        <input
          type="checkbox"
          id="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
          name="rememberMe"
        />
        <label htmlFor="rememberMe">remember me</label>

        <button>Login</button>
      </form>
    </main>
  );
}
